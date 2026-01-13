# Track A: The Visualist (The Builder)

> For mentees who love aesthetic builds, skins, and "pretty" graphics.

---

## Target Profile

**Archetype A mentees** are motivated by:
- Visual beauty and design
- Custom textures and colors
- Making things "look cool"
- Sharing creations with friends

**Hidden CS Concepts Taught:**
- Rendering Pipelines
- RGB Color Models
- JSON Syntax
- Coordinate Systems

---

## Track Overview

```
┌─────────────────────────────────────────────────────────────┐
│  MODULE A1: Resource Packs & JSON                           │
│  "The Code of Paint"                                        │
│  └── Custom textures, JSON syntax, pack structure           │
├─────────────────────────────────────────────────────────────┤
│  MODULE A2: Shaders & The GPU                               │
│  "The Light Physics"                                        │
│  └── Rendering pipeline, optimization, GPU vs CPU           │
├─────────────────────────────────────────────────────────────┤
│  MODULE A3: Advanced Visuals (Optional)                     │
│  "The Professional Touch"                                   │
│  └── Blockbench modeling, animation, particle effects       │
└─────────────────────────────────────────────────────────────┘
```

---

## Module A1: Resource Packs & JSON ("The Code of Paint")

### Objective

Change the color of a diamond sword or the texture of dirt using a **custom Resource Pack**.

### Technical Context

Minecraft textures use **JSON files** to map 2D images to 3D models. The file structure must be **exact**:

```
MyResourcePack/
├── pack.mcmeta          ← Metadata file (required)
└── assets/
    └── minecraft/
        └── textures/
            └── item/
                └── diamond_sword.png
```

---

### Step-by-Step Scaffolding

#### Step 1: Unzipping the Assets

**Goal**: Extract the vanilla `.jar` file to reveal the `assets` folder.

**The Lesson**: This demystifies the game—it's just a collection of files!

| Tech Level | Approach |
|------------|----------|
| **Level 0** | Mentor demonstrates locating the `.jar` in `versions/` folder, opening with 7-Zip/Archive Utility |
| **Level 1** | Student navigates with guidance, extracts `assets/` folder |
| **Level 2** | Student extracts independently, explains why it's a `.jar` (Java Archive = fancy zip) |

---

#### Step 2: The Hierarchy

**The Lesson**: Strict path dependency. One wrong folder = texture won't load.

The mentee must replicate the **exact folder structure**:

```
MyResourcePack/
└── assets/
    └── minecraft/
        └── textures/
            └── item/        ← For items
            └── block/       ← For blocks
            └── entity/      ← For mobs
```

> **Mentor Script**: *"The game looks for the texture in a very specific place. If you put diamond_sword.png in the wrong room, the game can't find it. Think of it like mailing a letter—wrong address, letter never arrives."*

---

#### Step 3: The pack.mcmeta File

This is the **metadata file**. It tells Minecraft "this is a resource pack."

**Required Structure:**

```json
{
  "pack": {
    "pack_format": 34,
    "description": "My first resource pack!"
  }
}
```

> ⚠️ **Note**: `pack_format` changes by Minecraft version (e.g., format 34 for 1.21.x, 15 for 1.20.x)

---

### Common Friction Point: JSON Syntax Errors

**Symptom**: Resource pack doesn't appear in menu, or shows error icon.

**Common Causes**:
| Error | Example |
|-------|---------|
| Missing comma | `"pack_format": 34` ← missing comma before next line |
| Unclosed bracket | `{ "pack": { }` ← missing outer `}` |
| Wrong quotes | Using `"curly quotes"` instead of `"straight quotes"` |

**Mentor Script**:
> *"The computer is very literal. It doesn't know what you MEANT to do; it only knows what you TYPED. A missing comma breaks the whole logic. This is called 'Syntax.'"*

---

### Differentiated Instruction: JSON Editing

| Tech Level | Approach |
|------------|----------|
| **Level 0/Junior** | Use an online JSON validator. Copy-paste a template and only change the `description` text. |
| **Level 1** | Edit in Notepad++/TextEdit with syntax highlighting. Mentor points out the key-value pairs. |
| **Level 2** | Write JSON from scratch in VS Code. Explain "Key-Value Pairs" and data types (Integer vs String). |

---

### The Trojan Horse Concept: Data Serialization

| Concept | What They're Learning |
|---------|----------------------|
| **JSON** | JavaScript Object Notation—a universal data format |
| **Key-Value Pairs** | `"description": "My pack"` → Key = description, Value = "My pack" |
| **Nesting** | Objects inside objects (`pack` is inside the main object) |
| **Data Types** | `34` (number) vs `"text"` (string) |

---

## Module A2: Shaders & The GPU ("The Light Physics")

### Objective

Install Shaders (OptiFine/Iris) to make water reflect, shadows render, and trees sway.

### Technical Context

> **Key Insight**: Shaders are NOT just "mods." They are **programs that run on the Graphics Card (GPU)**, not the CPU.

---

### The Rendering Pipeline Explained

```
┌─────────────────────────────────────────────────────────────┐
│  CPU (The Architect)                                        │
│  └── Calculates game logic, positions, what exists          │
├─────────────────────────────────────────────────────────────┤
│  GPU (The Painter)                                          │
│  ├── Vertex Shader: Manipulates geometry (waving grass)     │
│  └── Fragment Shader: Manipulates pixels (lighting, color)  │
└─────────────────────────────────────────────────────────────┘
```

### Differentiated Explanation

| Audience | Explanation |
|----------|-------------|
| **Juniors** | *"The CPU is the architect drawing the house. The GPU is the painter coloring it in. Shaders tell the painter to use glitter paint instead of matte paint."* |
| **Seniors** | *"The Vertex Shader manipulates the geometry—that's why the grass sways. The Fragment Shader manipulates the pixel colors—that's the lighting and reflections."* |

---

### Installation Steps

1. **Install a shader loader** (Iris for Fabric, OptiFine for Forge/Vanilla)
2. **Download a shader pack** (Complementary, BSL, Sildur's)
3. **Place in `shaderpacks/` folder** inside `.minecraft`
4. **Enable in Video Settings → Shaders**

---

### Troubleshooting Scenario: FPS Drops

**Problem**: FPS drops to 10 after installing shaders.

**The Teaching Moment**:

> *"Your GPU has a budget. Shadows cost $100. Reflections cost $200. You only have $150. What do we cut?"*

**Solution Matrix**:

| Setting | Performance Cost | Visual Impact | Keep/Cut? |
|---------|-----------------|---------------|-----------|
| Shadow Quality | Very High | High | Cut to Medium first |
| Reflections | Very High | Medium | Consider disabling |
| Waving Grass | Low | Low | Keep |
| Bloom/Lens Flare | Medium | Low | Personal preference |

**The Hidden CS Lesson**: **Resource Management and Optimization**

---

### Hardware Requirements Discussion

| Component | What It Does | Shader Relevance |
|-----------|--------------|------------------|
| **GPU (Graphics Card)** | Renders visuals | Shaders run HERE—weak GPU = laggy shaders |
| **VRAM** | GPU memory | Higher = more textures loaded |
| **RAM** | System memory | Already covered in Core Trunk |
| **CPU** | Game logic | Less relevant for shaders specifically |

> **Mentor Script**: *"Before you blame the shader, we need to know what your computer can handle. Open Task Manager → Performance. What GPU do you have?"*

---

## Module A3: Advanced Visuals (Optional)

For highly motivated Visualists who complete A1 and A2.

### Topics

- **Blockbench**: 3D modeling for custom items/mobs
- **Animated Textures**: Creating `.mcmeta` animation files
- **Custom Particles**: Datapack-based particle effects
- **PBR Textures**: Normal maps and specular maps for shaders

---

## Track Completion Checklist

- [ ] Created a working resource pack with at least 3 custom textures
- [ ] Can explain the folder structure from memory
- [ ] Can debug a JSON syntax error without help
- [ ] Successfully installed and configured shaders
- [ ] Can explain GPU vs CPU in their own words
- [ ] Optimized shader settings for their hardware

---

## Capstone Project Ideas

| Level | Project |
|-------|---------|
| **Beginner** | Complete resource pack that "reskins" 10+ items to a theme (underwater, space, medieval) |
| **Intermediate** | Resource pack with custom sounds AND textures |
| **Advanced** | Custom 3D model items using Blockbench |

---

## Related Documents

- [Core Trunk](core-trunk.md) — Prerequisites for this track
- [Diagnostic Protocol](diagnostic-protocol.md) — How students are assigned here
- [Troubleshooting Framework](troubleshooting-framework.md) — Purple/black texture fixes
