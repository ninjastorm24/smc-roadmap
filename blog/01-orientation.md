# Before the patterns: build a workspace you can learn from

Chart basics, orders, costs and a journal that makes practice useful.

**Lesson 01 · Week 1 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/01-orientation.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-1)

A chart becomes much more useful when you know what information it contains and what decision you are trying to make. Your first learning session should leave you with a stable workspace and a record of your reasoning. A screen full of indicators can wait.

## Start with the candle

A candle records the open, high, low and close over its interval. It compresses everything that happened inside that interval. Two candles with identical OHLC values can hide different sequences of trades, so a finished candle does not tell you whether a target or stop was reached first.

For a hypothetical candle with open 100, high 106, low 98 and close 104, you know that its closing price exceeded its opening price. You do not know who bought, why they bought, or what happened first between the high and low. Keep those limits in mind when you later study institutional-sounding labels.

Choose one instrument and feed, then fix your context, setup and execution timeframes. Record the timezone. If you keep changing feeds or session boundaries, the candles themselves can change, making your marking practice difficult to compare.

## Understand the order behind the rectangle

A market order prioritizes execution over a specified price; a limit order restricts the price but may remain unfilled. A stop order introduces a trigger whose subsequent execution depends on the order type and venue. Learn the exact behavior in your simulation platform before assuming that a drawn entry line equals an executable trade.

Also distinguish a price point, tick, unit and contract. A move of one chart point does not have the same cash value in every instrument. CME’s [tick-size lesson](https://www.cmegroup.com/education/courses/introduction-to-futures/tick-movements-understanding-how-they-work) explains this for futures. Record specifications for the product you actually study.

## Give every exercise a question

A useful first exercise is: “Can I identify a confirmed swing using the same rule twice?” Another is: “Can I save a decision before revealing the next candle?” Both produce something you can review.

Open a concept note and record your rule, screenshot and uncertainty. Keep observations separate from simulated trades. A pattern selected after its success is visible belongs in the example library, not an unbiased performance sample.

For historical work, verify the simulation mode. TradingView’s [Replay Trading documentation](https://www.tradingview.com/support/solutions/43000691889-learn-to-trade-on-historical-data/) distinguishes historical trading from ordinary Paper Trading. Export or otherwise save your records outside the session.

## Your first finished session

Label OHLC on five candles, mark yesterday’s high and low, and write the chart timezone. Place a practice order whose size and stop you can explain. Save one screenshot and one question you could not answer.

That is enough to begin. The next lesson will give your workspace a specific task: distinguishing a correction from evidence that a larger move has changed.

## Workbook basis and further reading

This original article expands [workbook lesson 01](../lessons/01-orientation.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [BabyPips - School of Pipsology](https://www.babypips.com/learn/forex)
- [TradingView - Paper Trading help](https://www.tradingview.com/support/solutions/43000516466-paper-trading-main-functionality/)

## Video resources

- **FX Journal** — [Smart Money Concept (SMC) Full Course Free | Learn Forex Trading in Bangla | Part 1](https://www.youtube.com/watch?v=BPUYL1mAuH8&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Foundational Bangla orientation to Smart Money Concepts, OHLC candle reading, and institutional market structure.
- **FX Journal** — [Market Structure Mapping | BOS, CHOCH, INDUCEMENT | Forex Trading Full Course Bangla](https://www.youtube.com/watch?v=9i-NSfObEsw&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Comprehensive Bangla walkthrough of end-to-end market structure mapping across BOS, CHoCH, and Inducement.
- [TTrades — Market Order vs Limit Order: When to Use Each in Trading](https://www.youtube.com/watch?v=cH97e2yqJmY) — Explains execution mechanics, slippage and when to use market versus limit orders.
- [TTrades — Open High Low Close: Understanding Candlesticks](https://www.youtube.com/watch?v=sIcsLFSNoXM) — Breaks down candlestick OHLC construction and how intrabar price movement forms wicks and bodies.
- [TTrades — TradingView Tutorial For Beginners (Full Guide)](https://www.youtube.com/watch?v=JPVhmPZiLKY) — Walks through workspace setup, chart tools and layout configuration on TradingView.
- [TTrades — How To Journal Everyday For Trading](https://www.youtube.com/watch?v=wrIZ7CAuFCc) — Shows how to structure a daily trading journal around observations and rule tracking.
- [Mulham Trading — Trading Explained For Complete Beginners in 19 Minutes](https://www.youtube.com/watch?v=ql1UeXhsvVk) — Covers foundational chart reading, market mechanics and order basics for new learners.
- [Learn SMC With Kushal — Candlestick Psychology: Secrets of the Charts (Bengali)](https://www.youtube.com/watch?v=oyQPcmqOQNo) — Introduces candlestick anatomy, OHLC interpretation and chart reading in Bengali.
- [FX Journal — How to Use MetaTrader 5 on Your Phone: MT5 Tutorial for Beginners (Bengali)](https://www.youtube.com/watch?v=lzwDMMyUXbs) — Demonstrates order types, stop-loss placement and execution setup on MT5.

[Reading pullbacks without predicting every reversal →](02-pullback-identification.md)
