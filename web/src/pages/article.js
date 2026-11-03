import { renderPageShell } from '../layouts/site.js';
import { escapeHtml } from '../../scripts/content.js';

function renderKnowledgeCheckAndCompletion(article) {
  const kc = article.knowledgeCheck;
  if (!kc) return '';

  const totalQuestions = kc.questions.length;
  const totalChecks = kc.completionItems.length;
  const optionLetters = ['A', 'B', 'C', 'D'];

  const questionsHtml = kc.questions.map((q, qIdx) => {
    const optionsHtml = q.optionsEn.map((optEn, optIdx) => {
      const optBn = q.optionsBn[optIdx] || optEn;
      return `
        <button type="button" class="kc-option-btn" data-q-index="${qIdx}" data-opt-index="${optIdx}" aria-pressed="false">
          <span class="kc-opt-letter" aria-hidden="true">${optionLetters[optIdx]}</span>
          <span class="kc-opt-text">
            <span class="kc-lang-en">${escapeHtml(optEn)}</span>
            <span class="kc-lang-bn hidden" lang="bn">${escapeHtml(optBn)}</span>
          </span>
        </button>`;
    }).join('\n');

    return `
      <li class="kc-question-card" data-q-index="${qIdx}" data-correct-index="${q.correctIndex}">
        <div class="kc-question-meta">
          <span class="kc-q-num">
            <span class="kc-lang-en">Question ${qIdx + 1} of ${totalQuestions}</span>
            <span class="kc-lang-bn hidden" lang="bn">প্রশ্ন ${qIdx + 1} / ${totalQuestions}</span>
          </span>
          <span class="kc-q-status" data-status="unanswered">
            <span class="kc-lang-en" data-status-en-unanswered="Unanswered" data-status-en-correct="Correct ✓" data-status-en-incorrect="Review answer">Unanswered</span>
            <span class="kc-lang-bn hidden" lang="bn" data-status-bn-unanswered="উত্তর দেওয়া হয়নি" data-status-bn-correct="সঠিক ✓" data-status-bn-incorrect="সঠিক উত্তর দেখুন">উত্তর দেওয়া হয়নি</span>
          </span>
        </div>
        <h3 class="kc-question-prompt">
          <span class="kc-lang-en">${escapeHtml(q.qEn)}</span>
          <span class="kc-lang-bn hidden" lang="bn">${escapeHtml(q.qBn)}</span>
        </h3>
        <div class="kc-options-grid" role="group" aria-label="Question ${qIdx + 1} options">
          ${optionsHtml}
        </div>
        <div class="kc-explanation hidden" role="region" aria-label="Question ${qIdx + 1} explanation">
          <div class="kc-explanation-label">
            <span class="kc-lang-en">Explanation</span>
            <span class="kc-lang-bn hidden" lang="bn">ব্যাখ্যা</span>
          </div>
          <p class="kc-explanation-text">
            <span class="kc-lang-en">${escapeHtml(q.explainEn)}</span>
            <span class="kc-lang-bn hidden" lang="bn">${escapeHtml(q.explainBn)}</span>
          </p>
        </div>
      </li>`;
  }).join('\n');

  const checklistHtml = kc.completionItems.map((item) => {
    const inputId = `lc-check-${article.lessonId}-${item.id}`;
    return `
      <li class="lc-check-item">
        <label class="lc-check-label" for="${inputId}">
          <input type="checkbox" id="${inputId}" class="lc-checkbox" data-check-id="${escapeHtml(item.id)}">
          <span class="lc-check-box-ui" aria-hidden="true">
            <svg class="lc-check-svg" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"></polyline></svg>
          </span>
          <span class="lc-check-text">
            <span class="kc-lang-en">${escapeHtml(item.en)}</span>
            <span class="kc-lang-bn hidden" lang="bn">${escapeHtml(item.bn)}</span>
          </span>
        </label>
      </li>`;
  }).join('\n');

  return `
    <section class="knowledge-check-section" id="knowledge-check-container" aria-labelledby="knowledge-check" data-lesson-slug="${article.slug}" data-lesson-id="${article.paddedLessonId}" data-total-questions="${totalQuestions}" data-total-checks="${totalChecks}">
      <div class="kc-header-card">
        <div class="kc-header-top">
          <div>
            <span class="kc-eyebrow">
              <span class="kc-lang-en">ACTIVE RECALL &middot; ${totalQuestions} QUESTIONS</span>
              <span class="kc-lang-bn hidden" lang="bn">সক্রিয় পুনরালোচনা &middot; ${totalQuestions}টি প্রশ্ন</span>
            </span>
            <h2 id="knowledge-check" class="kc-section-title">
              <span class="kc-lang-en">Knowledge check</span>
              <span class="kc-lang-bn hidden" lang="bn">জ্ঞান যাচাই (Knowledge Check)</span>
            </h2>
          </div>
          <div class="kc-score-pill-group">
            <div class="kc-score-badge" id="kc-score-badge" role="status" aria-live="polite">
              <span class="kc-lang-en" id="kc-score-text-en">Score: 0 / ${totalQuestions} correct (0 answered)</span>
              <span class="kc-lang-bn hidden" id="kc-score-text-bn" lang="bn">স্কোর: 0 / ${totalQuestions} সঠিক (0টি উত্তর দেওয়া হয়েছে)</span>
            </div>
            <button type="button" id="kc-reset-btn" class="btn-kc-reset" title="Reset quiz answers">
              <span class="kc-lang-en">Reset quiz</span>
              <span class="kc-lang-bn hidden" lang="bn">রিসেট করুন</span>
            </button>
          </div>
        </div>
        <p class="kc-intro">
          <span class="kc-lang-en">Test your understanding of Lesson ${article.paddedLessonId} with these ${totalQuestions} questions. Select an option to check your answer and read the explanation. Your answers are saved automatically in this browser.</span>
          <span class="kc-lang-bn hidden" lang="bn">এই ${totalQuestions}টি প্রশ্নের মাধ্যমে পাঠ ${article.paddedLessonId} সম্পর্কে আপনার ধারণা যাচাই করুন। উত্তর যাচাই করতে এবং ব্যাখ্যা পড়তে একটি অপশন নির্বাচন করুন। আপনার উত্তরগুলো এই ব্রাউজারে স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকবে।</span>
        </p>
        <div class="kc-progress-track" aria-hidden="true">
          <div class="kc-progress-fill" id="kc-progress-fill" style="width: 0%;"></div>
        </div>
      </div>

      <ol class="kc-questions-list">
        ${questionsHtml}
      </ol>
    </section>

    <section class="lesson-completion-section" aria-labelledby="lesson-completion" data-lesson-slug="${article.slug}">
      <div class="lc-card" id="lc-card" data-completed="false">
        <div class="lc-header">
          <div>
            <span class="kc-eyebrow">
              <span class="kc-lang-en">STUDY MILESTONES &middot; LESSON ${article.paddedLessonId}</span>
              <span class="kc-lang-bn hidden" lang="bn">অধ্যয়ন ধাপসমূহ &middot; পাঠ ${article.paddedLessonId}</span>
            </span>
            <h2 id="lesson-completion" class="kc-section-title">
              <span class="kc-lang-en">Lesson completion checklist</span>
              <span class="kc-lang-bn hidden" lang="bn">পাঠ সম্পন্নকরণ চেকলিস্ট</span>
            </h2>
          </div>
          <div class="lc-status-pill" id="lc-status-pill" data-completed="false" role="status" aria-live="polite">
            <span class="lc-status-icon" id="lc-status-icon" aria-hidden="true">○</span>
            <span class="kc-lang-en" id="lc-status-text-en">In progress (0 / ${totalChecks})</span>
            <span class="kc-lang-bn hidden" id="lc-status-text-bn" lang="bn">চলমান (0 / ${totalChecks})</span>
          </div>
        </div>

        <p class="kc-intro">
          <span class="kc-lang-en">Check off each practical milestone as you finish the article, chart lab, and knowledge check. Checking all boxes marks Lesson ${article.paddedLessonId} as nicely completed.</span>
          <span class="kc-lang-bn hidden" lang="bn">আর্টিকেল পড়া, চার্ট ল্যাব এবং জ্ঞান যাচাই শেষ করার সাথে সাথে প্রতিটি ধাপে টিক চিহ্ন দিন। সবগুলো ধাপে টিক দিলে পাঠ ${article.paddedLessonId} সুন্দরভাবে সম্পন্ন হিসেবে চিহ্নিত হবে।</span>
        </p>

        <div class="lc-mastery-box">
          <div class="lc-mastery-title">
            <span class="kc-lang-en">Mastery Check Prompt</span>
            <span class="kc-lang-bn hidden" lang="bn">মাস্টারি চেক প্রশ্ন</span>
          </div>
          <p class="lc-mastery-text">
            <span class="kc-lang-en">${escapeHtml(kc.masteryPromptEn)}</span>
            <span class="kc-lang-bn hidden" lang="bn">${escapeHtml(kc.masteryPromptBn)}</span>
          </p>
        </div>

        <ul class="lc-checklist">
          ${checklistHtml}
        </ul>

        <div class="lc-footer-bar">
          <div class="lc-banner-message" id="lc-banner-message">
            <span class="kc-lang-en" id="lc-banner-en">Check all ${totalChecks} milestones above or use the button to mark Lesson ${article.paddedLessonId} as nicely completed.</span>
            <span class="kc-lang-bn hidden" id="lc-banner-bn" lang="bn">পাঠ ${article.paddedLessonId} সুন্দরভাবে সম্পন্ন হিসেবে চিহ্নিত করতে উপরের সবগুলো ধাপে টিক দিন অথবা বাটনে ক্লিক করুন।</span>
          </div>
          <button type="button" id="lc-complete-toggle-btn" class="btn-lc-complete" aria-pressed="false">
            <span class="kc-lang-en" id="lc-btn-en">Mark lesson nicely completed ✓</span>
            <span class="kc-lang-bn hidden" id="lc-btn-bn" lang="bn">পাঠটি সম্পন্ন হিসেবে চিহ্নিত করুন ✓</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function renderArticlePage(article, bodyHtml, headings, relativeRoot = '../../', bodyHtmlBn = '', headingsBn = []) {
  const allHeadingsEn = [...headings];
  const allHeadingsBn = [...headingsBn];

  if (article.knowledgeCheck) {
    allHeadingsEn.push(
      { depth: 2, id: 'knowledge-check', text: 'Knowledge check' },
      { depth: 2, id: 'lesson-completion', text: 'Lesson completion' }
    );
    if (allHeadingsBn.length > 0) {
      allHeadingsBn.push(
        { depth: 2, id: 'knowledge-check', text: 'জ্ঞান যাচাই' },
        { depth: 2, id: 'lesson-completion', text: 'পাঠ সম্পন্নকরণ' }
      );
    }
  }

  // Build Table of Contents list (English and Bangla)
  const tocItemsHtml = allHeadingsEn.map((h) => {
    return `<li class="toc-item depth-${h.depth}"><a href="#${h.id}" class="toc-link">${escapeHtml(h.text)}</a></li>`;
  }).join('\n');

  const tocItemsBnHtml = allHeadingsBn.map((h) => {
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

  const kcAndCompletionHtml = renderKnowledgeCheckAndCompletion(article);

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

        ${allHeadingsEn.length > 0 ? `
        <details class="toc-disclosure">
          <summary data-toc-en="On this page" data-toc-bn="এই পাতায়">On this page</summary>
          <ul class="toc-list toc-list-en">
            ${tocItemsHtml}
          </ul>
          ${allHeadingsBn.length > 0 ? `
          <ul class="toc-list toc-list-bn hidden" lang="bn">
            ${tocItemsBnHtml}
          </ul>` : ''}
        </details>` : ''}

        <div class="article-layout">
          ${allHeadingsEn.length > 0 ? `
          <aside class="article-sidebar" aria-label="Article navigation">
            <div class="toc-nav-title" data-toc-en="ON THIS PAGE" data-toc-bn="এই পাতায়">ON THIS PAGE</div>
            <nav aria-label="Table of contents">
              <ul class="toc-list toc-list-en">
                ${tocItemsHtml}
              </ul>
              ${allHeadingsBn.length > 0 ? `
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
                  <span id="header-completed-badge" class="lesson-completed-header-badge hidden">
                    <span class="kc-lang-en">Completed ✓</span>
                    <span class="kc-lang-bn hidden" lang="bn">সম্পন্ন ✓</span>
                  </span>
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
                <a href="#knowledge-check" class="meta-bar-kc-link">
                  <span class="kc-lang-en">Knowledge check (${article.knowledgeCheck ? article.knowledgeCheck.questions.length : 0} Qs) &darr;</span>
                  <span class="kc-lang-bn hidden" lang="bn">জ্ঞান যাচাই (${article.knowledgeCheck ? article.knowledgeCheck.questions.length : 0}টি প্রশ্ন) &darr;</span>
                </a>
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

              ${kcAndCompletionHtml}

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
