# T002 — Generate resources from the actual source

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-website.md](../PLAN-website.md) |
| Depends on | — |
| Assigned to | Gemini |
| Review source | R2 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Preserve resource descriptions, metadata, exercises and source caveats when presenting them on the website.

## Context

web/src/pages/resources.js currently hardcodes content differing from resources/BLOG_POSTS.md and resources/README.md. Roadmap copy is also duplicated separately from its source.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Read approved Markdown content during the build instead of maintaining an independent educational copy.
2. Restore Fibonacci publication year 2016 and SMT year 2026, with the correct added/workbook classification.
3. Preserve the original exercises, seven-hour model context and documented QuantStart access limitation.
4. Validate displayed roadmap weeks, evidence goals and source-derived descriptions against the current eight-week source.

## Out of scope

- Do not edit root Markdown to make it match the current web implementation.
- Do not replace the curriculum or research new strategy claims.

## Test cases — all required

- Every displayed resource has matching source metadata and preserved relevant caveats.
- Changing a source description in a temporary copy and rebuilding changes the generated description.
- No rewritten exercises or invented author/date fields appear.
- Roadmap has eight correct sections, ordered lessons and separate later evaluation/paper phase.

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
  - `web/scripts/content.js`: Added `loadSourceResources()` to parse curated posts directly from `resources/BLOG_POSTS.md` and N01–N13 platform entries from `resources/README.md`. Added `loadSourceRoadmap()` to parse the 8 weekly sections, lessons, evidence targets, and move-on criteria directly from `SOLO_LEARNING_ROADMAP.md`.
  - `web/scripts/build.js`: Updated build process to invoke `loadSourceRoadmap()` and `loadSourceResources()` and supply the parsed data to the page generators.
  - `web/src/pages/resources.js`: Replaced hardcoded text with source-derived metadata, restoring original publication years (Fibonacci: 2016; SMT: 2026), added/workbook classifications, full original exercises, seven-hour model context, and QuantStart access notes.
  - `web/src/pages/roadmap.js`: Replaced hardcoded week arrays with source-derived roadmap data directly parsed from `SOLO_LEARNING_ROADMAP.md`.
- **Checks run and actual results, including exit status:**
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS)
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - Fibonacci year 2016 and SMT year 2026 confirmed in generated HTML.
  - QuantStart intermittent access limitation preserved.
  - Model three-step 7-hour profile context preserved.
  - Roadmap generates 8 week sections matching source titles and lesson orders, plus the post-week-8 evaluation/paper phase.
- **Screenshots or other evidence:**
  - HTML source string checks verified via Node.
- **Questions, deviations and remaining limitations:**
  - None. Content is derived dynamically from repository Markdown sources.
- **Working-tree scope and readiness for review:**
  - Scoped to content extraction and resource/roadmap generation. Ready for review.

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
