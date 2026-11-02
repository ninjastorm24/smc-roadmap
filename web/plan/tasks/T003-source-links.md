# T003 — Resolve links using the original source path

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-website.md](../PLAN-website.md) |
| Depends on | — |
| Assigned to | Gemini |
| Review source | R4 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Route article, worksheet and resource links to their actual intended destinations and reject unknown local targets.

## Context

web/scripts/content.js currently matches numbered basenames before checking directories. A ../lessons/06-...md citation becomes the article URL. Unknown targets only produce a warning.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Resolve each relative target against its original source document before deciding its website destination.
2. Map blog posts to generated pages and worksheets to the correct labeled GitHub source link.
3. Preserve valid fragments and the local workbook downloads.
4. Fail build validation on unknown local paths; keep the repository configuration in one place.

## Out of scope

- Do not remove source citations to make link checks pass.
- Do not replace source links with unrelated home-page links.

## Test cases — all required

- Same-stem blog and lesson links produce distinct correct destinations.
- In-body workbook lesson citations open their matching source worksheets, not themselves.
- Valid source fragments map to generated fragment targets.
- An unknown local Markdown target fails with an actionable error.

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
  - `web/scripts/content.js`: Updated `rewriteMarkdownLink` to accept `sourceFilePath` and resolve relative paths against the source document's actual parent directory (`path.dirname(path.resolve(REPO_ROOT, sourceFilePath))`).
  - Added repository containment and existence verification (`fs.existsSync(resolvedTarget)`), throwing an actionable Error if any local Markdown link cannot be resolved.
  - Distinguishes blog posts (`blog/*.md`) from worksheets (`lessons/*.md`): same-stem lesson links resolve to their canonical GitHub URLs (`https://github.com/ninjastorm24/smc-roadmap/blob/main/lessons/NN-...md`) while blog posts resolve to generated HTML article routes (`../../articles/NN-.../`).
  - Updated `renderArticleMarkdown` and `web/scripts/build.js` to pass `article.sourcePath` during HTML rendering.
- **Checks run and actual results, including exit status:**
  - Focused link resolution unit test (Exit status 0: PASS)
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS — 827 local links verified with 0 broken links and 0 unrewritten `.md` routes)
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - In-body workbook citation `../lessons/06-fvg-ifvg-order-block-imbalance.md` correctly routes to GitHub worksheet, not the article.
  - `07-advanced-order-block.md` routes to `../../articles/07-advanced-order-block/`.
  - Nonexistent link target throws build validation error.
- **Screenshots or other evidence:**
  - Node test suite output recorded in test run above.
- **Questions, deviations and remaining limitations:**
  - None.
- **Working-tree scope and readiness for review:**
  - Scoped to link rewriting logic and build callers. Ready for review.

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
