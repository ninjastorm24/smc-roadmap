# Set up your study workspace

[Roadmap](../SOLO_LEARNING_ROADMAP.md) · [Lesson 01](../lessons/01-orientation.md)

Based on the DOCX study system and lesson 01, with added platform and recordkeeping details.

## Before the first lesson

- [ ] Choose one instrument and data feed; record its exact symbol and, if applicable, contract month.
- [ ] Choose fixed context, setup and execution timeframes. Daily → 1H → 5m/15m is a workbook example, not a requirement.
- [ ] Record chart timezone, session definition, candle type and available historical data.
- [ ] Create the workbook’s five chart layouts: blank candles, swings, liquidity, price zones and top-down analysis.
- [ ] Learn your instrument’s price increment, unit/contract value, fees, spread assumptions and trading hours.
- [ ] Create a journal and screenshot folder. A spreadsheet is fine for calculations; the supplied Markdown templates also work.
- [ ] Write simulation-only sizing, concurrent-exposure, session and weekly stop rules before placing practice orders.

For forex foundations, use the workbook’s [School of Pipsology](https://www.babypips.com/learn/forex). For futures, add CME’s [tick movements](https://www.cmegroup.com/education/courses/introduction-to-futures/tick-movements-understanding-how-they-work) and [position sizing](https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size). Check your chosen product’s current specifications before using numerical examples.

## Choose the right simulation mode

| Task | Mode | Save |
|---|---|---|
| Learn a pattern on a finished chart | Historical annotation | Mark it as an observation, not a blind trade |
| Make decisions without future candles | Historical replay / Replay Trading | Decision timestamp, fill assumptions, screenshots and exported results |
| Follow new sessions as they happen | Paper Trading | Submitted orders, simulated fills, missed entries and rule adherence |

TradingView’s **Replay Trading** uses historical data; ordinary **Paper Trading** orders use real-time data even when a chart is in replay. Verify the active mode. Save/export replay results before leaving the session. See the official [replay controls](https://www.tradingview.com/support/solutions/43000474024-how-do-i-turn-bar-replay-on/) and [historical trading guide](https://www.tradingview.com/support/solutions/43000691889-learn-to-trade-on-historical-data/).

Use the workbook’s [Paper Trading help](https://www.tradingview.com/support/solutions/43000516466-paper-trading-main-functionality/) or [CME simulator FAQ](https://www.cmegroup.com/articles/faqs/trading-simulator-faq.html) for forward simulation. Check account/data requirements. If your platform lacks suitable replay, hide future candles and advance manually, logging hypothetical fills with conservative assumptions; label this as manual replay.

## Keep your evidence readable

Suggested personal folders (create them when you start collecting work):

```text
study-log/
  concepts/
  sessions/
  model-cards/
  reviews/
  screenshots/
    week-01/
    week-02/
  tests/
    development-v1/
    evaluation-v1/
    forward-v1/
```

Use `YYYY-MM-DD_SYMBOL_TIMEFRAME_LESSON_STAGE.png`, for example `2026-11-02_SYMBOL_15m_L03_before.png`. Keep a matching `after` image. State the timezone inside the note, and do not include outcome-based names such as “winner” in files you will use for blind exercises.

Assign each example an ID. Write the formation candle **and the later candle that confirms it**, if confirmation requires later information. Freeze the note before advancing replay. If you correct a label later, retain the original and explain the correction.

## Sessions and Dhaka time

Record both the market’s named timezone (for example `America/New_York` or `Europe/London`) and `Asia/Dhaka`, with the session date. Convert for that date instead of using one year-round offset. Lesson 16 specifically asks for Bangladesh times and daylight-saving awareness.

For U.S. event context, consult the [Fed’s dated meeting materials](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) and [BLS release calendar](https://www.bls.gov/schedule/). Use equivalent official sources for other markets. In a historical test, use the historical schedule and information available at the time.

## First session output

Finish with one clean chart, five OHLC-labeled candles, yesterday’s high/low, a filled setup note, a blank journal and one simulated order whose planned risk you can explain. Continue with [lesson 02](../lessons/02-pullback-identification.md) after lesson 01’s mastery check.
