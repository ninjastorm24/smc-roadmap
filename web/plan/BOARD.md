# Work board

Current queue for the web project. Detailed scope, reports, review rounds and sign-off belong in the linked task files. [Workflow](README.md) · [Task template](TASK_TEMPLATE.md)

**Implemented, awaiting review: [T011 — Redesign the article library](tasks/T011-library-redesign.md).**

| ID | Task | Plan | Depends on | Owner | Status | Commit |
|---|---|---|---|---|---|---|
| T001 | [Contain preview file serving](tasks/T001-preview-server.md) | [review-fixes](PLAN-review-fixes.md) | — | Gemini | IN REVIEW | — |
| T002 | [Generate resources from the actual source](tasks/T002-source-content.md) | [website](PLAN-website.md) | — | Gemini | IN REVIEW | — |
| T003 | [Resolve links using the original source path](tasks/T003-source-links.md) | [website](PLAN-website.md) | — | Gemini | IN REVIEW | — |
| T004 | [Center the reader and improve typography](tasks/T004-reader-design.md) | [reader](PLAN-reader.md) | — | Gemini | IN REVIEW | — |
| T005 | [Contain mobile tables and wrap roadmap rows](tasks/T005-responsive-layout.md) | [reader](PLAN-reader.md) | T004 | Gemini | IN REVIEW | — |
| T006 | [Make the no-JavaScript baseline honest](tasks/T006-progressive-enhancement.md) | [website](PLAN-website.md) | — | Gemini | IN REVIEW | — |
| T007 | [Run the complete acceptance checks and report evidence](tasks/T007-verification.md) | [review-fixes](PLAN-review-fixes.md) | T001, T002, T003, T004, T005, T006, T009 | Gemini | IN REVIEW | — |
| T009 | [Center homepage and roadmap content](tasks/T009-page-side-margins.md) | [reader](PLAN-reader.md) | — | Gemini | IN REVIEW | — |
| T008 | [Review and commit the approved web implementation](tasks/T008-review-signoff.md) | [review-fixes](PLAN-review-fixes.md) | T007 | Codex | APPROVED | f2ae522 |
| T010 | [GitHub Pages deployment pipeline](tasks/T010-pages-pipeline.md) | [deployment](../README.md#github-pages-deployment) | T008 before publication | Codex (user request) | APPROVED | f2ae522 |

| T011 | [Redesign the article library](tasks/T011-library-redesign.md) | [library](PLAN-library.md) | — | Codex (user request) | IN REVIEW | — |

## Board rules

- READY: scoped and available. IN PROGRESS: Gemini is actively working. IN REVIEW: a report and reviewable diff are submitted. CHANGES REQUESTED: Codex has recorded corrections. APPROVED: reviewed but not yet committed. DONE: approved and included in the recorded real commit. WAITING: prerequisite work or a user-requested review is pending. BLOCKED: a concrete external obstacle is recorded in the task.
- Work on one task at a time. After submitting a task, Gemini may move to another READY task. An implementation dependency permits work after its prerequisite is submitted with passing relevant checks; it does not imply approval. T008 requires the user to request Codex review.
- Every task status change must update both its metadata table and this board. Reports and decisions are not duplicated into another live status document.
- Only Codex approves and records commits. Never invent a hash or mark DONE because files exist.
- This first web implementation is still untracked. Avoid creating broken partial baseline commits: T008 commits the coherent reviewed website after the fixes pass. Its hash can appear on all tasks included in that commit. Future isolated tasks can use individual approved commits.

## Current facts

User layout clarification: T009 covers balanced side margins for the homepage and roadmap, using the shared 1200 px centered shell specified in PLAN-reader.md. T004's submitted reader report is preserved; this new request has its own task and is required before final verification.

The initial build and supplied checks passed, but review found R1–R6 and user feedback added R7. None is approved as fixed. These tasks reorganize that existing work; they do not claim new implementation or retests.

Old phase IDs T01–T06 refer to the initial implementer handoff. New IDs T001–T008 refer to this task board; the IDs are distinct. The original records are in [audit/initial](audit/initial/README.md).

## Latest review preflight

Codex checked the user's new review request: all 12 implementation files under `src/`, `scripts/` and `tests/` match the previous snapshot, and no completed junior reports are present. A focused check reconfirmed T003's incorrect worksheet routing and non-failing unknown-target behavior. Review is deferred until corrected work is submitted. No approval or commit was recorded; current task states remain unchanged. Details are in [T008](tasks/T008-review-signoff.md).

## Initial publication

2026-11-03: User requested push. T008 records independent release checks and
explicit remaining verification limits. Individual fix-task statuses are preserved;
publication approval does not assert completion of their entire acceptance lists.

Website and pipeline committed and pushed as `f2ae522`. First deployment run:
https://github.com/ninjastorm24/smc-roadmap/actions/runs/41499863313

## Current changes publication — 2026-11-03

User explicitly requested push and deployment of all current changes. Codex inspected
the current diff and reran `npm run build`, `npm run check` and `git diff --check`;
all passed. The release includes T011, the development server, 26 Bangla
translations with the article language toggle, and video resource links.
Browser verification includes responsive layouts, filtering, no-JavaScript
baseline and the Bangla toggle. Translation fidelity and external video content
were not independently audited. Publication approval does not close earlier
task acceptance lists or assert those additional audits. GitHub Pages deployment
is triggered by the publication commit on main.

## Knowledge checks publication — 2026-11-03

User requested commit, push and deployment of all current changes. Codex inspected
the quiz data model, rendering, progress persistence, styling and test changes.
`npm run build`, `npm run check` (static checks and all 13 browser suites), and
`git diff --check` passed. Approved for publication: bilingual knowledge checks
for all 26 lessons, completion checklists, saved answers and progress badges.
Quiz content and translation fidelity were not exhaustively audited. Earlier
task statuses remain unchanged. The publication commit triggers GitHub Pages.
