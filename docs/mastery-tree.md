# Block Buddies Mastery Tree

> A Comprehensive Curriculum for Peer-Mentored Systems Administration Using Minecraft

---

## Executive Summary: The "Trojan Horse" Pedagogy

In K-12 Computer Science education, a significant divide exists between "edutainment"—software designed to make learning "fun" by abstracting away complexity—and the rigorous technical skills required for actual systems administration. The **Block Buddies** program bridges this gap through a cynical yet effective pedagogical strategy: the **"Trojan Horse."**

We reject the sanitized, drag-and-drop interfaces of educational coding platforms in favor of the messy, text-based reality of:
- Raw file management
- Command-line interfaces
- Configuration debugging

### Target Demographics

**Pre-teens (9-12)** possess a high drive for in-game dominance (e.g., obtaining "god mode," eliminating server lag, or customizing game assets) but often lack the technical literacy to achieve these goals independently. They are "digital natives" only in the sense that they can *consume* content; they are often "digital helpless" when *creating or modifying* it.

The **Teen Mentor (14-17)** is not a traditional teacher, but a **"hacker" imparting forbidden knowledge**.

### Core Methodology: "Cool Result First"

Every lesson begins with a desirable in-game outcome—such as night vision or a lightning sword—and works backward to the necessary technical skill.

### Related Curriculum Documents

> For the complete curriculum framework, see these companion documents:

| Document | Description |
|----------|-------------|
| [Diagnostic Protocol](diagnostic-protocol.md) | The "Sorting Hat" — 5-minute assessment to profile mentees |
| [Core Trunk](core-trunk.md) | Universal prerequisite skills (File Systems, Backups, Safety) |
| [Track A: Visualist](track-a-visualist.md) | Specialization for Builders (Resource Packs, Shaders) |
| [Track B: Mechanist](track-b-mechanist.md) | Specialization for Engineers (Redstone, Create Mod) |
| [Track C: Operator](track-c-operator.md) | Specialization for Admins (Servers, Permissions) |
| [Troubleshooting Framework](troubleshooting-framework.md) | Debugging skills and "Friction Points" curriculum |
| [Mentor Pedagogy](mentor-pedagogy.md) | Teaching skills (Socratic Method, Scaffolding) |

### Non-Negotiable Constraints

- ❌ No automated installers
- ❌ No graphical user interfaces (GUIs) for configuration  
- ❌ No "magic" buttons

**Friction is the teacher.** If a student wants a mod, they must manage the dependency tree manually. If they want a server, they must configure the TCP/IP ports.

---

## Curriculum Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 1: THE MECHANIC                                          │
│  Local Files & Optimization                                     │
│  └── File systems, config editing, RAM management               │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 2: THE NETWORK ENGINEER                                  │
│  Servers & IPs                                                  │
│  └── Client-server model, TCP/IP, ports, latency                │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 3: THE PROGRAMMER                                        │
│  Logic & Scripting                                              │
│  └── Boolean logic (Redstone), JSON, NBT, command syntax        │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 4: THE ADMIN                                             │
│  Maintenance & Ethics                                           │
│  └── Backups, access control, disaster recovery, ethics         │
└─────────────────────────────────────────────────────────────────┘
```

---

## CSTA Standards Alignment

| Standard | Description | Phases |
|----------|-------------|--------|
| 1B-CS-01 | Describe how internal and external parts of computing devices function | 1 |
| 1A-CS-01 | Select and operate appropriate software | 1 |
| 2-CS-03 | Systematically identify and fix problems with computing devices | 1, 4 |
| 2-NI-04 | Model the role of protocols in transmitting data | 2 |
| 1B-NI-04 | Explain what passwords are and why we use them | 2 |
| 2-CS-02 | Design projects that combine hardware and software | 2 |
| 2-AP-10 | Use flowcharts/pseudocode to address problems as algorithms | 3 |
| 2-AP-11 | Create clearly named variables representing different data types | 3 |
| 2-AP-13 | Decompose problems into parts | 3 |
| 2-NI-05 | Explain how security measures protect electronic information | 4 |
| 1B-IC-18 | Discuss computing technologies that have changed the world | 4 |
| 2-CS-01 | Recommend improvements to computing device design | 4 |

---

## Phase 1: The Mechanic (Local Files & Optimization)

### Phase Objective

The student will demonstrate mastery of the local file system, differentiating between application data and executable code. They will learn to manipulate configuration files directly, bypassing user interfaces to alter program state, and understand the relationship between software applications and hardware resources (RAM).

---

### Module 1.1: The "Night Vision" Hack (Flat-File Databases)

#### The Hook Script (For the Teen Mentor)

> **Mentor Note**: Approach the student with a conspiratorial tone. You are not teaching a lesson; you are sharing a secret.

*"You know how annoying it is to mine for diamonds and run out of torches? The screen gets pitch black, and creepers spawn. The game developers put a slider in the settings called 'Brightness,' but they locked it. It only goes up to 100%, which they call 'Bright.'*

*But here's the secret: the game engine doesn't actually have a limit. The menu has a limit, but the brain of the game—the file that actually controls your eyes—can go as high as you want. I'm going to show you how to break into the game's config file and force the brightness to 10,000%. You'll be able to see in the deepest caves like it's high noon. We don't need a mod. We just need to edit the code."*

#### Under the Hood: The `options.txt` Activity

This activity introduces the concept of the **Flat-File Database**. Minecraft, like many Java applications, uses a simple key-value pair text file to persist user preferences across sessions.

**Step-by-Step Implementation:**

1. **The Shutdown Protocol**: Ensure the game is closed.
   - *Technical Insight*: Explain **File Locking**. If the game is running, it has a "lock" on the file. If we edit it while the game is open, the game will overwrite our changes when it closes.

2. **Navigating the Hierarchy**: Locate the installation directory manually.
   - Windows: `C:\Users\[Username]\AppData\Roaming\.minecraft`
   - Mac: `~/Library/Application Support/minecraft`
   - **Trojan Horse Concept**: *The Hidden Directory*. Why is AppData or Library hidden? Because developers don't trust users not to break things. Today, the student crosses that boundary.

3. **The Edit**:
   - Locate the file `options.txt`
   - Right-click → "Open With" → Choose a raw text editor (Notepad, TextEdit, VS Code)
   
   > ⚠️ **Warning**: Do not use a Word Processor (like MS Word). Word processors add hidden formatting characters that will corrupt the file and crash the game. This teaches the difference between **Plain Text** and **Rich Text**.

4. **The Hack**:
   - Find the line: `gamma:1.0`
   - Explain that `1.0` represents 100% brightness
   - Change the value to: `gamma:100.0`

5. **Execution**: Save the file (Ctrl+S). Launch Minecraft. Enter a single-player world and walk into a cave. The lighting will be flat and fully illuminated.

#### The Trojan Horse Concept: Variable Persistence

| Concept | Explanation for Student | Technical Reality |
|---------|------------------------|-------------------|
| Key-Value Pairs | "The gamma is the label, the 100.0 is the setting." | Standard `key:value` syntax used in properties files |
| Parsing | "The game reads this list like a recipe when it wakes up." | Application parses strings and casts to floats |
| Bounds Checking | "The menu has a lock, but the engine doesn't." | GUI has input validation; backend accepts any valid float |

#### The Panic Button: "I Broke the Game"

**Scenario**: Student accidentally deletes a line, sets `gamma:high`, or deletes the file entirely.

| Symptom | Cause | Fix |
|---------|-------|-----|
| Crash with "NumberFormatException" | Typed text where a number was expected | Open file, correct the syntax. Explain **Data Types** |
| `options.txt` is missing | Accidental deletion | Launch the game—it will generate a fresh file with defaults |

**Lesson**: *Fail-Safe Defaults*. Good software is designed to heal itself. This is crucial in **Robust Systems Design**.

---

### Module 1.2: The Mechanic's Tool (Manual Mod Installation)

#### The Hook Script

*"Those automatic launchers are for babies. They put a bunch of junk files on your computer that you don't need, and when they break, you don't know how to fix them. We are going to perform surgery on the game folders ourselves. We're going to install a minimap mod, but we're going to do it by manually injecting the code into the game's library."*

#### Under the Hood: The Classpath and Dependencies

Minecraft mods are packaged as `.jar` (Java Archive) files—essentially zipped folders containing compiled Java class files and metadata. For the game to load them, they must be placed in a directory that the Mod Loader adds to the Java **Classpath** at runtime.

**Step-by-Step Implementation:**

1. **The Loader**: Download and run the Fabric Loader installer.
   - *Technical Insight*: The installer creates a new "Version" profile in the launcher—copying vanilla game code and wrapping a new layer around it.

2. **The Hierarchy**: Create a folder named `mods` inside `.minecraft` if it doesn't exist.
   - *Lesson*: **Case Sensitivity**. Naming it `Mods` vs `mods` might matter on Linux/Mac systems.

3. **The Dependency Trap (Planned Failure)**:
   - Download a popular mod (Sodium, Xaero's Minimap)
   - Drag ONLY that file into the mods folder
   - **Crucial Step**: Do NOT tell them to download the Fabric API

4. **The Crash**: Launch the game. It will crash immediately.

5. **The Analysis**: Direct the student to the crash report:
   ```
   net.fabricmc.loader.impl.discovery.ModResolutionException: 
   Mod 'sodium' requires 'fabric' @ [0.76.0]
   ```
   
   *Translation*: "The mod you installed is shouting for a helper called 'fabric' (the API), but it's not there. It's like trying to play a video game console without the controller."

6. **The Fix**: Download the Fabric API `.jar` and place it in the folder.
   - *Lesson*: **Dependency Management**. Software rarely stands alone.

#### The Trojan Horse Concept: Modular Software Architecture

| Concept | What They Learn |
|---------|-----------------|
| Modularity | The game is a core engine; features snap on/off like Lego bricks |
| Extensions | The `.jar` extension tells the OS this is executable Java code |
| Conflict Resolution | If two mods change the same thing, the game crashes → **Resource Contention** |

#### The Panic Button: "Exit Code 1"

| Check | Cause | Fix |
|-------|-------|-----|
| Java Version | Using Java 8 for Minecraft 1.18? (Requires Java 17) | Update Java runtime |
| Mod Versions | Downloaded 1.20 mod for 1.19 game? | Check filename: `modname-1.20.1.jar` vs game version |

**Lesson**: **Version Control**. Software versions must match exactly.

---

### Module 1.3: Deep Dive (JVM Arguments & Optimization)

#### The Hook Script

*"Your game is stuttering. That's called a 'Lag Spike.' It's happening because the game is running out of memory and has to stop to clean up the trash. It's like trying to clean your room while holding everything in your hands. We need to give the game a bigger box to hold its stuff."*

#### Under the Hood: The Java Virtual Machine (JVM)

Minecraft runs inside a Virtual Machine that asks the physical computer for a chunk of RAM at startup (often set low by default: 2GB).

**Step-by-Step Implementation:**

1. **Hardware Audit**:
   - Open Task Manager (Windows) or Activity Monitor (Mac)
   - Identify "Total Physical Memory" (e.g., 8GB, 16GB)
   - *Lesson*: You cannot give the game more memory than the computer has. Don't give it more than half, or the OS will starve.

2. **The Launcher Configuration**:
   - Go to "Installations" → Click "More Options"
   - Locate "JVM Arguments"

3. **The Argument**:
   - Find: `-Xmx2G`
   - Explain: `-Xmx` stands for "Maximum Heap Size"
   - Change to: `-Xmx4G` (assuming 8GB+ system RAM)

4. **The Result**: Launch the game. Press F3 to see the Debug Screen.
   - Look at: `Mem: 25% 1024/4096MB`
   - The student can visually verify the "bucket" is now bigger.

#### The Trojan Horse Concept: Memory Management

| Concept | Explanation |
|---------|-------------|
| Heap | The pile of memory for world data (chunks, entities) |
| Garbage Collection | "See the jagged line on F3? That's the GC deleting unneeded data. If the bucket is too small, it runs constantly, causing lag." |

#### The Panic Button: "Could Not Reserve Enough Space"

**Scenario**: Student sets `-Xmx32G` on a laptop with 8GB RAM.

**Error**: `Error: Could not create the Java Virtual Machine`

*Explanation*: "You asked the waiter for a 32-gallon bucket of water, but the restaurant only has 8 gallons. The computer refused to start to protect itself."

**Fix**: Edit the argument back to a safe number (half of physical RAM).

---

## Phase 2: The Network Engineer (Servers & IPs)

### Phase Objective

The student will understand the Client-Server model, IP addressing, Ports, and Latency. They will differentiate between local and remote connections and use diagnostic tools to visualize network traffic.

---

### Module 2.1: The Lagometer (Latency vs. Throughput)

#### The Hook Script

*"You keep saying the server is laggy, but your framerate is fine. The problem isn't your computer; it's the distance between you and the server. We're going to open the developer dashboard to see the invisible wires connecting us."*

#### Under the Hood: The F3 Debug Screen

**Activity: Analyze Metrics**

| Metric | What It Means |
|--------|---------------|
| FPS (Frames Per Second) | How fast your graphics card draws pictures. Low FPS = Your computer is slow |
| Ping (ms) | Visible in tab list. High Ping = Internet connection is slow or distance is too great |
| Tx/Rx Packets | Watch these: Stop moving → numbers slow. Break blocks → numbers fly. This visualizes **Data Packets** |
| ms/tick | Minecraft runs at 20 TPS (50ms per tick). If ms ticks > 50ms, the server is "lagging" |

*Lesson*: **Processing Time vs. Transmission Time**

#### The Trojan Horse Concept: The Client-Server Model

| Component | Role |
|-----------|------|
| Client | The screen, keyboard, mouse. Just draws things and sends requests ("I want to move forward") |
| Server | The logic. Decides if you CAN move forward (collision detection) and tells the client the result |
| Packet Loss | If Rx packets stop, the world freezes—but you can still move your camera. Client is separate from Server |

#### The Panic Button: "Timed Out"

**Scenario**: `java.net.SocketTimeoutException`

*Explanation*: "The server stopped talking. Your client waited 30 seconds (timeout threshold), got no packets, and hung up the phone."

**Diagnostics**:
1. Check internet connection
2. Ping the server IP in Command Prompt: `ping hypixel.net`
3. This moves troubleshooting from the **application layer** to the **OS layer**

---

### Module 2.2: The Direct Connection (IPs and Ports)

#### The Hook Script

*"The server list is broken, and we need to dial the server manually. Do you know its phone number? Not its name—its actual digital number."*

#### Under the Hood: TCP/IP

Most kids use DNS names (e.g., `hypixel.net`). We force them to understand what that name resolves to.

**Activity: Localhost Loopback**

1. Start a Single-player world → "Open to LAN"
2. **Instruction**: "Connect to yourself"
3. Student uses Direct Connect: `127.0.0.1` or `localhost`
4. *Concept*: **The Loopback Address** always points to "Me"

**Activity: The Port**

When LAN world opens: `"Local game hosted on port 12345"`

*Explanation*: "The IP address is the street address of the building. The Port is the apartment number. If you don't know the port, you're just standing in the lobby."

**Activity: The LAN Connection**

1. Have a second computer try to connect
2. They CANNOT use `127.0.0.1`—must find the host's **Local IP** (e.g., `192.168.1.5`)
3. Command Line: `ipconfig` (Windows) or `ifconfig` (Mac) to find IPv4 address
4. *Lesson*: **Public vs. Private IP Addresses** (NAT simplified)

#### The Panic Button: "Connection Refused"

| Check | Cause | Fix |
|-------|-------|-----|
| Firewall | Windows Firewall blocks Java | Allow `javaw.exe` through firewall |
| Subnet | Are both computers on the same Wi-Fi? | Must be on same **Local Area Network** |

*Concept*: **Network Security**—the computer protects itself from unsolicited traffic.

---

## Phase 3: The Programmer (Logic & Scripting)

### Phase Objective

The student will transition from a user to a creator, using boolean logic (Redstone) and scripting languages (JSON/NBT) to alter game behavior.

---

### Module 3.1: The "Lightning Sword" (NBT & Command Syntax)

#### The Hook Script

*"Sharpness V is boring. I want a sword that calls down a lightning bolt from the sky whenever I hit a zombie. The game doesn't have an enchantment for that, so we're going to write a script that watches for the hit and triggers the lightning manually."*

#### Under the Hood: Command Blocks & NBT

This uses a **Repeating Command Block** to constantly check for a specific game state.

**Step-by-Step Implementation:**

1. **Give the Tool**: `/give @p command_block`

2. **The Logic**: 
   - Minecraft stores `HurtTime` on every entity
   - When an entity is hit, `HurtTime` sets to 10

3. **The Script**:
   - Place a Repeating Command Block (Purple), set to "Always Active"
   - Command: `execute at @e[nbt={HurtTime:10s}] run summon lightning_bolt ~ ~ ~`

4. **Syntax Breakdown**:

   | Element | Meaning |
   |---------|---------|
   | `execute at` | Run the command from the location of... |
   | `@e[nbt={HurtTime:10s}]` | ...all entities with HurtTime equal to 10 ticks |
   | `run summon` | Then spawn... |
   | `~ ~ ~` | ...here (Relative Coordinates) |

5. **The Bug (Pedagogical Moment)**:
   - Student hits zombie → Lightning strikes. Cool!
   - Student gets hit BY zombie → Lightning strikes THE STUDENT
   - **Problem**: `@e` targets everything, including the player
   - **Fix**: Refine selector: `@e[type=!player,nbt={HurtTime:10s}]`
   - *Lesson*: **Conditional Logic and Scope**

#### The Trojan Horse Concept: Syntax and Data Structures

| Concept | What They're Using |
|---------|-------------------|
| Objects | `{}` |
| Key-Value Pairs | `HurtTime:10s` |
| Boolean Logic | `type=!player` (NOT player) |
| Relative Coordinates | `~ ~ ~` (Vectors) |

#### The Panic Button: "Infinite Death Loop"

**Scenario**: Student creates `/kill @a` in a repeating command block. Respawn → die instantly.

**Solutions**:
- Server Console: `gamerule commandBlockOutput false`
- Edit `server.properties`: `enable-command-blocks=false`
- Use **NBTExplorer** to delete the block from the world file

*Lesson*: **Runaway Processes**—be careful with infinite loops.

---

### Module 3.2: The Programmer's Tool (JSON Loot Tables)

#### The Hook Script

*"Farming for diamonds is too slow. I want to change the laws of physics so that cows drop diamonds instead of leather. To do that, we have to rewrite the game's 'Loot Table'."*

#### Under the Hood: JSON Configuration

**Step-by-Step Implementation:**

1. **The Workspace**: Create a Datapack folder structure:
   ```
   MyDataPack/
   └── data/
       └── minecraft/
           └── loot_tables/
               └── entities/
   ```
   *Lesson*: **Directory Structures**—the path must match exactly.

2. **The File**: Create `cow.json`

3. **The Code**:
   ```json
   {
     "type": "minecraft:entity",
     "pools": [
       {
         "rolls": 1,
         "entries": [
           {
             "type": "minecraft:item",
             "name": "minecraft:diamond",
             "functions": [
               {
                 "function": "minecraft:set_count",
                 "count": {
                   "min": 1,
                   "max": 3
                 }
               }
             ]
           }
         ]
       }
     ]
   }
   ```

4. **The Installation**: Move `MyDataPack` folder into world's `datapacks` folder. Run `/reload`

5. **The Debug**: Kill a cow. If it drops leather, the pack failed.
   - Check the Game Log for `JsonParseException`
   - Common Error: Missing comma after closing brace `}`
   - *Lesson*: **Syntax Highlighting**—use VS Code to see red squiggly errors

---

## Phase 4: The Admin (Maintenance & Ethics)

### Phase Objective

The student assumes the role of the "SysAdmin," learning to manage a persistent environment, ensure data integrity (backups), and navigate the ethical responsibilities of having "root access" (Operator status).

---

### Module 4.1: The Ban Hammer (Server Properties & Whitelists)

#### The Hook Script

*"Being an admin isn't just about flying around. It's about deciding the rules of reality. Hackers are trying to join our server. We need to lock the doors and only let our friends in."*

#### Under the Hood: server.properties and UUIDs

**Activity: Access Control**

1. Open `server.properties`
2. Set `white-list=true`
3. Restart server

**Activity: Identity Management**

1. Try to join → Fail
2. Console Command: `whitelist add [PlayerName]`
3. Open `whitelist.json`
4. **Observation**: The file stores the name "Steve" AND a UUID (long string of numbers/letters)

*Lesson*: **Digital Identity**. Even if the player changes their name, the UUID remains the same. The ban/whitelist tracks the *person*, not the nametag. This is how real user databases work.

---

### Module 4.2: Disaster Recovery (Backups)

#### The Hook Script

*"I am going to fill the spawn point with TNT and blow it up. If you haven't backed up the world, it is gone forever. Real admins follow the rule: If it doesn't exist in two places, it doesn't exist."*

#### Under the Hood: Compression and Restoration

**Activity: The Backup**

1. Stop the server
2. Locate the world folder
3. Right-click → "Send to Compressed (zipped) folder"
4. **Naming Convention**: Rename to `world-backup-YYYY-MM-DD.zip`
   - *Teach*: ISO 8601 date formats for easy sorting

**Activity: The Destruction**

1. Start server
2. TNT the lobby
3. Stop server

**Activity: The Restore**

1. Delete the ruined world folder
2. Unzip the backup
3. Restart

*Lesson*: **Data Integrity and Redundancy**—teaches the industry-standard **3-2-1 Backup Strategy** (3 copies, 2 media types, 1 offsite).

#### The Panic Button: "Corrupted Chunk"

**Scenario**: Server crashes when a player enters a specific area.

| Step | Action |
|------|--------|
| Log Analysis | Look for `Exception ticking world` or `Ticking Entity` |
| Coordinate Isolation | Crash report lists exact x/y/z coordinates |
| Surgical Strike | Use `/kill @e[type=!player]` from console, or use **MCA Selector** to delete the chunk file |

**Ethical Dilemma**: Deleting the chunk deletes player builds in that area. The admin must weigh **Server Stability vs. User Data Loss**.

---

## Graduation Challenge: "Protocol 404"

### The Final Exam

The Mentor deliberately sabotages a copy of the Minecraft server instance. The student has **1 hour** to fix it and successfully log in as an Operator.

### The Sabotage List

| Sabotage | Description |
|----------|-------------|
| RAM Starvation | JVM argument set to `-Xmx256M` (too low to launch) |
| Broken Config | `options.txt` has `gamma:NaN` or syntax error |
| Network Block | `server-ip` in `server.properties` set to random IP (causes "Failed to Bind to Port") |
| Logic Bomb | Repeating command block at spawn running `/kill @a` |

### The Solution Path

1. **Fix Launch**: Read crash report → Identify "Out of Memory" → Edit JVM args to 2G+
2. **Fix Config**: Game crashes on load → Check `options.txt` → Fix syntax or delete to regenerate
3. **Fix Network**: Console says "Failed to bind to port" → Edit `server.properties` → Clear `server-ip`
4. **Fix Logic**: Join → Die instantly → Console: `gamerule commandBlockOutput false` → Use NBTExplorer to delete the block

### Graduation

Upon fixing all issues, the student is granted **"OP" status** on the main mentorship server and receives the title of **"Block Buddy SysAdmin."**

---

## Conclusion

The Block Buddies curriculum transforms Minecraft from a game into a rigorous sandbox for Computer Science education. By strictly avoiding automated tools and GUIs, we force the student to confront the underlying file systems, network protocols, and logic structures that govern the software.

They do not just learn to *play* the game; they learn to *administer* the system.

The skills acquired here are directly transferable to professional IT and Software Engineering careers:
- Navigating directory hierarchies
- Understanding client-server architecture  
- Debugging syntax errors
- Managing system resources

**The "Trojan Horse" has delivered its payload: a new generation of technically literate problem solvers.**
