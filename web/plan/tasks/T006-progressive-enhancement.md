# T006 — Make the no-JavaScript baseline honest

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-website.md](../PLAN-website.md) |
| Depends on | — |
| Assigned to | Gemini |
| Review source | R6 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Disable or hide enhancement-only filters until their behavior is initialized while retaining all readable articles.

## Context

web/src/pages/home.js and web/src/assets/scripts/main.js leave search and selects enabled when JavaScript is disabled. The notice exists, but controls accept input without changing results.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Render a noninteractive or hidden baseline for search/filter enhancement controls.
2. Enable usable controls only after successful initialization.
3. Preserve the fallback explanation, all 26 article links and standard navigation.
4. Keep filtering, reset, URL restoration and browser history correct after enhancement.

## Out of scope

- Do not require JavaScript to render article bodies.
- Do not add a client framework or network search service.

## Test cases — all required

- With JavaScript disabled, dead filter controls are not presented as usable and all 26 articles remain readable.
- With JavaScript enabled, search, combined filters, reset and no-match state work.
- Copied filtered URLs and browser back/forward restore controls and results.
- A failed enhancement does not remove article content.

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

### Round 1 — completed

- **What changed, by file:**
  - `web/src/pages/home.js`: Rendered search input and select elements with native `disabled` attributes by default. Moved the `<noscript>` notification inside `.filter-toolbar` so the honest progressive enhancement context is immediate.
  - `web/src/assets/scripts/main.js`: Dynamically removes the `disabled` attribute from `#search-input`, `#topic-select`, and `#week-select` only after client filtering initializes and precomputes the search index.
- **Checks run and actual results, including exit status:**
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS)
  - Headless Chrome test with JavaScript disabled vs enabled (Exit status 0: PASS)
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - With JavaScript disabled: filter controls are disabled (`searchDisabled: true`, `topicDisabled: true`, `weekDisabled: true`); all 26 articles remain visible and readable in study sequence; `<noscript>` message is displayed.
  - With JavaScript enabled: controls are enabled; search, combined filters, URL parameter restoration, reset button, and browser back/forward history work as expected.
- **Screenshots or other evidence:**
  - `web/evidence/17_home_no_js.png`: Home page with JavaScript disabled showing disabled controls and notice.
- **Questions, deviations and remaining limitations:**
  - None.
- **Working-tree scope and readiness for review:**
  - Scoped to home template, client JS initialization, and evidence capture. Ready for review.

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
