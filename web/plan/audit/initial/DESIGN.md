> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Design specification

## Visual direction

Create an editorial learning library: warm paper, dark ink, restrained teal, clear borders and generous reading space. Use typography and alignment to establish hierarchy. Avoid trading-terminal styling, decorative price charts and a wall of identical rounded cards.

The home page has a prominent introduction, a compact learning-path panel and an article list with enough detail to choose a reading. The article body is the main visual element on a reading page.

## Design tokens

These are target values, subject to measured contrast verification during implementation. If a pair fails, adjust it minimally and record the replacement in STATUS.md.

| Token | Target | Use |
|---|---|---|
| Page | `#F7F5EF` | Warm background |
| Surface | `#FFFFFF` | Reading panels, inputs |
| Primary ink | `#182B30` | Titles and body |
| Muted ink | `#52656A` | Supporting copy and metadata |
| Accent | `#12645A` | Links and primary actions |
| Soft accent | `#E5EFEA` | Topic labels and path panel |
| Divider | `#D8DEDA` | Decorative separators |
| Control border | `#71817C` | Visible input boundaries |
| Focus | `#9B4D0B` | Distinct keyboard focus ring |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64, 96 px | Shared spacing scale |
| Radius | 4–8 px | Restrained control and panel corners |
| Content width | 1200 px maximum | Header and library layout |
| Reading width | 68–72 characters maximum | Article prose |

Use a local system sans-serif stack for navigation, controls, metadata and article body text. Keep Georgia or an equivalent locally available serif for the home headline and article titles/headings. Do not add a network font dependency. Use tabular numbers for lesson/week metadata where available.

Desktop scale: home heading 52–64 px; article title 40–48 px; article body 20 px with 1.65–1.7 line height; controls 16 px minimum; metadata 14–15 px. Mobile headings scale to 32–38 px and article body remains 18–19 px. Avoid fixed-height text containers. These reader values supersede the earlier serif body direction following the user's screenshot feedback; implement the detailed [readability revision](READABILITY.md).

## Library home layout

Desktop wireframe:

```text
+------------------------------------------------------------------+
| SMC Roadmap              Articles  Roadmap  Resources  Get workbook |
+------------------------------------------------------------------+
| AN INDEPENDENT STUDY SERIES               | THE LEARNING PATH       |
| Learn the concepts.                      | 01  Foundations         |
| Build your process.                      | 02  Structure + zones   |
| Description                              | 03  Bias + models       |
| [Start with lesson 01]  See the roadmap   | 04  Practice + review   |
| 26 lessons / 8 study weeks / practice     | Open eight-week plan -> |
+------------------------------------------------------------------+
| THE ARTICLE LIBRARY                                               |
| Search topics...                [All topics v]  [All weeks v]       |
| Showing 26 articles                                  Reset filters |
+--------------------------------------------------+---------------+
| 01 / WEEK 1   Article title                       | About 3 min   |
| Topic label   One-sentence description            | Read article  |
|--------------------------------------------------+---------------|
| 02 / WEEK 1   Article title                       | About 3 min   |
| Topic label   One-sentence description            | Read article  |
| ...                                                               |
+------------------------------------------------------------------+
| Educational series / workbook / source repository                  |
+------------------------------------------------------------------+
```

The path panel's four groups are an overview, not a replacement for the eight actual study weeks. Link it to the roadmap. Use one numbered library list with dividers. Hover may change underline/border or background subtly, with no layout shift. Make each title a clear link; avoid nested interactive elements inside a giant clickable card.

At widths below approximately 900 px, the hero becomes one column and the path panel follows the main actions. Below approximately 640 px, filters stack and article metadata moves above the title. At 320 px, all controls and text remain usable. Breakpoints may be tuned to content rather than device names.

## Article layout

Desktop: a narrow left heading navigation, a central reading column and quiet outer whitespace. Start with `Articles / Week N / Lesson NN`, then topic metadata, original title and original standfirst. The article body follows without a second oversized hero.

The reading column itself must be centered on wide screens, not merely placed on the left of a centered full-width grid. Header title, standfirst and body share the same reading axis. Keep the table of contents about 180–200 px wide and visually secondary. At intermediate widths, move it into the disclosure rather than squeezing the text. Follow READABILITY.md for the desktop geometry and spacing overrides.

The heading navigation may stick within the viewport; it must scroll internally if long and must not obscure content. On phones it becomes a native disclosure labeled `On this page` above the body. Headings have stable IDs and an adequate scroll offset beneath a sticky header.

Render paragraphs, lists, tables, inline code, fenced code, emphasis and source links clearly. Use a soft bordered callout treatment only for material that is actually a callout; do not decorate every paragraph. Table containers may scroll horizontally while the page itself remains within the viewport.

End matter: matching `Open worksheet (Markdown)` link, workbook link, original further-reading sources and previous/next article links showing the destination titles. Previous/next follows **study order**, not numeric class order. Lesson 05 continues to lesson 10.

## Roadmap and resources

Roadmap: page title, pacing note and eight numbered sections. Each section shows its focus, evidence goal and ordered article links. Use strong dividers rather than eight competing CTA cards. Mark the separate historical/evaluation/forward stages after week 8 accurately.

Resources: organize links by reader need: external reading, practice templates, reference material and workbook downloads. Give each link a source/format label. Reuse existing curated descriptions and preserve source-access limitations when displayed. Avoid suggesting every external source was fully validated.

## Interaction states

| Element | Required states |
|---|---|
| Navigation | Default, current page, hover, keyboard focus |
| Search and filters | Labeled default, focused, populated, reset |
| Results | All, filtered, no matches, restored from URL |
| Mobile menu, if collapsed | Open/closed, aria-expanded, keyboard operable |
| Heading navigation | Visible focus; current section indicator only if reliably implemented |
| Links | Readable default and focus; external destinations remain understandable |

No matches: `No articles match these filters.` Follow with a `Clear filters` button. Preserve the user's input until they clear it. Announce result counts politely without moving focus or announcing on every keystroke unnecessarily.

Use short transitions of roughly 120–180 ms for minor state changes. Honor reduced motion. Do not animate initial text, move rows during reading or introduce parallax.

## Accessibility and polish

Provide a skip link, semantic landmarks, one H1 per page, visible labels and comfortable touch targets around 44 px. Links in prose are underlined. Keyboard focus must remain visible and unobscured. Verify normal text contrast at 4.5:1, large text at 3:1 and meaningful control boundaries/focus at 3:1 against adjacent colors. Keep the footer explanation short and factual; preserve the articles' existing uncertainty notes in their original context.
