import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

export function renderArticlePage(article, bodyHtml, headings, relativeRoot = '../../', bodyHtmlBn = '', headingsBn = []) {
  // Build Table of Contents list (English and Bangla)
  const tocItemsHtml = headings.map((h) => {
    return `<li class="toc-item depth-${h.depth}"><a href="#${h.id}" class="toc-link">${escapeHtml(h.text)}</a></li>`;
  }).join('\n');

  const tocItemsBnHtml = headingsBn.map((h) => {
    return `<li class="toc-item depth-${h.depth}"><a href="#${h.id}" class="toc-link" lang="bn">${escapeHtml(h.text)}</a></li>`;
  }).join('\n');

  // Build Study Nav (Previous / Next)
  const prevCard = article.previous ? `
    <a href="${relativeRoot}articles/${article.previous.slug}/" class="study-nav-card prev">
      <span class="study-nav-direction">&larr; Previous in study order</span>
      <span class="study-nav-title">Lesson ${article.previous.paddedLessonId}: ${escapeHtml(article.previous.title)}</span>
    </a>` : '';

  const nextCard = article.next ? `
    <a href="${relativeRoot}articles/${article.next.slug}/" class="study-nav-card next">
      <span class="study-nav-direction">Next in study order &rarr;</span>
      <span class="study-nav-title">Lesson ${article.next.paddedLessonId}: ${escapeHtml(article.next.title)}</span>
    </a>` : '';

  const content = `
    <article class="article-page">
      <div class="article-outer-shell">
        <nav class="article-breadcrumbs" aria-label="Breadcrumb">
          <a href="${relativeRoot}">Articles</a>
          <span aria-hidden="true">/</span>
          <a href="${relativeRoot}roadmap/#week-${article.week}">Week ${article.week}</a>
          <span aria-hidden="true">/</span>
          <span>Lesson ${article.paddedLessonId}</span>
        </nav>

        ${headings.length > 0 ? `
        <details class="toc-disclosure">
          <summary data-toc-en="On this page" data-toc-bn="এই পাতায়">On this page</summary>
          <ul class="toc-list toc-list-en">
            ${tocItemsHtml}
          </ul>
          ${headingsBn.length > 0 ? `
          <ul class="toc-list toc-list-bn hidden" lang="bn">
            ${tocItemsBnHtml}
          </ul>` : ''}
        </details>` : ''}

        <div class="article-layout">
          ${headings.length > 0 ? `
          <aside class="article-sidebar" aria-label="Article navigation">
            <div class="toc-nav-title" data-toc-en="ON THIS PAGE" data-toc-bn="এই পাতায়">ON THIS PAGE</div>
            <nav aria-label="Table of contents">
              <ul class="toc-list toc-list-en">
                ${tocItemsHtml}
              </ul>
              ${headingsBn.length > 0 ? `
              <ul class="toc-list toc-list-bn hidden" lang="bn">
                ${tocItemsBnHtml}
              </ul>` : ''}
            </nav>
          </aside>` : '<div class="article-sidebar-spacer" aria-hidden="true"></div>'}

          <div class="article-main-column">
            <header class="article-header">
              <div class="article-meta-row article-header-top">
                <div class="article-meta-badges">
                  <span>LESSON ${article.paddedLessonId} · WEEK ${article.week}</span>
                  <span class="topic-badge">${escapeHtml(article.topic)}</span>
                </div>
                ${bodyHtmlBn ? `
                <button type="button" id="lang-toggle-btn" class="btn-lang-toggle" aria-pressed="false" data-lang="en" title="বাংলায় পড়ুন / Read in Bangla">
                  <span class="lang-toggle-badge" aria-hidden="true">বাংলা</span>
                  <span class="lang-toggle-label">বাংলায় পড়ুন</span>
                </button>` : ''}
              </div>
              <h1 class="article-page-title" data-title-en="${escapeHtml(article.title)}" data-title-bn="${escapeHtml(article.titleBn || article.title)}">${escapeHtml(article.title)}</h1>
              <p class="article-standfirst" data-desc-en="${escapeHtml(article.description)}" data-desc-bn="${escapeHtml(article.descriptionBn || article.description)}">${escapeHtml(article.description)}</p>
              <div class="article-meta-bar">
                <span id="article-reading-time" data-time-en="${escapeHtml(article.readingMinutes)}" data-time-bn="${escapeHtml(article.readingMinutesBn || article.readingMinutes)}">${escapeHtml(article.readingMinutes)}</span>
                <span class="dot" aria-hidden="true">&bull;</span>
                <span id="article-study-order" data-order-en="Study Order: ${article.studyOrder} of 26" data-order-bn="অধ্যয়ন ক্রম: ২৬-এর মধ্যে ${article.studyOrder}">Study Order: ${article.studyOrder} of 26</span>
                <span class="dot" aria-hidden="true">&bull;</span>
                <a href="${article.worksheetUrl}" target="_blank" rel="noopener noreferrer">Matching Worksheet (GitHub) &rarr;</a>
              </div>
            </header>

            <div class="article-content">
              <div class="article-prose">
                <div id="prose-en" class="prose-lang-block">
                  ${bodyHtml}
                </div>
                ${bodyHtmlBn ? `
                <div id="prose-bn" class="prose-lang-block hidden" lang="bn">
                  ${bodyHtmlBn}
                </div>` : ''}
              </div>

              <section class="article-end-matter" aria-label="Lesson resources and next steps">
                <div class="end-matter-actions">
                  <a href="${article.worksheetUrl}" class="btn-primary" target="_blank" rel="noopener noreferrer">Open worksheet (Markdown)</a>
                  <a href="${relativeRoot}downloads/SMC_Learning_Workbook.pdf" class="btn-secondary" download>Download workbook (PDF)</a>
                </div>

                <nav class="study-nav-grid" aria-label="Study order navigation">
                  ${prevCard}
                  ${nextCard}
                </nav>
              </section>
            </div>
          </div>

          <div class="article-trailing-space" aria-hidden="true"></div>
        </div>
      </div>
    </article>
  `;

  return renderPageShell({
    title: `Lesson ${article.paddedLessonId}: ${article.title}`,
    description: article.description,
    currentRelativeRoot: relativeRoot,
    activeNav: 'articles',
    content
  });
}
