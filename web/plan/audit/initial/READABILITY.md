> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Reader layout revision — user screenshot feedback

**Owner:** Codex design direction; Gemini implements.  
**State:** required revision, not implemented or approved.  
**Reference:** user screenshot of article 05 on a roughly 1920 px desktop display.

This is an explicit design revision prompted by the user, not a relaxation of earlier acceptance failures. It supersedes the original serif body choice and vague article-centering instruction in DESIGN.md. Keep R1–R6 open until separately verified.

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
6. Add screenshots and measured results to STATUS.md. Do not claim readability approval on the user's behalf: Codex will review the actual rendered revision after the user requests it.
