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
        if (matchCount === 26) {
          filterCount.textContent = 'Showing all 26 articles';
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
  const articleHeadings = Array.from(document.querySelectorAll('.article-prose h2, .article-prose h3'));

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
})();
