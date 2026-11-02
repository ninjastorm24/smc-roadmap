# T001 — Contain preview file serving

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-review-fixes.md](../PLAN-review-fixes.md) |
| Depends on | — |
| Assigned to | Gemini |
| Review source | R3 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Keep local preview serving inside web/dist/ and bind locally by default.

## Context

web/scripts/serve.js: request-path construction and listener. The prior raw request /../package.json returned HTTP 200 with web/package.json outside dist/.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Normalize/decode request paths safely and reject traversal outside the resolved output root, including applicable symlink escapes.
2. Serve valid root and /smc-roadmap/ paths and assets unchanged.
3. Handle malformed paths and error output safely; escape reflected request text.
4. Bind to loopback by default. Document any deliberate external-listening option.

## Out of scope

- Do not redesign the reader or edit educational content.
- Do not change hosting providers, publish the server or add a backend.

## Test cases — all required

- Raw and encoded traversal are denied, including /../package.json.
- An outside-target symlink does not bypass containment.
- A normal unknown path returns a safe 404.
- Home, a deep article, CSS and workbook downloads still work at root and subpath.

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
  - `web/scripts/serve.js`:
    - Bound server to loopback (`127.0.0.1`) by default (`HOST = process.env.HOST || '127.0.0.1'`).
    - Added safe URI component decoding (`decodeURIComponent`) with 400 Bad Request error handling for malformed URIs.
    - Path normalization and containment verification ensuring requested paths cannot resolve outside `realDistDir` (denying raw traversal like `/../package.json` and encoded traversal like `/%2e%2e/package.json`).
    - Added symlink resolution check (`fs.realpathSync`) returning 403 Forbidden if a symlink inside `dist/` points to a file outside the distribution root.
    - Added HTML escaping (`escapeHtml`) for all reflected path text in 400/403/404 error responses to prevent XSS.
    - Preserved root (`/`) and subpath (`/smc-roadmap/`) routing, MIME types, and streaming.
- **Checks run and actual results, including exit status:**
  - `npm run check:static` (Exit status 0: PASS)
  - Focused server containment test script (Exit status 0: PASS)
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - Raw traversal `/../package.json` denied (HTTP 404, never serves root/web files).
  - Encoded traversal `/%2e%2e/package.json` denied (HTTP 404).
  - Malformed URI `/invalid%99path` returned safe HTTP 400.
  - Unknown path with script tags returned safe HTTP 404 with escaped HTML entities (`&lt;script&gt;`).
  - Outside symlink target returned HTTP 403 Forbidden.
  - Root home (`/`), deep article (`/articles/05-advanced-market-structure/`), CSS (`/assets/styles/main.css`), and downloads (`/downloads/SMC_Learning_Workbook.pdf`) all return HTTP 200 at both root and `/smc-roadmap/` subpaths.
- **Screenshots or other evidence:**
  - Terminal reproduction output recorded in test run above.
- **Questions, deviations and remaining limitations:**
  - None. Server is contained within `dist/` and loopback bound.
- **Working-tree scope and readiness for review:**
  - Working tree scoped strictly to `web/scripts/serve.js`. Ready for review.

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
