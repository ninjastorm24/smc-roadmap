import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { MANIFEST_DEFINITIONS, loadAndValidateArticles } from './content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEB_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(WEB_ROOT, '..');
const DIST_DIR = path.join(WEB_ROOT, 'dist');

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

export function runChecks() {
  console.log('=== Running Static Verification Checks ===\n');
  const failures = [];

  function assert(condition, message) {
    if (!condition) {
      console.error(`  [FAIL] ${message}`);
      failures.push(message);
    } else {
      console.log(`  [PASS] ${message}`);
    }
  }

  // Check 1: Dist existence
  assert(fs.existsSync(DIST_DIR), 'dist directory exists');
  assert(fs.existsSync(path.join(DIST_DIR, 'index.html')), 'dist/index.html exists');
  assert(fs.existsSync(path.join(DIST_DIR, 'roadmap', 'index.html')), 'dist/roadmap/index.html exists');
  assert(fs.existsSync(path.join(DIST_DIR, 'resources', 'index.html')), 'dist/resources/index.html exists');

  // Check 2: Article count and study sequence
  const { articles } = loadAndValidateArticles();
  assert(articles.length === 26, `Exactly 26 articles loaded (got ${articles.length})`);

  const expectedOrder = [1, 2, 3, 4, 5, 10, 14, 12, 13, 6, 7, 8, 9, 11, 15, 16, 17, 19, 20, 22, 23, 18, 21, 24, 25, 26];
  const actualOrder = articles.map(a => a.lessonId);
  const orderMatches = JSON.stringify(actualOrder) === JSON.stringify(expectedOrder);
  assert(orderMatches, `Study order matches CONTENT.md specification: ${actualOrder.join(', ')}`);

  // Check 3: Boundaries (Lesson 01 prev is null, Lesson 26 next is null)
  assert(articles[0].previous === null, 'First article (Lesson 01) has no previous link');
  assert(articles[25].next === null, 'Last article (Lesson 26) has no next link');
  assert(articles[4].next.lessonId === 10, 'Lesson 05 continues to Lesson 10 in study order');
  assert(articles[5].next.lessonId === 14, 'Lesson 10 continues to Lesson 14 in study order');
  assert(articles[6].next.lessonId === 12, 'Lesson 14 continues to Lesson 12 in study order');
  assert(articles[20].next.lessonId === 18, 'Lesson 23 continues to Lesson 18 in study order');
  assert(articles[21].next.lessonId === 21, 'Lesson 18 continues to Lesson 21 in study order');

  // Check 4: Downloads byte integrity
  const rootPdf = path.join(REPO_ROOT, 'SMC_Learning_Workbook.pdf');
  const rootDocx = path.join(REPO_ROOT, 'SMC_Learning_Workbook.docx');
  const distPdf = path.join(DIST_DIR, 'downloads', 'SMC_Learning_Workbook.pdf');
  const distDocx = path.join(DIST_DIR, 'downloads', 'SMC_Learning_Workbook.docx');

  assert(fs.existsSync(distPdf), 'dist/downloads/SMC_Learning_Workbook.pdf exists');
  assert(fs.existsSync(distDocx), 'dist/downloads/SMC_Learning_Workbook.docx exists');
  assert(sha256(rootPdf) === sha256(distPdf), 'PDF checksum matches root workbook exactly');
  assert(sha256(rootDocx) === sha256(distDocx), 'DOCX checksum matches root workbook exactly');

  // Check 5: HTML files and local link integrity
  function getAllHtmlFiles(dir) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const fullPath = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        results = results.concat(getAllHtmlFiles(fullPath));
      } else if (ent.isFile() && ent.name.endsWith('.html')) {
        results.push(fullPath);
      }
    }
    return results;
  }

  const htmlFiles = getAllHtmlFiles(DIST_DIR);
  assert(htmlFiles.length === 29, `Generated exactly 29 HTML pages (26 articles + home + roadmap + resources); found ${htmlFiles.length}`);

  let totalLocalLinksChecked = 0;
  let unrewrittenMdLinks = 0;
  let brokenLocalLinks = 0;

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const dirOfFile = path.dirname(file);

    // Check for unsafe script tags in prose
    if (content.includes('<script>') || content.includes('<script ')) {
      const scriptMatches = content.match(/<script\b[^>]*>/gi) || [];
      for (const sm of scriptMatches) {
        if (!sm.includes('assets/scripts/main.js')) {
          assert(false, `Unexpected script tag found in ${file}: ${sm}`);
        }
      }
    }

    // Check for inline event handlers
    const eventHandlerMatch = content.match(/\son[a-z]+\s*=\s*["'][^"']*["']/gi);
    if (eventHandlerMatch) {
      for (const em of eventHandlerMatch) {
        // Allow onsubmit="return false;" on the filter form
        if (!em.includes('return false')) {
          assert(false, `Forbidden inline event handler found in ${file}: ${em}`);
        }
      }
    }

    // Check links
    const linkMatches = content.matchAll(/href="([^"]+)"/g);
    for (const m of linkMatches) {
      const href = m[1];

      // Ignore external or mailto or pure # fragment
      if (/^(https?:|mailto:|tel:)/i.test(href)) {
        continue;
      }

      totalLocalLinksChecked++;

      // Check for unrewritten .md routes
      if (/\.md($|#|\?)/i.test(href)) {
        unrewrittenMdLinks++;
        assert(false, `Unrewritten .md route in ${file}: href="${href}"`);
      }

      // Check target existence
      const [linkPath, fragment] = href.split('#');
      let targetFile;

      if (!linkPath) {
        // Pure fragment in current file
        targetFile = file;
      } else {
        const resolvedPath = path.resolve(dirOfFile, linkPath);
        if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
          targetFile = path.join(resolvedPath, 'index.html');
        } else {
          targetFile = resolvedPath;
        }
      }

      if (!fs.existsSync(targetFile)) {
        brokenLocalLinks++;
        assert(false, `Broken local link in ${file}: "${href}" -> target "${targetFile}" not found!`);
      } else if (fragment) {
        // Check if target file contains id="${fragment}" or name="${fragment}"
        const targetHtml = fs.readFileSync(targetFile, 'utf8');
        const hasId = targetHtml.includes(`id="${fragment}"`) ||
                      targetHtml.includes(`id='${fragment}'`) ||
                      targetHtml.includes(`name="${fragment}"`);
        if (!hasId) {
          brokenLocalLinks++;
          assert(false, `Fragment not found in ${targetFile}: href="${href}" (id="${fragment}" missing)`);
        }
      }
    }
  }

  assert(unrewrittenMdLinks === 0, `Zero unrewritten .md routes across ${totalLocalLinksChecked} local links checked`);
  assert(brokenLocalLinks === 0, `Zero broken local links or fragments across all generated pages`);

  // Check 6: All 26 articles contain expected substantive content
  let emptyArticles = 0;
  for (const art of articles) {
    const artFile = path.join(DIST_DIR, 'articles', art.slug, 'index.html');
    const artHtml = fs.readFileSync(artFile, 'utf8');

    if (!artHtml.includes(art.title)) {
      emptyArticles++;
      assert(false, `Article ${art.slug} missing title`);
    }
    if (!artHtml.includes(art.description)) {
      emptyArticles++;
      assert(false, `Article ${art.slug} missing description`);
    }
    if (!artHtml.includes('Open worksheet (Markdown)')) {
      emptyArticles++;
      assert(false, `Article ${art.slug} missing worksheet button`);
    }
    if (!artHtml.includes('id="lang-toggle-btn"') || !artHtml.includes('id="prose-bn"') || !art.titleBn) {
      emptyArticles++;
      assert(false, `Article ${art.slug} missing Bangla toggle button or Bangla prose content`);
    }
    if (!artHtml.includes('id="knowledge-check"') || !artHtml.includes('id="lesson-completion"')) {
      emptyArticles++;
      assert(false, `Article ${art.slug} missing Knowledge Check or Lesson Completion section`);
    }
    const qMatches = artHtml.match(/class="kc-question-card"/g) || [];
    const cMatches = artHtml.match(/class="lc-checkbox"/g) || [];
    if (qMatches.length < 15 || cMatches.length < 4) {
      emptyArticles++;
      assert(false, `Article ${art.slug} has insufficient questions (${qMatches.length}) or completion checkboxes (${cMatches.length})`);
    }
  }
  assert(emptyArticles === 0, 'All 26 articles contain their full titles, descriptions, worksheet buttons, Bangla translations, Knowledge Checks (15+ Qs), and Completion Checklists');

  console.log('\n----------------------------------------');
  if (failures.length > 0) {
    console.error(`Checks finished with ${failures.length} FAILURE(S).`);
    process.exit(1);
  } else {
    console.log('All static verification checks PASSED successfully!');
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    runChecks();
  } catch (err) {
    console.error('Check script threw an uncaught error:', err);
    process.exit(1);
  }
}
