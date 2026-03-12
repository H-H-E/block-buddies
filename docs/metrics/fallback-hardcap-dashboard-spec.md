# Fallback and Hard-Cap Dashboard Spec

## Purpose

Track where mentors and learners are hitting friction so curriculum and training can be adjusted quickly.

## Dimensions

- Session index (`S01..S08`)
- Track (`A/B/C`)
- Fluency (`0/1/2`)
- Mentor ID
- Week/cohort

## Core Charts

1. Fallback activation rate by session.
2. Hard-cap trigger rate by fluency band.
3. Repeat-session rate after `Do=fail`.
4. Debug retrieval frequency after `Debug=fail`.

## Alert Thresholds

- Hard-cap rate > 25% in any session index.
- Fallback spike > 15% week-over-week.
- Repeat-session rate > 20% in same session.

## Required Data Inputs

- Session log gate outcomes.
- Time-cap/fallback events.
- Next-session conditions.

## Canonical Reference

Canonical policy source: [Pedagogy Engine V2](../pedagogy/engine-v2.md)
