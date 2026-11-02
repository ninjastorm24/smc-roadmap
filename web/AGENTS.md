# Web project ownership and task workflow

These instructions apply to `web/` and descendants. Explicit user instructions take precedence.

## Roles

- Codex is the Tech Lead: plan, design, scope tasks, review, request corrections, approve and commit. Do not quietly implement website fixes during review.
- Gemini is the Junior: implement the selected task, verify it and append an honest report. Gemini must not approve, commit, push, deploy or change Git remotes.
- The user passes tasks between agents and requests Codex review. Do not launch, connect to or impersonate Gemini.

## Source of workflow truth

- Read `plan/README.md`, then `plan/BOARD.md`.
- BOARD.md owns the current queue, task statuses, dependencies and real commit hashes.
- Each `plan/tasks/TNNN-*.md` owns its detailed scope, test cases, acceptance progress, junior-report rounds, Tech Lead review rounds and sign-off.
- Linked `PLAN-*.md` files define intended behavior/design; `plan/specs/` contains supporting contracts.
- `plan/audit/initial/` is historical evidence, not an active instruction set or proof of completion. Do not revive old STATUS.md/REVIEW.md workflows.

## Working rules

- Work on one scoped task at a time; update the task and board consistently. Follow the board's implementation-dependency rules.
- Record scope questions, blockers and justified deviations in the current task. Ordinary implementation choices consistent with the plan belong to Gemini.
- Preserve previous report/review rounds. A junior's passing check is not Codex sign-off. Do not alter acceptance criteria to make a failure pass.
- Codex reviews only when the user asks, inspects actual files/evidence and runs appropriate checks. Leave blocked approvals as CHANGES REQUESTED with concrete findings.
- DONE requires approval and a real recorded commit. Follow BOARD.md's coherent first-baseline commit rule; later isolated tasks may have individual approved commits.

## Implementation boundary

Use HTML, CSS and vanilla JavaScript inside `web/`; Node tooling is permitted. Preserve the root DOCX/PDF, articles, lessons, templates and reference documents. Keep generated output, dependencies, browser caches, temporary files and credentials out of Git. Publishing remains a separate user-requested action.
