import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

export function renderRoadmapPage(articles, roadmapData, relativeRoot = '../') {
  const articlesByLesson = new Map(articles.map((a) => [a.lessonId, a]));
  const { weeks = [] } = roadmapData || {};

  const weeksHtml = weeks.map((w) => {
    const lessonItems = (w.lessonIds || []).map((lessonId) => {
      const art = articlesByLesson.get(lessonId);
      if (!art) return '';
      return `
        <li class="week-lesson-item">
          <span class="path-num">${art.paddedLessonId}</span>
          <a href="${relativeRoot}articles/${art.slug}/"><strong>Lesson ${art.paddedLessonId}:</strong> ${escapeHtml(art.title)}</a>
          <span class="reading-time">(${art.readingMinutes})</span>
          <span class="lesson-progress-badge hidden" data-progress-slug="${art.slug}">Completed ✓</span>
        </li>`;
    }).join('\n');

    return `
      <section class="week-section" id="week-${w.weekNum}" aria-label="Week ${w.weekNum}: ${escapeHtml(w.title)}">
        <div class="week-section-header">
          <h2 class="week-title">Week ${w.weekNum} — ${escapeHtml(w.title)}</h2>
          <span class="topic-badge">${w.lessonIds.length} lessons in study order</span>
        </div>
        <p class="article-summary">${escapeHtml(w.summary)}</p>

        <ul class="week-lessons-list">
          ${lessonItems}
        </ul>

        <div class="week-evidence-box">
          <p><strong>Weekly Evidence Goal:</strong> ${escapeHtml(w.evidence)}</p>
          <p style="margin-top: 4px;"><strong>Move on when:</strong> ${escapeHtml(w.criteria)}</p>
        </div>
      </section>`;
  }).join('\n');

  const content = `
    <div class="roadmap-container">
      <header>
        <span class="eyebrow">CURRICULUM ARCHITECTURE</span>
        <h1 class="page-title">Eight-Week SMC Learning Roadmap</h1>
        <p class="page-lead">A structured, sequence-checked roadmap guiding independent study across market structure, liquidity, points of interest, daily bias, and systematic trading playbooks.</p>
      </header>

      <div class="roadmap-pacing-card">
        <h2>Pacing &amp; Daily Routine</h2>
        <p>The curriculum suggests <strong>8–11 hours weekly</strong> across six study days and one rest day. Each day combines reading a concept note (30–45 min), marking historical charts (35–50 min), reviewing valid and failed setups (15 min), and active recall checks (10 min). Treat pacing as an evidence threshold: finish the chart labs before progressing.</p>
        <p style="margin-top: 12px; font-size: 0.92rem; color: var(--color-ink-muted);">
          Note: Nominal eight weeks may require extension. The full roadmap source document is maintained on GitHub:
          <a href="https://github.com/ninjastorm24/smc-roadmap/blob/main/SOLO_LEARNING_ROADMAP.md" target="_blank" rel="noopener noreferrer">View original SOLO_LEARNING_ROADMAP.md &rarr;</a>
        </p>
      </div>

      <div class="weeks-container">
        ${weeksHtml}
      </div>

      <section class="post-roadmap-phase" id="after-week-8" aria-label="Post-roadmap evaluation phase">
        <h2 style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 700; margin-bottom: 12px;">After Week 8 — Evaluation and Four-Week Paper Phase</h2>
        <p style="margin-bottom: 16px;">The week-8 set is a workflow check. Appendix C of the workbook asks for <strong>50–100 historical setups where available</strong>, a reserved evaluation period on unseen historical data, and a separate four-week forward paper phase.</p>

        <div class="table-container" tabindex="0" role="region" aria-label="Post-roadmap phases">
          <table>
            <thead>
              <tr>
                <th scope="col">Phase</th>
                <th scope="col">Work Required</th>
                <th scope="col">Evidence Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Historical development</strong></td>
                <td>Finish the first sample; revise only between versions</td>
                <td>Opportunity log and rule-change record</td>
              </tr>
              <tr>
                <td><strong>Reserved evaluation</strong></td>
                <td>Apply frozen rules to a later, previously unseen period</td>
                <td>Separate report; no tuning against its outcomes</td>
              </tr>
              <tr>
                <td><strong>Paper week A</strong></td>
                <td>10–15 simulated observations if available; check consistency</td>
                <td>Decision timestamps and marking errors</td>
              </tr>
              <tr>
                <td><strong>Paper week B</strong></td>
                <td>Run the unchanged playbook and capture fills</td>
                <td>Entry, exit and actual simulated fill details</td>
              </tr>
              <tr>
                <td><strong>Paper week C</strong></td>
                <td>Continue without midweek rule edits</td>
                <td>Missed signals, skipped sessions and overrides</td>
              </tr>
              <tr>
                <td><strong>Paper week D</strong></td>
                <td>Review net R, drawdown, adherence and mistakes</td>
                <td>Continue / refine / archive decision</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;

  return renderPageShell({
    title: 'Eight-Week SMC Learning Roadmap',
    description: 'An eight-week structured study roadmap for market structure, liquidity, points of interest, daily bias, and playbook testing.',
    currentRelativeRoot: relativeRoot,
    activeNav: 'roadmap',
    content
  });
}
