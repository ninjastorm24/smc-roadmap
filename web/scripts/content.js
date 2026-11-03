import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { KNOWLEDGE_CHECKS, validateKnowledgeChecks } from '../src/data/quizzes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');
const GITHUB_REPO_URL = 'https://github.com/ninjastorm24/smc-roadmap';

export const MANIFEST_DEFINITIONS = [
  { studyOrder: 1, week: 1, lessonId: 1, slug: '01-orientation', topic: 'Foundations', aliases: 'OHLC, candles, orders, spread, fees, journal, setup' },
  { studyOrder: 2, week: 1, lessonId: 2, slug: '02-pullback-identification', topic: 'Foundations', aliases: 'pullback, impulse, retracement, reversal' },
  { studyOrder: 3, week: 1, lessonId: 3, slug: '03-swing-identification', topic: 'Foundations', aliases: 'swing, pivot, HH, HL, LH, LL, confirmation' },
  { studyOrder: 4, week: 1, lessonId: 4, slug: '04-inducement', topic: 'Structure', aliases: 'IDM, inducement, minor swing' },
  { studyOrder: 5, week: 2, lessonId: 5, slug: '05-advanced-market-structure', topic: 'Structure', aliases: 'BOS, CHoCH, MSS, protected levels, internal, external' },
  { studyOrder: 6, week: 2, lessonId: 10, slug: '10-swing-hierarchy', topic: 'Structure', aliases: 'STH, STL, ITH, ITL, LTH, LTL, hierarchy' },
  { studyOrder: 7, week: 2, lessonId: 14, slug: '14-fractal-price', topic: 'Structure', aliases: 'fractal, timeframe, HTF, LTF, nesting, look-ahead' },
  { studyOrder: 8, week: 3, lessonId: 12, slug: '12-liquidity-grab-sweep', topic: 'Liquidity & ranges', aliases: 'BSL, SSL, liquidity, grab, sweep, breakout, IRL, ERL' },
  { studyOrder: 9, week: 3, lessonId: 13, slug: '13-liquidity-pools-ranges', topic: 'Liquidity & ranges', aliases: 'pool, void, supply, demand, premium, discount, equilibrium' },
  { studyOrder: 10, week: 3, lessonId: 6, slug: '06-fvg-ifvg-order-block-imbalance', topic: 'Zones & POIs', aliases: 'FVG, iFVG, fair value gap, imbalance, OB' },
  { studyOrder: 11, week: 4, lessonId: 7, slug: '07-advanced-order-block', topic: 'Zones & POIs', aliases: 'OB, order block, retest, boundaries' },
  { studyOrder: 12, week: 4, lessonId: 8, slug: '08-rejection-breaker-unicorn', topic: 'Zones & POIs', aliases: 'rejection block, breaker, Unicorn, FVG' },
  { studyOrder: 13, week: 4, lessonId: 9, slug: '09-mitigation-reclaimed-qml', topic: 'Zones & POIs', aliases: 'mitigation, reclaimed, QML, Quasimodo' },
  { studyOrder: 14, week: 4, lessonId: 11, slug: '11-structure-based-poi', topic: 'Zones & POIs', aliases: 'POI, point of interest, zone selection' },
  { studyOrder: 15, week: 5, lessonId: 15, slug: '15-daily-bias', topic: 'Bias & timing', aliases: 'daily bias, bullish, bearish, neutral, invalidation' },
  { studyOrder: 16, week: 5, lessonId: 16, slug: '16-time-price-dealing-range', topic: 'Bias & timing', aliases: 'dealing range, time, price, session, killzone, OHLC, Dhaka, events' },
  { studyOrder: 17, week: 5, lessonId: 17, slug: '17-applying-bias', topic: 'Bias & timing', aliases: 'top-down, bias, session plan, worksheet' },
  { studyOrder: 18, week: 6, lessonId: 19, slug: '19-mss-cisd-tbs-tws', topic: 'Models', aliases: 'MSS, CISD, TBS, TWS, delivery, confirmation' },
  { studyOrder: 19, week: 6, lessonId: 20, slug: '20-amd-judas-swing', topic: 'Models', aliases: 'AMD, PO3, Power of Three, Judas Swing' },
  { studyOrder: 20, week: 6, lessonId: 22, slug: '22-fibonacci-sd-aox-ote', topic: 'Models', aliases: 'Fibonacci, OTE, SD, AO-X, premium, discount' },
  { studyOrder: 21, week: 6, lessonId: 23, slug: '23-quarterly-theory', topic: 'Models', aliases: 'QT, quarterly theory, AMDX, quarters, true open' },
  { studyOrder: 22, week: 7, lessonId: 18, slug: '18-personal-strategy', topic: 'Models', aliases: 'strategy, playbook, position sizing, risk, costs, discipline' },
  { studyOrder: 23, week: 7, lessonId: 21, slug: '21-crt-tbs', topic: 'Models', aliases: 'CRT, Candle Range Theory, TBS, anchor, reclaim' },
  { studyOrder: 24, week: 7, lessonId: 24, slug: '24-advanced-entries-part-1', topic: 'Models', aliases: 'structure entry, POI entry, liquidity entry, Silver Bullet, SMT Fill, Accu Block, PSB' },
  { studyOrder: 25, week: 8, lessonId: 25, slug: '25-advanced-entries-part-2', topic: 'Models', aliases: 'engulfing, MCS, WCS, DCS, SCS, MSCS, B2B, OC, BPR, CiC, QT, iFVG, killzone' },
  { studyOrder: 26, week: 8, lessonId: 26, slug: '26-advanced-entries-part-3', topic: 'Testing', aliases: 'Fixed TCiC, 2s CiC, Fixed QT Relation, purge, pool, backtest, evaluation, simulation' }
];

export function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const SANITIZE_OPTIONS = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'blockquote',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'code', 'pre', 'em', 'strong',
    'del', 'hr', 'div', 'span', 'details', 'summary', 'figure', 'figcaption', 'abbr'
  ],
  allowedAttributes: {
    'a': ['href', 'title', 'target', 'rel', 'class', 'id', 'aria-label'],
    'th': ['scope', 'style', 'class', 'align'],
    'td': ['style', 'class', 'align'],
    'h1': ['id', 'class'],
    'h2': ['id', 'class'],
    'h3': ['id', 'class'],
    'h4': ['id', 'class'],
    'h5': ['id', 'class'],
    'h6': ['id', 'class'],
    'div': ['class', 'tabindex', 'role', 'aria-label'],
    'span': ['class', 'id'],
    'code': ['class'],
    'pre': ['class'],
    'p': ['class'],
    'ul': ['class'],
    'ol': ['class', 'start'],
    'li': ['class'],
    'blockquote': ['class'],
    'table': ['class'],
    'details': ['class'],
    'summary': ['class']
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesByTag: {
    a: ['http', 'https', 'mailto']
  },
  allowProtocolRelative: false
};

export function rewriteMarkdownLink(href, currentRelativeRoot, sourceFilePath = 'blog/dummy.md') {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) {
    return href;
  }

  // Parse path and hash fragment
  const [filePath, hash] = href.split('#');
  const fragment = hash ? `#${hash}` : '';

  // Resolve absolute path in repository
  const sourceDir = path.dirname(path.resolve(REPO_ROOT, sourceFilePath));
  const resolvedTarget = path.resolve(sourceDir, filePath);
  const repoRelative = path.relative(REPO_ROOT, resolvedTarget).replace(/\\/g, '/');

  // Fail build validation on unknown local paths
  if (!fs.existsSync(resolvedTarget)) {
    throw new Error(`[link-rewrite error] Unknown local link target "${href}" in "${sourceFilePath}" resolves to nonexistent file "${resolvedTarget}"`);
  }

  // 1. Another of the 26 blog posts: blog/*.md
  if (/^blog\/((\d{2})-[a-z0-9-]+)\.md$/i.test(repoRelative) && !repoRelative.endsWith('README.md')) {
    const slug = repoRelative.replace(/^blog\//, '').replace(/\.md$/, '');
    return `${currentRelativeRoot}articles/${slug}/${fragment}`;
  }

  // 2. Blog index or root README:
  if (repoRelative === 'README.md' || repoRelative === 'blog/README.md') {
    return `${currentRelativeRoot}${fragment}`;
  }

  // 3. SOLO_LEARNING_ROADMAP.md:
  if (repoRelative === 'SOLO_LEARNING_ROADMAP.md') {
    return `${currentRelativeRoot}roadmap/${fragment}`;
  }

  // 4. resources/README.md or resources/BLOG_POSTS.md:
  if (repoRelative === 'resources/README.md' || repoRelative === 'resources/BLOG_POSTS.md') {
    return `${currentRelativeRoot}resources/${fragment}`;
  }

  // 5. Matching lessons/*.md worksheet: explicit link to GitHub repository
  if (/^lessons\/((\d{2})-[a-z0-9-]+)\.md$/i.test(repoRelative) && !repoRelative.endsWith('README.md')) {
    return `${GITHUB_REPO_URL}/blob/main/${repoRelative}${fragment}`;
  }

  // 6. Practice, templates, reference files on GitHub:
  if (/^(practice|templates|reference)\//i.test(repoRelative)) {
    return `${GITHUB_REPO_URL}/blob/main/${repoRelative}${fragment}`;
  }

  // 7. Root DOCX or PDF:
  if (repoRelative === 'SMC_Learning_Workbook.pdf') {
    return `${currentRelativeRoot}downloads/SMC_Learning_Workbook.pdf`;
  }
  if (repoRelative === 'SMC_Learning_Workbook.docx') {
    return `${currentRelativeRoot}downloads/SMC_Learning_Workbook.docx`;
  }

  throw new Error(`[link-rewrite error] Unmapped local target "${href}" (${repoRelative}) in "${sourceFilePath}"`);
}

export function loadAndValidateArticles() {
  const blogDir = path.join(REPO_ROOT, 'blog');
  const blogBnDir = path.join(blogDir, 'bn');
  const lessonsDir = path.join(REPO_ROOT, 'lessons');

  if (!fs.existsSync(blogDir) || !fs.existsSync(lessonsDir)) {
    throw new Error('Required blog/ or lessons/ directory not found in repository root.');
  }

  const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') && f !== 'README.md').sort();
  const lessonFiles = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.md') && f !== 'README.md').sort();

  if (blogFiles.length !== 26) {
    throw new Error(`Expected exactly 26 blog files, found ${blogFiles.length}`);
  }
  if (lessonFiles.length !== 26) {
    throw new Error(`Expected exactly 26 lesson files, found ${lessonFiles.length}`);
  }

  // Check 1:1 stem match
  for (const bf of blogFiles) {
    if (!lessonFiles.includes(bf)) {
      throw new Error(`Missing corresponding lesson file for blog post: ${bf}`);
    }
  }

  // Validate against manifest definitions
  const articles = [];
  const slugToArticle = new Map();

  for (let i = 0; i < MANIFEST_DEFINITIONS.length; i++) {
    const def = MANIFEST_DEFINITIONS[i];
    const fileName = `${def.slug}.md`;
    const fullBlogPath = path.join(blogDir, fileName);
    const fullLessonPath = path.join(lessonsDir, fileName);

    if (!fs.existsSync(fullBlogPath)) {
      throw new Error(`Manifest file not found: ${fullBlogPath}`);
    }
    if (!fs.existsSync(fullLessonPath)) {
      throw new Error(`Lesson file not found: ${fullLessonPath}`);
    }

    const rawContent = fs.readFileSync(fullBlogPath, 'utf8');
    const lines = rawContent.split('\n');

    // Extract title (Line 1)
    if (!lines[0].startsWith('# ')) {
      throw new Error(`Line 1 of ${fileName} is not an H1 title`);
    }
    const title = lines[0].replace(/^#\s+/, '').trim();

    // Extract description / standfirst (Line 3)
    const description = lines[2].trim();
    if (!description) {
      throw new Error(`Standfirst missing on line 3 of ${fileName}`);
    }

    // Extract metadata (Line 5)
    // **Lesson 01 · Week 1 · About 3 minutes**
    const metaMatch = lines[4].match(/\*\*Lesson\s+(\d+)\s+·\s+Week\s+(\d+)\s+·\s+(.*?)\*\*/);
    if (!metaMatch) {
      throw new Error(`Metadata mismatch on line 5 of ${fileName}: ${lines[4]}`);
    }
    const sourceLessonId = parseInt(metaMatch[1], 10);
    const sourceWeek = parseInt(metaMatch[2], 10);
    const readingEstimate = metaMatch[3].trim();

    if (sourceLessonId !== def.lessonId) {
      throw new Error(`Lesson ID mismatch for ${fileName}: manifest has ${def.lessonId}, file has ${sourceLessonId}`);
    }
    if (sourceWeek !== def.week) {
      throw new Error(`Week mismatch for ${fileName}: manifest has ${def.week}, file has ${sourceWeek}`);
    }

    // Validate navigation line on line 7
    if (!lines[6].includes('[Series index]')) {
      throw new Error(`Navigation header missing on line 7 of ${fileName}`);
    }

    // Remove presentation scaffolding:
    // lines 0-7: title, description, metadata, top nav
    // last non-empty line: previous / next navigation line
    const substantiveLines = lines.slice(8);
    while (substantiveLines.length > 0 && substantiveLines[substantiveLines.length - 1].trim() === '') {
      substantiveLines.pop();
    }
    const lastLine = substantiveLines[substantiveLines.length - 1];
    if (lastLine.startsWith('[') && lastLine.endsWith(')')) {
      substantiveLines.pop(); // Remove bottom nav line
    }
    while (substantiveLines.length > 0 && substantiveLines[substantiveLines.length - 1].trim() === '') {
      substantiveLines.pop();
    }

    const bodyMarkdown = substantiveLines.join('\n');

    // Load matching Bangla translation from blog/bn/<slug>.md if present
    let titleBn = title;
    let descriptionBn = description;
    let readingMinutesBn = readingEstimate;
    let bodyMarkdownBn = '';
    const fullBlogBnPath = path.join(blogBnDir, fileName);

    if (fs.existsSync(fullBlogBnPath)) {
      const rawBnContent = fs.readFileSync(fullBlogBnPath, 'utf8');
      const bnLines = rawBnContent.split('\n');

      if (!bnLines[0] || !bnLines[0].startsWith('# ')) {
        throw new Error(`Line 1 of blog/bn/${fileName} is not an H1 title`);
      }
      titleBn = bnLines[0].replace(/^#\s+/, '').trim();

      descriptionBn = (bnLines[2] || '').trim();
      if (!descriptionBn) {
        throw new Error(`Standfirst missing on line 3 of blog/bn/${fileName}`);
      }

      const bnMetaMatch = (bnLines[4] || '').match(/\*\*Lesson\s+(\d+)\s+·\s+Week\s+(\d+)\s+·\s+(.*?)\*\*/);
      if (bnMetaMatch) {
        readingMinutesBn = bnMetaMatch[3].trim();
      }

      const bnSubstantiveLines = bnLines.slice(8);
      while (bnSubstantiveLines.length > 0 && bnSubstantiveLines[bnSubstantiveLines.length - 1].trim() === '') {
        bnSubstantiveLines.pop();
      }
      const bnLastLine = bnSubstantiveLines[bnSubstantiveLines.length - 1] || '';
      if (bnLastLine.startsWith('[') && bnLastLine.endsWith(')')) {
        bnSubstantiveLines.pop();
      }
      while (bnSubstantiveLines.length > 0 && bnSubstantiveLines[bnSubstantiveLines.length - 1].trim() === '') {
        bnSubstantiveLines.pop();
      }
      bodyMarkdownBn = bnSubstantiveLines.join('\n');
    }

    const article = {
      studyOrder: def.studyOrder,
      week: def.week,
      lessonId: def.lessonId,
      paddedLessonId: String(def.lessonId).padStart(2, '0'),
      slug: def.slug,
      topic: def.topic,
      aliases: def.aliases,
      title,
      titleBn,
      description,
      descriptionBn,
      readingMinutes: readingEstimate,
      readingMinutesBn,
      sourcePath: `blog/${fileName}`,
      worksheetPath: `lessons/${fileName}`,
      worksheetUrl: `${GITHUB_REPO_URL}/blob/main/lessons/${fileName}`,
      bodyMarkdown,
      bodyMarkdownBn,
      knowledgeCheck: KNOWLEDGE_CHECKS[def.slug] || null
    };

    articles.push(article);
    slugToArticle.set(def.slug, article);
  }

  validateKnowledgeChecks(articles);

  // Assign previous and next in exact study order
  for (let i = 0; i < articles.length; i++) {
    articles[i].previous = i > 0 ? {
      slug: articles[i - 1].slug,
      title: articles[i - 1].title,
      lessonId: articles[i - 1].lessonId,
      paddedLessonId: articles[i - 1].paddedLessonId,
      week: articles[i - 1].week
    } : null;

    articles[i].next = i < articles.length - 1 ? {
      slug: articles[i + 1].slug,
      title: articles[i + 1].title,
      lessonId: articles[i + 1].lessonId,
      paddedLessonId: articles[i + 1].paddedLessonId,
      week: articles[i + 1].week
    } : null;
  }

  return { articles, slugToArticle };
}

export function loadSourceResources() {
  const blogPostsPath = path.join(REPO_ROOT, 'resources/BLOG_POSTS.md');
  const readmePath = path.join(REPO_ROOT, 'resources/README.md');

  if (!fs.existsSync(blogPostsPath) || !fs.existsSync(readmePath)) {
    throw new Error('Resource source files not found in repository root resources/');
  }

  // 1. Parse curated blog posts from resources/BLOG_POSTS.md
  const blogPostsRaw = fs.readFileSync(blogPostsPath, 'utf8');
  const bpRegex = /<a id="([^"]+)"><\/a>\s*## ([^\n]+)\s*\n\s*\*\*([^*]+)\*\*\s*—\s*\[Read the [^\]]+\]\(([^)]+)\)\.\s*\n\s*([\s\S]*?)(?=(?:<a id=|$))/g;
  const curatedPosts = [];

  for (const m of blogPostsRaw.matchAll(bpRegex)) {
    const id = m[1];
    const fullHeading = m[2].trim();
    const meta = m[3].trim();
    const url = m[4].trim();
    const rest = m[5].trim();
    const parts = rest.split(/\*\*After reading:\*\*/);
    const desc = parts[0].trim();
    const exercise = parts[1] ? parts[1].trim() : '';

    curatedPosts.push({
      id,
      heading: fullHeading,
      meta,
      url,
      desc,
      exercise
    });
  }

  if (curatedPosts.length !== 10) {
    throw new Error(`Expected 10 curated posts in resources/BLOG_POSTS.md, parsed ${curatedPosts.length}`);
  }

  // 2. Parse N01-N12 entries from resources/README.md
  const readmeRaw = fs.readFileSync(readmePath, 'utf8');
  const nRegex = /<a id="(n\d+)"><\/a>\s*## ([^\n]+)\s*\n\s*\[([^\]]+)\]\(([^)]+)\)\s*\n\s*([\s\S]*?)(?=(?:<a id=|$))/g;
  const libraryEntries = [];

  for (const m of readmeRaw.matchAll(nRegex)) {
    const id = m[1];
    const heading = m[2].trim();
    const linkText = m[3].trim();
    const url = m[4].trim();
    const body = m[5].trim();

    // Extract fields: **When:** ... **Format:** ... **Origin:** ...
    const whenMatch = body.match(/\*\*When:\*\*\s*([^·\n]+)/);
    const formatMatch = body.match(/\*\*Format:\*\*\s*([^·\n]+(?:\s*·\s*\d+)?)/);
    const originMatch = body.match(/\*\*Origin:\*\*\s*([^\n]+)/);

    // Extract try this and access check
    const tryMatch = body.match(/\*\*Try this:\*\*\s*([^\n]+)/);
    const accessMatch = body.match(/\*\*Access check:\*\*\s*([^\n]+)/);

    // Main description is text before **Try this:**
    const descParts = body.split(/\*\*When:\*\*|\*\*Try this:\*\*/);
    let desc = '';
    if (descParts.length > 2) {
      desc = descParts[1].replace(/^[^\n]*\n+/, '').trim();
    } else {
      desc = body;
    }

    libraryEntries.push({
      id,
      heading,
      linkText,
      url,
      when: whenMatch ? whenMatch[1].trim() : '',
      format: formatMatch ? formatMatch[1].trim() : '',
      origin: originMatch ? originMatch[1].trim() : '',
      tryThis: tryMatch ? tryMatch[1].trim() : '',
      accessCheck: accessMatch ? accessMatch[1].trim() : '',
      desc
    });
  }

  return { curatedPosts, libraryEntries };
}

export function loadSourceRoadmap() {
  const roadmapPath = path.join(REPO_ROOT, 'SOLO_LEARNING_ROADMAP.md');
  if (!fs.existsSync(roadmapPath)) {
    throw new Error('SOLO_LEARNING_ROADMAP.md not found in repository root');
  }

  const roadmapRaw = fs.readFileSync(roadmapPath, 'utf8');
  const weekRegex = /<a id="week-(\d+)"><\/a>\s*## Week \d+ — ([^\n]+)\s*\n\s*([^\n]+(?:\n[^\n*]+)*)\s*\n\s*\*\*Lesson order\*\*\s*\n\s*([\s\S]*?)\n\s*\*\*Suggested six-day plan:\*\*[\s\S]*?\*\*Weekly evidence:\*\*\s*([^\n]+(?:\n[^\n*]+)*)\s*\n\s*\*\*Move on when:\*\*\s*([^\n]+)/g;

  const weeks = [];
  for (const m of roadmapRaw.matchAll(weekRegex)) {
    const weekNum = parseInt(m[1], 10);
    const title = m[2].trim();
    const summary = m[3].trim();
    const lessonsBlock = m[4].trim();
    const evidence = m[5].trim();
    const criteria = m[6].trim();

    const lessonIds = Array.from(lessonsBlock.matchAll(/\[(\d+)\s*—/g)).map(lm => parseInt(lm[1], 10));

    weeks.push({
      weekNum,
      title,
      summary,
      lessonIds,
      evidence,
      criteria
    });
  }

  if (weeks.length !== 8) {
    throw new Error(`Expected exactly 8 weeks in SOLO_LEARNING_ROADMAP.md, parsed ${weeks.length}`);
  }

  return { weeks };
}

export function renderArticleMarkdown(markdown, relativeRoot = '../../', sourceFilePath = 'blog/dummy.md', idPrefix = '') {
  // Extract headings and collect IDs
  const headings = [];
  const usedIds = new Set();

  const renderer = new marked.Renderer();

  // Custom heading renderer to extract headings and give stable IDs
  renderer.heading = function({ tokens, depth, text }) {
    let cleanText = text;
    // Strip markdown formatting if any
    cleanText = cleanText.replace(/<[^>]+>/g, '').trim();
    let id = slugifyHeading(cleanText);
    if (!id) id = `heading-${headings.length + 1}`;
    if (idPrefix) id = `${idPrefix}${id}`;
    let uniqueId = id;
    let counter = 1;
    while (usedIds.has(uniqueId)) {
      uniqueId = `${id}-${counter++}`;
    }
    usedIds.add(uniqueId);

    if (depth === 2 || depth === 3) {
      headings.push({
        depth,
        id: uniqueId,
        text: cleanText
      });
    }

    return `<h${depth} id="${uniqueId}">${text}</h${depth}>`;
  };

  // Custom link renderer to rewrite links
  renderer.link = function({ href, title, tokens, text }) {
    const rewrittenHref = rewriteMarkdownLink(href, relativeRoot, sourceFilePath);
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
    const isExternal = /^https?:\/\//i.test(rewrittenHref);
    const relAttr = isExternal ? ' rel="noopener noreferrer"' : '';
    return `<a href="${escapeHtml(rewrittenHref)}"${titleAttr}${relAttr}>${text}</a>`;
  };

  // Custom table renderer to ensure responsive table wrapping
  renderer.table = function(token) {
    const defaultHtml = marked.Renderer.prototype.table.call(this, token);
    return `<div class="table-container" tabindex="0" role="region" aria-label="Table data">${defaultHtml}</div>`;
  };

  const rawHtml = marked(markdown, { renderer, gfm: true, breaks: false });
  const sanitizedHtml = sanitizeHtml(rawHtml, SANITIZE_OPTIONS);

  return {
    html: sanitizedHtml,
    headings
  };
}
