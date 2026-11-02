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

[← Price across timeframes: keep the information clock aligned](14-fractal-price.md) · [Pools, voids and premium/discount: organize the range before the zones →](13-liquidity-pools-ranges.md)
