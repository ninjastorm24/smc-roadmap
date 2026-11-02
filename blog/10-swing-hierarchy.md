# STH, STL, ITH and ITL: a hierarchy of confirmed pivots

Understand why a larger swing classification needs more time to become knowable.

**Lesson 10 · Week 2 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/10-swing-hierarchy.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-2)

A short-term swing and an intermediate-term swing describe levels in a hierarchy. They are not permanent synonyms for particular chart timeframes. A five-minute chart can have both, and neither necessarily matches the hierarchy on an hourly chart.

The practical challenge is confirmation. A larger pivot classification depends on neighboring smaller pivots, which themselves depend on later candles.

## Build the first layer

Use the workbook’s starting convention: a short-term high, or STH, is a middle candle whose high exceeds adjacent candle highs. A short-term low, or STL, reverses the comparison. The right-side candle must complete before confirmation.

Handle equal highs and lows consistently. A strict comparison excludes ties; a tolerance rule needs its own stated limits. Keep unfinished candidates visually different from confirmed labels.

## Compare pivots rather than candle counts

Under the hierarchy used in this workbook, an intermediate-term high, or ITH, is a qualifying short-term high above neighboring short-term highs. An ITL is the corresponding low below neighboring short-term lows. Long-term labels can extend the same nesting idea.

For a hypothetical sequence of confirmed STH prices at 105, 110 and 107, the 110 pivot is an ITH candidate under that relationship. However, the right-hand STH at 107 must itself become confirmable before the larger classification is established.

This creates two clocks:

| Label | Price location | Knowledge time |
|---|---|---|
| STH at 110 | The candle where 110 occurred | After its confirming right-hand candle |
| ITH at 110 | The same historical price | After the required neighboring STH is confirmed |

A later label can describe an earlier price without having been available at that earlier time.

## Keep hierarchy and trade importance separate

A confirmed ITH can be a useful structural reference, but its rank does not automatically make it an entry or target. Your model must still explain which references it uses and under what context.

Likewise, changing timeframe changes candle construction and the set of pivots being compared. A five-minute ITH may fit inside one hourly candle. It does not become an hourly ITH just because its name sounds significant.

## Practice with a confirmation ledger

Mark local pivots first. For each higher-rank candidate, list the neighboring pivots needed to confirm it and the earliest moment all were available. Then replay the same segment with those timestamps hidden and compare your decisions.

The goal is an honest hierarchy you could have maintained in real time. If a historical chart looks beautifully organized only because every pivot receives its final rank immediately, the display is concealing the learning problem you need to solve.

## Workbook basis and further reading

This original article expands [workbook lesson 10](../lessons/10-swing-hierarchy.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [Penchan - STH / ITH / LTH structure guide](https://penchan.co/en/market/ict-market-structure-concepts/)
- [TTrades - advanced market structure](https://ttrades.com/advanced-market-structure-simplified-from-short-term-to-long-term-trends/)

[← Market structure across two scales: BOS, CHoCH and protected levels](05-advanced-market-structure.md) · [Price across timeframes: keep the information clock aligned →](14-fractal-price.md)
