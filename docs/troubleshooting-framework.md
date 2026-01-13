# The Troubleshooting Framework (The Friction Points)

> This is the most critical skill in the Block Buddies program. We engineer friction so mentees learn to debug.

---

## Philosophy: Friction is the Teacher

In standard education, teachers often **remove friction** to facilitate smooth learning. In Block Buddies, we **engineer friction**.

The curriculum intentionally includes moments where things will break:
- Incompatible mods
- Syntax errors
- Configuration mistakes

This forces the Mentee to engage in the **Troubleshooting Loop**.

> **CSTA Standard 1B-AP-15**: Test and debug (identify and fix errors) a program or algorithm to ensure it runs as intended.

---

## The Troubleshooting Algorithm

When an error occurs, the Mentor must **NOT fix it immediately**. Guide the Mentee through this cognitive decision tree:

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: READ THE LOGS                                      │
│  "Don't just click close. What does the text say?           │
│   Computers tell us what hurts, we just have to listen."    │
├─────────────────────────────────────────────────────────────┤
│  STEP 2: IDENTIFY THE KEYWORD                               │
│  Look for specific error classes:                           │
│  • NullPointerException                                     │
│  • MissingDependency                                        │
│  • Exit Code (0, 1, etc.)                                   │
├─────────────────────────────────────────────────────────────┤
│  STEP 3: ISOLATE THE VARIABLE                               │
│  "We installed three mods. Which one is the traitor?        │
│   How do we find out?"                                      │
│  → Binary Search method: Remove half, test, repeat          │
├─────────────────────────────────────────────────────────────┤
│  STEP 4: GOOGLE-FU                                          │
│  Teach the art of the search query:                         │
│  • BAD: "Minecraft broken help"                             │
│  • GOOD: "Minecraft 1.20.1 Exit Code 1 Create Mod crash"    │
└─────────────────────────────────────────────────────────────┘
```

---

## Common Friction Points & Solutions Matrix

### Exit Code 1

| Aspect | Details |
|--------|---------|
| **Symptom** | Game crashes on launch, launcher shows "Exit Code 1" |
| **Technical Cause** | General Java Error / Mod Mismatch / Driver Issue. Often version incompatibility. |
| **Pedagogical Opportunity** | *"Code 1 is a generic 'I give up' from Java. We need to play detective. Did we mix Forge and Fabric mods? Those are two different languages."* |

**Resolution Strategies:**

| Tech Level | Approach |
|------------|----------|
| **Level 0 (Win Button)** | *"Let's delete the mods folder and put them back one by one until it breaks."* (Brute force) |
| **Level 2 (Challenge)** | *"Open the `latest.log` file in Notepad. Search for 'Exception' or 'Error'. Tell me what the first error line says."* (Log Analysis) |

---

### Missing Dependency

| Aspect | Details |
|--------|---------|
| **Symptom** | Crash report says "Mod X requires Y" |
| **Technical Cause** | A mod requires a library (e.g., Fabric API, Cloth Config) that's not installed |
| **Pedagogical Opportunity** | *"This mod is like a car, but we forgot to buy the wheels. Read the error—what 'part' is it asking for?"* |

**Resolution Strategies:**

| Tech Level | Approach |
|------------|----------|
| **Level 0** | Mentor provides the direct link to the missing file immediately |
| **Level 2** | Mentee must copy the filename from the error, find it on CurseForge/Modrinth, and verify version match |

---

### Purple/Black Textures

| Aspect | Details |
|--------|---------|
| **Symptom** | Items or blocks show as purple/black checkerboard |
| **Technical Cause** | Missing texture file or broken path in JSON |
| **Pedagogical Opportunity** | *"The game can't find the picture you promised it, so it uses this ugly purple as a warning sign. Check your file names."* |

**Resolution Strategies:**

| Tech Level | Approach |
|------------|----------|
| **Level 0** | *"Let's check the spelling of the file name together. Look, 'diamond' vs 'daimond'."* |
| **Level 2** | *"Check your JSON file structure. Did you use an uppercase letter? Minecraft assets must be lowercase only. Linux file systems are case-sensitive."* |

---

### Redstone Doesn't Power

| Aspect | Details |
|--------|---------|
| **Symptom** | Redstone signal stops before reaching destination |
| **Technical Cause** | Signal decay (Redstone only travels 15 blocks) |
| **Pedagogical Opportunity** | *"The electricity ran out of juice. It's too far. How do we boost the signal?"* |

**Resolution Strategies:**

| Tech Level | Approach |
|------------|----------|
| **Level 0** | *"Here is a Repeater block. Place it here."* |
| **Level 2** | *"I'm not telling you. Build a test line and count how many blocks the power travels before it dies. Then design a relay station."* |

---

### Out of Memory

| Aspect | Details |
|--------|---------|
| **Symptom** | Game freezes, crashes with "Out of Memory" or "Java Heap Space" |
| **Technical Cause** | Java Heap Space exhaustion—not enough RAM allocated |
| **Pedagogical Opportunity** | *"Your backpack is full. The game needs more RAM to hold all these mods."* |

**Resolution Strategies:**

| Tech Level | Approach |
|------------|----------|
| **Level 0** | Mentor shows where the RAM slider is in launcher settings |
| **Level 2** | Mentee must calculate available system RAM and modify JVM arguments (`-Xmx4G`) manually |

---

### Connection Refused (Server)

| Aspect | Details |
|--------|---------|
| **Symptom** | Cannot connect to server, "Connection Refused" error |
| **Technical Cause** | Firewall blocking, wrong IP, or server not running |
| **Pedagogical Opportunity** | *"The door is locked. Either the server isn't running, or your computer's security is blocking it."* |

**Diagnostic Checklist:**

| Check | Meaning |
|-------|---------|
| Is the server actually running? | Console should show "Done" |
| Are you on the same network? | LAN connections need same Wi-Fi |
| Is firewall allowing Java? | Check Windows Firewall / Mac Firewall |
| Are you using the right IP? | `127.0.0.1` only works on the same machine |

---

### JSON Parse Error

| Aspect | Details |
|--------|---------|
| **Symptom** | Resource pack won't load, datapack fails |
| **Technical Cause** | Syntax error in JSON file |
| **Pedagogical Opportunity** | *"Computers are very picky. One missing comma breaks everything."* |

**Common JSON Mistakes:**

| Mistake | Example |
|---------|---------|
| Missing comma | `"key": "value"` ← no comma before next line |
| Extra comma | `"key": "value",` ← trailing comma at end |
| Wrong quotes | `"curly quotes"` instead of `"straight quotes"` |
| Unclosed bracket | `{ "key": { }` ← missing outer `}` |

---

## Scaffolding Strategies (Vygotsky in Action)

The Mentor must dynamically adjust support based on the Mentee's **frustration level**. This is **ZPD Calibration**.

### Level 1: Modelling ("I do, you watch")

**Trigger**: Mentee is completely lost, or Tech Fluency 0.

**Action**: Mentor shares screen, narrating every click.

> *"I am clicking 'Save As', navigating to Desktop, typing the name..."*

---

### Level 2: Co-Construction ("We do together")

**Trigger**: Mentee understands the goal but forgets syntax or steps.

**Action**: Guide with questions, not answers.

> *"Okay, you have the file. Where did we say the mods folder lives? It starts with a percent sign..."*

---

### Level 3: Fading ("You do, I watch")

**Trigger**: Mentee has done this task at least once successfully.

**Action**: Remove scaffolding. Observe silently.

> *"I want you to install this new mod. I'm going to turn off my camera. Tell me when it's done."*

---

## The Binary Search Debug Method

When multiple changes were made and something breaks, find the culprit efficiently:

```
┌─────────────────────────────────────────────────────────────┐
│  SCENARIO: 8 mods installed, game crashes                   │
├─────────────────────────────────────────────────────────────┤
│  Step 1: Remove 4 mods (keep 4)                             │
│          → Does it work? YES → Problem is in removed 4      │
│          → Does it work? NO → Problem is in remaining 4     │
│                                                              │
│  Step 2: Remove 2 from suspect group (keep 2)               │
│          → Repeat test                                       │
│                                                              │
│  Step 3: Remove 1 from suspect group (keep 1)               │
│          → Found the culprit!                               │
├─────────────────────────────────────────────────────────────┤
│  8 mods → 3 tests to find the problem                       │
│  (vs 8 tests with one-by-one removal)                       │
└─────────────────────────────────────────────────────────────┘
```

**The CS Lesson**: This is a **Binary Search** algorithm—the same concept used in database lookups and computer science fundamentals.

---

## The "Panic Button" Recovery Procedures

When things go catastrophically wrong, these are the last-resort fixes:

| Situation | Recovery |
|-----------|----------|
| Game won't launch at all | Delete `mods/` folder, reinstall mod loader |
| Infinite death loop (command block) | Edit `server.properties`: `enable-command-block=false`, or use NBTExplorer to delete the block |
| Corrupted world | Restore from backup (Core Trunk Module 2!) |
| Can't remember what we changed | Check file modification dates (`Date Modified` column) |
| Nuclear option | Delete entire `.minecraft`, re-download game, restore only `saves/` from backup |

---

## Teaching the Google Search Skill

**Bad Searches:**
- "Minecraft broken"
- "Help my game crashed"
- "Mod not working"

**Good Searches:**
- "Minecraft 1.20.1 Fabric crash Exit Code 1"
- "Sodium mod requires fabric api which version"
- "resource pack purple textures missing"

**Formula:**
```
[Game/Mod Name] + [Version] + [Error Message] + [Context]
```

---

## Quick Reference: Error Message Keywords

| Keyword | Meaning |
|---------|---------|
| `NullPointerException` | Something expected data but got nothing |
| `ClassNotFoundException` | Missing file or dependency |
| `OutOfMemoryError` | Need more RAM allocated |
| `FileNotFoundException` | Wrong path or missing file |
| `NumberFormatException` | Typed text where a number was expected |
| `Exit Code 1` | Generic "something failed" (check logs!) |
| `Exit Code 0` | Success (not an error) |

---

## Related Documents

- [Core Trunk](core-trunk.md) — Backup procedures live here
- [Track A: Visualist](track-a-visualist.md) — Texture/JSON troubleshooting
- [Track B: Mechanist](track-b-mechanist.md) — Redstone/Create troubleshooting
- [Track C: Operator](track-c-operator.md) — Server/network troubleshooting
- [Mentor Pedagogy](mentor-pedagogy.md) — Scaffolding techniques
