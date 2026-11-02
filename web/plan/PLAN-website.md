# PLAN — Reading website

## Purpose and reader

The reader is learning market structure, liquidity and SMC/ICT-style concepts independently. They need an orderly learning path, comfortable articles and direct access to practical worksheets. The website should feel like a thoughtful study publication.

The existing repository already supplies 26 original posts, 26 lesson sheets, an eight-week sequence, references, templates and a workbook PDF. The site presents that material; it does not create trading signals or claim verified trading returns.

## Version 1 scope

| Page | Reader's main action | Required content |
|---|---|---|
| Library home | Find an article or start at lesson 01 | Introduction, start link, search, topic/week filters, all 26 entries |
| Article | Read, practice and continue | Full original article, heading navigation, worksheet link, sources, previous/next in study order |
| Roadmap | Understand the eight-week path | Week summaries, correctly ordered lesson links, evidence goals, pacing and link to full Markdown |
| Resources | Find learning and practice materials | Curated external articles, templates/reference links, PDF and DOCX downloads |

Each article has its own generated HTML URL. Twenty-six article pages plus the three main pages are required. Do not use a modal as the primary reader.

## Navigation and language

Header: **SMC Roadmap** wordmark, **Articles**, **Roadmap**, **Resources**, and **Get workbook**. The wordmark goes to the library home. The workbook action clearly identifies a PDF download.

Home introduction:

- Eyebrow: `AN INDEPENDENT STUDY SERIES`
- Heading: `Learn the concepts. Build your process.`
- Description: `26 practical articles on market structure, liquidity and SMC concepts, arranged into an eight-week learning path.`
- Primary action: `Start with lesson 01`
- Secondary action: `See the roadmap`
- Supporting facts: `26 lessons` · `8 study weeks` · `Examples + practice`

Use factual labels such as `Lesson 06`, `Week 3`, `3 min read` and `Open worksheet (Markdown)`. Preserve original article titles. No invented authors, publication dates, testimonials, subscriber counts, profit statistics or live market data.

## Core reader journeys

1. A new learner opens home, starts lesson 01 and follows the next-article links in workbook study order.
2. A returning learner searches for `FVG`, narrows to a week or topic, opens an article and returns to their filtered results.
3. A learner opens week 4 on the roadmap and visits its lessons in order: 07, 08, 09, 11.
4. A reader completes an article, opens the matching worksheet or template and follows a cited learning source.
5. A phone user can browse, filter, read a table and navigate headings without horizontal page overflow or a hover-only action.

## Boundaries

Use HTML, CSS and vanilla JavaScript. Local Node tooling may compile Markdown into static HTML. A backend, account system, CMS, newsletter form, comments, analytics, payments, dashboard, dark mode and saved-progress system are outside version 1.

Do not publish during implementation. The output must be ready for static hosting, including hosting under a repository subpath, but this assignment ends at reviewed local files and an approved commit.

## Completion

All 26 posts are available in accessible static pages; navigation preserves workbook order; filters work; sources resolve correctly; the supplied design works at mobile and desktop widths; and the acceptance evidence can be reproduced by Codex.

## Implementation contracts

Read only the contract relevant to the current task:

- [Architecture](specs/ARCHITECTURE.md): stack, generated output, source-aware links and progressive enhancement.
- [Content map](specs/CONTENT.md): all 26 article IDs, weeks, topics, aliases and study order.
- [Acceptance reference](specs/ACCEPTANCE.md): whole-site acceptance coverage, used by the final verification task.
- [Reader and visual design](PLAN-reader.md): current design direction, including user-requested readability changes.

## Ownership and task boundary

The [board](BOARD.md) owns current status. Task files own scope, junior reports, review findings and sign-off. This plan contains intended behavior, not implementation completion claims.
