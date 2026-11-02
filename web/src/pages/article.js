import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

export function renderArticlePage(article, bodyHtml, headings, relativeRoot = '../../') {
  // Build Table of Contents list
  const tocItemsHtml = headings.map((h) => {
    return `<li class="toc-item depth-${h.depth}"><a href="#${h.id}" class="toc-link">${escapeHtml(h.text)}</a></li>`;
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
          <summary>On this page</summary>
          <ul class="toc-list">
            ${tocItemsHtml}
          </ul>
        </details>` : ''}

        <div class="article-layout">
          ${headings.length > 0 ? `
          <aside class="article-sidebar" aria-label="Article navigation">
            <div class="toc-nav-title">ON THIS PAGE</div>
            <nav aria-label="Table of contents">
              <ul class="toc-list">
                ${tocItemsHtml}
              </ul>
            </nav>
          </aside>` : '<div class="article-sidebar-spacer" aria-hidden="true"></div>'}

          <div class="article-main-column">
            <header class="article-header">
              <div class="article-meta-row">
                <span>LESSON ${article.paddedLessonId} · WEEK ${article.week}</span>
                <span class="topic-badge">${escapeHtml(article.topic)}</span>
              </div>
              <h1 class="article-page-title">${escapeHtml(article.title)}</h1>
              <p class="article-standfirst">${escapeHtml(article.description)}</p>
              <div class="article-meta-bar">
                <span>${escapeHtml(article.readingMinutes)}</span>
                <span class="dot" aria-hidden="true">&bull;</span>
                <span>Study Order: ${article.studyOrder} of 26</span>
                <span class="dot" aria-hidden="true">&bull;</span>
                <a href="${article.worksheetUrl}" target="_blank" rel="noopener noreferrer">Matching Worksheet (GitHub) &rarr;</a>
              </div>
            </header>

            <div class="article-content">
              <div class="article-prose">
                ${bodyHtml}
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
