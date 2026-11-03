# Article library redesign

## Direction

A calm editorial library: warm ivory background, forest-green accents, generous spacing, compact filters and individually framed lesson cards. Retain the existing serif headings and system sans-serif UI. Scope is the homepage library section shown in the user's screenshot.

## Header

Keep the small uppercase “THE ARTICLE LIBRARY” eyebrow. Change the heading to “Your study library” (40 px desktop, 30 px mobile, line-height 1.15). Add “Build your understanding, one lesson at a time.” in muted 16 px text beneath it. Align a pale green “26 articles · 8 weeks” pill to the right on desktop; place it below the introduction on mobile. Use actual article count from the render input. Leave 28 px before the filters.

## Search and filters

Replace the visually heavy toolbar with a white panel: 16 px radius, subtle divider-colored border, 20 px padding and a restrained shadow (0 4px 20px rgba(24,43,48,.04)). Use columns minmax(0,2fr) minmax(0,1fr) minmax(0,1fr), with 16 px gaps. All children must shrink without overflow.

Keep visible 12 px semibold labels: “Search articles”, “Topic”, “Study week”. Inputs are 48 px tall, 10 px radius, with a soft ivory fill and a thin muted border. Search gets a small decorative inline SVG magnifier and the shorter placeholder “Search topics or lessons…”. Keep native select controls and existing options. Use the existing green accent and a clearly visible focus outline for keyboard focus.

Move the existing results/reset row immediately below the panel, outside its border, with 16 px top and 20 px bottom spacing. Remove its separator line. Keep live announcements and reset visibility behavior. The reset action should be a simple underlined text button with a 44 px minimum target. At 640–899 px, search spans a full row and selects share the next row; below 640 px stack all three fields. Do not use placeholder text as the only label.

## Lesson cards

Keep one ordered vertical list in the existing study sequence. Each row becomes a white card with 14 px radius, 1 px subtle border, 24 px padding and 12 px between cards. Remove the list's continuous top border. Desktop grid: 56 px lesson number / flexible text / 112 px action area, separated by 20 px. The lesson number sits inside a 48×48 px pale-green rounded square, uses tabular numerals and remains visible even with filters applied; it is the original lesson number, not the filtered position.

The content column has a compact metadata line (“Week 1” plus existing topic badge), the existing full article title (serif, 23 px, line-height 1.3), and the existing description (sans-serif, 14–15 px, line-height 1.6, muted). Preserve complete titles and summaries with natural wrapping. The right column has reading time in 12–13 px muted text and a forest-green “Read article →” link below it. Vertically center the action column. Give the card a darker green border and subtle shadow on hover and focus-within, without translation or scale. Keep links as real anchors; do not make a div clickable.

Below 640 px, use 16 px card padding and a 36 px number column with a 12 px gap. Titles are 20 px. Place reading time and the read link in a wrapping footer under the main text, within the text column. All text and metadata must wrap. Keep 16–20 px page gutters and the existing centered 1200 px outer shell.

## Behavior and boundaries

Preserve article data attributes, filter IDs, combined search/topic/week matching, reset behavior, no-results state and no-JavaScript access to all articles. Decorative SVGs and duplicate visual lesson numbers should be aria-hidden when the same information is already exposed accessibly. Keep the ordered list's study-sequence meaning and expose each lesson number once to assistive technology. Keep existing disabled controls until script initialization. Check script assumptions before moving status markup. Scope CSS to the library so shared form styles, reader, hero, navigation and roadmap remain stable.

Do not add images, dependencies, sorting, bookmarks, progress indicators, topic tabs or a card grid. This is a presentation redesign, not a content rewrite.
