import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '127.0.0.1';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.ico': 'image/x-icon'
};

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function startServer(port = PORT, host = HOST) {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  const realDistDir = fs.realpathSync(DIST_DIR);

  const server = http.createServer((req, res) => {
    let rawPath = (req.url || '/').split('?')[0].split('#')[0];

    // Decode URL components safely
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(rawPath);
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html><html><head><title>400 Bad Request</title></head><body><h1>400 Bad Request</h1><p>Malformed URI component in requested path: <code>${escapeHtml(rawPath)}</code></p></body></html>`);
      return;
    }

    // Strip subpath prefix /smc-roadmap if present
    if (decodedPath === '/smc-roadmap' || decodedPath.startsWith('/smc-roadmap/')) {
      decodedPath = decodedPath.slice('/smc-roadmap'.length) || '/';
    }

    // Normalize path and prevent directory traversal
    const normalizedRelative = path.normalize(decodedPath).replace(/^(\.\.(\/|\\|$))+/, '');
    const candidatePath = path.resolve(realDistDir, '.' + path.sep + normalizedRelative);

    // Verify candidate path does not escape realDistDir
    if (candidatePath !== realDistDir && !candidatePath.startsWith(realDistDir + path.sep)) {
      res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html><html><head><title>403 Forbidden</title></head><body><h1>403 Forbidden</h1><p>Access denied: path traverses outside distribution root: <code>${escapeHtml(rawPath)}</code></p></body></html>`);
      return;
    }

    let targetPath = candidatePath;

    // Handle directory index.html
    try {
      if (fs.existsSync(targetPath)) {
        const stat = fs.statSync(targetPath);
        if (stat.isDirectory()) {
          targetPath = path.join(targetPath, 'index.html');
        }
      } else if (fs.existsSync(`${targetPath}.html`)) {
        targetPath = `${targetPath}.html`;
      }
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html><html><head><title>500 Internal Error</title></head><body><h1>500 Internal Server Error</h1></body></html>`);
      return;
    }

    // Symlink escape check: Ensure the real path of the target file is also inside realDistDir
    if (fs.existsSync(targetPath)) {
      try {
        const realTargetPath = fs.realpathSync(targetPath);
        if (realTargetPath !== realDistDir && !realTargetPath.startsWith(realDistDir + path.sep)) {
          res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`<!DOCTYPE html><html><head><title>403 Forbidden</title></head><body><h1>403 Forbidden</h1><p>Access denied: target resolves outside distribution root.</p></body></html>`);
          return;
        }
      } catch {
        res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html><html><head><title>403 Forbidden</title></head><body><h1>403 Forbidden</h1></body></html>`);
        return;
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>The requested file <code>${escapeHtml(rawPath)}</code> was not found.</p><p><a href="/">Return to Library Home</a></p></body></html>`);
      return;
    }

    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });

    const readStream = fs.createReadStream(targetPath);
    readStream.pipe(res);
  });

  server.listen(port, host, () => {
    console.log(`\nSMC Roadmap local preview server running:`);
    console.log(` - Root URL:    http://${host}:${port}/`);
    console.log(` - Subpath URL: http://${host}:${port}/smc-roadmap/`);
    console.log(`Press Ctrl+C to stop.`);
  });

  return server;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startServer();
}
