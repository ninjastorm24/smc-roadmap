import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { startServer } from '../scripts/serve.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEB_ROOT = path.resolve(__dirname, '..');
const EVIDENCE_DIR = path.join(WEB_ROOT, 'evidence');

const TEST_PORT = 3333;
const BASE_URL = `http://127.0.0.1:${TEST_PORT}`;
const SUBPATH_BASE_URL = `http://127.0.0.1:${TEST_PORT}/smc-roadmap`;

const CHROME_PATH = process.env.CHROME_BIN || '/usr/bin/google-chrome';

function assert(condition, message, failures) {
  if (!condition) {
    console.error(`  [FAIL] ${message}`);
    failures.push(message);
  } else {
    console.log(`  [PASS] ${message}`);
  }
}

async function runBrowserTests() {
  console.log('=== Running Automated Browser & Visual Verification Suite ===\n');
  const failures = [];

  if (!fs.existsSync(EVIDENCE_DIR)) {
    fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
  }

  // 1. Start test server
  const server = startServer(TEST_PORT);

  // 2. Launch headless Chrome via puppeteer-core
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
    });
  } catch (err) {
    console.error('Failed to launch Chrome browser:', err);
    server.close();
    process.exit(1);
  }

  try {
    const page = await browser.newPage();

    // Helper: check horizontal overflow
    async function checkHorizontalOverflow(label) {
      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        };
      });
      assert(!overflow.hasOverflow, `${label}: No horizontal page overflow (scrollWidth: ${overflow.scrollWidth}px, clientWidth: ${overflow.clientWidth}px)`, failures);
    }

    // --- TEST SUITE 1: Home Page Responsive Layouts ---
    console.log('\n--- Test Suite 1: Home Page Responsive & Layout ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    const pageTitle = await page.title();
    assert(pageTitle.includes('SMC Roadmap'), `Home page title is correct: "${pageTitle}"`, failures);

    // Skip link check
    await page.keyboard.press('Tab');
    const isSkipLinkFocused = await page.evaluate(() => {
      const el = document.activeElement;
      return el && el.classList.contains('skip-link');
    });
    assert(isSkipLinkFocused, 'Keyboard Tab focuses the skip link first', failures);

    await checkHorizontalOverflow('Home at 1440px desktop');
    await page.screenshot({ path: path.join(EVIDENCE_DIR, '01_home_desktop_1440.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 01_home_desktop_1440.png');

    // 1024px & 768px viewports
    await page.setViewport({ width: 1024, height: 800 });
    await checkHorizontalOverflow('Home at 1024px');

    await page.setViewport({ width: 768, height: 1024 });
    await checkHorizontalOverflow('Home at 768px');

    // 390px Mobile Viewport
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Home at 390px mobile');
    await page.screenshot({ path: path.join(EVIDENCE_DIR, '02_home_mobile_390.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 02_home_mobile_390.png');

    // 320px Minimal Mobile Viewport
    await page.setViewport({ width: 320, height: 568 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Home at 320px minimal mobile');
    await page.screenshot({ path: path.join(EVIDENCE_DIR, '03_home_mobile_320.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 03_home_mobile_320.png');

    // --- TEST SUITE 2: Interactive Filtering & State ---
    console.log('\n--- Test Suite 2: Interactive Search & Filters ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Initial state: 26 articles visible
    let visibleCount = await page.evaluate(() => {
      return document.querySelectorAll('.article-item:not(.hidden)').length;
    });
    assert(visibleCount === 26, `Initial load shows all 26 articles (got ${visibleCount})`, failures);

    // Search for "FVG"
    await page.type('#search-input', 'FVG');
    // Allow input event to propagate
    await new Promise((r) => setTimeout(r, 100));

    visibleCount = await page.evaluate(() => {
      return document.querySelectorAll('.article-item:not(.hidden)').length;
    });
    // Lessons with FVG in title, topic, or aliases: 06 (FVG), 08 (breaker/unicorn FVG), 25 (iFVG)
    const fvgLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(visibleCount === 3 && fvgLessons.includes('6') && fvgLessons.includes('8') && fvgLessons.includes('25'), `Search for "FVG" returns 3 matched lessons (${fvgLessons.join(', ')})`, failures);

    // Test zero-padded and unpadded lesson search
    await page.$eval('#search-input', el => el.value = '');
    await page.type('#search-input', '01');
    await new Promise((r) => setTimeout(r, 100));
    let paddedMatches = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(paddedMatches.includes('1'), `Search for "01" matches Lesson 01`, failures);

    await page.$eval('#search-input', el => el.value = '');
    await page.type('#search-input', '1');
    await new Promise((r) => setTimeout(r, 100));
    let unpaddedMatches = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(unpaddedMatches.includes('1'), `Search for "1" matches Lesson 01`, failures);

    // Clear search input
    await page.$eval('#search-input', el => el.value = '');

    // Week 2 filter
    await page.select('#week-select', '2');
    await new Promise((r) => setTimeout(r, 100));
    const week2Lessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(JSON.stringify(week2Lessons) === JSON.stringify(['5', '10', '14']), `Week 2 filter shows exactly lessons 05, 10, 14 in study order (${week2Lessons.join(', ')})`, failures);

    // Topic filter: "Foundations"
    await page.select('#week-select', 'all');
    await page.select('#topic-select', 'Foundations');
    await new Promise((r) => setTimeout(r, 100));
    const foundationsLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(JSON.stringify(foundationsLessons) === JSON.stringify(['1', '2', '3']), `Foundations filter shows exactly lessons 01, 02, 03 (${foundationsLessons.join(', ')})`, failures);

    // Combined filter: Topic "Zones & POIs" AND Week "4"
    await page.select('#topic-select', 'Zones & POIs');
    await page.select('#week-select', '4');
    await new Promise((r) => setTimeout(r, 100));
    const combinedLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(JSON.stringify(combinedLessons) === JSON.stringify(['7', '8', '9', '11']), `Combined filter shows exactly lessons 07, 08, 09, 11 (${combinedLessons.join(', ')})`, failures);

    // Impossible query -> No matches state
    await page.type('#search-input', 'nonexistenttermxyz999');
    await new Promise((r) => setTimeout(r, 100));
    const noMatchesVisible = await page.evaluate(() => {
      const box = document.getElementById('no-matches');
      return box && box.classList.contains('visible');
    });
    assert(noMatchesVisible, 'Impossible query displays "No articles match these filters" box', failures);

    // Click "Clear filters"
    await page.click('#clear-filters-btn');
    await new Promise((r) => setTimeout(r, 100));
    visibleCount = await page.evaluate(() => {
      return document.querySelectorAll('.article-item:not(.hidden)').length;
    });
    assert(visibleCount === 26, `Reset filters restores all 26 articles`, failures);

    // URL parameter restoration
    await page.goto(`${BASE_URL}/?q=FVG&week=3`, { waitUntil: 'networkidle0' });
    const restoredInputValue = await page.$eval('#search-input', el => el.value);
    const restoredWeekValue = await page.$eval('#week-select', el => el.value);
    const restoredVisibleLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(restoredInputValue === 'FVG' && restoredWeekValue === '3', 'Direct load with ?q=FVG&week=3 restores form controls', failures);
    assert(restoredVisibleLessons.length === 1 && restoredVisibleLessons[0] === '6', `Direct load with ?q=FVG&week=3 filters to Lesson 06`, failures);

    // Browser back/forward navigation
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    const initialHomeCount = await page.evaluate(() => document.querySelectorAll('.article-item:not(.hidden)').length);
    assert(initialHomeCount === 26, 'Clean home page shows all 26 articles', failures);

    await page.select('#topic-select', 'Testing');
    await new Promise((r) => setTimeout(r, 100));
    const testingLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(testingLessons.length === 1 && testingLessons[0] === '26', 'Filtered to Testing (Lesson 26)', failures);

    await page.goBack();
    await new Promise((r) => setTimeout(r, 150));
    const backCount = await page.evaluate(() => {
      return document.querySelectorAll('.article-item:not(.hidden)').length;
    });
    assert(backCount === 26, 'Browser Back restores previous filter state (26 articles)', failures);

    await page.goForward();
    await new Promise((r) => setTimeout(r, 150));
    const forwardLessons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.article-item:not(.hidden)')).map(el => el.getAttribute('data-lesson'));
    });
    assert(forwardLessons.length === 1 && forwardLessons[0] === '26', 'Browser Forward restores filtered state (Lesson 26)', failures);

    // --- TEST SUITE 3: Article Pages & Scaffolding ---
    console.log('\n--- Test Suite 3: Article Pages & Navigation ---');

    // Article 06: FVG
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/articles/06-fvg-ifvg-order-block-imbalance/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 06 at 1440px');

    const art06Title = await page.$eval('.article-page-title', el => el.textContent.trim());
    assert(art06Title.includes('FVG, inverse FVG and order blocks'), `Article 06 title matches: "${art06Title}"`, failures);

    const hasToc = await page.evaluate(() => document.querySelectorAll('.article-sidebar .toc-link').length > 0);
    assert(hasToc, 'Article 06 desktop TOC sidebar rendered with heading links', failures);

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '04_article_06_desktop_1440.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 04_article_06_desktop_1440.png');

    // Article 06 on mobile 390px
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/articles/06-fvg-ifvg-order-block-imbalance/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 06 at 390px mobile');

    const hasMobileTocDisclosure = await page.evaluate(() => {
      const d = document.querySelector('.toc-disclosure');
      return d !== null && d.querySelector('summary') !== null;
    });
    assert(hasMobileTocDisclosure, 'Article 06 mobile TOC uses accessible <details class="toc-disclosure">', failures);

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '05_article_06_mobile_390.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 05_article_06_mobile_390.png');

    // Article 25 (table heavy)
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/articles/25-advanced-entries-part-2/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 25 at 1440px');

    const hasTable = await page.evaluate(() => {
      const container = document.querySelector('.table-container');
      const table = container && container.querySelector('table');
      return table !== null;
    });
    assert(hasTable, 'Article 25 contains rendered table wrapped in .table-container', failures);

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '06_article_25_desktop_1440.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 06_article_25_desktop_1440.png');

    // Article 25 on mobile 390px (ensure tables do not cause whole-page horizontal overflow)
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/articles/25-advanced-entries-part-2/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 25 table-heavy page at 390px mobile');

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '07_article_25_mobile_390.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 07_article_25_mobile_390.png');

    // --- TEST SUITE 4: Subpath Hosting (/smc-roadmap/) ---
    console.log('\n--- Test Suite 4: Subpath Hosting & Relative Links ---');
    await page.setViewport({ width: 1440, height: 900 });
    const subpathResponse = await page.goto(`${SUBPATH_BASE_URL}/articles/05-advanced-market-structure/`, { waitUntil: 'networkidle0' });
    assert(subpathResponse.status() === 200, 'Direct load of article under /smc-roadmap/ returns HTTP 200', failures);

    const cssLoaded = await page.evaluate(() => {
      const sheets = Array.from(document.styleSheets);
      return sheets.some(s => s.href && s.href.includes('main.css'));
    });
    assert(cssLoaded, 'Stylesheet resolves and loads cleanly under /smc-roadmap/ subpath', failures);

    // --- TEST SUITE 5: Roadmap Page ---
    console.log('\n--- Test Suite 5: Roadmap Page ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/roadmap/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Roadmap page at 1440px');

    const weekSections = await page.evaluate(() => {
      const weeks = [];
      for (let w = 1; w <= 8; w++) {
        const sec = document.getElementById(`week-${w}`);
        if (sec) weeks.push(w);
      }
      return weeks;
    });
    assert(weekSections.length === 8, `Roadmap contains all 8 week sections with stable fragment IDs (got ${weekSections.length})`, failures);

    const hasPostPhase = await page.evaluate(() => document.getElementById('after-week-8') !== null);
    assert(hasPostPhase, 'Roadmap displays distinct "After Week 8 — Evaluation and Four-Week Paper Phase" section', failures);

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '08_roadmap_desktop_1440.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 08_roadmap_desktop_1440.png');

    // --- TEST SUITE 6: Resources Page ---
    console.log('\n--- Test Suite 6: Resources Page & Fragments ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/resources/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Resources page at 1440px');

    const expectedAnchors = [
      'pullbacks', 'nesting', 'fvgs', 'pois', 'bias', 'fibonacci', 'model', 'backtesting', 'journal', 'smt',
      'n01', 'n02', 'n03', 'n04', 'n08', 'n09', 'n10', 'n11', 'n12', 'downloads', 'practice-templates', 'reference'
    ];

    const missingAnchors = await page.evaluate((anchors) => {
      return anchors.filter(id => !document.getElementById(id));
    }, expectedAnchors);

    assert(missingAnchors.length === 0, `All expected resource fragment IDs exist (missing: ${missingAnchors.join(', ')})`, failures);

    await page.screenshot({ path: path.join(EVIDENCE_DIR, '09_resources_desktop_1440.png'), fullPage: false });
    console.log('  [SCREENSHOT] Saved 09_resources_desktop_1440.png');

    // --- TEST SUITE 7: JavaScript Disabled Reading ---
    console.log('\n--- Test Suite 7: JavaScript Disabled Baseline ---');
    await page.setJavaScriptEnabled(false);
    await page.goto(`${BASE_URL}/`, { waitUntil: 'load' });

    const noJsArticleCount = await page.evaluate(() => {
      return document.querySelectorAll('.article-item').length;
    });
    assert(noJsArticleCount === 26, `With JS disabled, all 26 articles are rendered in the DOM`, failures);

    const noscriptVisible = await page.evaluate(() => {
      // noscript content is parsed when JS is disabled
      return document.body.innerHTML.includes('Interactive search and filtering requires JavaScript');
    });
    assert(noscriptVisible, 'With JS disabled, fallback message is rendered explaining filtering needs JS', failures);

    const inputsDisabled = await page.evaluate(() => {
      const search = document.getElementById('search-input');
      const topic = document.getElementById('topic-select');
      const week = document.getElementById('week-select');
      return search && search.disabled && topic && topic.disabled && week && week.disabled;
    });
    assert(inputsDisabled, 'With JS disabled, filter inputs retain disabled attribute in static HTML', failures);

    await page.setJavaScriptEnabled(true);
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    const inputsEnabled = await page.evaluate(() => {
      const search = document.getElementById('search-input');
      const topic = document.getElementById('topic-select');
      const week = document.getElementById('week-select');
      return search && !search.disabled && topic && !topic.disabled && week && !week.disabled;
    });
    assert(inputsEnabled, 'With JS enabled, client JavaScript activates and enables filter inputs', failures);

    // --- TEST SUITE 8: Color Contrast Calculation ---
    console.log('\n--- Test Suite 8: Color Contrast Ratios ---');
    function getLuminance(r, g, b) {
      const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function getContrast(rgb1, rgb2) {
      const lum1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
      const lum2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return (brightest + 0.05) / (darkest + 0.05);
    }

    const pageBg = [247, 245, 239]; // #F7F5EF
    const primaryInk = [24, 43, 48]; // #182B30
    const mutedInk = [82, 101, 106]; // #52656A
    const accent = [18, 100, 90]; // #12645A
    const focus = [155, 77, 11]; // #9B4D0B

    const contrastPrimary = getContrast(pageBg, primaryInk);
    const contrastMuted = getContrast(pageBg, mutedInk);
    const contrastAccent = getContrast(pageBg, accent);
    const contrastFocus = getContrast(pageBg, focus);

    assert(contrastPrimary >= 7.0, `Primary Ink contrast ratio: ${contrastPrimary.toFixed(2)}:1 (Passes AAA >= 7.0)`, failures);
    assert(contrastMuted >= 4.5, `Muted Ink contrast ratio: ${contrastMuted.toFixed(2)}:1 (Passes AA >= 4.5)`, failures);
    assert(contrastAccent >= 4.5, `Accent Link contrast ratio: ${contrastAccent.toFixed(2)}:1 (Passes AA >= 4.5)`, failures);
    assert(contrastFocus >= 3.0, `Focus Ring contrast ratio: ${contrastFocus.toFixed(2)}:1 (Passes UI >= 3.0)`, failures);

    // --- TEST SUITE 9: Reduced Motion & 200% Zoom Accessibility ---
    console.log('\n--- Test Suite 9: Reduced Motion & 200% Zoom Accessibility ---');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const scrollBehavior = await page.evaluate(() => {
      return window.getComputedStyle(document.documentElement).scrollBehavior;
    });
    assert(scrollBehavior === 'auto', `With prefers-reduced-motion: reduce, scroll-behavior is "auto" (got "${scrollBehavior}")`, failures);
    await page.emulateMediaFeatures([]);

    // 200% Zoom simulation on desktop (1280px / 2 = 640px equivalent content)
    await page.setViewport({ width: 640, height: 480 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Home at 200% zoom (640px equivalent)');

    await page.goto(`${BASE_URL}/articles/25-advanced-entries-part-2/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 25 at 200% zoom (640px equivalent)');

    // --- TEST SUITE 10: Desktop 1920px Centered Margins ---
    console.log('\n--- Test Suite 10: Desktop 1920px Centered Margins ---');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Home at 1920px wide desktop');
    const homeMargins = await page.evaluate(() => {
      const rect = document.querySelector('.library-section').getBoundingClientRect();
      return { left: Math.round(rect.left), right: Math.round(1920 - rect.right), diff: Math.abs(Math.round(rect.left) - Math.round(1920 - rect.right)) };
    });
    assert(homeMargins.diff <= 2 && homeMargins.left >= 350, `Home at 1920px has balanced side margins (left: ${homeMargins.left}px, right: ${homeMargins.right}px)`, failures);

    await page.goto(`${BASE_URL}/roadmap/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Roadmap at 1920px wide desktop');
    const roadmapMargins = await page.evaluate(() => {
      const rect = document.querySelector('.roadmap-container').getBoundingClientRect();
      return { left: Math.round(rect.left), right: Math.round(1920 - rect.right), diff: Math.abs(Math.round(rect.left) - Math.round(1920 - rect.right)) };
    });
    assert(roadmapMargins.diff <= 2 && roadmapMargins.left >= 350, `Roadmap at 1920px has balanced side margins (left: ${roadmapMargins.left}px, right: ${roadmapMargins.right}px)`, failures);

    await page.goto(`${BASE_URL}/articles/06-fvg-ifvg-order-block-imbalance/`, { waitUntil: 'networkidle0' });
    await checkHorizontalOverflow('Article 06 at 1920px wide desktop');
    const articleReadingColumn = await page.evaluate(() => {
      const rect = document.querySelector('.article-main-column').getBoundingClientRect();
      const colCenter = rect.left + rect.width / 2;
      return { colCenter, pageCenter: 960, diff: Math.abs(colCenter - 960) };
    });
    assert(articleReadingColumn.diff <= 2, `Article reading column is horizontally centered at 1920px (offset from center: ${articleReadingColumn.diff}px)`, failures);

    // --- TEST SUITE 11: Semantic Link Destinations ---
    console.log('\n--- Test Suite 11: Semantic Link Destinations ---');
    await page.goto(`${BASE_URL}/articles/07-advanced-order-block/`, { waitUntil: 'networkidle0' });
    const links = await page.evaluate(() => {
      const nextStudyCard = document.querySelector('.study-nav-card.next');
      const proseLessonLink = document.querySelector('.article-prose a[href*="lessons/07-"]');
      const metaBarWorksheetLink = document.querySelector('.article-meta-bar a[href*="lessons/07-"]');
      const endMatterWorksheetBtn = document.querySelector('.end-matter-actions a.btn-primary');
      return {
        nextArticleHref: nextStudyCard ? nextStudyCard.getAttribute('href') : null,
        proseLessonHref: proseLessonLink ? proseLessonLink.getAttribute('href') : null,
        metaBarWorksheetHref: metaBarWorksheetLink ? metaBarWorksheetLink.getAttribute('href') : null,
        endMatterWorksheetHref: endMatterWorksheetBtn ? endMatterWorksheetBtn.getAttribute('href') : null
      };
    });
    assert(links.nextArticleHref && links.nextArticleHref.includes('../../articles/08-rejection-breaker-unicorn/'), `Article 07 study sequence next links to Lesson 08 article page ("${links.nextArticleHref}")`, failures);
    assert(links.proseLessonHref && links.proseLessonHref.startsWith('https://github.com/') && links.proseLessonHref.includes('/lessons/07-'), `Article 07 in-body worksheet link resolves to canonical GitHub lessons path ("${links.proseLessonHref}")`, failures);
    assert(links.metaBarWorksheetHref && links.metaBarWorksheetHref.startsWith('https://github.com/') && links.metaBarWorksheetHref.includes('/lessons/07-'), `Article 07 meta-bar worksheet link points to canonical GitHub lessons path ("${links.metaBarWorksheetHref}")`, failures);
    assert(links.endMatterWorksheetHref && links.endMatterWorksheetHref.startsWith('https://github.com/') && links.endMatterWorksheetHref.includes('/lessons/07-'), `Article 07 end-matter worksheet button points to canonical GitHub lessons path ("${links.endMatterWorksheetHref}")`, failures);

    // --- TEST SUITE 12: Article Bangla Language Toggle ---
    console.log('\n--- Test Suite 12: Article Bangla Language Toggle ---');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/articles/01-orientation/`, { waitUntil: 'networkidle0' });

    const initialLangState = await page.evaluate(() => {
      const btn = document.getElementById('lang-toggle-btn');
      const proseEn = document.getElementById('prose-en');
      const proseBn = document.getElementById('prose-bn');
      const title = document.querySelector('.article-page-title');
      return {
        btnExists: Boolean(btn),
        ariaPressed: btn ? btn.getAttribute('aria-pressed') : null,
        label: btn ? btn.querySelector('.lang-toggle-label')?.textContent.trim() : null,
        enHidden: proseEn ? proseEn.classList.contains('hidden') : true,
        bnHidden: proseBn ? proseBn.classList.contains('hidden') : false,
        titleText: title ? title.textContent.trim() : ''
      };
    });
    assert(initialLangState.btnExists && initialLangState.ariaPressed === 'false' && initialLangState.label === 'বাংলায় পড়ুন', 'Article 01 renders language toggle button in default English state ("বাংলায় পড়ুন")', failures);
    assert(!initialLangState.enHidden && initialLangState.bnHidden, 'Article 01 shows English prose and hides Bangla prose initially', failures);

    // Click to toggle to Bangla
    await page.click('#lang-toggle-btn');
    const banglaState = await page.evaluate(() => {
      const btn = document.getElementById('lang-toggle-btn');
      const proseEn = document.getElementById('prose-en');
      const proseBn = document.getElementById('prose-bn');
      const title = document.querySelector('.article-page-title');
      const standfirst = document.querySelector('.article-standfirst');
      const tocEn = document.querySelector('.article-sidebar .toc-list-en');
      const tocBn = document.querySelector('.article-sidebar .toc-list-bn');
      return {
        ariaPressed: btn ? btn.getAttribute('aria-pressed') : null,
        label: btn ? btn.querySelector('.lang-toggle-label')?.textContent.trim() : null,
        enHidden: proseEn ? proseEn.classList.contains('hidden') : false,
        bnHidden: proseBn ? proseBn.classList.contains('hidden') : true,
        tocEnHidden: tocEn ? tocEn.classList.contains('hidden') : false,
        tocBnHidden: tocBn ? tocBn.classList.contains('hidden') : true,
        titleLang: title ? title.getAttribute('lang') : null,
        titleText: title ? title.textContent.trim() : '',
        standfirstText: standfirst ? standfirst.textContent.trim() : '',
        proseBnText: proseBn ? proseBn.textContent.trim() : ''
      };
    });
    assert(banglaState.ariaPressed === 'true' && banglaState.label === 'Read in English', 'Clicking toggle button updates state to Bangla and button label to "Read in English"', failures);
    assert(banglaState.enHidden && !banglaState.bnHidden && banglaState.tocEnHidden && !banglaState.tocBnHidden, 'Clicking toggle button reveals Bangla prose & TOC and hides English prose & TOC', failures);
    assert(banglaState.titleLang === 'bn' && /[\u0980-\u09FF]/.test(banglaState.titleText) && /[\u0980-\u09FF]/.test(banglaState.proseBnText), 'Article title, standfirst, and body render human-readable Bengali script', failures);

    await checkHorizontalOverflow('Article 01 in Bangla mode at 1440px');
    await page.setViewport({ width: 390, height: 844 });
    await checkHorizontalOverflow('Article 01 in Bangla mode at 390px mobile');

    // Click again to toggle back to English
    await page.click('#lang-toggle-btn');
    const restoredEnglishState = await page.evaluate(() => {
      const btn = document.getElementById('lang-toggle-btn');
      const proseEn = document.getElementById('prose-en');
      const proseBn = document.getElementById('prose-bn');
      const title = document.querySelector('.article-page-title');
      return {
        ariaPressed: btn ? btn.getAttribute('aria-pressed') : null,
        enHidden: proseEn ? proseEn.classList.contains('hidden') : true,
        bnHidden: proseBn ? proseBn.classList.contains('hidden') : false,
        titleText: title ? title.textContent.trim() : ''
      };
    });
    assert(restoredEnglishState.ariaPressed === 'false' && !restoredEnglishState.enHidden && restoredEnglishState.bnHidden && restoredEnglishState.titleText === initialLangState.titleText, 'Clicking toggle button a second time restores original English title and prose', failures);

  } finally {
    if (browser) await browser.close();
    server.close();
  }

  console.log('\n----------------------------------------');
  if (failures.length > 0) {
    console.error(`Browser verification finished with ${failures.length} FAILURE(S).`);
    process.exit(1);
  } else {
    console.log('All browser & visual verification checks PASSED successfully!');
  }
}

runBrowserTests().catch((err) => {
  console.error('Browser test suite failed:', err);
  process.exit(1);
});
