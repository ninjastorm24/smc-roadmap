import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { startServer } from './serve.js';

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.dirname(webRoot);
const clients = new Set();
const watched = ['web/src', 'web/scripts', 'blog', 'lessons', 'resources',
  'SOLO_LEARNING_ROADMAP.md', 'SMC_Learning_Workbook.pdf', 'SMC_Learning_Workbook.docx'];

// Poll only source inputs, including new/deleted files. Never watch dist or dependencies.
function snapshot() {
  const entries = [];
  function visit(filename) {
    if (!fs.existsSync(filename)) return;
    const stat = fs.statSync(filename);
    if (stat.isDirectory()) {
      for (const child of fs.readdirSync(filename).sort()) visit(path.join(filename, child));
    } else entries.push(`${filename}:${stat.mtimeMs}:${stat.size}`);
  }
  for (const item of watched) visit(path.join(repoRoot, item));
  return entries.join('\n');
}
function build() {
  // A fresh process picks up changes to imported page renderers and build helpers.
  const result = spawnSync(process.execPath, [path.join(webRoot, 'scripts/build.js')], {
    cwd: webRoot, stdio: 'inherit'
  });
  if (result.error) console.error(result.error);
  return result.status === 0;
}

let previous = snapshot();
if (!build()) process.exit(1);
const server = startServer(Number(process.env.PORT || 3000), process.env.HOST || '127.0.0.1', {
  handleRequest(req, res) {
    if (req.url !== '/__dev/events') return false;
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return true;
  },
  transformHtml(html) {
    return html.replace('</body>', `<script>
      const updates = new EventSource('/__dev/events');
      updates.onmessage = () => location.reload();
    </script></body>`);
  }
});
server.on('error', (error) => {
  console.error(error.code === 'EADDRINUSE'
    ? 'Port already in use. Stop the other preview server or run PORT=3001 npm run dev.' : error);
  process.exit(1);
});
const timer = setInterval(() => {
  const current = snapshot();
  if (current === previous) return;
  previous = current;
  console.log('\nSource changed — rebuilding…');
  if (build()) {
    for (const client of clients) client.write('data: reload\n\n');
  } else console.error('Build failed. Fix the source and save again to retry.');
}, 500);
console.log('Watching source files. Browser refreshes automatically after successful builds.');
function stop() {
  clearInterval(timer);
  for (const client of clients) client.end();
  server.close();
}
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
