# PLAN — Visual design and reader layout

## Visual direction

Create an editorial learning library: warm paper, dark ink, restrained teal, clear borders and generous reading space. Use typography and alignment to establish hierarchy. Avoid trading-terminal styling, decorative price charts and a wall of identical rounded cards.

The home page has a prominent introduction, a compact learning-path panel and an article list with enough detail to choose a reading. The article body is the main visual element on a reading page.

## Homepage and roadmap side margins

The user explicitly requested more space on the left and right of these two pages after inspecting their wide-desktop screenshots. Their content should sit within a centered shell rather than extend almost edge to edge.

- Use a shared centered shell with a **1200 px maximum outer width**, including its internal horizontal padding. At 1920 px, that leaves approximately 360 px outside each side; at 1440 px, approximately 120 px. Measure the actual page viewport, excluding browser sidebars.
- Align the header's inner navigation, homepage hero content, learning-path panel, library heading, filters, article rows and footer content to that shell.
- The hero background can extend across the viewport. Its text and learning-path panel remain together inside the shell; do not position the panel against the browser's far-right edge.
- On the roadmap, keep the page introduction, pacing note, all eight week sections and later testing sections inside the same shell. Cards must not stretch across the entire desktop viewport.
- Use approximately 24 px internal horizontal padding on desktop/tablet, shrinking to 16–20 px on phones. Below 1200 px, let the shell adapt to available width rather than retaining fixed outer margins.
- Keep paragraph measures bounded within the wider shell. Do not enlarge text lines simply to fill a card, and do not apply the narrower article-reader width to the entire homepage.

Required evidence: homepage and roadmap screenshots at 1920×1080, 1440×900, 1024×768 and 390×844. Record computed shell widths and left/right outer margins at the desktop sizes. Confirm the hero panel remains inside the shell and mobile content is neither squeezed nor horizontally overflowing.

## Design tokens

These are target values, subject to measured contrast verification during implementation. If a pair fails, adjust it minimally and record the replacement in the current task report.

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

Desktop scale: home heading 52–64 px; article title 40–48 px; article body 20 px with 1.65–1.7 line height; controls 16 px minimum; metadata 14–15 px. Mobile headings scale to 32–38 px and article body remains 18–19 px. Avoid fixed-height text containers. These reader values supersede the earlier serif body direction following the user's screenshot feedback; implement the detailed [reader revision](#reader-revision).

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

The reading column itself must be centered on wide screens, not merely placed on the left of a centered full-width grid. Header title, standfirst and body share the same reading axis. Keep the table of contents about 180–200 px wide and visually secondary. At intermediate widths, move it into the disclosure rather than squeezing the text. Follow the reader revision below for the desktop geometry and spacing overrides.

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

<a id="reader-revision"></a>
## Reader revision

The user requested this change after inspecting article 05. The revised body-font and centering requirements above and below are the current direction. Gemini implements them in T004.

## Problem visible in the screenshot

The table of contents occupies the far left, prose begins around x=380 and ends around x=1090, while most of the remaining right side is empty. The title spans a different horizontal area from the body. Small serif text, long prose blocks and generous heading separators make the reading experience feel dense and disconnected at the same time.

The screenshot is scrolled, so the partly covered title alone does not establish an initial-load clipping bug. Verify initial load, scroll and heading-link behavior before claiming a header defect. Any actual focus/anchor obstruction still needs correction.

## Required layout

- Apply the existing centered 1200 px outer content cap correctly; R5's token mismatch must be fixed.
- On wide desktops, center the **reading column** relative to the viewport. Its midpoint should be within about 24 px of the viewport midpoint at 1440 and 1920 px. Do not center only the larger grid while leaving the prose off to one side.
- Give prose approximately 700–760 px of available width at 1440/1920, subject to the 68–72-character reading limit. Keep it flexible below that width. Do not stretch paragraphs across the entire display.
- Put a 180–200 px TOC to the left with a 24–32 px gap. A balanced trailing layout track is acceptable; it is layout space, not a reason to add an empty card or unrelated widgets.
- Align the article title, standfirst, metadata and body on the same reading axis. The breadcrumb can sit at the outer container edge if the hierarchy remains clear.
- When the viewport cannot accommodate a centered readable column plus the TOC, switch to a single centered column and use `On this page`. Target this transition around 1100–1200 px, based on actual fit.
- Keep end-matter actions and previous/next navigation aligned with the prose. Tables may scroll inside their own bounded container.

Desktop composition:

```text
                   centered outer shell, max 1200 px
       ┌────────────┬──────────────────────────┬────────────┐
       │            │ Title / standfirst       │            │
       │            │ Metadata                 │            │
       │ TOC        │                          │ balanced   │
       │ 180–200 px │ Readable article column  │ trailing   │
       │            │ about 700–760 px         │ space      │
       │            │                          │            │
       │            │ Practice / next article  │            │
       └────────────┴──────────────────────────┴────────────┘
                           viewport center
```

At phone widths, use 16–20 px side gutters and a single column. Do not retain desktop grid minimum widths or insert a separate trailing column.

## Typography and density

| Element | Revised direction |
|---|---|
| Article paragraphs | Local system sans-serif, 20 px desktop, 18–19 px mobile, regular weight |
| Body line height | 1.65–1.7, giving about 33–34 px desktop |
| Prose color | Existing primary ink; no faded body copy |
| Standfirst | Sans-serif, 20–22 px desktop, 18–20 px mobile, muted ink with verified contrast |
| Main title | Retain editorial serif, 40–48 px desktop, 32–38 px mobile; natural wrapping |
| H2 | 28–30 px desktop, 24–26 px mobile; clear hierarchy without oversized separator blocks |
| TOC links | Sans-serif, 15–16 px, line height around 1.5; active state visible without changing layout |
| Metadata | Sans-serif, 14–15 px; readable rather than tiny letter-spaced text |
| Paragraph spacing | About 18–24 px after a paragraph |
| Section spacing | About 32–40 px before an H2 and 12–16 px after it |

Remove the repeated large top padding plus border treatment on every H2. Use whitespace and typographic hierarchy for ordinary section changes; retain a divider where it separates major end matter. Do not compensate for excessive whitespace by shrinking margins everywhere or reducing body line height.

Preserve the writing. Do not shorten, hide or rewrite the educational paragraphs to make the layout appear less dense. No new network font, dark theme, side advertising or decorative financial charts are needed.

## Gemini implementation and evidence

1. Implement the layout and typography direction in the shared article styles/layout. Fix the existing content-width token issue without dropping the mobile overflow work.
2. Build and inspect articles 05, 06, 24 and 25, including actual prose and table sections below their headers.
3. Capture article 05 at **1920×1080**, **1440×900**, **1024×768** and **390×844**. At desktop sizes, include one initial-load screenshot and one scrolled-body screenshot.
4. Record computed body font size, font family, line height, reading-column width and center position. Check the centering and alignment described above.
5. Recheck all article routes for mobile overflow, TOC disclosure, keyboard focus, heading-link offset, 200% zoom and reduced motion. Table content must remain reachable.
6. Add screenshots and measured results to the current task report. Do not claim readability approval on the user's behalf: Codex will review the actual rendered revision after the user requests it.
