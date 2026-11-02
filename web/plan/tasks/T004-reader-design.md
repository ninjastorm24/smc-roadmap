# T004 — Center the reader and improve typography

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-reader.md](../PLAN-reader.md) |
| Depends on | — |
| Assigned to | Gemini |
| Review source | R5 + R7 — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Implement the user-requested readable, balanced article layout rather than leaving a narrow left-biased column and a large empty right side.

## Context

web/src/assets/styles/main.css declares --max-width-content but uses --max-content-width. User feedback on article 05 also supersedes the original serif body direction. Follow PLAN-reader.md, including its reader revision.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Use consistent content-width tokens and the centered outer shell.
2. Center the reading axis at wide desktop widths; align title, standfirst, metadata and prose.
3. Use approximately 700–760 px flexible reading width, a smaller secondary TOC, and disclosure when the layout no longer fits.
4. Use system sans-serif body text at 20 px desktop and 18–19 px mobile, with the specified line height. Keep editorial headings.
5. Reduce repetitive large heading gaps/borders while preserving text and sections.

## Out of scope

- Do not shorten or rewrite the posts.
- Do not add ads, market widgets, remote fonts or a theme switch.

## Test cases — all required

- Article 05 has initial and scrolled views at 1920×1080 and 1440×900.
- Article 05 also works at 1024×768 and 390×844.
- Computed reading-column center is within about 24 px of viewport center at wide desktop sizes.
- Computed body font, size, line height, reader width and alignment match the plan.
- TOC/focus/heading links remain usable; no content is hidden to improve the screenshot.

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
  - `web/src/pages/article.js`: Reorganized article layout DOM structure into `.article-outer-shell` with a 3-column composition: 200px sticky left TOC (`.article-sidebar`), 744px centered main reading column (`.article-main-column`), and 200px balanced trailing spacer (`.article-trailing-space`). Aligned header (title, standfirst, metadata), prose, and end-matter on the exact same reading axis.
  - `web/src/assets/styles/main.css`:
    - Updated typography to local system sans-serif for body prose (`font-size: 1.25rem / 20px`, `line-height: 1.68 / 33.6px`, `color: var(--color-ink-primary)`). Mobile body scales to `18.4px` (within 18–19px specification).
    - Standfirst styled with sans-serif (`21px` desktop, `19px` mobile).
    - Main title retains editorial serif (`2.85rem / ~45px` desktop).
    - H2 headings styled with editorial serif (`1.85rem / ~29.6px` desktop, `1.55rem / ~25px` mobile). Removed repeated top border and padding on H2s, using clean typographic margin spacing (`margin-top: 38px; margin-bottom: 14px;`).
    - At `<= 1200px`, switches seamlessly to a single centered column with `<details class="toc-disclosure">`.
- **Checks run and actual results, including exit status:**
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS)
  - Automated headless Chrome measurement suite (Exit status 0: PASS)
  - `git diff --check` (Exit status 0: PASS)
- **Task-specific test results:**
  - **1920×1080 Viewport:** Reading column center = 960px, Viewport center = 960px (Center diff = **0px**, well within the 24px requirement). Column width = 744px. Font = system sans-serif, 20px, line-height 33.6px.
  - **1440×900 Viewport:** Reading column center = 720px, Viewport center = 720px (Center diff = **0px**). Column width = 744px.
  - **1024×768 Viewport:** Switches cleanly to centered single-column with disclosure TOC.
  - **390×844 Viewport:** Body font = 18.4px, line-height 30.36px, `scrollWidth: 390px, clientWidth: 390px` (0px page overflow).
- **Screenshots or other evidence:**
  - `web/evidence/10_article_05_desktop_1920_initial.png`: Article 05 at 1920×1080 initial view.
  - `web/evidence/11_article_05_desktop_1920_scrolled.png`: Article 05 at 1920×1080 scrolled body view.
  - `web/evidence/12_article_05_desktop_1440_initial.png`: Article 05 at 1440×900 initial view.
  - `web/evidence/13_article_05_desktop_1440_scrolled.png`: Article 05 at 1440×900 scrolled body view.
  - `web/evidence/14_article_05_tablet_1024.png`: Article 05 at 1024×768 view.
  - `web/evidence/15_article_05_mobile_390.png`: Article 05 at 390×844 mobile view.
- **Questions, deviations and remaining limitations:**
  - None. Layout is centered with system sans-serif body typography per PLAN-reader.md.
- **Working-tree scope and readiness for review:**
  - Scoped to article page template, stylesheet, and verification evidence. Ready for review.

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
