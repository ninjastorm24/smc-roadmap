# T010 — GitHub Pages deployment pipeline

| Field | Value |
|---|---|
| Status | APPROVED |
| Plan | [Deployment instructions](../../README.md#github-pages-deployment) |
| Depends on | T008 before first publication |
| Assigned to | Codex — direct user request |
| Commit | f2ae522 |

## Goal

Build and publish the static website at `https://ninjastorm24.github.io/smc-roadmap/`
using GitHub Actions on pushes to main or manual dispatch.

## Context and scope

The user explicitly requested Codex implement this pipeline. This is a scoped
exception to Gemini's implementation role. Add `.github/workflows/pages.yml`
and setup documentation; preserve website code and educational sources.
The first website baseline remains subject to T008 review before publication.

## Changes

- Separate build and deployment jobs, Node 24, lockfile-based npm installation.
- Build and static checks must pass before uploading only `web/dist`.
- Official Pages actions, main-only deployment, github-pages environment,
  scoped deployment permissions and serialized deployment runs.
- Document repository Pages setting, manual runs, live checks and rollback.

## Acceptance criteria

- [x] Local installation, build and static checks pass.
- [x] YAML parses and build/deploy dependency and artifact path are correct.
- [x] Generated local href/src targets stay under `/smc-roadmap/` and exist.
- [x] Build output and dependencies remain ignored.
- [ ] First GitHub Actions deployment succeeds and live URL is checked.

## Implementation report — Codex, 2026-11-03

Implemented directly at the user's request; no junior report is applicable.
`cd web && npm ci && npm run build && npm run check:static` exited 0 on
Node v24.11.0: 29 pages, 26 articles, 827 local href links, matching download
checksums. npm reported nine high-severity audit findings; no dependency
versions were changed by this task.

Python/PyYAML parsed the workflow. A separate URL-resolution check inspected
every generated HTML href/src under the project URL and verified each local
target exists without escaping the project prefix. `git check-ignore` confirmed
dist and node_modules are ignored. No browser suite was run for this pipeline.

## Tech Lead review

Pipeline scope approved locally. Hosted execution is unverified: no push,
Pages settings change or deployment was performed. This approval does not
approve the website implementation or close T008. Commit with the coherent
reviewed website baseline; a workflow-only push would lack its build inputs.

## Sign-off

**Decision:** APPROVED — pipeline configuration; first hosted run pending.  
**Reviewer:** Codex  
**Commit:** —

**Publication commit:** `f2ae522` — pushed to main on 2026-11-03.
