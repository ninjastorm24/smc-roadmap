# Junior Gemini workflow

Read [AGENTS.md](AGENTS.md), then [the workflow](plan/README.md) and **[the board](plan/BOARD.md)**.

1. Pick the next READY task and mark it IN PROGRESS in the task and board.
2. Read its linked plan and relevant specifications. Implement only its stated scope.
3. Run the required checks and append a Junior report round inside that task file, with actual results, file changes, evidence and deviations.
4. Mark the task IN REVIEW. The user will ask Codex to review; you do not need to connect to Codex.
5. For corrections, append the next junior-report round to the same task. Never overwrite earlier reports or mark your own work approved.

Leave all implementation changes uncommitted. Codex owns planning, design, review, sign-off and the approved commit. Do not push or deploy.

There is no separate live STATUS.md or REVIEW.md now. Current status lives in BOARD.md, and detailed reports/reviews live in the owning task. Previous documents are archived under plan/audit/initial for context only.
