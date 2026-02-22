# Troubleshooting Framework (V2)

## Purpose

Teach debugging as a reusable process while avoiding frustration spirals.

## Algorithm

1. Read the error/log text
2. Identify keyword or symptom class
3. Isolate one variable
4. Test and observe
5. Confirm fix and explain cause

## Controlled Friction Policy

- Start with learner-led diagnosis
- Apply recovery ladder when fluency threshold is reached
- Enforce 7-minute hard cap

## Error Atlas (Core)

| Error Class | Typical Cause | First Check |
|---|---|---|
| Exit Code 1 | version/dependency mismatch | loader + mod versions |
| Missing dependency | required library absent | dependency name in log |
| JSON parse error | syntax issue | comma/brace/quote integrity |
| Purple/black textures | wrong path or filename | asset path and case |
| Out of memory | heap limit too low | JVM args / RAM budget |
| Connection refused | server/firewall/IP issue | process running + network path |

## Required Debug Drill

Every learner must complete at least one seeded failure fix by Session 4 and one open-ended diagnosis by Session 6.

## Binary Search Rule

When multiple changes were made, isolate by halving suspects each test cycle.

## Recovery to Learning

After any fix, learner must answer:
1. What failed?
2. Why did it fail?
3. How would you prevent it next time?
