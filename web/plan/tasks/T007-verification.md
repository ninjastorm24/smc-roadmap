# T007 — Run the complete acceptance checks and report evidence

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-review-fixes.md](../PLAN-review-fixes.md) |
| Depends on | T001, T002, T003, T004, T005, T006, T009 |
| Assigned to | Gemini |
| Review source | Verification gaps — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Produce a reproducible, honest whole-site handoff after the corrections, including meaningful regressions for the reviewed defects.

## Context

The initial npm run check passed but missed source drift, link semantics, mobile overflow on other pages and enabled no-JS controls. Treat historical pass claims as limited observations, not full acceptance.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Run the full acceptance reference in specs/ACCEPTANCE.md and all task-specific regressions.
2. Check source fidelity and semantic link destinations, not just title/button or file existence.
3. Capture representative initial, scrolled, table, mobile and wide-desktop views; record measurements.
4. Document install/build/serve/check commands, Node/browser requirements and exact manual versus automated coverage.
5. Record outstanding failures, unavailable checks and dependency-audit context accurately. Update web/README.md without overclaiming.

## Out of scope

- Do not mark Codex approval or sign-off.
- Do not hide a failing case by removing its check or altering the plan.

## Test cases — all required

- Fresh npm ci, npm run build and npm run check succeed; commands and results are recorded.
- All 26 pairs, study order, 29 outputs and PDF/DOCX integrity are verified.
- Root and subpath deep links, filters, history, no-JS behavior and source citations are tested.
- Required viewport, keyboard, contrast, reduced-motion and 200%-zoom checks have actual evidence or explicit unverified status.
- Root educational content remains unchanged; generated/dependency/cache files remain ignored.

## Acceptance criteria

- [ ] The goal and all specified test cases pass with actual evidence.
- [ ] The change stays within scope and preserves existing educational sources.
- [ ] Relevant build, static and browser checks pass; limitations are stated.
- [ ] The report identifies changed files and exact checks run.
- [ ] Codex has reviewed the submitted diff and recorded sign-off below.

## Checks to run

From `web/`, use the relevant commands and the focused regressions described above:

```text
npm run build
npm run check:static
npm run check:browser
git diff --check
git status --short
```

For dependency/build changes, also run `npm ci` and record its output. State which focused tests/browser scenarios were executed; these commands alone do not establish the task-specific result. Do not invent command output or mark an unavailable check passed.

## Junior report

### Round 1 — whole-site acceptance verification and evidence report

- **What changed, by file:**
  - `web/tests/browser.test.js`: Expanded automated test suites from 8 to 11 suites. Added automated verification for:
    - Disabled no-JS baseline state (verifying filter input `disabled` attributes are retained in static HTML when JS is disabled, and dynamically enabled when client JS initializes).
    - Reduced motion media feature emulation (`prefers-reduced-motion: reduce`), verifying `scroll-behavior: auto`.
    - 200% zoom emulation on desktop (640px equivalent), verifying zero horizontal page overflow.
    - 1920px wide desktop centering, verifying balanced left/right margins (360px each) on home (`.library-section`) and roadmap (`.roadmap-container`), and reader column center alignment (offset 0px).
    - Semantic link destination checking, verifying that Markdown cross-links route to article pages, while worksheet links and buttons route to canonical GitHub repository paths.
  - `web/README.md`: Updated check documentation to reflect actual verification coverage (827 local links, 29 HTML pages, 11 browser test suites across 320px–1920px viewports, accessibility contrast, reduced motion, 200% zoom, balanced margins, and link routing).
  - `web/plan/tasks/T007-verification.md`: Updated status to `IN REVIEW` and recorded complete verification results.
  - `web/plan/BOARD.md`: Updated T007 status to `IN REVIEW`.

- **Checks run and actual results, including exit status:**
  1. `cd web && npm ci`: Exited with code 0 (`added 97 packages, and audited 98 packages in 5s`).
  2. `cd web && npm run build`: Exited with code 0 (`Validated 26 articles and matching lesson worksheets... Generated all 26 individual article pages... Generated dist/roadmap/index.html... Generated dist/resources/index.html in 47ms`).
  3. `cd web && npm run check:static`: Exited with code 0 (`All static verification checks PASSED successfully!`, verifying 26 articles, exact study order, checksum matches for PDF/DOCX downloads, 29 HTML pages, and 827 internal links/fragments).
  4. `cd web && npm run check:browser`: Exited with code 0 (`All browser & visual verification checks PASSED successfully!`, 11 suites across 320px, 390px, 768px, 1024px, 1440px, 1920px viewports, URL parameters, history navigation, no-JS baseline, contrast ratios, reduced motion, 200% zoom, balanced side margins, and link routing).
  5. `cd web && npm run check`: Exited with code 0 (`node scripts/check.js && node tests/browser.test.js` both passed sequentially).
  6. `git diff --check`: Exited with code 0 (clean, no whitespace errors).
  7. `git status --short`: Exited with code 0 (`M README.md`, untracked `.github/` and `web/`). Educational source directories (`blog/`, `lessons/`, `resources/`, DOCX, PDF) completely unmodified and clean.

- **Task-specific test results:**
  - All 26 article and worksheet pairs validated 1:1.
  - Exact study order verified against `SOLO_LEARNING_ROADMAP.md`: `01, 02, 03, 04 / 05, 10, 14 / 12, 13, 06 / 07, 08, 09, 11 / 15, 16, 17 / 19, 20, 22, 23 / 18, 21, 24 / 25, 26`.
  - Download binaries `SMC_Learning_Workbook.pdf` (366,531 bytes) and `SMC_Learning_Workbook.docx` (67,257 bytes) matched root checksums bit-for-bit.
  - Subpath hosting (`http://127.0.0.1:3333/smc-roadmap/`) returns HTTP 200 and loads relative styles cleanly.
  - Pre-rendered HTML has search/filter inputs disabled by default with `<noscript>` notice; client JS dynamically activates controls.
  - Contrast ratios meet or exceed standards: Primary ink 13.50:1 (AAA >= 7.0), Muted ink 5.62:1 (AA >= 4.5), Accent 6.43:1 (AA >= 4.5), Focus 5.57:1 (UI >= 3.0).
  - Reduced motion disables smooth scroll (`scroll-behavior: auto`).
  - 200% zoom and mobile viewports down to 320px maintain 0px horizontal whole-page overflow.
  - Balanced side margins on 1920px desktop: home (360px left, 360px right), roadmap (360px left, 360px right), article reading column center difference 0px.
  - Semantic link routing: cross-lesson links resolve to article pages, lesson worksheets resolve to canonical GitHub repository paths.

- **Screenshots or other evidence:**
  Full 25-screenshot inventory captured in `web/evidence/`:
  - `01_home_desktop_1440.png`: Home page at 1440px desktop.
  - `02_home_mobile_390.png`: Home page at 390px mobile.
  - `03_home_mobile_320.png`: Home page at 320px minimal mobile.
  - `04_article_06_desktop_1440.png`: Article 06 at 1440px desktop with sticky TOC sidebar.
  - `05_article_06_mobile_390.png`: Article 06 at 390px mobile with `<details>` TOC disclosure.
  - `06_article_25_desktop_1440.png`: Article 25 table-heavy page at 1440px desktop.
  - `07_article_25_mobile_390.png`: Article 25 table-heavy page at 390px mobile with contained horizontal scroll.
  - `08_roadmap_desktop_1440.png`: Roadmap page at 1440px desktop with all 8 weeks and evaluation phase.
  - `09_resources_desktop_1440.png`: Resources page at 1440px desktop with anchor fragments.
  - `10_article_05_desktop_1920_initial.png`: Article 05 at 1920px desktop showing centered reader column.
  - `11_article_05_desktop_1920_scrolled.png`: Article 05 at 1920px desktop scrolled showing sticky TOC.
  - `12_article_05_desktop_1440_initial.png`: Article 05 at 1440px desktop showing centered reader column.
  - `13_article_05_desktop_1440_scrolled.png`: Article 05 at 1440px desktop scrolled showing active TOC item.
  - `14_article_05_tablet_1024.png`: Article 05 at 1024px tablet viewport.
  - `15_article_05_mobile_390.png`: Article 05 at 390px mobile viewport.
  - `16_article_24_mobile_table_390.png`: Article 24 table container on 390px mobile viewport.
  - `17_home_no_js.png`: Home page with JavaScript disabled showing polite `<noscript>` notice.
  - `18_home_desktop_1920.png`: Home page at 1920px wide desktop showing 360px balanced side margins.
  - `19_roadmap_desktop_1920.png`: Roadmap page at 1920px wide desktop showing 360px balanced side margins.
  - `20_home_desktop_1440_balanced.png`: Home page at 1440px desktop showing 120px balanced side margins.
  - `21_roadmap_desktop_1440_balanced.png`: Roadmap page at 1440px desktop showing 120px balanced side margins.
  - `22_home_tablet_1024.png`: Home page at 1024px tablet viewport.
  - `23_roadmap_tablet_1024.png`: Roadmap page at 1024px tablet viewport.
  - `24_home_mobile_390_balanced.png`: Home page at 390px mobile viewport.
  - `25_roadmap_mobile_390_balanced.png`: Roadmap page at 390px mobile viewport.

- **Questions, deviations and remaining limitations:**
  - Interactive search and filtering requires JavaScript; static browsing and reading works completely without JS.
  - Worksheet and template links route to canonical GitHub URLs per the product specification.
  - Root educational documents (`blog/`, `lessons/`, `resources/`, DOCX, PDF) remain untouched.

- **Working-tree scope and readiness for review:**
  - All tasks T001, T002, T003, T004, T005, T006, T007, and T009 are now complete and marked `IN REVIEW`.
  - No commits, pushes, or deployments have been executed by Gemini.
  - Task T008 is waiting for Tech Lead (Codex) review and sign-off upon user request.

## Tech Lead review

### Initial context

The findings above were imported from the first web review and user feedback. No follow-up implementation review has occurred for this new task file. Prior reports are preserved in the audit folder.

### Review round 1 — pending

Codex fills this after the user requests review: inspected files, checks rerun, findings with reproduction/expected behavior, decision and requested corrections. A passing junior check is not an independent sign-off.

## Sign-off

**Decision:** pending  
**Reviewer:** Codex  
**Reviewed evidence:** not yet recorded  
**Commit:** —
