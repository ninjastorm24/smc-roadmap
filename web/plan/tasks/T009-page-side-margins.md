# T009 — Center homepage and roadmap content

| Field | Value |
|---|---|
| Status | IN REVIEW |
| Plan | [PLAN-reader.md — Homepage and roadmap side margins](../PLAN-reader.md#homepage-and-roadmap-side-margins) |
| Depends on | — |
| Assigned to | Gemini |
| Commit | — |

## Goal

Give the homepage and roadmap balanced desktop side margins instead of stretching their content nearly edge to edge, as requested in the user's screenshots.

## Context

This is a new user layout request after T004's first reader report. Keep that report intact. Coordinate shared CSS changes with the other layout tasks; complete one task at a time. Final verification T007 includes this task.

## Changes to make

1. Apply a shared centered shell with a 1200 px maximum outer width, including internal padding.
2. Align navigation, homepage hero content/panel, library controls/list, roadmap sections and footer content with that shell.
3. Keep the hero background full width while its contents remain within the shell.
4. Preserve flexible tablet sizing and 16–20 px phone gutters. Keep the separate article-reader geometry intact.

## Out of scope

- No educational-content changes or new features.
- Do not narrow the entire homepage to the article reading width.
- Do not constrain page backgrounds to the content shell or retain desktop margins on phones.

## Test cases — all required

- Home and roadmap at 1920 px: outer shell at most 1200 px, centered with balanced margins (about 360 px each for a 1920 px page viewport).
- Both pages at 1440 px: about 120 px outside each shell edge when the shell reaches its maximum.
- Both pages at 1024 and 390 px: responsive content with usable gutters and no page overflow.
- Hero panel, filters, week sections and footer align with their shared shell.
- Recheck article 05 so shared styling does not regress the approved design requirements pending review.

## Acceptance criteria

- [ ] All layout cases pass with measured geometry.
- [ ] Home and roadmap screenshots exist at 1920×1080, 1440×900, 1024×768 and 390×844.
- [ ] Relevant responsive and navigation checks still pass.
- [ ] Report includes files, commands/results and any deviations.
- [ ] Codex records approval before DONE/commit.

## Checks to run

From `web/`: `npm run build`, `npm run check:static`, `npm run check:browser`, plus the page-specific viewport measurements and screenshots above. Run `git diff --check` and report actual results.

## Junior report

### Round 1 — completed

- **Files changed:**
  - `web/src/assets/styles/main.css`: Fixed token declaration and usage by declaring `--max-width-content: 1200px;` and `--max-content-width: 1200px;` and ensuring all outer content shells (`.site-header-inner`, `.hero-inner`, `.library-section`, `.roadmap-container`, `.resources-container`, `.site-footer-inner`, `.article-outer-shell`) use `max-width: var(--max-width-content); margin: 0 auto;`.
- **Commands and actual results:**
  - `npm run build` (Exit status 0: PASS)
  - `npm run check:static` (Exit status 0: PASS)
  - `npm run check:browser` (Exit status 0: PASS)
  - Focused layout measurement script across 1920, 1440, 1024, and 390 px viewports (Exit status 0: PASS)
  - `git diff --check` (Exit status 0: PASS)
- **Measured shell widths and side margins:**
  - **1920×1080 Viewport:**
    - Home `.hero-inner`: width = 1200px, left margin = 360px, right margin = 360px (margin diff = 0px).
    - Roadmap `.roadmap-container`: width = 1200px, left margin = 360px, right margin = 360px (margin diff = 0px).
  - **1440×900 Viewport:**
    - Home `.hero-inner`: width = 1200px, left margin = 120px, right margin = 120px (margin diff = 0px).
    - Roadmap `.roadmap-container`: width = 1200px, left margin = 120px, right margin = 120px (margin diff = 0px).
  - **1024×768 & 390×844 Viewports:**
    - Responsive content with 0px horizontal page overflow (`scrollWidth === clientWidth`).
  - **Article 05 recheck:**
    - Main reading column center at 1920px = 960px, viewport center = 960px (difference = 0px).
- **Screenshot paths:**
  - `web/evidence/18_home_desktop_1920.png`
  - `web/evidence/19_roadmap_desktop_1920.png`
  - `web/evidence/20_home_desktop_1440_balanced.png`
  - `web/evidence/21_roadmap_desktop_1440_balanced.png`
  - `web/evidence/22_home_tablet_1024.png`
  - `web/evidence/23_roadmap_tablet_1024.png`
  - `web/evidence/24_home_mobile_390_balanced.png`
  - `web/evidence/25_roadmap_mobile_390_balanced.png`
- **Remaining issues/deviations:**
  - None. Both pages have balanced desktop margins and responsive mobile gutters.

## Tech Lead review

### Round 1 — pending

Codex records inspected changes, independent checks, findings and decision when the user requests review.

## Sign-off

**Decision:** pending  
**Reviewer:** Codex  
**Commit:** —
