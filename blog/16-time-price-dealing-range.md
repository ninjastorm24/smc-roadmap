# Time and price: define the range, then define the clock

Sessions, OHLC references, kill zones and event windows need dated conventions.

**Lesson 16 · Week 5 · About 3 minutes**

[Series index](README.md) · [Lesson worksheet](../lessons/16-time-price-dealing-range.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-5)

A session label looks simple until you compare two traders’ charts. One uses exchange time, another uses New York time and another has converted a familiar hour to Dhaka once and reused it all year. Their candles and marked windows may no longer describe the same observations.

Time-and-price study works best when both the range anchors and the clock convention are written down before you inspect the session.

## Start with the dealing range

Specify the two confirmed structural extremes that define your range. Calculate its midpoint and state when a new extreme is permitted to replace an anchor. If you change the range, record the triggering rule and timestamp.

For a hypothetical 200–240 range, equilibrium is 220. Price at 214 is below that midpoint, but its position does not supply a complete entry. The session window, context and confirmation rules still need to qualify.

## Give every time reference a timezone

Record session opens, previous-day OHLC boundaries and any Asian, London or New York window used by your chosen model. These are conventions that must match the instrument and source.

Use named timezones such as `America/New_York`, `Europe/London` and `Asia/Dhaka`, together with the date. Daylight-saving changes can alter the local conversion. London and New York also do not switch clocks on identical dates every year, so one memorized offset is insufficient.

A model’s “kill zone” is a chosen study window. Being inside that window does not, by itself, satisfy a directional or entry condition. Keep “window open” and “setup qualified” as separate journal fields.

## Scheduled events belong in the plan

For relevant U.S. markets, consult the [Federal Reserve’s dated calendar](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) and [BLS release schedule](https://www.bls.gov/schedule/). Other markets need their own primary release sources.

Write your event-window policy before testing: for example, an explicitly chosen exclusion period or a separate observational category. The exact interval is your research choice. Do not exclude only the event days that later produce losses.

Historical event study also requires historical information timing. A release’s eventual revised value was not necessarily available at the original announcement.

## A complete time-price observation

Your note should contain range anchors, midpoint, directional hypothesis, relevant price reference, dated session window and the confirmation event you require. It should also state what expires when the window ends.

Build ten daily maps. Include windows with no signal, late confirmation and conflicting range information. Translate the selected windows into Dhaka time for each actual date. Your progress is the ability to reconstruct exactly what could have been observed at a given moment, even when the day never produces a usable setup.

## Workbook basis and further reading

This original article expands [workbook lesson 16](../lessons/16-time-price-dealing-range.md). Numerical examples and expressly proposed research rules are illustrative additions. Complete the worksheet’s full chart lab after reading.

- [TTrades - understanding dealing ranges](https://ttrades.com/understanding-dealing-ranges-in-trading-get-better-risk-reward/)
- [TTrades - important OHLC time levels](https://ttrades.com/mastering-important-time-levels-in-trading-with-ohlc-and-opposing-swings/)

[← Daily bias: write a hypothesis that can change your mind](15-daily-bias.md) · [From daily bias to a session plan someone else can follow →](17-applying-bias.md)
