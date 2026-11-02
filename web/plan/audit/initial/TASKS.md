> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Gemini implementation tasks

Complete tasks in order. Continue through all tasks without asking Codex to approve each intermediate step. Update STATUS.md with actual results and documented deviations. Codex reviews only after the user says the implementation is ready.

## T01 — Inspect sources and establish the build

**Dependencies:** none. **State:** ready.

Read the plan, actual article and worksheet files, roadmap and resources. Establish the scoped HTML/CSS/JS project and Node tooling under `web/`. Choose and document the Markdown rendering/sanitization approach. Create a reproducible content model for all 26 posts and validate the fixed study sequence.

**Deliver:** package scripts/lockfile, local ignores, content extraction and a generated site skeleton. Demonstrate that a fresh build finds 26 unique lesson pairs and that source text edits are not required. Record any unsupported source syntax before proceeding.

**Completion evidence:** commands, Node version, content count, exact metadata/order validation and parser decisions in STATUS.md.

## T02 — Implement shared design and the library page

**Dependencies:** T01. **State:** pending.

Implement DESIGN.md tokens, navigation, footer, typography, home introduction, learning-path panel and ordered article list. Use real titles, standfirsts and metadata. Implement usable mobile layouts and current navigation treatment. Include a skip link, visible focus and semantically correct structure.

**Deliver:** the actual home page at desktop and mobile widths. No placeholder text, dummy article cards, invented author identity or decorative market statistics.

**Completion evidence:** home screenshots at 1440 px and 390 px, plus a 320 px overflow check and keyboard navigation notes.

## T03 — Implement article pages and content links

**Dependencies:** T01 and shared design from T02. **State:** pending.

Generate all 26 complete articles with responsive body typography, tables/code, heading navigation, source links, matching worksheet and previous/next navigation. Implement the link resolver in ARCHITECTURE.md. Copy the actual PDF/DOCX downloads. Direct article URLs must reload without a server fallback.

**Deliver:** every source article is readable and navigable. Keep private/undefined terminology notes and all learning-source context. Do not truncate paragraphs to fit a visual component.

**Completion evidence:** article/worksheet pairing report; all-page local-link validation; screenshots of article 06 and the table-heavy article 25 on desktop/mobile; a successful direct-load check for an article inside the static-hosting subpath.

## T04 — Implement filter state, roadmap and resources

**Dependencies:** T02 and T03. **State:** pending.

Add search, topic/week filtering, counts, no-match/reset states and URL/back behavior. Build the eight-week roadmap from the approved order and existing weekly evidence goals. Build the resources page with external readings, templates, references and workbook downloads.

**Deliver:** the journeys in BRIEF.md work, including returning to a filtered library. Resource/source links are meaningful and all required fragments resolve.

**Completion evidence:** reproducible tests for combined filtering, no-match/reset, URL restoration and browser back/forward; roadmap order report; successful PDF/DOCX download checks.

## T05 — Verify content, responsive behavior and accessibility

**Dependencies:** T01–T04. **State:** pending.

Run the acceptance checklist against the actual output. Use a browser for layout, keyboard and filter behavior. Automated checks should cover meaningful content/routing/state boundaries; do not replace a visual review with assertions that simply repeat implementation constants.

Check at 320, 390, 768, 1024 and 1440 px widths. Check reduced motion, JavaScript-disabled reading, long headings, tables, source-link destinations and the PDF/DOCX bytes. Fix defects in your implementation and rerun affected checks.

**Deliver:** an implementation meeting ACCEPTANCE.md with no known unresolved content loss, broken navigation, serious accessibility failure or mobile layout break.

**Completion evidence:** command outputs summarized in STATUS.md, specific manual checks, selected screenshots and honest limitations. If browser tooling is unavailable, record exactly what is unverified; do not mark those checks passed.

## T06 — Prepare the review handoff

**Dependencies:** T05. **State:** pending.

Update `web/README.md` with exact install/build/serve/check instructions, architecture notes and known limitations. Update STATUS.md task states, changed-file summary, design deviations, evidence paths and reviewer reproduction steps.

Leave REVIEW.md approval fields for Codex. Gemini can add an implementer note there, clearly attributed, but cannot approve the project. Do not change the accepted requirements to make an implementation failure appear compliant.

**Deliver:** a reviewable working tree and a concise message telling the user the implementation is ready for Codex review. Do not commit, push or deploy.

**Completion evidence:** final git status summary, final checks actually run and remaining issues, if any.

## After review — correction loop

If Codex requests changes, address the numbered findings, identify the files changed and rerun affected checks. Record the result in STATUS.md. The user then requests another review. Codex commits only after the review decision is approved.
