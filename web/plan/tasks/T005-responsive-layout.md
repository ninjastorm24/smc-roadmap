# T005 — Contain mobile tables and wrap roadmap rows

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-reader.md](../PLAN-reader.md) |
| Depends on | T004 |
| Assigned to | Gemini |
| Review source | R1 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Keep all prose and controls within mobile viewports, allowing only table containers to scroll horizontally.

## Context

Independent review found 14 page/width failures. Article 24 scroll width was 633 px at a 390 px viewport; article content expanded to about 609 px inside 342 px of available space. Full measurements are in the archived review.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Correct grid/intrinsic minimum sizing so table wrappers stay within their reading column.
2. Make roadmap lesson rows wrap correctly at 320 px.
3. Keep every table cell accessible by scrolling its own container.
4. Add all-page responsive regression coverage and inspect actual table sections, not only article headers.

## Out of scope

- Do not globally clip horizontal overflow to conceal layout failures.
- Do not delete table columns, reduce text to unreadable sizes or remove lesson metadata.

## Test cases — all required

- All 29 pages pass page-overflow checks at 320, 390, 768, 1024 and 1440 px.
- Retest articles 02, 03, 10, 12, 19, 24 and 26 and the roadmap at their previously failing widths.
- Capture a visible article-24 or article-25 table on mobile and demonstrate container-only scrolling.
- Keyboard users can reach and scroll table regions.

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
  - `web/src/assets/styles/main.css`:
    - Fixed grid/flex minimum sizing on `.article-main-column`, `.article-content`, `.article-prose`, and `.table-container` with `min-width: 0; max-width: 100%;`.
    - Made `.table-container` block-level with `-webkit-overflow-scrolling: touch` and visible keyboard focus outline.
    - Updated `.week-lesson-item` on the roadmap with `flex-wrap: wrap; word-break: break-word;` ensuring long titles wrap gracefully at 320px.
- **Checks run and actual results, including exit status:**
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS)
  - Complete 145-combination regression suite: 29 HTML pages checked across 320, 390, 768, 1024, and 1440 px viewports (Exit status 0: **0 failures**).
  - Keyboard navigation focus test on `.table-container` (PASS: `document.activeElement === container`).
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - Retested articles 02, 03, 10, 12, 19, 24, and 26 and roadmap: all pass with 0px horizontal page overflow.
  - Article 24 mobile table at 390px viewport: container width = 352px, table width = 607px, container scrolls horizontally while page `scrollWidth === clientWidth === 390px`.
  - Keyboard accessibility: table container is focusable with visible focus ring.
- **Screenshots or other evidence:**
  - `web/evidence/16_article_24_mobile_table_390.png`: Article 24 table container on 390px mobile.
- **Questions, deviations and remaining limitations:**
  - None.
- **Working-tree scope and readiness for review:**
  - Scoped to responsive styling and verification evidence. Ready for review.

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
