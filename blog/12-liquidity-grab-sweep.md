# Liquidity maps: distinguish a reference level, a sweep and a breakout

Track visible levels without claiming to see the orders behind them.

**Lesson 12 · Week 3 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/12-liquidity-grab-sweep.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-3)

Yesterday’s high is visible. The exact number of stop orders above it usually is not. A useful liquidity map keeps that distinction clear: it identifies reference prices and records what happens around them, while treating explanations about hidden orders as hypotheses.

The workbook begins with buy-side and sell-side liquidity vocabulary, then asks you to compare sweeps with sustained breaks. That comparison needs an event rule and an observation window.

## Mark the references first

SMC teaching commonly associates buy-side liquidity with areas above highs and sell-side liquidity with areas below lows. The [TTrades liquidity article](https://ttrades.com/understanding-liquidity-buy-side-sell-side-and-swing-points/) explains that teaching convention. A candle chart alone cannot establish the size or ownership of the orders at those locations.

For practice, mark previous-day extremes, defined session extremes and qualifying equal highs or lows. Choose which range makes a reference internal or external. The same price can occupy different roles under different range anchors.

## Separate the event from the explanation

For an illustrative close-based rule, a sweep candidate requires price to trade beyond a marked level and a completed candle to close back inside it. A breakout candidate instead requires a specified close beyond the level. Neither event guarantees the subsequent direction.

Suppose the hypothetical prior high is 110:

| Next observation | Classification under this example rule |
|---|---|
| High 111, close 109 | Sweep candidate |
| High 111, close 110.5 | Breakout candidate |
| Candle still open | Pending |

If a breakout later reverses, record the later change. Do not pretend the eventual sweep interpretation was confirmed at the earlier moment. Likewise, a sweep can be followed by renewed expansion through the same level.

## Define acceptance and the review window

“Price accepted above the high” is too vague for testing. A proposed rule might require two completed closes above it, or a specific retest and subsequent close. Each rule selects different events and becomes known at a different time.

Choose a fixed review window for the exercise. If the window ends with price near the level, record an unresolved result. Waiting indefinitely until a favorable reaction appears makes almost any reference look useful.

## Build a balanced example library

Collect sweeps, sustained breakouts and ambiguous events from a preselected date range. Save the level before the interaction and keep the original timestamp. Include levels that were never reached.

Then ask which event actually changes your research decision. Does it permit a confirmation search, invalidate a bias or identify a target? A map with a clear purpose is more useful than one that assumes every marked high and low must eventually be visited.

## Workbook basis and further reading

This original article expands [workbook lesson 12](../lessons/12-liquidity-grab-sweep.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - buy-side and sell-side liquidity](https://ttrades.com/understanding-liquidity-buy-side-sell-side-and-swing-points/)
- [TTrades - previous day high/low liquidity](https://ttrades.com/the-easiest-draw-on-liquidity/)

## Video resources

- **FX Journal** — [Types of Liquidity in SMC Concept | Trading Strategy Explained](https://www.youtube.com/watch?v=RhHvuqf8g7Y&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Catalogs structural, trendline, equal-high/low, and session liquidity pools and how sweeps occur.
- **FX Journal** — [Liquidity Trading Strategy | Secrets of Professional Traders! Forex Trading Full Course](https://www.youtube.com/watch?v=2cRSEgYiMik&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Shows how to distinguish a liquidity sweep (wick grab) from a true structural break.
- **FX Journal** — [Forex Liquidity Secrets: BSL, SSL, Pullback | How to avoid the traps of big traders](https://www.youtube.com/watch?v=L_LjVcQcqTQ&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Demonstrates how buy-side (BSL) and sell-side (SSL) sweeps fuel institutional reversals.
- [TTrades — Liquidity: Buyside & Sellside (ICT Concepts)](https://www.youtube.com/watch?v=U8xH2dEgH5A) — Introduces BSL and SSL reference levels above swing highs and below swing lows.
- [TTrades — Market Structure Shift vs Liquidity Grab: ICT Concepts](https://www.youtube.com/watch?v=ynFA6E3qHj0) — Compares a liquidity sweep (wick/close back inside range) with a sustained structural break.
- [TTrades — Internal & External Liquidity Using the TTrades Fractal Model](https://www.youtube.com/watch?v=vMq1l8Zzzjw) — Demonstrates how price alternates between internal range liquidity (IRL) and external range liquidity (ERL).
- [Mulham Trading — External & Internal Liquidity: The ICT Concept You Need](https://www.youtube.com/watch?v=mKwLb10OQaY) — Breaks down ERL and IRL mapping and how sweeps set up the next draw on liquidity.
- [Learn SMC With Kushal — External Liquidity & Internal Liquidity (Bengali)](https://www.youtube.com/watch?v=itDZVxbSaWw) — Explains external liquidity, [internal liquidity](https://www.youtube.com/watch?v=sI77_zJWMPo) and [fake breakouts/sweeps](https://www.youtube.com/watch?v=x38_aFtL_ZU) in Bengali.
- [Guardeer — What Is Liquidity In SMC? Lecture 5 (Hindi)](https://www.youtube.com/watch?v=zCj2SWbpmOk) — Covers liquidity sweeps, grabs and range liquidity in Hindi (paired with [Whale Eyes Lecture 3](https://www.youtube.com/watch?v=G45-t-6DODE&list=PLIusEm0IfW4k) and [Lecture 5](https://www.youtube.com/watch?v=d7EfFwg6XN4&list=PLIusEm0IfW4k)).

[← Price across timeframes: keep the information clock aligned](14-fractal-price.md) · [Pools, voids and premium/discount: organize the range before the zones →](13-liquidity-pools-ranges.md)
