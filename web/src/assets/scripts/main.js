// SMC Roadmap Client Enhancements

(function() {
  'use strict';

  // --- Library Filtering Logic ---
  const searchInput = document.getElementById('search-input');
  const topicSelect = document.getElementById('topic-select');
  const weekSelect = document.getElementById('week-select');
  const filterCount = document.getElementById('filter-count');
  const resetBtn = document.getElementById('reset-filters-btn');
  const noMatchesBox = document.getElementById('no-matches');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');
  const articleItems = Array.from(document.querySelectorAll('.article-item'));

  if (searchInput && topicSelect && weekSelect && articleItems.length > 0) {
    // Enable enhancement controls only after initialization
    searchInput.removeAttribute('disabled');
    topicSelect.removeAttribute('disabled');
    weekSelect.removeAttribute('disabled');

    function normalize(str) {
      return (str || '')
        .toLowerCase()
        .replace(/[^\w\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    // Precompute search index for each article item
    const articleData = articleItems.map((el) => {
      const lessonId = el.getAttribute('data-lesson') || '';
      const paddedLesson = lessonId.padStart(2, '0');
      const week = el.getAttribute('data-week') || '';
      const topic = el.getAttribute('data-topic') || '';
      const title = el.getAttribute('data-title') || '';
      const desc = el.getAttribute('data-desc') || '';
      const aliases = el.getAttribute('data-aliases') || '';

      const searchableText = normalize([
        title,
        desc,
        topic,
        aliases,
        `lesson ${lessonId}`,
        `lesson ${paddedLesson}`,
        `week ${week}`
      ].join(' '));

      return {
        el,
        lessonId,
        paddedLesson,
        week,
        topic,
        searchableText
      };
    });

    function applyFilters(pushHistory = false) {
      const queryRaw = searchInput.value;
      const query = normalize(queryRaw);
      const selectedTopic = topicSelect.value.trim();
      const selectedWeek = weekSelect.value.trim();

      const queryTerms = query ? query.split(' ').filter(Boolean) : [];
      let matchCount = 0;

      articleData.forEach(({ el, week, topic, searchableText, lessonId, paddedLesson }) => {
        // Week filter
        const weekMatch = !selectedWeek || selectedWeek === 'all' || week === selectedWeek;

        // Topic filter
        const topicMatch = !selectedTopic || selectedTopic === 'all' || topic.toLowerCase() === selectedTopic.toLowerCase();

        // Query filter: all terms must match
        let termMatch = true;
        if (queryTerms.length > 0) {
          termMatch = queryTerms.every((term) => {
            // Check direct term match in searchable text
            if (searchableText.includes(term)) return true;
            // Check if term matches lesson number
            if (term === lessonId || term === paddedLesson) return true;
            return false;
          });
        }

        const isVisible = weekMatch && topicMatch && termMatch;
        if (isVisible) {
          el.classList.remove('hidden');
          matchCount++;
        } else {
          el.classList.add('hidden');
        }
      });

      // Update count & no matches state
      if (filterCount) {
        if (matchCount === articleItems.length) {
          filterCount.textContent = `Showing all ${articleItems.length} articles`;
        } else if (matchCount === 1) {
          filterCount.textContent = 'Showing 1 article';
        } else {
          filterCount.textContent = `Showing ${matchCount} articles`;
        }
      }

      if (noMatchesBox) {
        if (matchCount === 0) {
          noMatchesBox.classList.add('visible');
        } else {
          noMatchesBox.classList.remove('visible');
        }
      }

      // Show/hide reset button
      const hasActiveFilters = Boolean(queryRaw.trim()) || (selectedTopic && selectedTopic !== 'all') || (selectedWeek && selectedWeek !== 'all');
      if (resetBtn) {
        resetBtn.style.display = hasActiveFilters ? 'inline-flex' : 'none';
      }

      // Update URL query parameters
      const params = new URLSearchParams();
      if (queryRaw.trim()) params.set('q', queryRaw.trim());
      if (selectedTopic && selectedTopic !== 'all') params.set('topic', selectedTopic);
      if (selectedWeek && selectedWeek !== 'all') params.set('week', selectedWeek);

      const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;

      if (pushHistory) {
        window.history.pushState({ q: queryRaw, topic: selectedTopic, week: selectedWeek }, '', newUrl);
      } else {
        window.history.replaceState({ q: queryRaw, topic: selectedTopic, week: selectedWeek }, '', newUrl);
      }
    }

    function resetFilters() {
      searchInput.value = '';
      topicSelect.value = 'all';
      weekSelect.value = 'all';
      applyFilters(true);
      searchInput.focus();
    }

    // Event listeners
    searchInput.addEventListener('input', () => applyFilters(false));
    topicSelect.addEventListener('change', () => applyFilters(true));
    weekSelect.addEventListener('change', () => applyFilters(true));

    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilters);
    }
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', resetFilters);
    }

    // Restore state from URL query parameters on load
    function restoreStateFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      const topic = params.get('topic');
      const week = params.get('week');

      searchInput.value = q || '';

      if (topic) {
        const optionExists = Array.from(topicSelect.options).some((opt) => opt.value.toLowerCase() === topic.toLowerCase());
        topicSelect.value = optionExists ? topic : 'all';
      } else {
        topicSelect.value = 'all';
      }

      if (week) {
        const optionExists = Array.from(weekSelect.options).some((opt) => opt.value === week);
        weekSelect.value = optionExists ? week : 'all';
      } else {
        weekSelect.value = 'all';
      }

      applyFilters(false);
    }

    window.addEventListener('popstate', (e) => {
      restoreStateFromUrl();
    });

    restoreStateFromUrl();
  }

  // --- Article Table of Contents Scrollspy ---
  const tocLinks = Array.from(document.querySelectorAll('.toc-link'));
  const articleHeadings = Array.from(document.querySelectorAll('.article-prose h2, .article-prose h3, .knowledge-check-section h2, .lesson-completion-section h2'));

  if (tocLinks.length > 0 && articleHeadings.length > 0 && 'IntersectionObserver' in window) {
    let activeId = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
          tocLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-80px 0px -60% 0px'
    });

    articleHeadings.forEach((heading) => observer.observe(heading));
  }

  // --- Article Language Toggle (English / Bangla) ---
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const proseEn = document.getElementById('prose-en');
  const proseBn = document.getElementById('prose-bn');

  if (langToggleBtn && proseEn && proseBn) {
    const titleEl = document.querySelector('.article-page-title');
    const standfirstEl = document.querySelector('.article-standfirst');
    const readingTimeEl = document.getElementById('article-reading-time');
    const studyOrderEl = document.getElementById('article-study-order');
    const tocListsEn = Array.from(document.querySelectorAll('.toc-list-en'));
    const tocListsBn = Array.from(document.querySelectorAll('.toc-list-bn'));
    const kcLangEn = Array.from(document.querySelectorAll('.kc-lang-en'));
    const kcLangBn = Array.from(document.querySelectorAll('.kc-lang-bn'));
    const tocNavTitle = document.querySelector('.toc-nav-title');
    const tocDisclosureSummary = document.querySelector('.toc-disclosure summary');
    const badgeEl = langToggleBtn.querySelector('.lang-toggle-badge');
    const labelEl = langToggleBtn.querySelector('.lang-toggle-label');

    function setArticleLanguage(lang) {
      const isBangla = lang === 'bn';
      langToggleBtn.setAttribute('data-lang', isBangla ? 'bn' : 'en');
      langToggleBtn.setAttribute('aria-pressed', isBangla ? 'true' : 'false');

      if (badgeEl) {
        badgeEl.textContent = isBangla ? 'EN' : 'বাংলা';
      }
      if (labelEl) {
        labelEl.textContent = isBangla ? 'Read in English' : 'বাংলায় পড়ুন';
      }

      if (isBangla) {
        proseEn.classList.add('hidden');
        proseBn.classList.remove('hidden');
        tocListsEn.forEach((el) => el.classList.add('hidden'));
        tocListsBn.forEach((el) => el.classList.remove('hidden'));
        kcLangEn.forEach((el) => el.classList.add('hidden'));
        kcLangBn.forEach((el) => el.classList.remove('hidden'));
      } else {
        proseBn.classList.add('hidden');
        proseEn.classList.remove('hidden');
        tocListsBn.forEach((el) => el.classList.add('hidden'));
        tocListsEn.forEach((el) => el.classList.remove('hidden'));
        kcLangBn.forEach((el) => el.classList.add('hidden'));
        kcLangEn.forEach((el) => el.classList.remove('hidden'));
      }

      if (titleEl) {
        const nextTitle = titleEl.getAttribute(isBangla ? 'data-title-bn' : 'data-title-en');
        if (nextTitle) titleEl.textContent = nextTitle;
        if (isBangla) {
          titleEl.setAttribute('lang', 'bn');
        } else {
          titleEl.removeAttribute('lang');
        }
      }

      if (standfirstEl) {
        const nextDesc = standfirstEl.getAttribute(isBangla ? 'data-desc-bn' : 'data-desc-en');
        if (nextDesc) standfirstEl.textContent = nextDesc;
        if (isBangla) {
          standfirstEl.setAttribute('lang', 'bn');
        } else {
          standfirstEl.removeAttribute('lang');
        }
      }

      if (readingTimeEl) {
        const nextTime = readingTimeEl.getAttribute(isBangla ? 'data-time-bn' : 'data-time-en');
        if (nextTime) readingTimeEl.textContent = nextTime;
      }

      if (studyOrderEl) {
        const nextOrder = studyOrderEl.getAttribute(isBangla ? 'data-order-bn' : 'data-order-en');
        if (nextOrder) studyOrderEl.textContent = nextOrder;
      }

      if (tocNavTitle) {
        const nextToc = tocNavTitle.getAttribute(isBangla ? 'data-toc-bn' : 'data-toc-en');
        if (nextToc) tocNavTitle.textContent = nextToc;
      }

      if (tocDisclosureSummary) {
        const nextSummary = tocDisclosureSummary.getAttribute(isBangla ? 'data-toc-bn' : 'data-toc-en');
        if (nextSummary) tocDisclosureSummary.textContent = nextSummary;
      }
    }

    langToggleBtn.addEventListener('click', () => {
      const currentLang = langToggleBtn.getAttribute('data-lang') || 'en';
      const nextLang = currentLang === 'en' ? 'bn' : 'en';
      setArticleLanguage(nextLang);
    });

    // Optional URL query parameter support (?lang=bn)
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'bn') {
      setArticleLanguage('bn');
    }
  }

  // --- Knowledge Check & Lesson Completion Persistence ---
  const STORAGE_KEY = 'smc_roadmap_progress_v1';

  function loadAllProgress() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveAllProgress(data) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Ignore storage quota or privacy mode errors
    }
  }

  // Update Home & Roadmap completion badges if present
  const progressBadges = Array.from(document.querySelectorAll('.lesson-progress-badge[data-progress-slug]'));
  if (progressBadges.length > 0) {
    const allProgress = loadAllProgress();
    progressBadges.forEach((badge) => {
      const slug = badge.getAttribute('data-progress-slug');
      const entry = slug && allProgress[slug];
      if (entry && entry.completed) {
        badge.classList.remove('hidden');
      }
    });
  }

  // Article Knowledge Check & Completion Checklist Logic
  const kcSection = document.getElementById('knowledge-check-container');
  if (kcSection) {
    const lessonSlug = kcSection.getAttribute('data-lesson-slug') || '';
    const paddedLessonId = kcSection.getAttribute('data-lesson-id') || '';
    const totalQuestions = parseInt(kcSection.getAttribute('data-total-questions') || '0', 10);
    const totalChecks = parseInt(kcSection.getAttribute('data-total-checks') || '0', 10);

    const questionCards = Array.from(kcSection.querySelectorAll('.kc-question-card'));
    const scoreTextEn = document.getElementById('kc-score-text-en');
    const scoreTextBn = document.getElementById('kc-score-text-bn');
    const scoreBadge = document.getElementById('kc-score-badge');
    const progressFill = document.getElementById('kc-progress-fill');
    const resetQuizBtn = document.getElementById('kc-reset-btn');

    const lcCard = document.getElementById('lc-card');
    const lcStatusPill = document.getElementById('lc-status-pill');
    const lcStatusIcon = document.getElementById('lc-status-icon');
    const lcStatusTextEn = document.getElementById('lc-status-text-en');
    const lcStatusTextBn = document.getElementById('lc-status-text-bn');
    const lcBannerEn = document.getElementById('lc-banner-en');
    const lcBannerBn = document.getElementById('lc-banner-bn');
    const lcCompleteToggleBtn = document.getElementById('lc-complete-toggle-btn');
    const lcBtnEn = document.getElementById('lc-btn-en');
    const lcBtnBn = document.getElementById('lc-btn-bn');
    const headerCompletedBadge = document.getElementById('header-completed-badge');
    const checkboxes = Array.from(document.querySelectorAll('.lc-checkbox'));

    function getLessonState() {
      const all = loadAllProgress();
      const current = all[lessonSlug] || {};
      return {
        answers: current.answers && typeof current.answers === 'object' ? current.answers : {},
        checks: current.checks && typeof current.checks === 'object' ? current.checks : {},
        completed: Boolean(current.completed)
      };
    }

    function saveLessonState(state) {
      const all = loadAllProgress();
      all[lessonSlug] = {
        answers: state.answers,
        checks: state.checks,
        completed: Boolean(state.completed),
        updatedAt: Date.now()
      };
      saveAllProgress(all);
    }

    let lessonState = getLessonState();

    function renderQuizUI() {
      let answeredCount = 0;
      let correctCount = 0;

      questionCards.forEach((card) => {
        const qIdx = card.getAttribute('data-q-index');
        const correctIdx = parseInt(card.getAttribute('data-correct-index') || '0', 10);
        const selectedIdx = lessonState.answers[qIdx];
        const hasAnswered = typeof selectedIdx === 'number';

        const statusBadge = card.querySelector('.kc-q-status');
        const statusEn = statusBadge ? statusBadge.querySelector('.kc-lang-en') : null;
        const statusBn = statusBadge ? statusBadge.querySelector('.kc-lang-bn') : null;
        const explanationBox = card.querySelector('.kc-explanation');
        const optionBtns = Array.from(card.querySelectorAll('.kc-option-btn'));

        if (hasAnswered) {
          answeredCount++;
          const isCorrect = selectedIdx === correctIdx;
          if (isCorrect) correctCount++;

          card.setAttribute('data-state', isCorrect ? 'correct' : 'incorrect');
          if (statusBadge) {
            statusBadge.setAttribute('data-status', isCorrect ? 'correct' : 'incorrect');
          }
          if (statusEn) {
            statusEn.textContent = statusEn.getAttribute(isCorrect ? 'data-status-en-correct' : 'data-status-en-incorrect') || '';
          }
          if (statusBn) {
            statusBn.textContent = statusBn.getAttribute(isCorrect ? 'data-status-bn-correct' : 'data-status-bn-incorrect') || '';
          }
          if (explanationBox) {
            explanationBox.classList.remove('hidden');
          }
        } else {
          card.removeAttribute('data-state');
          if (statusBadge) {
            statusBadge.setAttribute('data-status', 'unanswered');
          }
          if (statusEn) {
            statusEn.textContent = statusEn.getAttribute('data-status-en-unanswered') || 'Unanswered';
          }
          if (statusBn) {
            statusBn.textContent = statusBn.getAttribute('data-status-bn-unanswered') || 'উত্তর দেওয়া হয়নি';
          }
          if (explanationBox) {
            explanationBox.classList.add('hidden');
          }
        }

        optionBtns.forEach((btn) => {
          const optIdx = parseInt(btn.getAttribute('data-opt-index') || '0', 10);
          btn.classList.remove('is-selected', 'is-correct', 'is-incorrect', 'is-correct-reveal');
          btn.setAttribute('aria-pressed', hasAnswered && selectedIdx === optIdx ? 'true' : 'false');

          if (hasAnswered) {
            if (optIdx === selectedIdx) {
              btn.classList.add('is-selected');
              btn.classList.add(selectedIdx === correctIdx ? 'is-correct' : 'is-incorrect');
            } else if (optIdx === correctIdx) {
              btn.classList.add('is-correct-reveal');
            }
          }
        });
      });

      if (scoreTextEn) {
        scoreTextEn.textContent = `Score: ${correctCount} / ${totalQuestions} correct (${answeredCount} answered)`;
      }
      if (scoreTextBn) {
        scoreTextBn.textContent = `স্কোর: ${correctCount} / ${totalQuestions} সঠিক (${answeredCount}টি উত্তর দেওয়া হয়েছে)`;
      }
      if (scoreBadge) {
        scoreBadge.setAttribute('data-perfect', answeredCount === totalQuestions && correctCount === totalQuestions ? 'true' : 'false');
      }
      if (progressFill && totalQuestions > 0) {
        const pct = Math.round((answeredCount / totalQuestions) * 100);
        progressFill.style.width = `${pct}%`;
      }
    }

    function renderChecklistUI() {
      let checkedCount = 0;
      checkboxes.forEach((cb) => {
        const id = cb.getAttribute('data-check-id') || '';
        const isChecked = Boolean(lessonState.checks[id]);
        cb.checked = isChecked;
        if (isChecked) checkedCount++;
        const itemLi = cb.closest('.lc-check-item');
        if (itemLi) {
          itemLi.classList.toggle('is-checked', isChecked);
        }
      });

      const isCompleted = Boolean(lessonState.completed);

      if (lcCard) {
        lcCard.setAttribute('data-completed', isCompleted ? 'true' : 'false');
      }
      if (lcStatusPill) {
        lcStatusPill.setAttribute('data-completed', isCompleted ? 'true' : 'false');
      }
      if (lcStatusIcon) {
        lcStatusIcon.textContent = isCompleted ? '✓' : '○';
      }
      if (lcStatusTextEn) {
        lcStatusTextEn.textContent = isCompleted
          ? `Nicely completed (${checkedCount} / ${totalChecks})`
          : `In progress (${checkedCount} / ${totalChecks})`;
      }
      if (lcStatusTextBn) {
        lcStatusTextBn.textContent = isCompleted
          ? `সুন্দরভাবে সম্পন্ন (${checkedCount} / ${totalChecks})`
          : `চলমান (${checkedCount} / ${totalChecks})`;
      }
      if (lcBannerEn) {
        lcBannerEn.textContent = isCompleted
          ? `Lesson ${paddedLessonId} is marked as nicely completed! Great work.`
          : `Check all ${totalChecks} milestones above or use the button to mark Lesson ${paddedLessonId} as nicely completed.`;
      }
      if (lcBannerBn) {
        lcBannerBn.textContent = isCompleted
          ? `পাঠ ${paddedLessonId} সুন্দরভাবে সম্পন্ন হিসেবে চিহ্নিত হয়েছে! দারুণ কাজ।`
          : `পাঠ ${paddedLessonId} সুন্দরভাবে সম্পন্ন হিসেবে চিহ্নিত করতে উপরের সবগুলো ধাপে টিক দিন অথবা বাটনে ক্লিক করুন।`;
      }
      if (lcCompleteToggleBtn) {
        lcCompleteToggleBtn.setAttribute('aria-pressed', isCompleted ? 'true' : 'false');
        lcCompleteToggleBtn.classList.toggle('is-completed', isCompleted);
      }
      if (lcBtnEn) {
        lcBtnEn.textContent = isCompleted ? 'Lesson nicely completed ✓' : 'Mark lesson nicely completed ✓';
      }
      if (lcBtnBn) {
        lcBtnBn.textContent = isCompleted ? 'পাঠটি সুন্দরভাবে সম্পন্ন হয়েছে ✓' : 'পাঠটি সম্পন্ন হিসেবে চিহ্নিত করুন ✓';
      }
      if (headerCompletedBadge) {
        headerCompletedBadge.classList.toggle('hidden', !isCompleted);
      }
    }

    // Attach option click listeners
    kcSection.addEventListener('click', (e) => {
      const btn = e.target.closest('.kc-option-btn');
      if (!btn) return;
      const qIdx = btn.getAttribute('data-q-index');
      const optIdx = parseInt(btn.getAttribute('data-opt-index') || '0', 10);
      if (qIdx === null) return;

      lessonState.answers[qIdx] = optIdx;
      saveLessonState(lessonState);
      renderQuizUI();
    });

    // Reset quiz listener
    if (resetQuizBtn) {
      resetQuizBtn.addEventListener('click', () => {
        lessonState.answers = {};
        saveLessonState(lessonState);
        renderQuizUI();
      });
    }

    // Checkbox change listeners
    checkboxes.forEach((cb) => {
      cb.addEventListener('change', () => {
        const id = cb.getAttribute('data-check-id');
        if (!id) return;
        lessonState.checks[id] = cb.checked;

        // Automatically mark lesson completed when all checkboxes are checked
        const allChecked = checkboxes.length > 0 && checkboxes.every((box) => box.checked);
        lessonState.completed = allChecked;

        saveLessonState(lessonState);
        renderChecklistUI();
      });
    });

    // Complete toggle button listener
    if (lcCompleteToggleBtn) {
      lcCompleteToggleBtn.addEventListener('click', () => {
        const nextCompleted = !lessonState.completed;
        lessonState.completed = nextCompleted;
        if (nextCompleted) {
          checkboxes.forEach((cb) => {
            const id = cb.getAttribute('data-check-id');
            if (id) lessonState.checks[id] = true;
          });
        } else {
          checkboxes.forEach((cb) => {
            const id = cb.getAttribute('data-check-id');
            if (id) lessonState.checks[id] = false;
          });
        }
        saveLessonState(lessonState);
        renderChecklistUI();
      });
    }

    renderQuizUI();
    renderChecklistUI();
  }
})();
