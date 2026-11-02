# Lesson 18 — Personal Trading Strategy

[Roadmap](../SOLO_LEARNING_ROADMAP.md#week-7) · [All lessons](README.md) · [Progress](../PROGRESS.md)

**Week 7 · Original class runtime: 1h 44m 47s**

**Source:** Adapted directly from the DOCX class sheet. Its six study steps, chart lab and mastery check are preserved below. Public links teach related concepts; they do not reproduce a private class.

**Study budget:** 45–75 minutes learning + 45–60 minutes chart lab, plus review. Extend the week when the evidence takes longer.

## Outcome

Write one complete, falsifiable setup with risk and performance metrics.

## Study in order

1. Choose one market, one session and one setup family (for example liquidity sweep + MSS + FVG); decline to combine 20 models.
2. Specify every precondition: bias timeframe, liquidity marker, confirmation timeframe, entry trigger, invalidation and target.
3. Define no-trade rules for spread/slippage, news, missing displacement, weak risk/reward or late session timing.
4. Set simulated position sizing based on predetermined risk per trade and hard session/week stop limits.
5. Choose backtest sampling rules that prevent selecting only winning charts; include realistic costs and missed fills.
6. Write performance metrics: sample size, expectancy in R, win rate, average win/loss, drawdown and rule adherence.

## Resources from the workbook

- [TTrades - a simple three-step trading model](https://ttrades.com/a-simple-3-step-trading-model-full-breakdown/)
- [TTrades - how to backtest, step by step](https://ttrades.com/how-to-backtest-a-clear-step-by-step-approach/)
- [Investor.gov - risks of day trading](https://www.investor.gov/additional-resources/spotlight/formerdirectorlorischock-directors-take/thinking-day-trading-know-risks)

## Chart lab

- [ ] Write your strategy on one page using exactly reproducible conditions.
- [ ] Test five potential examples with a classmate or a second marking pass; check whether labels agree.
- [ ] Prepare a blank trade journal and an error classification sheet.

## Mastery check

Can a stranger follow your rules without asking which FVG or swing you meant?

**Watch for:** A strategy story is not an edge until it survives out-of-sample and forward simulation.

## Added reading and practical notes

Optional supplements researched for this Markdown edition:

- [CME Group — Proper Position Size](../resources/README.md#n03) — Work three sizing examples, rounding down to a permitted quantity and including costs.
- [QuantStart — Successful Backtesting of Algorithmic Trading Strategies, Part I](../resources/README.md#n09) — Identify three ways future information could leak into your manual test.
- [TradingView — Paper Trading: main functionality](../resources/README.md#n10) — Record account settings and keep forward results separate from historical replay.

## Completion

- [ ] Primary resource studied
- [ ] Notes written in my own words
- [ ] Chart lab saved, including failures and ambiguities
- [ ] Mastery check answered without notes

[← Lesson 23](23-quarterly-theory.md) · [Lesson 21 →](21-crt-tbs.md)
