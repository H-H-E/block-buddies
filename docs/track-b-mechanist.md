# Track B: The Mechanist (The Engineer)

> For mentees who love Redstone, automation, and complex machinery.

---

## Target Profile

**Archetype B mentees** are motivated by:
- Building efficient systems
- Automation and "AFK farms"
- Understanding how things work
- Problem-solving and optimization

**Hidden CS Concepts Taught:**
- Logic Gates & Boolean Algebra
- Energy Systems
- Calculus concepts (Rates of Change)
- Signal Processing
- Systems Engineering

---

## Track Overview

```
┌─────────────────────────────────────────────────────────────┐
│  MODULE B1: Redstone Logic                                  │
│  "The Physical Circuit"                                     │
│  └── Logic gates, boolean algebra, signal timing            │
├─────────────────────────────────────────────────────────────┤
│  MODULE B2: The Create Mod                                  │
│  "The Physics Engine"                                       │
│  └── Kinetic energy, stress units, gear ratios              │
├─────────────────────────────────────────────────────────────┤
│  MODULE B3: Advanced Automation (Optional)                  │
│  "The Factory"                                              │
│  └── ComputerCraft, Lua scripting, complex systems          │
└─────────────────────────────────────────────────────────────┘
```

---

## Module B1: Redstone Logic ("The Physical Circuit")

### Objective

Build a secret door using a passcode (AND Gate) or a toggle switch (T-Flip Flop).

### Technical Context

> **Key Insight**: Redstone is a **Turing-complete** language capable of representing binary logic. You can theoretically build a computer inside Minecraft.

---

### The Curriculum Map: Logic Gates

#### 1. The NOT Gate (Inverter)

**Build**:
```
[Lever] → [Block with Torch on side] → [Output]
         
Input ON → Torch OFF
Input OFF → Torch ON
```

**CS Concept**: Boolean NOT (`!`)

```javascript
if (!button_pressed) {
    // door opens when button is NOT pressed
}
```

---

#### 2. The OR Gate

**Build**: Two levers connected to one door. Either lever opens it.

```
[Lever A] ──┐
            ├──→ [Door]
[Lever B] ──┘
```

**CS Concept**: Boolean OR (`||`)

```javascript
if (leverA || leverB) {
    // door opens if EITHER lever is on
}
```

---

#### 3. The AND Gate

**Build**: Requires two inputs to both be ON to produce output.

```
[Lever A] → [Torch 1] ←─┐
                        ├──→ [Torch 3] → [Output]
[Lever B] → [Torch 2] ←─┘
```

**CS Concept**: Boolean AND (`&&`)

```javascript
if (leverA && leverB) {
    // door opens ONLY if BOTH levers are on
}
```

**Mentor Script**:
> *"This is how passwords work. You need the Username AND the Password to get in. Not just one."*

---

### Truth Tables

| Gate | Input A | Input B | Output |
|------|---------|---------|--------|
| **NOT** | ON | - | OFF |
| **NOT** | OFF | - | ON |
| **OR** | OFF | OFF | OFF |
| **OR** | ON | OFF | ON |
| **OR** | OFF | ON | ON |
| **OR** | ON | ON | ON |
| **AND** | OFF | OFF | OFF |
| **AND** | ON | OFF | OFF |
| **AND** | OFF | ON | OFF |
| **AND** | ON | ON | ON |

---

### Signal Decay Lesson

**Problem**: Redstone signal only travels **15 blocks** before dying.

**Challenge Script**:
> *"The electricity ran out of juice. It's too far. How do we boost the signal?"*

| Tech Level | Response |
|------------|----------|
| **Level 0** | *"Here is a Repeater block. Place it here."* |
| **Level 2** | *"I'm not telling you. Build a test line and count how many blocks the power travels before it dies. Then design a relay station."* |

---

### Advanced Redstone: The T-Flip Flop

**Purpose**: Turn a button (momentary) into a toggle (permanent ON/OFF).

**Why It Matters**: Buttons pulse briefly. But sometimes you want to press once to turn ON, press again to turn OFF.

**Build**: Uses a dropper-hopper feedback loop or sticky piston memory cell.

---

## Module B2: The Create Mod ("The Physics Engine")

### Objective

Build an automated wheat farm or a steam engine using the Create mod.

### Technical Context

The Create mod introduces **real physics concepts**:
- Kinetic Energy
- Rotational Speed (RPM)
- Torque/Stress (Stress Units)
- Gear Ratios

---

### Key Concept: Stress Units (SU) vs RPM

| Concept | Definition | Analogy |
|---------|------------|---------|
| **RPM** | How fast something spins | Speed on a bicycle |
| **Stress Units (SU)** | How much "weight" the system can handle | The strength of your legs pedaling |

**The Physics**:
```
Total Stress Capacity = Generator Strength × RPM
```

---

### Example Problem

> *"The mechanical press uses 2048 SU. Our water wheel produces 512 SU at 16 RPM. How do we power the press?"*

**Solution Options**:

1. **Add more generators**: 4 water wheels = 2048 SU ✅
2. **Gear up for more SU**: Gear ratio changes the SU/RPM tradeoff
3. **Gear down the consumer**: Make the press spin slower but with more force

---

### Differentiated Instruction: Stress Calculations

| Tech Level | Approach |
|------------|----------|
| **Junior** | *"The machine is too heavy. We need to make it spin slower to have more muscle."* (Bicycle gear analogy—low gear for hills) |
| **Senior** | *"Calculate the exact SU requirement. The press uses 2048 SU. Water wheel produces 512 SU. How many wheels do we need? Or can we gear it down by a ratio of 4:1?"* (Algebra application) |

---

### Gear Ratio Mechanics

| Configuration | Effect on Speed | Effect on Stress |
|--------------|-----------------|------------------|
| **Large → Small Cog** | Speed INCREASES | Stress DECREASES |
| **Small → Large Cog** | Speed DECREASES | Stress INCREASES |

> **Mentor Script**: *"It's like bicycle gears. Low gear = slow but powerful (for hills). High gear = fast but weak (for flat roads)."*

---

### Assembly Line Project

**Goal**: Build a complete automated system:

```
[Water Wheel]           ← Power Source (SU generator)
     │
[Gear Train]            ← Transmission (adjusts RPM/SU)
     │
[Mechanical Press]      ← Consumer
     │
[Conveyor Belt]         ← Output transportation
```

**Checklist**:
- [ ] Power source provides enough SU
- [ ] All components are mechanically connected
- [ ] Items flow correctly through the system
- [ ] No overstress (red particles = failure)

---

## Module B3: Advanced Automation (Optional)

For highly motivated Mechanists who complete B1 and B2.

### Topics

- **ComputerCraft**: In-game Lua programming
- **Complex Farms**: Multi-stage automation with item sorting
- **Display Systems**: Using Create displays for dashboards
- **Timing Circuits**: Precise event scheduling

---

## The Trojan Horse Summary

| What They Build | What They Learn |
|-----------------|-----------------|
| Secret passcode door | Boolean AND logic |
| Toggle switch | State machines, memory |
| Automated farm | Systems engineering |
| Gear train | Mechanical engineering, ratios |
| Complex factory | Resource management, optimization |

---

## Track Completion Checklist

- [ ] Built each logic gate (NOT, OR, AND) from memory
- [ ] Can build a T-Flip Flop toggle switch
- [ ] Understands redstone signal decay and repeaters
- [ ] Can calculate basic SU requirements
- [ ] Built a working Create mod automation
- [ ] Can explain gear ratios in their own words
- [ ] Debugged an "overstressed" system successfully

---

## Capstone Project Ideas

| Level | Project |
|-------|---------|
| **Beginner** | 3-digit combination lock door |
| **Intermediate** | Fully automated farm with item sorting |
| **Advanced** | Complete factory with multiple machines, displays, and logic control |

---

## CSTA Standards Alignment

| Standard | Description | Coverage |
|----------|-------------|----------|
| 2-AP-10 | Use flowcharts/pseudocode to address problems as algorithms | Logic gates, circuit design |
| 2-AP-11 | Create clearly named variables representing different data types | Signal states, SU calculations |
| 2-AP-13 | Decompose problems into parts | Breaking complex systems into components |

---

## Related Documents

- [Core Trunk](core-trunk.md) — Prerequisites for this track
- [Diagnostic Protocol](diagnostic-protocol.md) — How students are assigned here
- [Troubleshooting Framework](troubleshooting-framework.md) — Debug help
