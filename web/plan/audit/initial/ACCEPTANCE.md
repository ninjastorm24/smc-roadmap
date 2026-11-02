> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Acceptance and review criteria

Use this as a verification checklist, not as a record that work has already passed. Record results and evidence in STATUS.md; Codex records the review decision separately.

## Content and source fidelity

- [ ] Exactly 26 original article pages exist, with unique canonical source stems and matching worksheets.
- [ ] Visible titles, standfirsts, class numbers and weeks match the actual source files.
- [ ] Every substantive source section, table, exercise, uncertainty note and citation survives rendering. Only duplicated page scaffolding is replaced.
- [ ] No article is a teaser leading only to raw Markdown; the full article is readable in HTML.
- [ ] Study ordering exactly matches CONTENT.md, including 05 → 10 → 14 and 23 → 18 → 21.
- [ ] First/last article boundaries do not create a misleading circular reading path.
- [ ] Each article has the correct worksheet destination; original root content and binaries have no implementation edits.
- [ ] Eight roadmap sections match the current roadmap's lessons and evidence goals; week 8 and later testing phases remain distinct.
- [ ] PDF and DOCX downloads match the corresponding original file bytes/checksums.

## Functional journeys

- [ ] Home initially lists all 26 entries in study order and the start action opens lesson 01.
- [ ] Search for `FVG` finds the corresponding gap topic and relevant metadata matches. Document the exact expected set from searchable fields.
- [ ] Search treats ordinary case/whitespace variations consistently; valid zero-padded and unpadded lesson searches are tested.
- [ ] Topic/week filters intersect correctly with the query and with one another.
- [ ] Week 2 shows only 05, 10 and 14, in that order.
- [ ] An impossible query shows a useful no-match message and a working clear action.
- [ ] Reset restores all 26 results and clears query/filter URL state.
- [ ] A copied filtered URL restores controls and results on direct load.
- [ ] Browser back/forward and returning from an article preserve the expected filter state.
- [ ] Article heading links, next/previous links, roadmap links and required resource fragments resolve.
- [ ] A deep article URL opens directly and reloads under both root and `/smc-roadmap/` static hosting.
- [ ] No visible navigation link points to an absent local page or an unrewritten `.md` route.
- [ ] All substantive reading and ordinary navigation work without JavaScript; filtering's absence is explained honestly.

## Visual and accessibility review

- [ ] Home, article and shared pages follow DESIGN.md rather than introducing a new visual direction.
- [ ] The user-requested [readability revision](READABILITY.md) is implemented: centered prose at 1440/1920 px, aligned article header/body, readable sans-serif body, bounded secondary TOC and reduced repetitive heading separators.
- [ ] Article 05 has initial-load and scrolled-body evidence at the specified desktop widths, plus tablet/mobile views. Actual computed typography and reading-column measurements are recorded.
- [ ] Inspect widths 320, 390, 768, 1024 and 1440 px. No horizontal page overflow, clipped text, overlapped controls or unreachable actions.
- [ ] A long title and article 25's tables remain readable on a phone. Only table containers scroll horizontally where necessary.
- [ ] Navigation and content order remain understandable at 200% zoom; text remains usable at enlarged settings.
- [ ] Keyboard can reach every control and link in a sensible order. Skip link, visible focus and active menu states work.
- [ ] Search has a visible label; filters have labels; result counts have an appropriate live announcement strategy.
- [ ] Heading hierarchy, landmarks, document language and unique heading IDs are correct.
- [ ] Mobile menu/disclosure, if used, has accurate expanded state, keyboard behavior and focus handling.
- [ ] Sticky elements do not cover focused controls, headings or source links.
- [ ] Text and meaningful control/focus contrast are measured against DESIGN.md requirements.
- [ ] Reduced motion is honored. There are no hover-only affordances or scroll-triggered text reveals.

## Build and delivery

- [ ] A fresh install and build work using documented commands; build output requires no credentials or external content fetches.
- [ ] Generated HTML contains article text and unique page titles/descriptions.
- [ ] Browser console is free of application errors; required local assets return successfully.
- [ ] Metadata is escaped and Markdown output is sanitized; unsafe script/event/URL content is covered by a focused check.
- [ ] All local output links are checked against actual generated files/fragments.
- [ ] Build/source validation fails for duplicate/missing lesson IDs and unknown local Markdown targets.
- [ ] Runtime uses HTML/CSS/vanilla JS; no app framework, CDN runtime parser or unnecessary production dependency appears.
- [ ] No generated site, dependencies, browser cache, credentials or temporary artifacts are staged.
- [ ] Selected evidence is reproducible and the final implementation limitations are explicit.
- [ ] Gemini left the implementation uncommitted and undeployed for Codex review.

## Severity and decision

Content loss, incorrect lesson mapping, broken core journeys, unusable phone layouts, executable unsafe content and serious accessibility barriers block approval. Cosmetic deviations can be recorded as minor only when they do not contradict the core design or harm use. An unavailable check is **unverified**, not passed.

Codex may approve only after inspecting the actual changes and relevant checks. If changes are required, record file-specific findings and expected behavior in REVIEW.md and return them to Gemini.
