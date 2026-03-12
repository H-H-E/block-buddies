# Mastery Gate Rubric

## Gate Structure

Each session is assessed with 3 gates:

- **Do**: Can the learner perform the core skill?
- **Explain**: Can the learner explain why it works?
- **Debug**: Can the learner recover from a common failure?

## Scoring

- `pass`: independent or minimal prompt
- `support-pass`: completed with structured prompts
- `fail`: unable to complete even with prompts

## Session Pass Rule

Session passes only if:

- `Do = pass` or `support-pass`
- and at least one of `Explain` or `Debug` is `pass` or `support-pass`

## Remediation Rules

- If `Do = fail`:
  - Repeat session theme next time
  - Reduce scaffolding complexity
- If `Debug = fail`:
  - Start next session with a 5-minute debug retrieval drill
- If both `Explain` and `Debug` fail:
  - No new side-quest unlocks in next session

## Sample Rubric Snippet

| Gate | Prompt | Pass Signal | Common Fail Signal |
|---|---|---|---|
| Do | "Show me how to find `.minecraft`." | Navigates without correction | Random searching, no path logic |
| Explain | "Why close the game before editing?" | Mentions overwrite/file lock behavior | "Because you said so" only |
| Debug | "Fix this missing comma JSON error." | Finds and corrects syntax issue | Repeats same edit loop blindly |

## Canonical Reference

Canonical policy source: [Pedagogy Engine V2](./engine-v2.md)
