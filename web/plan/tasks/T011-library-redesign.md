# T011 — Redesign the article library

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [Article library design](../PLAN-library.md) |
| Depends on | — |
| Assigned to | Codex (user request) |
| Commit | — |

## Goal

Replace the heavy filter box and flat article rows from the user's screenshot with a refined editorial library, compact search controls and numbered lesson cards.

## Context

User requested a nicer design on 2026-11-03 and then explicitly instructed Codex to implement T011, overriding the usual implementer assignment for this task. Codex has inspected `src/pages/home.js` and the library styles in `src/assets/styles/main.css`. The design is scoped to that section; the existing project role split applies.

## Changes to make

1. Follow PLAN-library.md for the header, toolbar, result row, lesson cards and responsive behavior.
2. Modify the homepage renderer and library-scoped styles; inspect the existing filter script and preserve its contracts. Touch script only if markup relocation requires it.
3. Keep all article content, order, URLs and filtering data intact. Derive the displayed total from the supplied articles.
4. Capture desktop and mobile evidence showing the library header, filters and at least two cards.

## Out of scope

Hero, navigation, roadmap, reader, curriculum content, dependencies, publishing and unrelated pending task reviews.

## Test cases — all required

- At 1440, 1024, 768 and 390 px widths: balanced shell, no horizontal page overflow, readable complete titles and usable filters. Also check 320 px for overflow.
- All 26 articles appear in study order initially; lesson numbers remain their original numbers after filtering.
- Search by a known concept and lesson number; topic-only, week-only and combined filters return expected matches and accurate counts.
- Impossible query displays the empty state; both reset actions restore all articles and inputs.
- Keyboard navigation reaches every control and article link with visible focus. Labels stay associated and results remain announced.
- JavaScript disabled: all articles and working links remain available; controls and fallback note stay honest.
- Check reader and roadmap at desktop/mobile widths for accidental shared-style changes.

## Acceptance criteria

- [ ] Design matches PLAN-library.md at required widths.
- [ ] Existing content and filtering behavior are preserved.
- [ ] Required tests and evidence are reported with actual outcomes.
- [ ] Deviations and unverified checks are explicit.
- [ ] Codex approves following user-requested review.

## Checks to run

From `web/`: `npm run build`, `npm run check:static`, `npm run check:browser`. Run `git diff --check`. Record viewport checks, keyboard/no-JavaScript checks and screenshot paths. Do not claim checks that were not run.

## Junior report

### Round 1 — implemented by Codex at user request

- Files changed: homepage renderer adds the library introduction, dynamic total, search icon and numbered cards; scoped CSS implements the responsive design; client script derives the all-results count from actual items.
- Commands: `npm run build` and `npm run check` from web passed (exit 0); the latter includes static and browser suites. `git diff --check` passed.
- Browser suite passed responsive overflow checks at 1440, 1024, 768, 390 and 320 px, search by concept and lesson, topic/week/combined filters, empty-state reset, URL/history restoration, no-JavaScript baseline, reader and roadmap checks, contrast and reduced motion.
- Additional browser checks: screenshots at all five widths; no overflow; Week 2 retains numbers 05, 10, 14; reset button restores 26 cards; Tab from search reaches topic select with solid focus outline. Desktop and mobile screenshots visually inspected.
- Evidence: `web/evidence/t011-library-{1440,1024,768,390,320}.png`. Existing browser suite also refreshed `01_home_desktop_1440.png`.
- Limitations: no screen-reader session; no separate mobile roadmap screenshot in this task. No publication or commit performed.
- Ready for review. Independent approval remains pending.

## Tech Lead review

### Round 1 — pending

Implementation has not been reviewed. Record findings and decision when requested.

## Sign-off

**Decision:** pending  
**Reviewer:** Codex  
**Commit:** —
