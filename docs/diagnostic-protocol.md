# The Diagnostic Protocol ("The Sorting Hat")

> Accurately assessing each mentee's baseline ensures they start at the right branch of the curriculum matrix.

---

## Theoretical Basis

The diagnostic bypasses the **Dunning-Kruger effect**—where students over- or underestimate their skills. Instead of asking *"Do you know how to use files?"*, the Mentor **observes the method of execution**.

We focus on the **Process**, not just the **Product**. The key question:

> Does the student see the computer as a magic box of apps (iPad Native) or as a structured hierarchy of containers (Tinkerer)?

---

## The 5-Minute Practical Test

> **Context for Mentor**: This is NOT a test. Frame it as a "Setup Game" or "Scavenger Hunt" to prepare the computer for modding. **Observe speed and method of execution.**

---

### Task 1: The "Screenshot Scavenger Hunt" (File Systems)

**Objective**: Determine if the student understands file paths, extensions, and directory creation.

**Mentor Script**:
> *"Okay, first challenge to get our badge. I want you to take a screenshot of your current desktop background. Save that picture as `secret_base.png`. Then, I need you to create a new folder on your desktop called `BlockBuddies` and move that picture inside it."*

#### Observation Metrics

| Profile | Observed Behaviors |
|---------|-------------------|
| **iPad Native (Level 0)** | Takes a photo of screen with phone. Searches Start Menu for "folder." Leaves file in "Downloads" or "Recent Files" and cannot move it. Struggles with right-click context menus. |
| **Gamer (Level 1)** | Uses Print Screen but pastes into Word or Paint. Can save, but relies on default location. Drag-and-drop is hesitant. |
| **Tinkerer (Level 2)** | Uses `Win+Shift+S` or `Cmd+Shift+4`. Right-clicks desktop → New Folder immediately. Renames file during save process. |

---

### Task 2: The "Mod Check" (Navigation)

**Objective**: Determine familiarity with the Minecraft application data structure.

**Mentor Script**:
> *"Have you ever played with mods before? Show me where your Minecraft mods folder is hiding on this computer."*

#### Observation Metrics

| Profile | Observed Behaviors |
|---------|-------------------|
| **iPad Native (Level 0)** | "What is a folder?" or "I usually play on my iPad." Looks at desktop for a game icon. |
| **Gamer (Level 1)** | Opens Minecraft Launcher and looks through game menus. Knows it exists but relies on a mod-loader app (CurseForge) to manage it. |
| **Tinkerer (Level 2)** | Opens File Explorer. Navigates to `%appdata%/.minecraft/mods` (Windows) or `~/Library/Application Support/minecraft/mods` (Mac) without hesitation. |

---

### Task 3: The "Motivation Probe" (Archetype Assignment)

**Objective**: Align curriculum with student's intrinsic motivation to ensure sustained engagement.

**Mentor Script**:
> *"If you were the Lead Developer of Minecraft and could add ONE thing right now, what would it be? A giant castle with furniture, a robot that mines diamonds for you, or a ban hammer to stop your brother from messing up your world?"*

#### Archetype Assignment

| Response | Archetype | Entry Point |
|----------|-----------|-------------|
| Castle/Furniture | **The Visualist** (Builder) | Resource Packs, Shaders |
| Robot/Mining | **The Mechanist** (Engineer) | Redstone, Create Mod |
| Ban Hammer/Rules | **The Operator** (Admin) | Server Properties, Permissions |

---

## The Decision Tree Matrix

Based on observations, assign a **Profile Code**. This code is the key to the rest of the curriculum.

### Tech Fluency Profiles

| Level | Profile Name | Indicators & Behaviors | Instructional Strategy |
|-------|--------------|------------------------|------------------------|
| **0** | The iPad Native | Cannot distinguish between internet search and local files. Struggles with right-click/left-click context. No concept of "save location." | **Heavy Scaffolding.** 80% of time on OS navigation. Use analogies (House = Drive, Room = Folder). Frequent "Win Buttons." |
| **1** | The Gamer | High dexterity in-game. Can install software via wizards but fears "breaking" the computer. Relies on GUI tools exclusively. | **Bridge Building.** Leverage game confidence to teach backend logic. "To fix the lag, we must edit the file." Consumer → Creator transition. |
| **2** | The Tinkerer | Has broken the game before. Familiar with `%appdata%`. May have copied/pasted code but doesn't understand syntax. | **Challenge Mode.** Focus on *why* things work. Introduce syntax discipline and debugging workflows. Allow them to fail safely. |

### Archetype Profiles

| Code | Profile Name | Focus Areas | Entry Point |
|------|--------------|-------------|-------------|
| **A** | The Visualist | Aesthetics, colors, lighting, textures | Resource Packs (JSON), Shaders (Rendering Pipeline) |
| **B** | The Mechanist | Automation, farms, efficiency, complex systems | Redstone (Logic Gates), Create Mod (Physics/Kinetic Energy) |
| **C** | The Operator | Control, rules, multiplayer dynamics, commands | Server Properties, Permissions (Boolean Logic), Command Blocks |

---

## Example Profile Assignments

```
Student: Alex (Age 11)
├── Task 1: Used phone to photograph screen → Level 0
├── Task 2: "I play on iPad mostly" → Level 0
└── Task 3: "A robot that farms for me!" → Archetype B

Profile Code: 0-B (iPad Native / Mechanist)
Curriculum Path: Heavy scaffolding on file systems, 
                 then Redstone logic entry point
```

```
Student: Jordan (Age 13)
├── Task 1: Win+Shift+S, renamed during save → Level 2
├── Task 2: Navigated to %appdata% immediately → Level 2
└── Task 3: "I want my own server with ranks" → Archetype C

Profile Code: 2-C (Tinkerer / Operator)
Curriculum Path: Skip to Core Trunk Module 2,
                 then Server Administration track
```

---

## Recording the Assessment

After completing the 5-minute diagnostic, record:

| Field | Value |
|-------|-------|
| **Mentee Name** | |
| **Date** | |
| **Tech Fluency Level** | 0 / 1 / 2 |
| **Archetype** | A (Visualist) / B (Mechanist) / C (Operator) |
| **Profile Code** | e.g., "1-B" |
| **Notes** | Any special observations |
| **Starting Module** | Based on matrix |

---

## Adjusting the Profile

The initial assessment is a **starting point**, not a permanent label.

- **Re-assess after 2-3 sessions** if the profile seems off
- **Level up** when skills demonstrably improve
- **Switch archetypes** if motivation shifts (this is normal!)

> The Mentor's job is to calibrate, not categorize.

---

## Related Documents

- [Core Trunk (Universal Skills)](core-trunk.md) — Where all students begin after assessment
- [Track A: The Visualist](track-a-visualist.md)
- [Track B: The Mechanist](track-b-mechanist.md)
- [Track C: The Operator](track-c-operator.md)
