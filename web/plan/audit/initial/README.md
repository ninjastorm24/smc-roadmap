> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Website plan and orchestration

**Project:** SMC Roadmap reading website  
**Implementation owner:** junior Gemini agent  
**Planner and reviewer:** Codex  
**Status:** ready for Gemini implementation; review has not started

Build a readable, responsive home for the existing 26 posts. Help a learner find a topic, follow the workbook's order and move from an article to its worksheet and sources.

## Read in this order

| Document | Purpose |
|---|---|
| [BRIEF.md](BRIEF.md) | Audience, scope, pages and intended behavior |
| [DESIGN.md](DESIGN.md) | Visual direction, layouts, typography and interaction states |
| [READABILITY.md](READABILITY.md) | User-requested article layout and typography revision; supersedes the original body-font direction |
| [ARCHITECTURE.md](ARCHITECTURE.md) | HTML/CSS/JS approach, static content generation, routing and links |
| [CONTENT.md](CONTENT.md) | Source rules, all 26 articles and the content contract |
| [TASKS.md](TASKS.md) | Ordered implementation work and completion evidence |
| [ACCEPTANCE.md](ACCEPTANCE.md) | Required functional, visual and content checks |
| [GEMINI_HANDOFF.md](GEMINI_HANDOFF.md) | Instructions the user can give Gemini directly |
| [STATUS.md](STATUS.md) | Implementation progress, deviations and handoff summary |
| [REVIEW.md](REVIEW.md) | Codex review record and approval decision |

## Workflow

1. Codex supplies this plan and design.
2. The user gives Gemini the handoff file.
3. Gemini completes T01–T06, verifies the result and leaves a reviewable working tree.
4. The user tells Codex that the work is ready.
5. Codex inspects the implementation and evidence, runs the relevant checks and records review findings.
6. Gemini fixes any requested changes. Codex reviews those changes.
7. Codex commits the approved implementation. Pushing or deploying follows a user request.

There is no website implementation in this planning package. Task states and approval fields deliberately remain pending until work is actually performed.
