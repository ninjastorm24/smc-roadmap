# MSS and CISD: compare the reference price and confirmation time

Keep structural breaks separate from candle-sequence changes, with TBS and TWS unresolved.

**Lesson 19 · Week 6 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/19-mss-cisd-tbs-tws.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-6)

Two confirmation methods can describe the same reversal while becoming available on different candles. Comparing them requires knowing what each method measures, rather than assuming that the earliest label is automatically the best entry.

The workbook separates the publicly described MSS and CISD ideas from TBS and TWS, whose instructor-specific rules are missing. That distinction matters when building a reproducible model.

## MSS begins with a structural reference

A market structure shift uses a selected opposing swing as its reference. Many ICT-style explanations require a close beyond that level with displacement. Your rule must define the qualifying swing, close condition and measurable expansion requirement.

A minor break inside a larger move may remain an internal event. The structural scale must stay visible in the label. Calling something MSS does not automatically establish a reversal of every higher timeframe.

## CISD begins with a candle-sequence reference

[TTrades’ CISD explanation](https://ttrades.com/understanding-the-change-in-state-of-delivery-cisd/) uses a close across the opening-price reference of a selected sequence of directional candles. This selects a different level from the pivot used by a swing-break rule.

Write how the sequence starts and ends, which opening price is selected and whether a completed close is required. Alternative conventions should be logged as separate definitions. Do not choose the sequence after seeing which open made a successful signal.

## A hypothetical disagreement

Imagine a downward sequence with a confirmed minor high at 110. The selected down-close sequence begins at an opening price of 108. A later candle closes at 109, followed by another close at 111.

| Observation | Example close-based rule result |
|---|---|
| Close at 109 crosses selected open 108 | CISD condition may qualify |
| Same close remains below swing high 110 | MSS condition is still absent |
| Later close at 111 exceeds 110 | MSS may qualify if all other requirements hold |

The earlier condition has a different decision time and can also fail before the structural break occurs. Comparing outcomes requires a separate entry and exit specification for each model.

## Leave TBS and TWS undefined

The source workbook does not establish reliable expansions or trigger rules for these acronyms. Record what you need from the original instructor: context, selected level, confirming candle, invalidation and expiry.

A public model with a similar acronym does not fill that gap. You can continue studying MSS and CISD while keeping the combined course-specific module partially mapped.

## Compare events before comparing profits

Mark fifteen MSS and fifteen CISD candidates, including non-matches. Record the earliest qualifying bar, reference level and any missing prerequisite. Then ask how often the methods agree and what changes when they disagree.

That produces a useful foundation for a later model comparison. Counting every pair of nearby labels as two independent confirmations would skip the question the exercise is meant to answer.

## Workbook basis and further reading

This original article expands [workbook lesson 19](../lessons/19-mss-cisd-tbs-tws.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - MSS vs. CISD explained](https://ttrades.com/market-structure-shifts-vs-change-in-the-state-of-delivery-a-clear-comparison/)
- [TTrades - understanding CISD](https://ttrades.com/understanding-the-change-in-state-of-delivery-cisd/)

## Video resources

- **FX Journal** — [High Probability Market Structure Shift (MSS) Strategy in Bangla | Forex Trading Full Course](https://www.youtube.com/watch?v=wjqoi54RuXI&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): 83-minute deep dive into high-probability Market Structure Shifts (MSS), displacement, and entry filtering.
- **FX Journal** — [CISD Trading Strategy | Valid vs Invalid CISD | Smart Money Concept Bangla Tutorial](https://www.youtube.com/watch?v=Mn3MO8_QFMc&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Dedicated Bangla tutorial comparing valid vs. invalid Change in State of Delivery (CISD) setups.
- [FX Journal — The Real Game of MSS, CISD, TBS, TWS: Master Class + Live Market Trade (Bengali)](https://www.youtube.com/watch?v=Lj9zeZArOV0) — Directly covers all four Lesson 19 concepts (MSS, CISD, TBS and TWS) with chart comparisons in Bengali.
- [TTrades — Market Structure Shift vs Change In State Of Delivery (ICT)](https://www.youtube.com/watch?v=E89d1HArbgM) — Video companion to the workbook’s MSS versus CISD comparison article, contrasting swing-break and delivery-open references.
- [TTrades — Change In State Of Delivery (CISD): Orderblock Formation](https://www.youtube.com/watch?v=CHIK5oBRKiw) — Details which candle opening prices define a CISD sequence and when confirmation occurs.
- [TTrades — Market Structure Shift: ICT Concepts](https://www.youtube.com/watch?v=_94CPMjWi9E) — Explains displacement and swing selection for a valid Market Structure Shift.
- [Mulham Trading — You Don't Need Market Structure Shift (Use CISD Instead!)](https://www.youtube.com/watch?v=fr1_cgCSBaw) — Compares early CISD triggers against later MSS confirmations and highlights the tradeoff between earlier fills and false signals.
- [Guardeer Student — Whale Eyes Course Lecture 12: Reversal Delivery & Structure Confirmation (Hindi)](https://www.youtube.com/watch?v=ut-7CsocfFw&list=PLIusEm0IfW4k) — Examines candle delivery shifts and structural confirmation rules in Hindi.

[← From daily bias to a session plan someone else can follow](17-applying-bias.md) · [AMD and the Judas Swing: keep the unfinished day unfinished →](20-amd-judas-swing.md)
