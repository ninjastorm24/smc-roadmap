import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

const GITHUB_REPO_URL = 'https://github.com/ninjastorm24/smc-roadmap';

export function renderResourcesPage(resourceData, relativeRoot = '../') {
  const { curatedPosts = [], libraryEntries = [] } = resourceData || {};

  const curatedPostsHtml = curatedPosts.map((p) => {
    return `
      <article class="resource-card" id="${p.id}" aria-label="${escapeHtml(p.heading)}">
        <div class="resource-card-header">
          <h3 class="resource-title"><a href="${p.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.heading)} &rarr;</a></h3>
          <span class="resource-meta">${escapeHtml(p.meta)}</span>
        </div>
        <p class="resource-desc">${escapeHtml(p.desc)}</p>
        ${p.exercise ? `<p style="font-size: 0.92rem; color: var(--color-ink-primary);"><strong>After reading:</strong> ${escapeHtml(p.exercise)}</p>` : ''}
      </article>`;
  }).join('\n');

  const libraryItemsHtml = libraryEntries.map((item) => {
    const metaParts = [item.when ? `When: ${item.when}` : '', item.format ? `Format: ${item.format}` : '', item.origin ? `Origin: ${item.origin}` : ''].filter(Boolean).join(' · ');
    return `
      <article class="resource-card" id="${item.id}" aria-label="${escapeHtml(item.heading)}">
        <div class="resource-card-header">
          <h3 class="resource-title"><a href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkText || item.heading)} &rarr;</a></h3>
          <span class="resource-meta">${escapeHtml(metaParts)}</span>
        </div>
        <p class="resource-desc">${escapeHtml(item.desc)}</p>
        ${item.tryThis ? `<p style="font-size: 0.92rem; color: var(--color-ink-primary);"><strong>Try this:</strong> ${escapeHtml(item.tryThis)}</p>` : ''}
        ${item.accessCheck ? `<p style="font-size: 0.85rem; color: var(--color-ink-muted); margin-top: 4px;"><strong>Access check:</strong> ${escapeHtml(item.accessCheck)}</p>` : ''}
      </article>`;
  }).join('\n');

  const content = `
    <div class="resources-container">
      <header>
        <span class="eyebrow">CURATED STUDY MATERIALS</span>
        <h1 class="page-title">Learning Resources</h1>
        <p class="page-lead">A selected index of external articles, platform guides, practice templates, and downloadable workbooks supporting the SMC Roadmap study curriculum.</p>
      </header>

      <section class="resource-category" id="downloads" aria-label="Workbook downloads">
        <h2 class="resource-category-title">Workbook Downloads</h2>
        <p class="article-summary" style="margin-bottom: 20px;">The original curriculum documents containing all 26 lesson specifications, steps, exercises, and link inventories.</p>
        <div class="download-grid">
          <div class="download-card">
            <div>
              <span class="topic-badge">RECOMMENDED FORMAT</span>
              <h3 style="font-size: 1.35rem; margin-top: 8px;">SMC Learning Workbook (PDF)</h3>
              <p class="article-summary" style="margin: 8px 0;">358 KB · Clean portable document edition of the complete course workbook.</p>
            </div>
            <a href="${relativeRoot}downloads/SMC_Learning_Workbook.pdf" class="btn-primary" download>Download PDF Edition</a>
          </div>

          <div class="download-card">
            <div>
              <span class="topic-badge">EDITABLE SOURCE</span>
              <h3 style="font-size: 1.35rem; margin-top: 8px;">SMC Learning Workbook (DOCX)</h3>
              <p class="article-summary" style="margin: 8px 0;">66 KB · Original Microsoft Word document; curriculum source of truth.</p>
            </div>
            <a href="${relativeRoot}downloads/SMC_Learning_Workbook.docx" class="btn-secondary" download>Download DOCX Source</a>
          </div>
        </div>
      </section>

      <section class="resource-category" id="video-channels" aria-label="Educator video channels and playlists">
        <h2 class="resource-category-title">Educator Video Channels &amp; Playlists</h2>
        <p class="article-summary" style="margin-bottom: 20px;">Each of the 26 companion articles includes topic-matched video lessons from these six channels and course playlists.</p>
        <div class="download-grid">
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">TTrades (@TTrades_edu)</h3>
            <p class="article-summary">English tutorials on market structure, FVGs, iFVGs, order blocks, breakers, mitigation, POIs, dealing ranges, daily bias, MSS vs. CISD, AMD, OTE and backtesting.</p>
            <a href="https://www.youtube.com/@TTrades_edu" class="read-link" target="_blank" rel="noopener noreferrer">Visit YouTube channel &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Mulham Trading (@MulhamTrading)</h3>
            <p class="article-summary">English courses and backtests covering market structure, inducement, liquidity sweeps, FVGs, order blocks, BPR, CRT, Judas Swing and trading math.</p>
            <a href="https://www.youtube.com/@MulhamTrading" class="read-link" target="_blank" rel="noopener noreferrer">Visit YouTube channel &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Learn SMC With Kushal (@learn-smc-with-kushal)</h3>
            <p class="article-summary">Bengali SMC &amp; ICT video series covering pullbacks, swings, market structure, order/breaker/mitigation blocks, liquidity, dealing ranges, kill zones, CRT and AMDX/XAMD.</p>
            <a href="https://www.youtube.com/@learn-smc-with-kushal" class="read-link" target="_blank" rel="noopener noreferrer">Visit YouTube channel &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">FX Journal (@FxJournal)</h3>
            <p class="article-summary">Bengali masterclasses on advanced market structure, liquidity voids, dealing ranges, Unicorn model, daily bias, Time &amp; Price, MSS/CISD/TBS/TWS, CRT + TBS and Quarterly Theory.</p>
            <a href="https://www.youtube.com/@FxJournal" class="read-link" target="_blank" rel="noopener noreferrer">Visit YouTube channel &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Guardeer (@Guardeer)</h3>
            <p class="article-summary">Hindi SMC &amp; ICT lectures on fractals, BOS/CHoCH &amp; inducement, order blocks/FVG, liquidity, POIs, block types, STH/STL/ITH/ITL hierarchy, bias and killzones.</p>
            <a href="https://www.youtube.com/@Guardeer" class="read-link" target="_blank" rel="noopener noreferrer">Visit YouTube channel &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Whale Eyes Course Playlist (Guardeer Student)</h3>
            <p class="article-summary">15-lecture Hindi masterclass playlist plus advanced STH/STL/ITH/ITL and mentorship lectures expanding SMC concepts on charts.</p>
            <a href="https://www.youtube.com/watch?v=hTblWjQEbAY&list=PLIusEm0IfW4k" class="read-link" target="_blank" rel="noopener noreferrer">Open course playlist &rarr;</a>
          </div>
        </div>
      </section>

      <section class="resource-category" id="external-reading" aria-label="Curated external reading">
        <h2 class="resource-category-title">Curated Reading by Week</h2>
        <p class="article-summary" style="margin-bottom: 20px;">Ten selected articles to read alongside corresponding weekly lessons. These provide vocabulary comparisons, visual examples, and research cautions.</p>
        ${curatedPostsHtml}
      </section>

      <section class="resource-category" id="platform-guides" aria-label="Official guides and platform tools">
        <h2 class="resource-category-title">Platform Documentation &amp; Market Calendars</h2>
        <p class="article-summary" style="margin-bottom: 20px;">Official documentation for simulation platforms, CME futures contract arithmetic, and official U.S. macroeconomic release calendars.</p>
        ${libraryItemsHtml}
      </section>

      <section class="resource-category" id="practice-templates" aria-label="Practice templates and protocols">
        <h2 class="resource-category-title">Practice Templates &amp; Protocols (GitHub Source)</h2>
        <p class="article-summary" style="margin-bottom: 20px;">Ready-to-use Markdown templates for chart logging, session preparation, rulebook definition, and backtesting audits.</p>
        <div class="download-grid">
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Concept Note</h3>
            <p class="article-summary">Template to document one newly learned concept, its exact confirmation rules, and ambiguous examples.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/templates/CONCEPT_NOTE.md" class="read-link" target="_blank" rel="noopener noreferrer">View template on GitHub &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Session Plan</h3>
            <p class="article-summary">Pre-session hypothesis card recording higher-timeframe bias, invalidation levels, and eligible setups.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/templates/SESSION_PLAN.md" class="read-link" target="_blank" rel="noopener noreferrer">View template on GitHub &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Entry Model Card</h3>
            <p class="article-summary">Frozen setup specification documenting context, anchor, sweep, trigger, stop loss, and invalidation rules.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/templates/ENTRY_CARD.md" class="read-link" target="_blank" rel="noopener noreferrer">View template on GitHub &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Trade Journal</h3>
            <p class="article-summary">Execution and simulation log capturing entry time, planned stop, actual fill, transaction costs, and adherence.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/templates/TRADE_JOURNAL.md" class="read-link" target="_blank" rel="noopener noreferrer">View template on GitHub &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Weekly Review</h3>
            <p class="article-summary">Structured end-of-week reflection evaluating chart evidence, errors, and progress decisions.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/templates/WEEKLY_REVIEW.md" class="read-link" target="_blank" rel="noopener noreferrer">View template on GitHub &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Testing Protocol</h3>
            <p class="article-summary">Complete simulation protocol separating development samples, reserved evaluation, and forward paper trading.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/practice/TESTING.md" class="read-link" target="_blank" rel="noopener noreferrer">View protocol on GitHub &rarr;</a>
          </div>
        </div>
      </section>

      <section class="resource-category" id="reference" aria-label="Reference material">
        <h2 class="resource-category-title">Reference Documentation (GitHub Source)</h2>
        <div class="download-grid">
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">SMC Concept Glossary</h3>
            <p class="article-summary">Comprehensive alphabetical definitions of terms, acronyms (BOS, CHoCH, FVG, IDM, MSS, POI), and caveats.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/reference/GLOSSARY.md" class="read-link" target="_blank" rel="noopener noreferrer">View GLOSSARY.md &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Entry Model Catalog</h3>
            <p class="article-summary">Master catalog of entry families, structure-based triggers, and source-attributed setup variations.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/reference/ENTRY_MODELS.md" class="read-link" target="_blank" rel="noopener noreferrer">View ENTRY_MODELS.md &rarr;</a>
          </div>
          <div class="download-card">
            <h3 style="font-size: 1.2rem;">Workspace Setup Protocol</h3>
            <p class="article-summary">Instrument selection, chart feed specifications, timezone conventions, and replay environment rules.</p>
            <a href="${GITHUB_REPO_URL}/blob/main/practice/SETUP.md" class="read-link" target="_blank" rel="noopener noreferrer">View SETUP.md &rarr;</a>
          </div>
        </div>
      </section>
    </div>
  `;

  return renderPageShell({
    title: 'Learning Resources & Downloads',
    description: 'Curated external articles, platform guides, practice templates, and downloadable workbooks for SMC Roadmap.',
    currentRelativeRoot: relativeRoot,
    activeNav: 'resources',
    content
  });
}
