# Build one trading playbook you can actually test

Translate a personal strategy into eligibility, execution and review rules.

**Lesson 18 · Week 7 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/18-personal-strategy.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-7)

A personal strategy becomes testable when its decisions can be reconstructed. “Trade with the trend at good liquidity” leaves too much unresolved: which trend, which level, which signal and which price?

The workbook names a personal-strategy lesson but does not provide the locked instructor’s full method. The process below helps you build an explicitly independent research model from concepts you have defined.

## Choose one family and one setting

Select one instrument, feed, session and timeframe pairing. Choose a baseline family whose context, location and confirmation you understand. Keep the remaining entry names in the catalog while you collect a coherent sample.

Write the rules as a sequence with expiration. A proposed research model could require a premarked reference interaction, a specified structural confirmation and the first permitted revisit of a zone formed by that confirmation. Every term in that sentence still needs its own boundary and timestamp rule.

A public comparison is [TTrades’ three-step model](https://ttrades.com/a-simple-3-step-trading-model-full-breakdown/). It illustrates how components can be organized; it is not evidence that your independent combination inherits an edge.

## Specify the transaction

State when the order is placed, its type and price, whether it expires and how ambiguous fills are handled. Write stop placement, target, management and time exit. Define costs in compatible units.

For hypothetical arithmetic, a simulated account has a 100-unit risk budget. A linear contract’s stop loss is 20 ticks at 2 currency units per tick, with estimated additional round-trip costs of 4 per contract. Planned loss per contract is 44, so two contracts use 88 and three exceed the budget.

This is an invented sizing example. Use actual contract specifications, permitted increments and currency conversions for your simulation. [CME’s sizing lesson](https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size) explains the relationship between stop distance and quantity.

## Make behavior part of the specification

Write concurrent-exposure limits, session stop conditions and responses to execution errors. A reset routine can require saving the record, checking the next decision against the same rules and ending observation if attention is no longer adequate.

Keep losing trades separate from rule violations. A rule-following loss belongs to the model’s outcomes; an unauthorized entry also reveals a process problem. A profitable unauthorized entry does not repair that problem.

## Freeze before evaluating

Assign a version and choose development dates. After development, freeze the revised rules before opening the later evaluation period. If you tune against that period, reserve another one for evaluation.

Your first deliverable is a one-page playbook plus detailed definitions it references. A second marking pass should produce similar eligibility decisions. When disagreement remains, improve the missing definition before interpreting performance statistics.

## Workbook basis and further reading

This original article expands [workbook lesson 18](../lessons/18-personal-strategy.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - a simple three-step trading model](https://ttrades.com/a-simple-3-step-trading-model-full-breakdown/)
- [TTrades - how to backtest, step by step](https://ttrades.com/how-to-backtest-a-clear-step-by-step-approach/)

## Video resources

- [TTrades — A Simple 3-Step Trading Model (Full Breakdown)](https://www.youtube.com/watch?v=5Be2jPftFFw) — Video companion to the workbook’s 3-step model article, showing how context, location and confirmation fit into one playbook.
- [TTrades — Position Sizing For Trading: Futures & Forex](https://www.youtube.com/watch?v=0OjlQ91TZiU) — Demonstrates calculating contract/lot size from stop distance and a fixed risk budget.
- [TTrades — Stop Losses in Trading: Know When You're Wrong](https://www.youtube.com/watch?v=JHVaSKtE1Ys) — Explains defining mechanical stop-loss invalidation points before entering a trade.
- [Mulham Trading — How to Build a Trading System That Actually Works (3 Steps)](https://www.youtube.com/watch?v=zDYSmAzA9vg) — Guides you through assembling a rules-based trading plan and checklist (see also [My Full Trading Plan Step by Step](https://www.youtube.com/watch?v=nX_TB0yvUO0)).
- [FX Journal — My Own Trading Strategy That Changed My Career: Complete Master Plan (Bengali)](https://www.youtube.com/watch?v=tmmLm3XhcTo&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro) — Shares a personal SMC trading playbook and execution checklist in Bengali (paired with [Trading Psychology: Why Are You Still Losing?](https://www.youtube.com/watch?v=VqqHL9ZZDSk)).
- [Learn SMC With Kushal — Master Trading Psychology & Risk Management (Bengali)](https://www.youtube.com/watch?v=5wPAmIk8suU) — Discusses risk discipline, position sizing and avoiding emotional rule violations in Bengali.

[← Quarterly theory: make the time hypothesis falsifiable](23-quarterly-theory.md) · [Candle Range Theory: separate the anchor, sweep and confirmation →](21-crt-tbs.md)
