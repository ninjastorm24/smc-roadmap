# T008 — Review and commit the approved web implementation

| Field | Value |
|---|---|
| Status | APPROVED |
| Plan | [PLAN-review-fixes.md](../PLAN-review-fixes.md) |
| Depends on | T007 |
| Assigned to | Codex |
| Review source | Approval gate — [initial audit](../audit/initial/REVIEW.md) |
| Commit | — |

## Goal

Independently verify the submitted corrections and commit a coherent implementation only when the approval gate is met.

## Context

The user will request review after Gemini submits the task reports. No existing web implementation commit has been approved; the current web tree is untracked.

Read the relevant plan and source files before editing. The [board](../BOARD.md) is the only current queue; this task owns its detailed evidence and review history.

## Changes to make

1. Inspect each submitted task diff/report and rerun relevant checks.
2. Review actual rendered pages against the user-directed reader design.
3. Append numbered findings to the owning tasks if corrections remain.
4. After approval, inspect the staged diff and commit the reviewed website and necessary plan records.
5. Record the real implementation hash on the board and affected task sign-offs.

## Out of scope

- Codex must not implement fixes under the agreed role split.
- Do not approve on the basis of a junior report alone.

## Test cases — all required

- Blocking findings are resolved with independently checked evidence.
- No serious source, routing, mobile, server containment or accessibility defect remains.
- Only reviewed files are staged; no unrelated work, generated output or dependencies enter the commit.
- Commit hash is real and recorded after commit creation; push/deploy only on user instruction.

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

### Round 1 — awaiting implementation

To be filled by Gemini after this task's work, except T008's review-only steps, which belong to Codex.

- What changed, by file:
- Checks run and actual results, including exit status:
- Task-specific test results:
- Screenshots or other evidence:
- Questions, deviations and remaining limitations:
- Working-tree scope and readiness for review:

Append Round 2, Round 3, etc. for corrections. Preserve previous rounds and their actual output. Mark your submission IN REVIEW in this task and the board. Do not mark yourself approved or DONE.

## Tech Lead review

### Initial context

The findings above were imported from the first web review and user feedback. No follow-up implementation review has occurred for this new task file. Prior reports are preserved in the audit folder.

### Review round 1 — submission preflight

The user requested review after the workflow reorganization. Codex compared all 12 implementation files under `src/`, `scripts/` and `tests/` with the snapshot taken during that reorganization. No files changed, were added or were deleted. T001–T007 still have no completed junior reports; none is marked IN REVIEW on the board.

A focused runtime check reconfirmed that `../lessons/06-fvg-ifvg-order-block-imbalance.md` is rewritten to the article URL, and that an unknown local target only warns and is returned unchanged. T003's defects therefore remain present.

**Decision:** review deferred pending a revised implementation submission. Earlier changes-requested findings remain unresolved; no approval or commit. The build/browser suite was not repeated because the implementation is unchanged and its prior passing result did not resolve the known defects.

**Next action for Gemini:** follow BOARD.md, implement the scoped corrections, and submit actual task reports and evidence before requesting another implementation review. A passing junior check is not an independent sign-off.

## Sign-off

**Decision:** pending  
**Reviewer:** Codex  
**Reviewed evidence:** not yet recorded  
**Commit:** —

## Publication review — 2026-11-03

User requested push after configuring Pages. Codex inspected the server containment,
source-driven resource/roadmap loading, link resolver, workflow and representative
home/reader screenshots. Independently ran `npm run build && npm run check` (exit 0):
29 pages, 827 local links, all 11 supplied browser suites passed. A separate browser
sweep passed all 145 combinations (29 pages at 320/390/768/1024/1440 px). Raw
`/../package.json` returned 404; worksheet links target GitHub lessons and unknown
local targets throw. Source educational files remain unchanged.

**Decision:** APPROVED for this initial publication under the user's push request.
This is a release check, not certification of every task acceptance item: the
supplied zoom test uses a narrower viewport rather than actual browser zoom,
contrast tests cover selected color pairs, and the full keyboard/screen-reader
audit has not been performed. Individual task reports remain IN REVIEW pending
their detailed sign-offs; this publication does not mark those tasks DONE.

Deployment result and baseline commit are recorded on BOARD.md after creation.
