# The Core Trunk (Universal Skills)

> Before any specialized modding occurs, all students must master the Core Trunk. These are the "Hidden Computer Science" lessons.

The student thinks they are preparing to mod; the Mentor knows they are learning **Systems Administration**, **File Hierarchy Standards**, and **Data Safety**.

---

## CSTA Standards Alignment

| Module | CSTA Standard | Description |
|--------|--------------|-------------|
| Module 1 | 1A-CS-01 | Select and operate computing devices |
| Module 1 | 1B-CS-02 | Model how computer hardware and software work together |
| Module 2 | 2-AP-19 | Document programs to make them easier to follow |
| Module 2 | 1B-AP-15 | Test and debug a program |
| Module 3 | 1B-IC-18 | Discuss computing technologies that have changed the world |
| Module 3 | 2-NI-05 | Explain how security measures protect electronic information |

---

## Module 1: The "Digital Backpack" (File Systems & Navigation)

### The Problem

As identified in recent pedagogical studies, **Generation Alpha** often views the computer as a "magic box" where files disappear into a "cloud" rather than a hierarchical storage device. They may lack vocabulary for:

- Directories
- Extensions
- Paths

This **"File System Deficit"** is the primary barrier to technical literacy.

### The Objective

The Mentee will:
1. Navigate to the Minecraft directory using **absolute paths**
2. Create a dedicated workspace
3. Identify the difference between a **file extension** (`.jar`, `.json`) and a **file name**

---

### Differentiated Instruction: File Navigation

| Tech Fluency | Instructional Approach | Mentor Script | CSTA |
|--------------|----------------------|---------------|------|
| **Level 0** (Junior) | **The House Analogy.** The Hard Drive is the House. Users are the People. Desktop is the Living Room. We need to go to the "Basement" (AppData) where the pipes are. | *"We are going to find the secret brain of Minecraft. It's hiding in a folder called AppData. Think of it like a secret level in a game. We have to open the right doors to find it."* | 1A-CS-01 |
| **Level 1** (Senior) | **The Direct Path.** Focus on efficiency. Introduce `%appdata%` as a variable—a shortcut the computer uses to find your specific room in the house. | *"Stop clicking folders one by one. Hit `Win+R`. Type `%appdata%`. This is a 'variable' that tells Windows 'Find the current user.' It's faster and pro-level."* | 1B-CS-02 |
| **Level 2** (Any) | **The Command Line.** Skip the mouse. Introduce the terminal/command prompt for navigation (`cd`, `dir`, `ls`). | *"Real engineers don't drag-and-drop. Open PowerShell. Navigate to the `.minecraft` folder using only the keyboard. Type `cd` to change directory."* | 2-CS-02 |

### The Hidden CS Lesson: Hierarchical Data Structures

The Mentee learns that data is stored in a **tree structure** (Root → Branch → Leaf). This is the foundational concept for understanding:

- Decision trees
- Databases
- DOM manipulation

```
C:\Users\
└── [Username]\
    └── AppData\
        └── Roaming\
            └── .minecraft\
                ├── saves\
                ├── mods\
                ├── resourcepacks\
                └── options.txt
```

### Key Paths to Memorize

| Operating System | Path |
|-----------------|------|
| **Windows** | `C:\Users\[Username]\AppData\Roaming\.minecraft` |
| **Mac** | `~/Library/Application Support/minecraft` |
| **Linux** | `~/.minecraft` |

| Shortcut | Platform | What It Does |
|----------|----------|--------------|
| `%appdata%` | Windows | Opens the Roaming AppData folder |
| `Win+R` | Windows | Opens the Run dialog |
| `Cmd+Shift+G` | Mac | Opens "Go to Folder" in Finder |

---

## Module 2: The "Time Machine" (Backups & Version Control)

### The Problem

Modding inevitably breaks the game. Without a safety net, a crash leads to:
- Data loss
- Tears
- Program abandonment

### The Objective

The Mentee will create a **"Clean Backup"** before applying any changes, effectively learning the concept of a **"Commit"** in version control systems like Git.

---

### Protocol: The "Zip & Label" Strategy

```
┌─────────────────────────────────────────────────────┐
│  1. STOP    │ Before installing a mod loader         │
│  2. SELECT  │ Highlight: saves/ and options.txt      │
│  3. COMPRESS│ Create a .zip archive                  │
│  4. LABEL   │ Use ISO 8601 date or semantic version  │
└─────────────────────────────────────────────────────┘
```

**Example Label Formats:**
- `WorldBackup_2024-03-15_v1.zip`
- `PreForge_backup_v1.0.zip`

---

### Differentiated Instruction: Backups

| Audience | Framing | Mentor Script |
|----------|---------|---------------|
| **Juniors** | **The Save Point** | *"We are making a 'Save Point,' just like in a video game before a boss fight. If the mod crashes the game (the boss defeats us), we can just respawn right here."* |
| **Seniors** | **The Git Commit** | *"This is Version Control. In the software industry, we call this a 'Commit.' If you push bad code that breaks the build, you 'revert' to this snapshot. Naming it clearly is crucial so you know which version works."* |

### The Hidden CS Lesson: Version Control Principles

| Concept | What They're Learning |
|---------|----------------------|
| **Snapshots** | A backup captures the state of the system at a point in time |
| **Semantic Naming** | Names encode meaning (`v1`, `PreMod`, dates) |
| **Rollback** | The ability to restore to a previous known-good state |
| **Redundancy** | "If it doesn't exist in two places, it doesn't exist" |

---

## Module 3: Digital Hygiene & Safety (The Mod Supply Chain)

### The Problem

The internet is filled with:
- "Fake download buttons"
- Adware
- Malware disguised as Minecraft mods

Young users often lack the discernment to identify safe sources.

### The Objective

The Mentee will:
1. Identify legitimate sources (CurseForge, Modrinth)
2. Verify file integrity by checking file extensions and author reputation

---

### Decision Tree: Is This File Safe?

```
START: Found a mod I want to download
  │
  ├── Is the URL a well-known site? (CurseForge, Modrinth, GitHub)
  │     ├── YES → Continue
  │     └── NO → ⛔ STOP. Explain adware/malware risk.
  │
  ├── What is the file extension?
  │     ├── .jar → ✅ Expected for Minecraft mods
  │     ├── .exe or .msi → ⛔ STOP. Explain executable risks.
  │     └── .zip → ⚠️ Check contents before extracting
  │
  ├── Does the author have >10,000 downloads AND verified status?
  │     ├── YES → ✅ Proceed
  │     └── NO → ⚠️ Research more carefully
  │
  └── Is the "Download" button flashing or unusually colored?
        ├── YES → ⛔ STOP. It's likely an ad.
        └── NO → ✅ Proceed
```

### Mentor Script

> *"We are the security guards of our computer. We only let verified trucks (files) through the gate. If a truck looks suspicious or comes from a strange place, we turn it away."*

---

### Red Flags Checklist

| Red Flag | Why It's Dangerous |
|----------|-------------------|
| URL like `minecraft-free-mods.net` | Generic names often mask malware distribution |
| File extension is `.exe` when expecting `.jar` | Executables can install anything on your computer |
| Download button is flashing/animated | Almost always an advertisement, not the real download |
| Site asks to "disable antivirus" | Legitimate software never asks this |
| Mod requires login to a third-party site | Phishing attempt |

### Safe Sources List

| Source | URL | Trust Level |
|--------|-----|-------------|
| **CurseForge** | curseforge.com | ✅ High |
| **Modrinth** | modrinth.com | ✅ High |
| **GitHub** (official repos) | github.com | ✅ High |
| **Minecraft Wiki** | minecraft.wiki | ✅ Reference |
| **Random Google result** | ??? | ⚠️ Verify carefully |

---

## Core Trunk Completion Checklist

Before advancing to a specialized track, the Mentee should be able to:

- [ ] Navigate to `.minecraft` folder without help
- [ ] Explain the difference between a file name and extension
- [ ] Create a backup zip with proper naming
- [ ] Identify at least 2 red flags of unsafe download sites
- [ ] Restore from a backup after intentionally "breaking" something

---

## Estimated Timeline

| Profile | Module 1 | Module 2 | Module 3 | Total |
|---------|----------|----------|----------|-------|
| **Level 0** | 2 sessions | 1 session | 1 session | 4 sessions |
| **Level 1** | 1 session | 0.5 session | 0.5 session | 2 sessions |
| **Level 2** | 0.5 session | 0.5 session | Quick review | 1 session |

---

## Related Documents

- [Diagnostic Protocol](diagnostic-protocol.md) — How to assess which level
- [Track A: The Visualist](track-a-visualist.md) — After Core Trunk
- [Track B: The Mechanist](track-b-mechanist.md) — After Core Trunk
- [Track C: The Operator](track-c-operator.md) — After Core Trunk
- [Troubleshooting Framework](troubleshooting-framework.md) — For when things break
