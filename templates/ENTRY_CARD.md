# Entry-model card — [name / version]

[Templates](README.md) · [Entry catalog](../reference/ENTRY_MODELS.md)

**Definition status:** defined / partially mapped / undefined
**Source and exact lesson / timestamp / URL:**
**Origin:** workbook / public variant / independently proposed
**Unresolved component:**
**Frozen date (only when complete):**

## Core rules

1. **Market and context:** instrument/feed, timeframes, session/timezone, directional filter.
2. **Location:** required liquidity event, range anchors, permitted POI and fixed boundaries.
3. **Confirmation:** exact observable event, candle-close requirement and first knowable time.
4. **Entry:** order type, entry level, permitted retests, fill assumption and expiry.
5. **Invalidation and exit:** stop, target, management rule and time-based exit.
6. **Risk and exclusions:** sizing convention, costs, exposure limit, event rules, session/week stop and other no-entry conditions.
7. **Test plan:** preselected dates, sample stage, ambiguous-fill policy and review criteria.

## Examples and agreement check

- Qualifying example ID:
- Nonqualifying example ID and failed condition:
- Ambiguous example and decision rule:
- Second-pass marking result:
- Can I decide eligibility before revealing the outcome?

## Version record

| Version | Date | One rule changed | Reason / development evidence | New evaluation period |
|---|---|---|---|---|
| | | | | |

- [ ] Every rule is observable at the decision time.
- [ ] All source-specific terms used in the trigger are defined.
- [ ] Costs, fills and exclusions are specified.
- [ ] The rules are frozen before the test sample is opened.
