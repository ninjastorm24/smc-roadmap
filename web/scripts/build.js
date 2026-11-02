import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { loadAndValidateArticles, loadSourceResources, loadSourceRoadmap, renderArticleMarkdown } from './content.js';
import { renderHomePage } from '../src/pages/home.js';
import { renderArticlePage } from '../src/pages/article.js';
import { renderRoadmapPage } from '../src/pages/roadmap.js';
import { renderResourcesPage } from '../src/pages/resources.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEB_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(WEB_ROOT, '..');
const DIST_DIR = path.join(WEB_ROOT, 'dist');

function sha256File(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

export function buildSite() {
  console.log('--- Starting SMC Roadmap Static Build ---');
  const startTime = Date.now();

  // 1. Content loading & validation
  const { articles } = loadAndValidateArticles();
  console.log(`Validated ${articles.length} articles and matching lesson worksheets.`);

  // 2. Clean and create output directories
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }

  const dirsToCreate = [
    DIST_DIR,
    path.join(DIST_DIR, 'articles'),
    path.join(DIST_DIR, 'roadmap'),
    path.join(DIST_DIR, 'resources'),
    path.join(DIST_DIR, 'downloads'),
    path.join(DIST_DIR, 'assets', 'styles'),
    path.join(DIST_DIR, 'assets', 'scripts')
  ];

  for (const dir of dirsToCreate) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 3. Copy Static Assets
  const srcStylesDir = path.join(WEB_ROOT, 'src', 'assets', 'styles');
  const srcScriptsDir = path.join(WEB_ROOT, 'src', 'assets', 'scripts');

  fs.copyFileSync(
    path.join(srcStylesDir, 'main.css'),
    path.join(DIST_DIR, 'assets', 'styles', 'main.css')
  );
  fs.copyFileSync(
    path.join(srcScriptsDir, 'main.js'),
    path.join(DIST_DIR, 'assets', 'scripts', 'main.js')
  );
  console.log('Copied stylesheet and client JavaScript.');

  // 4. Copy Downloads & Verify Byte Integrity
  const pdfSrc = path.join(REPO_ROOT, 'SMC_Learning_Workbook.pdf');
  const docxSrc = path.join(REPO_ROOT, 'SMC_Learning_Workbook.docx');
  const pdfDest = path.join(DIST_DIR, 'downloads', 'SMC_Learning_Workbook.pdf');
  const docxDest = path.join(DIST_DIR, 'downloads', 'SMC_Learning_Workbook.docx');

  fs.copyFileSync(pdfSrc, pdfDest);
  fs.copyFileSync(docxSrc, docxDest);

  const origPdfHash = sha256File(pdfSrc);
  const destPdfHash = sha256File(pdfDest);
  if (origPdfHash !== destPdfHash) {
    throw new Error('PDF hash mismatch between root and dist!');
  }

  const origDocxHash = sha256File(docxSrc);
  const destDocxHash = sha256File(docxDest);
  if (origDocxHash !== destDocxHash) {
    throw new Error('DOCX hash mismatch between root and dist!');
  }
  console.log(`Copied and verified downloads: PDF (${fs.statSync(pdfDest).size} bytes), DOCX (${fs.statSync(docxDest).size} bytes).`);

  // 5. Build Home Page
  const homeHtml = renderHomePage(articles, './');
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml, 'utf8');
  console.log('Generated dist/index.html');

  // 6. Build Article Pages
  for (const article of articles) {
    const articleDir = path.join(DIST_DIR, 'articles', article.slug);
    fs.mkdirSync(articleDir, { recursive: true });

    const { html: bodyHtml, headings } = renderArticleMarkdown(article.bodyMarkdown, '../../', article.sourcePath);
    const pageHtml = renderArticlePage(article, bodyHtml, headings, '../../');
    fs.writeFileSync(path.join(articleDir, 'index.html'), pageHtml, 'utf8');
  }
  console.log(`Generated all ${articles.length} individual article pages.`);

  // 7. Build Roadmap Page
  const roadmapData = loadSourceRoadmap();
  const roadmapHtml = renderRoadmapPage(articles, roadmapData, '../');
  fs.writeFileSync(path.join(DIST_DIR, 'roadmap', 'index.html'), roadmapHtml, 'utf8');
  console.log('Generated dist/roadmap/index.html');

  // 8. Build Resources Page
  const resourceData = loadSourceResources();
  const resourcesHtml = renderResourcesPage(resourceData, '../');
  fs.writeFileSync(path.join(DIST_DIR, 'resources', 'index.html'), resourcesHtml, 'utf8');
  console.log('Generated dist/resources/index.html');

  const elapsed = Date.now() - startTime;
  console.log(`Build completed successfully in ${elapsed}ms.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    buildSite();
  } catch (err) {
    console.error('Build failed with error:', err);
    process.exit(1);
  }
}
