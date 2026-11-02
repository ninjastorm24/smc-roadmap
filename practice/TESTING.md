# Test one model and review the evidence

[Roadmap](../SOLO_LEARNING_ROADMAP.md) · [Entry card](../templates/ENTRY_CARD.md) · [Trade journal](../templates/TRADE_JOURNAL.md)

Based on DOCX Appendix C and lessons 18, 24–26. Sampling, cost accounting and fill details below expand the workbook’s protocol.

## 1. Separate learning from testing

Use completed charts to learn definitions and collect counterexamples. Those selected examples are a **study library**. Do not report their win rate as an unbiased test result.

Then choose a continuous historical date range before seeing outcomes, freeze the rules and advance without future candles. Keep every eligible opportunity and every rule-based no-entry session. Use [TTrades’ backtesting article](https://ttrades.com/how-to-backtest-a-clear-step-by-step-approach/) for the learning-to-testing transition and [QuantStart’s bias discussion](https://www.quantstart.com/articles/Successful-Backtesting-of-Algorithmic-Trading-Strategies-Part-I/) for look-ahead and optimization pitfalls. QuantStart was available in search excerpts but its direct web fetch returned 503 during research.

## 2. Freeze the playbook

Complete an [entry card](../templates/ENTRY_CARD.md), including:

1. Instrument/feed, timeframes, session, timezone and model version.
2. Context, range anchors and exact liquidity/POI selection rule.
3. Trigger, entry price/order type, expiry and eligible retests.
4. Invalidation, stop, target, management and time exit.
5. Sizing, simultaneous exposure, session/week stop conditions.
6. Costs, event exclusions, no-entry conditions and ambiguous-fill policy.
7. Sampling dates, journal fields and review criteria.

Missing TBS or another instructor-specific rule means the combined model is incomplete. You can test a separately labeled public or self-defined model while keeping that missing term unresolved.

## 3. Run the stages in order

| Stage | Sample / duration from the workbook | Purpose |
|---|---|---|
| First blind exercise | 20–30 scenarios in week 8 | Check whether rules and recordkeeping are usable |
| Extended historical work | 50–100 setups where available | Inspect behavior across more opportunities; small samples remain uncertain |
| Later evaluation period | Reserved before testing it | Check frozen rules on different data |
| Forward simulation | Four weeks, then extend if needed | Observe new opportunities and simulated execution |

Preselect dates rather than stopping as soon as results look good. If few signals appear, extend by a calendar rule written in advance; do not manufacture setups. The first blind exercise may become part of the development sample if rules and records are compatible. It must never be counted twice or relabeled as untouched evaluation data.

Revise rules only between samples, give the revision a new version and keep the old results. If you change rules after inspecting evaluation outcomes, that period becomes development evidence; reserve another period for evaluation. A no-signal day is valid completed observation, not a zero-R trade.

## 4. Model fills and costs consistently

- Log decision time separately from entry/fill time. A candle-close signal cannot receive an earlier favorable fill.
- A touch of a limit price is not automatic proof of a fill; write a conservative assumption before testing.
- If a bar touches both stop and target and sequence is unknown, inspect permitted lower-timeframe data or apply a predeclared conservative rule. Flag the ambiguity; do not assume target first.
- Apply spread, fees and slippage in compatible currency units. If simulated fills already include spread/slippage, do not subtract them again.
- Record gaps, missed fills and price moves beyond a planned stop. A stop does not guarantee the final loss is exactly 1R.

For a simple linear contract, an educational sizing calculation is:

```text
planned price loss per unit = stop distance in ticks × tick value
planned total loss per unit = planned price loss + costs not already included
quantity = round down to allowed size increment(
    simulation risk budget / planned total loss per unit
)
```

If the smallest permitted quantity exceeds the budget, record no entry. Apply contract multipliers and currency conversion correctly; this simplified formula is not for nonlinear products. See [CME’s position-size lesson](https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size).

## 5. Use one R convention

Choose and record the fixed initial risk denominator for each trade. Do not change it after a stop is moved. If you define 1R as price risk excluding costs, a stopped-out trade can be below −1R after costs.

```text
gross R = gross P&L / initial planned risk in account currency
cost R  = costs not already included in gross P&L / initial planned risk
net R   = gross R − cost R
mean net R = sum(net R) / completed trade count
```

Example using invented simulation numbers: initial risk is 100 units of account currency; gross results are `+200, −100, 0`; additional costs are `10, 10, 10`. Net results are `+1.9R, −1.1R, −0.1R`; mean net R is approximately `+0.233R`. The gross breakeven is a net loss. This illustrates arithmetic only.

The workbook’s alternative expectancy formula uses **gross** average wins/losses if average costs are subtracted afterward. If your winners and losers are already net, omit the extra cost subtraction. Averaging net R directly is simpler.

## 6. Write a review that can change your mind

| Metric | Definition |
|---|---|
| Coverage | Observation days, eligible opportunities, taken entries, missed entries and no-entry days |
| Sample size | Completed trades; show counts for each model version and test stage |
| Win rate | Net-positive completed trades / all completed trades; report net-negative and zero counts too |
| Average win / loss | Average positive net R / absolute average negative net R |
| Mean net R | Sum of net R divided by completed trades; undefined with no trades |
| Profit factor | Sum of positive net R / absolute sum of negative net R; undefined with no losses |
| Drawdown | Largest peak-to-trough decline in chronological cumulative net R, starting at zero |
| Adherence | Completed trades following all required rules / completed trades |
| Opportunity capture | Eligible entries taken / all eligible opportunities observed |
| Sensitivity | Whether plausible higher costs or uncertain fills change the conclusion |

The cumulative-R curve is a normalized diagnostic. It is not a compounded account-equity curve when position risk varies. Mark zero-denominator metrics as `N/A` rather than zero or infinity. Small condition subgroups are descriptive, not reliable new filters.

## 7. Four-week paper phase

- **A:** Aim for 10–15 observations if available; verify consistent markings and decision timestamps.
- **B:** Run the unchanged playbook and record actual simulated fills.
- **C:** Continue without midweek edits; retain missed signals, overrides and no-entry sessions.
- **D:** Review net R, drawdown, adherence and errors. Extend when opportunities are too sparse.

Use the [weekly review](../templates/WEEKLY_REVIEW.md). Choose **continue** for clearer observation under the same rules, **refine** for one documented rule problem followed by a new version, or **archive** when definitions or results do not justify more work. Record why and preserve the failed model’s evidence.

The intended result is an honest research record. Neither a completed calendar nor a positive small sample establishes a durable edge.
