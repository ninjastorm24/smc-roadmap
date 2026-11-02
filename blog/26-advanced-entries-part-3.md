# Advanced entries, part 3: finish the catalog and test one frozen playbook

Handle Fixed TCiC, 2s CiC, QT relations and liquidity entries without inventing rules.

**Lesson 26 · Week 8 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/26-advanced-entries-part-3.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-8)

The final entry lab is a narrowing exercise. You have a catalog of names, a growing example library and several possible interpretations. The next useful deliverable is one fully defined model and a complete record of what happens when you apply it without future information.

Some remaining course labels still lack their instructor definitions. They can stay in the catalog while you continue with a clearly specified baseline.

## Finish the unresolved inventory

| Family | What must be obtained or specified |
|---|---|
| Fixed TCiC | Meaning of TCiC, fixed reference, trigger, failure and expiry |
| 2s CiC | Meaning of “2s” and CiC, sequence and permitted timing |
| Fixed QT Relation | Selected quarterly variant, relationship rule and exact confirmation |
| Liquidity Purge | Qualifying reference interaction, confirmation and execution rule |
| Liquidity Pool | Pool construction, trigger, invalidation and objective |

A liquidity purge may sound similar to a sweep, but the course’s exact entry cannot be inferred from that resemblance. Likewise, a pool identifies a location hypothesis; it does not automatically provide the transaction rules.

## Freeze one complete candidate

Use the entry card to record instrument, feed, timeframes, session, context, location, trigger, entry, stop, target, expiry, sizing and costs. Add ambiguous-fill and event-exclusion rules. Version the card before opening the sample.

Choose a continuous date range. Keep every eligible opportunity, missed fill and rule-based no-entry session. Use [the workbook’s backtesting resource](https://ttrades.com/how-to-backtest-a-clear-step-by-step-approach/) alongside the local [testing protocol](../practice/TESTING.md).

## Treat the first sample as a workflow check

The workbook’s twenty to thirty initial blind scenarios help reveal inconsistent rules and incomplete records. The extended fifty to one hundred historical setups, where available, serve a later stage. A reserved evaluation period and four-week forward phase are additional stages, not alternative names for the same selected examples.

If a rule changes, record a new version. Evaluation data used to choose that change becomes development evidence; find a new period for independent evaluation.

## Make the accounting readable

For each filled simulation, hold the initial risk denominator fixed. Calculate net R after costs once. With invented net outcomes of +1.5R, −1.1R and +0.2R, mean net R is 0.2R. Three trades provide an arithmetic example, not a reliable performance conclusion.

Report sample size, net wins and losses, average outcomes, drawdown and adherence. No-entry sessions belong in coverage statistics rather than being counted as zero-return trades. Flag uncertain fills instead of assuming the favorable sequence.

## Decide what the evidence permits

Continue when you need more unchanged observations. Refine between samples when you identify a specific definitional problem. Archive a model when its rules or evidence do not justify further work.

Save the original version and its failures whichever decision you make. The finished workbook should leave you with a research process you can inspect, including the reasons a model did not survive it.

## Workbook basis and further reading

This original article expands [workbook lesson 26](../lessons/26-advanced-entries-part-3.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - how to backtest, step by step](https://ttrades.com/how-to-backtest-a-clear-step-by-step-approach/)
- [TradingView - Paper Trading help](https://www.tradingview.com/support/solutions/43000516466-paper-trading-main-functionality/)

[← Advanced entries, part 2: audit the trigger instead of stacking labels](25-advanced-entries-part-2.md)
