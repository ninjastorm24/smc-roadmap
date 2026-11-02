> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Content map and source contract

## Authority and input files

1. [DOCX workbook](../../../../SMC_Learning_Workbook.docx): curriculum source of truth.
2. [Current roadmap](../../../../SOLO_LEARNING_ROADMAP.md): active eight-week order and evidence goals.
3. [26 original blog posts](../../../../blog/README.md): website article bodies, original titles, standfirsts and reading estimates.
4. [Lesson worksheets](../../../../lessons/README.md): matched practical assignments.
5. [Resource library](../../../../resources/README.md), [external reading list](../../../../resources/BLOG_POSTS.md), [glossary](../../../../reference/GLOSSARY.md), [entry catalog](../../../../reference/ENTRY_MODELS.md) and [templates](../../../../templates/README.md): supporting material.
6. [Workbook PDF](../../../../SMC_Learning_Workbook.pdf): downloadable edition of the DOCX.

Do not treat the archived 24-week roadmap as the active curriculum. Do not rewrite posts, add new private-strategy definitions, invent statistics or remove source uncertainty notes. Build from the actual checked-out files; this plan is a mapping specification rather than a copied content database.

## Article data contract

| Field | Meaning and rule |
|---|---|
| `lessonId` | Unique integer 1–26; padded to two digits only for display |
| `slug` | Original blog filename without `.md`; do not derive from the display title |
| `studyOrder` | Unique position 1–26 in the sequence below |
| `week` | Integer 1–8 matching source article metadata and roadmap |
| `title` | Original first H1, without editorial shortening |
| `description` | Original standfirst directly below the title |
| `readingMinutes` | Source article estimate; do not invent publication dates |
| `topic` | Primary browsing category from the approved mapping below |
| `keywords` | Source-backed search aliases from the keyword map below |
| `sourcePath` | Root-relative original blog path |
| `worksheetPath` | Matching root-relative lesson path |
| `bodyHtml` | Build-rendered, sanitized body with source-relative links resolved |
| `headings` | Ordered visible headings and unique fragment IDs for the on-page navigation |
| `previous`, `next` | Neighbors in study order, or absent at the boundaries |

All browser metadata and rendered entries must come from the same validated model. A manual array that disagrees with source metadata must fail validation. IDs and paths are stable; UI copy may wrap freely.

## Exact learning order

`01, 02, 03, 04 / 05, 10, 14 / 12, 13, 06 / 07, 08, 09, 11 / 15, 16, 17 / 19, 20, 22, 23 / 18, 21, 24 / 25, 26`

Slashes separate weeks. Default home listing, roadmap links and article previous/next navigation use this order.

## Article manifest

Each linked article must have the same-stem worksheet under `lessons/`. The browsing categories are editorial organization, not new lesson definitions.

| Order | Week | Class | Source article | Primary topic |
|---:|---:|---:|---|---|
| 1 | 1 | 01 | [Before the patterns: build a workspace you can learn from](../../../../blog/01-orientation.md) | Foundations |
| 2 | 1 | 02 | [Reading pullbacks without predicting every reversal](../../../../blog/02-pullback-identification.md) | Foundations |
| 3 | 1 | 03 | [Swing highs and lows: the price level and the time you could know it](../../../../blog/03-swing-identification.md) | Foundations |
| 4 | 1 | 04 | [Inducement: turn a persuasive story into a rule you can inspect](../../../../blog/04-inducement.md) | Structure |
| 5 | 2 | 05 | [Market structure across two scales: BOS, CHoCH and protected levels](../../../../blog/05-advanced-market-structure.md) | Structure |
| 6 | 2 | 10 | [STH, STL, ITH and ITL: a hierarchy of confirmed pivots](../../../../blog/10-swing-hierarchy.md) | Structure |
| 7 | 2 | 14 | [Price across timeframes: keep the information clock aligned](../../../../blog/14-fractal-price.md) | Structure |
| 8 | 3 | 12 | [Liquidity maps: distinguish a reference level, a sweep and a breakout](../../../../blog/12-liquidity-grab-sweep.md) | Liquidity & ranges |
| 9 | 3 | 13 | [Pools, voids and premium/discount: organize the range before the zones](../../../../blog/13-liquidity-pools-ranges.md) | Liquidity & ranges |
| 10 | 3 | 06 | [FVG, inverse FVG and order blocks: three ideas, three rule sets](../../../../blog/06-fvg-ifvg-order-block-imbalance.md) | Zones & POIs |
| 11 | 4 | 07 | [Advanced order blocks: improve the definition before adding filters](../../../../blog/07-advanced-order-block.md) | Zones & POIs |
| 12 | 4 | 08 | [Rejection blocks, breakers and Unicorns: follow the formation sequence](../../../../blog/08-rejection-breaker-unicorn.md) | Zones & POIs |
| 13 | 4 | 09 | [Mitigation, reclaimed levels and QML: describe the events before the label](../../../../blog/09-mitigation-reclaimed-qml.md) | Zones & POIs |
| 14 | 4 | 11 | [Choosing a point of interest: make the rejection decision explicit](../../../../blog/11-structure-based-poi.md) | Zones & POIs |
| 15 | 5 | 15 | [Daily bias: write a hypothesis that can change your mind](../../../../blog/15-daily-bias.md) | Bias & timing |
| 16 | 5 | 16 | [Time and price: define the range, then define the clock](../../../../blog/16-time-price-dealing-range.md) | Bias & timing |
| 17 | 5 | 17 | [From daily bias to a session plan someone else can follow](../../../../blog/17-applying-bias.md) | Bias & timing |
| 18 | 6 | 19 | [MSS and CISD: compare the reference price and confirmation time](../../../../blog/19-mss-cisd-tbs-tws.md) | Models |
| 19 | 6 | 20 | [AMD and the Judas Swing: keep the unfinished day unfinished](../../../../blog/20-amd-judas-swing.md) | Models |
| 20 | 6 | 22 | [Fibonacci, OTE and projections: the anchor rule comes first](../../../../blog/22-fibonacci-sd-aox-ote.md) | Models |
| 21 | 6 | 23 | [Quarterly theory: make the time hypothesis falsifiable](../../../../blog/23-quarterly-theory.md) | Models |
| 22 | 7 | 18 | [Build one trading playbook you can actually test](../../../../blog/18-personal-strategy.md) | Models |
| 23 | 7 | 21 | [Candle Range Theory: separate the anchor, sweep and confirmation](../../../../blog/21-crt-tbs.md) | Models |
| 24 | 7 | 24 | [Advanced entries, part 1: sort the families before choosing a model](../../../../blog/24-advanced-entries-part-1.md) | Models |
| 25 | 8 | 25 | [Advanced entries, part 2: audit the trigger instead of stacking labels](../../../../blog/25-advanced-entries-part-2.md) | Models |
| 26 | 8 | 26 | [Advanced entries, part 3: finish the catalog and test one frozen playbook](../../../../blog/26-advanced-entries-part-3.md) | Testing |

## Primary topic counts

| Topic | Count |
|---|---:|
| Foundations | 3 |
| Structure | 4 |
| Zones & POIs | 5 |
| Liquidity & ranges | 2 |
| Bias & timing | 3 |
| Models | 8 |
| Testing | 1 |

These seven values populate the topic filter, with `All topics` as the unfiltered option. Week filtering is separate. Use a stable normalized filter value internally while keeping these display labels.

## Search alias map

These aliases help readers find acronyms already discussed in the articles. They do not imply that an undefined term has a known model implementation. Search should also include titles, descriptions, topic and lesson identifiers.

| Class | Aliases |
|---:|---|
| 01 | OHLC, candles, orders, spread, fees, journal, setup |
| 02 | pullback, impulse, retracement, reversal |
| 03 | swing, pivot, HH, HL, LH, LL, confirmation |
| 04 | IDM, inducement, minor swing |
| 05 | BOS, CHoCH, MSS, protected levels, internal, external |
| 06 | FVG, iFVG, fair value gap, imbalance, OB |
| 07 | OB, order block, retest, boundaries |
| 08 | rejection block, breaker, Unicorn, FVG |
| 09 | mitigation, reclaimed, QML, Quasimodo |
| 10 | STH, STL, ITH, ITL, LTH, LTL, hierarchy |
| 11 | POI, point of interest, zone selection |
| 12 | BSL, SSL, liquidity, grab, sweep, breakout, IRL, ERL |
| 13 | pool, void, supply, demand, premium, discount, equilibrium |
| 14 | fractal, timeframe, HTF, LTF, nesting, look-ahead |
| 15 | daily bias, bullish, bearish, neutral, invalidation |
| 16 | dealing range, time, price, session, killzone, OHLC, Dhaka, events |
| 17 | top-down, bias, session plan, worksheet |
| 18 | strategy, playbook, position sizing, risk, costs, discipline |
| 19 | MSS, CISD, TBS, TWS, delivery, confirmation |
| 20 | AMD, PO3, Power of Three, Judas Swing |
| 21 | CRT, Candle Range Theory, TBS, anchor, reclaim |
| 22 | Fibonacci, OTE, SD, AO-X, premium, discount |
| 23 | QT, quarterly theory, AMDX, quarters, true open |
| 24 | structure entry, POI entry, liquidity entry, Silver Bullet, SMT Fill, Accu Block, PSB |
| 25 | engulfing, MCS, WCS, DCS, SCS, MSCS, B2B, OC, BPR, CiC, QT, iFVG, killzone |
| 26 | Fixed TCiC, 2s CiC, Fixed QT Relation, purge, pool, backtest, evaluation, simulation |

## Roadmap rendering

Use eight sections with IDs `week-1` through `week-8`. Each includes its existing week title, focus, ordered lessons, workbook evidence goal and a link to the full roadmap source. Preserve the fact that the nominal eight weeks may require extension. Show the later historical/evaluation/four-week paper phase as additional work after the study sequence.

Do not hardcode a claim that finishing eight weeks proves trading readiness. Reuse the existing educational framing without adding new alarm banners or repeated disclaimers to every component.

## Resources rendering

Render useful existing material rather than a raw directory list:

- External reading: the ten curated posts and their existing descriptions/source status, plus the learning library entries needed by current article links.
- Practice: concept note, session plan, entry card, trade journal and weekly review.
- References: glossary, entry-model catalog, setup and testing protocol.
- Workbook downloads: PDF first, editable DOCX second, with accurate labels.

Resource links to Markdown may point to their readable GitHub source pages; label them as source documents. Do not imply that a worksheet opens as a complete local web app. The repository URL and link-rewrite behavior are specified in ARCHITECTURE.md.

## Presentation scaffolding

The original posts contain navigation because they are standalone Markdown. Replace duplicate title, metadata, source-navigation and final previous/next elements with site layout equivalents. Retain substantive body text, worked examples, tables, practice instructions, source notes and citations. Document the extraction boundaries and test representative short, table-heavy and source-note-heavy articles.
