# Plan-based development workflow

Start with **[BOARD.md](BOARD.md)**. Pick the next READY task, read its linked plan, and keep the implementation report and review history inside that task file.

```text
plan/
  BOARD.md                    One current queue, dependencies, status and commits
  PLAN-website.md             Product scope and implementation contracts
  PLAN-reader.md              Visual design and the readability revision
  PLAN-review-fixes.md        Initial findings mapped to correction tasks
  TASK_TEMPLATE.md            Standard format for future tasks
  tasks/T001-...md             Scope → checks → junior report → review → sign-off
  specs/                      Detailed architecture, content map and acceptance reference
  mockups/                    Layout reference
  audit/initial/              Historical first-pass plans, reports and findings
```

## Who does what

**Codex — Tech Lead:** plans, designs, writes scoped tasks, reviews actual changes, requests corrections, signs off and commits approved work.

**Gemini — Junior:** follows the selected task, implements within its scope, runs checks, records actual results and submits it for review. Gemini does not approve, commit, push or deploy.

**User:** passes tasks to Gemini and tells Codex when to review. No direct connection between the agents is needed. The agreed role split remains in [web/AGENTS.md](../AGENTS.md).

## Daily workflow

1. Gemini opens the board and selects the next READY task. Mark it IN PROGRESS in both places.
2. Read the task's Goal, Context, Changes to make, Out of scope, Test cases and Acceptance criteria. Read the linked plan sections needed for that task.
3. Implement that scope, run the required checks and append a **Junior report — Round 1** to the same file. Record files changed, exact commands/results, evidence and deviations.
4. Mark it IN REVIEW. Continue another READY task if appropriate, or tell the user what is ready. Dependencies are explained on the board.
5. When the user asks, Codex inspects the changes and independently checks them. Record numbered findings and the review decision in that task's **Tech Lead review** section.
6. If changes are requested, Gemini appends the next junior-report round after fixing them. Codex appends the corresponding review round. Never erase earlier reports.
7. After approval and a real commit, Codex records the hash and changes the task to DONE. Follow the board's first-baseline commit rule for the currently untracked website.

## Copyable handoff to Gemini

> Read `web/GEMINI.md`, open `web/plan/BOARD.md`, and implement the next READY task. Follow that task's linked plan, scope and test cases. Append your junior report to that task file, update its status and the board, and leave the changes uncommitted for Codex review.

## Keeping the workflow clear

- BOARD.md is the only live project status summary.
- Each task is the only live home for its reports, findings, acceptance progress and sign-off.
- Plans describe intended behavior and design; they do not declare implementation completion.
- Specifications hold detailed contracts; only read relevant sections for the task.
- Historical audit records preserve previous claims and findings. They are not the current queue or proof of a fix.
- New work gets a new task ID and plan link. Do not keep adding unrelated corrections to a completed task.
- Blockers and scope questions go in the current task. Codex resolves design/scope questions; ordinary implementation details remain Gemini's responsibility.
- Checks pass only when executed successfully. Pending/unverified checks stay unchecked. No automatic approval after a fixed number of rounds.

## Current next step

Gemini starts with [T001 — Preview server containment](tasks/T001-preview-server.md). The remaining fixes and reader redesign already have focused task files. The user can request `review T001`, a set of submitted tasks, or the final implementation review.
