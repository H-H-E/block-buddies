# Post-S08 Advanced Labs (Optional)

> **LEGACY PATHWAY (superseded by V3 canon, 2026-08-23):** This document describes the retired V2 fluency-archetype model (tracks, S01-S08 spine, Do/Explain/Debug). It is preserved for the advanced pathway and historical reference only. For current truth see [Product & Pedagogy Canon](../canon/product-canon.md) or [Canon](../canon/product-canon.md).

These lessons are optional extensions after the canonical `S01`-`S08` spine. They are designed for learners who completed Session 8 and want deeper project work.

## Contract

- Duration: 45 minutes each
- Gate model: Do/Explain/Debug
- Pacing: personalized (no calendar lock)
- Safety: same intervention and hard-cap rules as V2 canonical runbooks

## L09-A Resource Pack Packaging and Validation

### Track fit
- Primary: `A` Visualist
- Secondary: `B`/`C` learners who need file/package confidence

### Objective
Learner builds a valid packaged resource pack with metadata, icon, and one verified texture override.

### Prerequisites
- S08 complete
- Prior pack edit experience from S03-S05

### Materials
- Local resource-pack workspace
- JSON editor with syntax highlighting

### Core quest (20m)
1. Create/update `pack.mcmeta` in pack root.
2. Add/update `pack.png` icon.
3. Verify `assets/minecraft/...` override path for one texture.
4. Zip pack and load in client.

### Worked example seed
- Broken JSON comma in `pack.mcmeta`.

### Do/Explain/Debug gates
- Do: pack loads and override is visible.
- Explain: learner explains why root-level `pack.mcmeta` is required.
- Debug: learner fixes one metadata/path error without direct answer.

### Artifact
- `pack.mcmeta` + screenshot of active pack + before/after texture proof.

### Research notes
- `pack.mcmeta` identifies resource/data packs.
- `pack_format` defines compatible game versions.
- `pack.png` is optional but recommended for menu clarity.

## L09-B Gamerule Diagnostics Mini-Lab

### Track fit
- Primary: `B` Mechanist
- Secondary: `C` Operator

### Objective
Learner applies gamerule changes safely and verifies observed behavior changes.

### Core quest (20m)
1. Query current gamerule values.
2. Change one non-destructive rule.
3. Run quick behavior test and rollback.

### Worked example seed
- Mismatch between expected rule state and current world state.

### Do/Explain/Debug gates
- Do: applies and verifies one gamerule change.
- Explain: explains why controlled rollback is required after experiments.
- Debug: identifies wrong rule/value and restores expected behavior.

### Artifact
- Command log snippet + expected vs observed behavior note.

### Research notes
- Java syntax: `gamerule <rule name> [<value>]`.
- Arguments are case-sensitive in Java Edition.

## L10 Data Pack Load/Tick Function Lab

### Track fit
- Primary: `B`/`C`
- Secondary: advanced `A`

### Objective
Learner creates a basic data pack that runs one function on load and one function each tick.

### Core quest (20m)
1. Build data pack folder in world `datapacks` directory.
2. Add tags for `minecraft:load` and `minecraft:tick`.
3. Add minimal function files and run `/reload`.
4. Verify execution behavior.

### Worked example seed
- Missing namespace path causing silent non-execution.

### Do/Explain/Debug gates
- Do: both load and tick behavior execute as intended.
- Explain: learner explains what `/reload` updates and why some changes still need restart.
- Debug: learner resolves one tag/function path issue.

### Artifact
- Data pack folder tree + function output proof.

### Research notes
- Data packs load from `.minecraft/saves/<world>/datapacks`.
- `/reload` updates functions/tags/recipes and related assets.

## L11 Server Properties Safety Lab

### Track fit
- Primary: `C` Operator
- Secondary: `B`

### Objective
Learner performs controlled `server.properties` edits with restart-based validation and rollback plan.

### Core quest (20m)
1. Backup `server.properties`.
2. Change one safe setting (`motd`, `difficulty`, or `max-players`).
3. Restart server and verify effect.
4. Roll back to previous state.

### Worked example seed
- Edit made but not visible due to missing restart.

### Do/Explain/Debug gates
- Do: successful edit + validation + rollback.
- Explain: learner explains restart requirement for `server.properties` changes.
- Debug: learner diagnoses unchanged behavior and resolves cause.

### Artifact
- Before/after config diff + restart verification note.

### Research notes
- `server.properties` location is in server working directory.
- Restart is required for changes to take effect.

## L12 Paper Server Bootstrap Lab

### Track fit
- Primary: `C`
- Secondary: advanced `B`

### Objective
Learner boots a Paper server with a safe startup command and verifies baseline operation.

### Core quest (20m)
1. Confirm Java version compatibility.
2. Launch Paper with explicit memory flags.
3. Verify console startup and graceful shutdown.

### Worked example seed
- Wrong Java version for current Paper build.

### Do/Explain/Debug gates
- Do: successful local Paper startup and stop cycle.
- Explain: learner explains meaning of `-Xms`, `-Xmx`, and `--nogui`.
- Debug: learner resolves one startup failure cause.

### Artifact
- Startup command + console screenshot/log excerpt.

### Research notes
- Paper docs currently require Java version matching release track.
- Example startup command: `java -Xms4G -Xmx4G -jar paper.jar --nogui`.

## L13 Capstone Reliability Drill

### Track fit
- Any (`A`/`B`/`C`)

### Objective
Learner adds one reliability control to prior capstone and proves stability over repeated tests.

### Core quest (20m)
1. Choose one failure mode from S06-S08 logs.
2. Add one preventive control (validation check, safer default, rollback script, or checklist).
3. Run 3 repeated tests and record outcomes.

### Do/Explain/Debug gates
- Do: preventive control implemented and tested.
- Explain: learner explains why chosen control lowers risk.
- Debug: learner resolves one regression introduced by control.

### Artifact
- Reliability control description + three-run test table.

## Implementation Notes For Mentors

- Keep these labs optional and only unlock after S08 pass/support-pass.
- Use the same session log template and next-session condition rules.
- If learner confidence drops, downgrade to a mini-lab with one guaranteed win.

## References

- Paper Getting Started: https://docs.papermc.io/paper/getting-started/
- Minecraft Wiki `pack.mcmeta`: https://minecraft.wiki/w/Pack.mcmeta
- Minecraft Wiki `/gamerule`: https://minecraft.wiki/w/Commands/gamerule
- Minecraft Wiki Data Pack: https://minecraft.wiki/w/Data_pack
- Minecraft Wiki Resource Pack tutorial: https://minecraft.wiki/w/Tutorial:Creating_a_resource_pack
