# Swing highs and lows: the price level and the time you could know it

Use a mechanical pivot rule without accidentally importing future candles.

**Lesson 03 · Week 1 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/03-swing-identification.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-1)

A swing high looks obvious on a finished chart. A candle stands above its neighbors and the market has already moved away. During the candle itself, however, its eventual neighbors do not exist. Learning to mark swings means recording both the location of a pivot and the moment it becomes confirmable.

## Begin with an explicit rule

The workbook proposes a three-candle starting convention. A swing high has a middle candle whose high exceeds both adjacent highs. A swing low has a middle candle whose low is below both adjacent lows. The right-hand candle must finish before the pivot is confirmed under this convention.

For equal highs or lows, choose a separate rule. Strict inequalities exclude equality. A tolerance-based rule needs a stated tick or price buffer. Changing between these interpretations while labeling a chart will make your results hard to reproduce.

## A hypothetical confirmation timeline

Imagine three completed candles with highs of 101, 105 and 103. The middle candle qualifies as a swing high under the strict rule.

| Moment | Information available | Label allowed |
|---|---|---|
| Second candle closes | Highs 101 and 105 | Candidate only |
| Third candle is still forming | Its final high is unknown | Candidate only |
| Third candle closes with high 103 | Both neighboring highs are lower | Confirmed swing at the second candle |

If the third candle instead reaches 106, the 105 candidate fails. That is part of the rule’s normal behavior.

A strategy that enters at the middle candle’s close because it later becomes a pivot is using future information. A strategy that waits for the right-hand close has a different decision time and potentially a different fill.

## Turn pivots into structure

Once pivots are confirmed, compare successive relevant highs and lows. Higher highs and higher lows describe one type of upward sequence; lower highs and lower lows describe a downward sequence. Overlapping or conflicting sequences can remain unclassified while you collect more information.

Not every local pivot needs to define the larger trend. Mark local swings first, then explain which ones your structural rule promotes to external reference points. Do not erase inconvenient small pivots simply because the broader trend looks clear.

## Test your labeling consistency

Choose a chart segment before inspecting its outcome. Mark each pivot and its confirmation time. Two days later, repeat the exercise without seeing your first labels. Compare disagreements: equality handling, unfinished candles and inconsistent selection of “important” swings are useful categories.

The result should be a short rule another learner could apply. If that rule still needs phrases such as “the obvious high,” add the missing conditions before using it in a trade model.

## Workbook basis and further reading

This original article expands [workbook lesson 03](../lessons/03-swing-identification.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - relevant swing highs and lows](https://ttrades.com/relevant-swings-which-swing-highs-and-lows-matter-in-trading/)
- [TTrades - basic market structure](https://ttrades.com/understanding-basic-market-structure-in-trading/)

[← Reading pullbacks without predicting every reversal](02-pullback-identification.md) · [Inducement: turn a persuasive story into a rule you can inspect →](04-inducement.md)
