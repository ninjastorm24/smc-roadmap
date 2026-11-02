# PLAN — First-review corrections

The first implementation builds and its supplied checks pass, but Codex did not approve it. The user also requested a more readable article layout. The initial evidence remains in [the audit record](audit/initial/REVIEW.md); it is historical and must not be mistaken for a current retest.

| Finding | Problem | Owning task |
|---|---|---|
| R3 | Preview requests can escape dist/ | [T001](tasks/T001-preview-server.md) |
| R2 | Resource dates, descriptions, exercises and caveats drift from source | [T002](tasks/T002-source-content.md) |
| R4 | Worksheet citations route to article; unknown links only warn | [T003](tasks/T003-source-links.md) |
| R5 + R7 | Missing outer width cap; left-biased reader; difficult typography | [T004](tasks/T004-reader-design.md) |
| R1 | Table-heavy articles and roadmap overflow mobile widths | [T005](tasks/T005-responsive-layout.md) |
| R6 | No-JS search/filter controls remain enabled but do nothing | [T006](tasks/T006-progressive-enhancement.md) |
| Verification gap | Existing checks miss the observed defects and handoff overclaims coverage | [T007](tasks/T007-verification.md) |
| Approval gate | Final implementation must be inspected and approved before commit | [T008](tasks/T008-review-signoff.md) |

Current status belongs only in [BOARD.md](BOARD.md). Append new report/review rounds in each task file; do not overwrite earlier evidence. New scope receives a new task ID after Codex plans it.

The initial first-pass review recorded 14 mobile page/width overflow combinations. Its complete table and the original reproduction evidence are preserved in the audit record. Reproduce against the current code before claiming a fix.
