> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Task for the junior Gemini agent

Implement the SMC Roadmap reading website in this repository using HTML, CSS and vanilla JavaScript. Codex has planned and designed it; you own the implementation and verification.

The user will tell Codex when your work is ready for review. You do not need to connect to Codex or wait for approval after each implementation task.

## Start

Work in the existing `smc-roadmap` repository. Read `web/AGENTS.md`, `web/GEMINI.md` and `web/plan/README.md`. Then read the brief, design, architecture, content map, tasks and acceptance checklist linked there.

Use the actual 26 posts in `blog/` and matching sheets in `lessons/`. Preserve the existing DOCX/PDF, articles and worksheets. The active roadmap is the eight-week plan; the 24-week document is archived history.

## Build

Complete T01–T06 in `web/plan/TASKS.md`:

1. Establish a small static build and validated content model.
2. Implement the specified warm-paper editorial design and responsive library.
3. Generate all article pages, accessible heading navigation, source links and workbook downloads.
4. Implement working search/week/topic filters, URL state, roadmap and resources pages.
5. Run meaningful content, link, browser, accessibility and layout checks; fix defects.
6. Document exact reproduction commands and prepare the review handoff.

All implementation belongs in `web/`. A Node build process is permitted; an application framework or backend is not part of the plan. Readable articles must be generated into HTML and work without client-side content fetching. Respect static hosting under `/smc-roadmap/` and the exact workbook learning order.

The design is specified in `web/plan/DESIGN.md`. Use real article content. Do not substitute a dashboard, invent an author identity or trading-performance statistics, add signup flows or introduce a different visual direction.

## Decisions and progress

Use your judgment for normal implementation details consistent with the plan. Record dependencies, implementation choices and actual task progress in `web/plan/STATUS.md`. If a requirement is genuinely blocked or conflicts with another requirement, explain the issue and a concrete proposed resolution there. Continue independent work where possible.

Do not edit acceptance criteria to make a failing feature count as complete. Keep unavailable checks marked unverified. Codex's approval decision in REVIEW.md must remain pending.

## Finish

Leave the result uncommitted. Do not push, deploy, change remotes or modify the root educational content. Your final message must include:

- What was implemented and which task IDs are complete.
- Exact commands and local URL to reproduce it.
- Checks actually run and their outcomes.
- Screenshot/evidence locations.
- Known limitations, unresolved defects or deviations.
- Confirmation that the work is ready for the user's requested Codex review.

If Codex later requests corrections, address each numbered finding and provide evidence of the fix. Codex owns final approval and the approved commit.
