import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

export function renderHomePage(articles, relativeRoot = './') {
  const articleListHtml = articles.map((a) => {
    return `
      <li class="article-item"
          value="${a.lessonId}"
          data-order="${a.studyOrder}"
          data-lesson="${a.lessonId}"
          data-week="${a.week}"
          data-topic="${escapeHtml(a.topic)}"
          data-title="${escapeHtml(a.title)}"
          data-desc="${escapeHtml(a.description)}"
          data-aliases="${escapeHtml(a.aliases)}">
        <span class="lesson-number" aria-hidden="true">${a.paddedLessonId}</span>
        <div class="article-main">
          <div class="article-meta-row">
            <span><span class="lesson-accessible">Lesson ${a.paddedLessonId} · </span>Week ${a.week}</span>
            <span class="topic-badge">${escapeHtml(a.topic)}</span>
          </div>
          <h3 class="article-title">
            <a href="${relativeRoot}articles/${a.slug}/" class="article-title-link">${escapeHtml(a.title)}</a>
          </h3>
          <p class="article-summary">${escapeHtml(a.description)}</p>
        </div>
        <div class="article-aside">
          <span class="reading-time">${escapeHtml(a.readingMinutes)}</span>
          <a href="${relativeRoot}articles/${a.slug}/" class="read-link">Read article &rarr;</a>
        </div>
      </li>`;
  }).join('\n');

  const content = `
    <section class="hero-section" aria-label="Introduction">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="eyebrow">AN INDEPENDENT STUDY SERIES</span>
          <h1 class="hero-title">Learn the concepts.<br>Build your process.</h1>
          <p class="hero-description">26 practical articles on market structure, liquidity and SMC concepts, arranged into an eight-week learning path.</p>
          <div class="hero-actions">
            <a href="${relativeRoot}articles/01-orientation/" class="btn-primary">Start with lesson 01</a>
            <a href="${relativeRoot}roadmap/" class="btn-secondary">See the roadmap</a>
          </div>
          <div class="hero-facts">
            <span>26 lessons</span>
            <span class="dot" aria-hidden="true">&bull;</span>
            <span>8 study weeks</span>
            <span class="dot" aria-hidden="true">&bull;</span>
            <span>Examples + practice</span>
          </div>
        </div>

        <aside class="path-panel" aria-label="Curriculum overview">
          <div class="path-panel-title">THE LEARNING PATH</div>
          <ul class="path-panel-list">
            <li class="path-panel-item">
              <span class="path-num">01</span>
              <div>
                <span class="path-name">Foundations</span>
                <div class="path-sub">Chart setup &amp; swings (Week 1)</div>
              </div>
            </li>
            <li class="path-panel-item">
              <span class="path-num">02</span>
              <div>
                <span class="path-name">Structure + zones</span>
                <div class="path-sub">BOS, liquidity &amp; POIs (Weeks 2–4)</div>
              </div>
            </li>
            <li class="path-panel-item">
              <span class="path-num">03</span>
              <div>
                <span class="path-name">Bias + models</span>
                <div class="path-sub">Time, daily bias &amp; entry rules (Weeks 5–7)</div>
              </div>
            </li>
            <li class="path-panel-item">
              <span class="path-num">04</span>
              <div>
                <span class="path-name">Practice + review</span>
                <div class="path-sub">Model audit &amp; blind test (Week 8)</div>
              </div>
            </li>
          </ul>
          <a href="${relativeRoot}roadmap/" class="path-panel-link">Open eight-week plan &rarr;</a>
        </aside>
      </div>
    </section>

    <section class="library-section" id="articles" aria-label="Article library">
      <div class="library-header">
        <div>
          <div class="section-eyebrow">THE ARTICLE LIBRARY</div>
          <h2 class="library-heading">Your study library</h2>
          <p class="library-intro">Build your understanding, one lesson at a time.</p>
        </div>
        <span class="library-total">${articles.length} articles · 8 weeks</span>
      </div>

      <div class="filter-toolbar" id="filter-toolbar">
        <noscript>
          <div class="no-js-note">
            Interactive search and filtering requires JavaScript. All ${articles.length} articles are listed below in the workbook study sequence.
          </div>
        </noscript>

        <form class="filter-inputs-grid" id="filter-form" onsubmit="return false;" role="search">
          <div class="control-group">
            <label for="search-input" class="control-label">Search articles</label>
            <div class="search-input-wrapper">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
              <input type="search" id="search-input" class="form-input" placeholder="Search topics or lessons…" autocomplete="off" disabled>
            </div>
          </div>

          <div class="control-group">
            <label for="topic-select" class="control-label">Topic</label>
            <select id="topic-select" class="form-select" disabled>
              <option value="all">All topics (${articles.length})</option>
              <option value="Foundations">Foundations (3)</option>
              <option value="Structure">Structure (4)</option>
              <option value="Zones &amp; POIs">Zones &amp; POIs (5)</option>
              <option value="Liquidity &amp; ranges">Liquidity &amp; ranges (2)</option>
              <option value="Bias &amp; timing">Bias &amp; timing (3)</option>
              <option value="Models">Models (8)</option>
              <option value="Testing">Testing (1)</option>
            </select>
          </div>

          <div class="control-group">
            <label for="week-select" class="control-label">Study week</label>
            <select id="week-select" class="form-select" disabled>
              <option value="all">All weeks</option>
              <option value="1">Week 1</option>
              <option value="2">Week 2</option>
              <option value="3">Week 3</option>
              <option value="4">Week 4</option>
              <option value="5">Week 5</option>
              <option value="6">Week 6</option>
              <option value="7">Week 7</option>
              <option value="8">Week 8</option>
            </select>
          </div>
        </form>

      </div>

        <div class="filter-status-row" id="filter-status-row">
          <span id="filter-count" class="filter-count" role="status" aria-live="polite">Showing all ${articles.length} articles</span>
          <button type="button" id="reset-filters-btn" class="btn-reset" style="display: none;">Reset filters</button>
        </div>

      <div id="no-matches" class="no-matches-box" role="status">
        <p class="no-matches-text">No articles match these filters.</p>
        <button type="button" id="clear-filters-btn" class="btn-secondary">Clear filters</button>
      </div>

      <ol class="article-list" aria-label="Articles list in study sequence">
        ${articleListHtml}
      </ol>
    </section>
  `;

  return renderPageShell({
    title: 'SMC Roadmap',
    description: 'An independent study series presenting 26 practical articles on market structure, liquidity and SMC concepts, arranged into an eight-week learning path.',
    currentRelativeRoot: relativeRoot,
    activeNav: 'articles',
    content
  });
}
