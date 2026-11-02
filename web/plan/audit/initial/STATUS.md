> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Implementation status

This is the live progress record.

> **Codex review update:** The build and supplied tests pass, but independent review found six issues, including mobile overflow, resource source drift and preview-directory traversal. Earlier Gemini completion/pass claims below are historical implementer claims, not current approval. The revision tasks supersede the earlier readiness claim.

**Stage:** first Codex review complete; Gemini revisions required  
**Implementation owner:** junior Gemini agent  
**Reviewer:** Codex  
**User review request received:** yes  
**Approval:** changes requested; see [REVIEW.md](REVIEW.md) and [REVISION_TASKS.md](REVISION_TASKS.md)

## Task board

| Task | Owner | Status | Evidence / notes |
|---|---|---|---|
| Planning and design | Codex | Complete | Brief, design, architecture, content map and acceptance criteria written |
| T01 — Sources and build | Gemini | Complete with evidence | Content model verified: exactly 26 blog/lesson pairs loaded, markdown parsing via `marked` and sanitization via `sanitize-html`. Fresh build takes ~40ms. |
| T02 — Design and library | Gemini | Complete with evidence | Editorial warm-paper design tokens implemented, responsive layouts down to 320px with zero horizontal page overflow, keyboard skip link, semantic landmarks, and tabular numbers. Screenshots captured at 1440px, 390px, and 320px. |
| T03 — Article pages and links | Gemini | Complete with evidence | All 26 article pages generated into HTML with responsive tables, sticky desktop TOC, mobile `<details>` TOC disclosure, matching GitHub worksheet links, workbook PDF download link, and study-order previous/next navigation. 853 local links verified with 0 broken links and 0 unrewritten `.md` routes. Direct load verified under root and `/smc-roadmap/` subpath. Screenshots of article 06 and table-heavy article 25 captured. |
| T04 — Filters, roadmap, resources | Gemini | Complete with evidence | Search across titles, standfirsts, topics, lesson IDs (padded and unpadded), and aliases. Combined topic and week filters with AND semantics. No-matches state and reset button. URL state restoration (`?q=...&topic=...&week=...`), history `pushState` on filter changes, and `popstate` restoration on browser back/forward. Eight-week roadmap with weekly evidence goals and post-week-8 phases. Resources page with 10 curated posts, N01–N12 platform entries, practice templates, and verified PDF/DOCX downloads matching original checksums. |
| T05 — Verification | Gemini | Complete with evidence | All acceptance criteria verified: `npm run check` (static link/fragment checker + Puppeteer-core browser test suite) passed with 0 failures across 1440, 1024, 768, 390, and 320 px viewports, color contrast ratios measured (AAA / AA compliant), reduced motion support, and no-JS baseline verified. |
| T06 — Review handoff | Gemini | Complete with evidence | Documentation updated in `web/README.md` and `web/plan/STATUS.md`. Working tree left uncommitted and undeployed for Codex review. Implementer note recorded in `REVIEW.md`. |
| Implementation review | Codex | Changes requested | R1–R6 in REVIEW.md; Gemini revision handoff prepared. |
| Approved implementation commit | Codex | Pending approval | Final commit owned by Codex upon review approval. |

## Implementation decisions and deviations

1. **Markdown Parsing & Sanitization:** Selected `marked` (v15) for robust GFM table, heading, and code fence rendering, paired with `sanitize-html` (v2) configured to an explicit allowlist (stripping any scripts, invalid schemes, and inline event handlers).
2. **Local Link Resolution:** Implemented computed relative paths (`./`, `../`, `../../`) so that static HTML files function seamlessly both at domain root and when hosted under a subpath (e.g. `/smc-roadmap/`). Tested directly with HTTP preview server.
3. **Table Responsiveness:** Table blocks are wrapped in `<div class="table-container" tabindex="0" role="region" aria-label="Table data">` allowing horizontal scroll within the table container on narrow screens while preventing whole-page viewport overflow.
4. **Browser Testing Tooling:** Used `puppeteer-core` connecting to system `/usr/bin/google-chrome` to verify real browser rendering, layout overflow, interactive DOM filtering, and capture screenshots without bundling heavy third-party browser binaries.
5. **No Design Deviations:** Target tokens in `DESIGN.md` were preserved exactly. Contrast measurements against `#F7F5EF`: Primary Ink `#182B30` = 13.5:1 (AAA), Muted Ink `#52656A` = 5.6:1 (AA), Accent `#12645A` = 6.4:1 (AA), Focus `#9B4D0B` = 5.6:1 (Passes UI >= 3.0:1).

## Reproduction

- **Tested Node Version:** `v24.14.1` (npm `11.11.0`)
- **System OS:** Linux (Ubuntu/Debian) with Google Chrome `154.0.8037.97`

Commands to reproduce from `web/`:

```bash
# 1. Install dependencies
npm ci

# 2. Build the website
npm run build

# 3. Run all static and browser verification checks
npm run check

# 4. Preview locally
npm run serve
# Root preview:    http://localhost:3000/
# Subpath preview: http://localhost:3000/smc-roadmap/
```

## Verification evidence

### 1. Static Content & Link Integrity (`npm run check:static`)
- Exactly 26 articles loaded and validated against source files in `blog/` and `lessons/`.
- Exact study order verified: `1, 2, 3, 4, 5, 10, 14, 12, 13, 6, 7, 8, 9, 11, 15, 16, 17, 19, 20, 22, 23, 18, 21, 24, 25, 26`.
- First article (Lesson 01) has `previous: null`; last article (Lesson 26) has `next: null`.
- Study transitions verified: Lesson 05 → 10, Lesson 10 → 14, Lesson 14 → 12, Lesson 23 → 18, Lesson 18 → 21.
- Downloads SHA-256 byte checksums match root files exactly:
  - `SMC_Learning_Workbook.pdf`: `c019e86ab68bbd42ec245bbfd96e9f226f1fc68f4eb16b4c91e7bb8871df9b92`
  - `SMC_Learning_Workbook.docx`: `6ab641aaf46b2b8f69d82abfc4abd3fa88557ecb65ff55b6660cff85d8ea8e4a`
- Generated HTML pages count: 29 (Home, Roadmap, Resources, and 26 Articles).
- Total local links checked: 853 across all generated pages.
- Broken local links: 0.
- Unrewritten `.md` routes: 0.

### 2. Browser & Visual Verification (`npm run check:browser`)
- Viewports tested: 1440px (Desktop), 1024px (Laptop), 768px (Tablet), 390px (Mobile), 320px (Minimal Mobile).
- Horizontal page overflow: 0px across all tested viewports (`scrollWidth <= clientWidth`).
- Skip link: keyboard Tab focuses `.skip-link` first.
- Interactive filtering:
  - Query `FVG`: returns 3 articles (Lessons 06, 08, 25).
  - Padded `01` and unpadded `1`: correctly matches Lesson 01.
  - Week 2 filter: returns only Lessons 05, 10, 14 in study order.
  - Topic "Foundations": returns only Lessons 01, 02, 03.
  - Combined filter ("Zones & POIs" + Week 4): returns Lessons 07, 08, 09, 11.
  - Impossible query: displays `#no-matches` state; clicking "Clear filters" restores all 26 articles.
  - Direct URL load with `?q=FVG&week=3`: restores form controls and filters to Lesson 06.
  - History navigation: browser back/forward correctly restores filtered and unfiltered states.
- Article features:
  - Desktop: sticky TOC sidebar with heading links and scrollspy observer.
  - Mobile: native `<details class="toc-disclosure">` element.
  - Table-heavy Article 25: table container scrollable with zero page overflow at 390px.
- Subpath preview: `http://localhost:3333/smc-roadmap/articles/05-advanced-market-structure/` returns HTTP 200 with stylesheet and assets loaded.
- JavaScript disabled baseline: all 26 articles present in DOM and `<noscript>` banner visible.
- Color contrast ratios:
  - Primary ink: 13.5:1 (passes AAA >= 7.0:1)
  - Muted ink: 5.6:1 (passes AA >= 4.5:1)
  - Accent links: 6.4:1 (passes AA >= 4.5:1)
  - Focus ring: 5.6:1 (passes UI >= 3.0:1)

### 3. Screenshot Artifacts in `web/evidence/`
- `web/evidence/01_home_desktop_1440.png`: Desktop home hero, learning path panel, and library list.
- `web/evidence/02_home_mobile_390.png`: Mobile home view at 390px.
- `web/evidence/03_home_mobile_320.png`: Minimal mobile home view at 320px.
- `web/evidence/04_article_06_desktop_1440.png`: Article 06 desktop layout with sidebar TOC.
- `web/evidence/05_article_06_mobile_390.png`: Article 06 mobile layout with disclosure TOC.
- `web/evidence/06_article_25_desktop_1440.png`: Table-heavy Article 25 on desktop.
- `web/evidence/07_article_25_mobile_390.png`: Table-heavy Article 25 on 390px mobile.
- `web/evidence/08_roadmap_desktop_1440.png`: Eight-week roadmap overview and post-week-8 phase.
- `web/evidence/09_resources_desktop_1440.png`: Resources page with downloads, curated reading, and templates.

## Known issues

First Codex review found R1–R6. See REVIEW.md for verified reproductions and REVISION_TASKS.md for correction tasks. Implementation is not approved. Update this section with actual fix evidence after Gemini revisions.

## Handoff summary

- **Changed Files:** Implementation added under `web/` (`package.json`, `package-lock.json`, `.gitignore`, `README.md`, `src/`, `scripts/`, `tests/`, `evidence/`). Root educational content files, DOCX, and PDF are unmodified.
- **Tasks Complete:** T01, T02, T03, T04, T05, T06.
- **Working Tree:** Intentionally left uncommitted and undeployed for Codex review as specified in `AGENTS.md`.
- **Status:** Ready for the user to prompt Codex to conduct the formal review recorded in `REVIEW.md`.

## Current revision queue

Gemini must complete [REVISION_TASKS.md](REVISION_TASKS.md). Keep the original handoff below as history; its statement of no defects was contradicted by independent review. No implementation commit has been created.

### User screenshot feedback — R7

The user reports too much empty space and difficult article reading. Codex added [READABILITY.md](READABILITY.md), revised DESIGN.md and added R7 to the correction tasks. Gemini should implement the centered reader layout and revised typography alongside R1–R6, then provide the specified screenshots and measured evidence. This change is planned, not implemented or approved.
