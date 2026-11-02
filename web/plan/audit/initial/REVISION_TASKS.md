> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Gemini revision tasks — first Codex review

Read [REVIEW.md](REVIEW.md) for evidence, exact locations and reproduction steps. Fix the implementation; do not change the original requirements to reclassify failures as accepted behavior.

| Order | Finding | Deliverable | Completion evidence |
|---:|---|---|---|
| 1 | R3 — Preview path traversal | Contained static-file serving, safe errors and loopback default | Raw/encoded traversal denied; normal root/subpath assets still work |
| 2 | R1 — Mobile overflow | Contained table scrolling and responsive roadmap rows | Every page checked at planned widths; listed regressions fixed; mobile table visible in screenshot |
| 3 | R2 — Source fidelity | Source-derived resource/roadmap content, correct dates and preserved caveats | Entry-by-entry source parity; rebuild reflects source changes |
| 4 | R4 — Link destinations | Source-aware resolution and build-time unknown-target errors | Worksheet vs article test, fragment test and failing unknown-target test |
| 5 | R5 — Width tokens | Applied centered content cap across page types | Computed widths and wide-desktop screenshots |
| 6 | R6 — No-JS controls | Inactive enhancement controls hidden/disabled until usable | Browser no-JS test of control state and readable article links |
| 7 | R7 — Reader balance and typography | Apply [READABILITY.md](READABILITY.md): centered reading axis, smaller TOC, sans-serif body, tighter section rhythm | Article 05 screenshots at 1920/1440/1024/390 px; computed typography, alignment and mobile/table checks |
| 8 | Verification handoff | Corrected status/documentation and regression tests | Exact commands, honest coverage, selected screenshots and remaining limitations |

Complete all fixes, rerun checks and record results in STATUS.md. Keep REVIEW.md's Codex decision as **changes requested** until the user asks for a follow-up review. You may add clearly attributed implementation/retest notes, but not mark findings approved yourself.

Leave the working tree uncommitted and undeployed. Codex owns approval and the eventual approved commit.
