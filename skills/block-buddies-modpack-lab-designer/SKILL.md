---
name: block-buddies-modpack-lab-designer
description: Use when designing, expanding, auditing, or productizing Block Buddies Stage 2 Modpack Lab sessions, modpack literacy activities, controlled profiles, configs, resource/data packs, dependencies, or modded Minecraft safety constraints.
---

# Block Buddies Modpack Lab Designer

## Overview

Design Stage 2 Modpack Lab as a controlled software lab, not a random modding adventure. Learners should understand, change, test, and explain modded Minecraft systems without falling into installation chaos or Java dependency hell.

Core principle: one prepared environment, one safe change, one observable test, one explanation.

## When to Use

Use this skill when:
- Working on Stage 2 S09-S16 or any modpack/modding curriculum.
- Choosing approved mods, loaders, profiles, files, configs, resource packs, data packs, or dependency examples.
- Creating known-good or known-broken profiles.
- Writing mentor setup, reset, troubleshooting, or pack-readiness instructions.
- Adding Stage 2 fields to curriculum data or lesson workspace UI.

Do not use this to teach full Java mod development by default. That belongs in a later stage after learners are ready for code, build tools, and deeper debugging.

## Non-Negotiable Safety Contract

Every Stage 2 lesson must specify:

| Field | Requirement |
|---|---|
| Approved launcher/profile | One workflow for the cohort |
| Minecraft version | Locked and explicit |
| Loader | Fabric/Forge/NeoForge/Quilt/etc. explicit and locked |
| Pack version | Named version or date-stamped build |
| Approved mod list | No learner-selected random downloads during session |
| Required files | Config/resource/data/world/profile files used |
| Known-good test | How mentor proves the pack works before session |
| Reset instructions | How to restore clean state quickly |
| Known-broken artifact | Only when debugging is the planned lesson |
| Tech-support boundary | Clear “Do Not Let This Become Tech Support” box |
| Device constraints | RAM/performance notes if relevant |
| Evidence | What learner captures to prove understanding |

## Stage 2 Arc

Use the guide’s S09-S16 ladder unless intentionally changing canon:

| Session | Concept | Output |
|---|---|---|
| S09 | Mods, modpacks, profiles, safe installs | Launch curated pack and identify changes |
| S10 | Information systems, UI, search | Use recipe viewer to solve scavenger hunt |
| S11 | Representation/assets/accessibility | Modify/apply small resource pack |
| S12 | Parameters, variables, balance | Change one safe config and test effect |
| S13 | Data-driven rules | Add/modify recipe/reward/challenge rule |
| S14 | Dependencies, versions, crash diagnosis | Fix prepared missing/incompatible dependency |
| S15 | Systems, throughput, bottlenecks | Build small modded machine/automation chain |
| S16 | Product design, testing, documentation | Present tiny curated modpack experience |

## “Do Not Let This Become Tech Support” Box

Every Stage 2 mentor-facing lesson needs this box. Include session-specific limits:

- Do not troubleshoot a random real crash for the whole session.
- Use the prepared known-good or known-broken profile only.
- If blocked beyond the time limit, restore from clean profile.
- Learner diagnoses one planned issue, not the entire modding ecosystem.
- No learner downloads from unknown sites.
- No public servers or unmanaged multiplayer.

Default hard stops:
- 5 minutes for launch/profile confusion before mentor resets.
- 10 minutes for planned dependency/config diagnosis before fallback.
- Immediate fallback for unsafe download, unknown file source, or machine instability.

## Mod Selection Rules

Choose mods by learning value and operational stability, not popularity.

Prefer:
- Clarity/interface mods: recipe viewer, map/waypoints, tooltips, inventory helper.
- Visual/resource changes: textures, labels, accessibility cues.
- Configurable systems: safe values with obvious before/after behavior.
- Data-driven changes: recipes, loot, tags, simple functions.
- One systems mod at a time for automation/bottlenecks.

Avoid in MVP:
- Large kitchen-sink packs.
- Mods requiring account, network, or public-server setup.
- Unstable alpha builds.
- Anything requiring learners to browse mod sites unsupervised.
- Full Java modding, Gradle, IDE setup, or arbitrary `.jar` management.

## Lab Design Pattern

For each lab:

1. State the system concept.
2. Show the known-good state.
3. Let learner observe one change.
4. Let learner make one controlled change.
5. Test before/after behavior.
6. Capture evidence.
7. Explain what changed and why.
8. Reset or preserve artifact intentionally.

## Stage 2 Capstone Rules

S16 is a product/design/test artifact, not “download a big pack and vibe.” Require:

- 3-6 approved mods.
- One theme or player promise.
- One config change.
- One resource/data-pack change where appropriate.
- One test plan.
- One player guide.
- One debug log or known issue note.
- One showcase.

Design Fit may be used for capstone/advanced learners, but Do / Explain / Debug remain the core mastery gates.

## Output Contract

Return:
1. Stage 2 session or pack scope.
2. Required profile/loader/version/pack metadata.
3. Known-good, known-broken, and reset instructions.
4. Safety/tech-support boundary.
5. Learner task, gates, and evidence.
6. Open operational risks.

## Common Pitfalls

1. **Debugging the machine instead of teaching the learner.** Restore the profile and keep the lesson moving.
2. **Too many mods.** More features increase instability and cognitive load.
3. **Unbounded config edits.** One safe parameter change is enough.
4. **Dependency lesson becomes real dependency hell.** Use a prepared broken profile.
5. **Parent copy becomes jargon.** Translate loaders/dependencies/configs into safe experimentation, compatibility, and testing.

## Verification Checklist

- [ ] Launcher/profile workflow is explicit.
- [ ] Minecraft version, loader, and pack version are locked.
- [ ] Approved mod list is present.
- [ ] Known-good test exists.
- [ ] Reset instructions exist.
- [ ] Known-broken artifact is planned only when needed.
- [ ] Tech-support boundary box exists.
- [ ] Learner changes one controlled thing.
- [ ] Evidence and parent-safe summary exist.
