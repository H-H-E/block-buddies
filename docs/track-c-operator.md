# Track C: The Operator (The Admin)

> For mentees who want to own a server, ban griefers, and control the world rules.

---

## Target Profile

**Archetype C mentees** are motivated by:
- Being in control
- Managing multiplayer dynamics
- Creating and enforcing rules
- Understanding how servers work

**Hidden CS Concepts Taught:**
- Networking (IPs/Ports)
- Permissions & Access Control Lists (ACLs)
- Linux/Server Configuration
- Text-based Configuration Files
- Security Principles

---

## Track Overview

```
┌─────────────────────────────────────────────────────────────┐
│  MODULE C1: The Server Properties File                      │
│  "The Constitution"                                         │
│  └── server.properties, ports, game rules                   │
├─────────────────────────────────────────────────────────────┤
│  MODULE C2: Networking Fundamentals                         │
│  "The Phone System"                                         │
│  └── IPs, ports, localhost, LAN connections                 │
├─────────────────────────────────────────────────────────────┤
│  MODULE C3: Permissions & Logic                             │
│  "The Hierarchy"                                            │
│  └── LuckPerms, ACLs, inheritance, least privilege          │
├─────────────────────────────────────────────────────────────┤
│  MODULE C4: Server Maintenance (Optional)                   │
│  "The Sysadmin"                                             │
│  └── Backups, disaster recovery, performance monitoring     │
└─────────────────────────────────────────────────────────────┘
```

---

## Module C1: The Server Properties File ("The Constitution")

### Objective

Set up a local host server and modify `server.properties` to control the world.

### Technical Context

The `server.properties` file is a **flat-file database** that controls every aspect of the server. Editing this file is your first act of "systems administration."

---

### Key Variables to Edit

| Variable | Type | What It Controls |
|----------|------|-----------------|
| `gamemode=survival` | State | Default game mode for new players |
| `difficulty=normal` | State | World difficulty |
| `pvp=true` | Boolean | Can players damage each other? |
| `max-players=20` | Integer | Server capacity |
| `server-port=25565` | Integer | Networking endpoint |
| `white-list=false` | Boolean | Require approval to join? |
| `motd=A Minecraft Server` | String | Message shown in server list |
| `spawn-protection=16` | Integer | Radius around spawn that only OPs can modify |

---

### The Editing Protocol

```
┌─────────────────────────────────────────────────────────────┐
│  1. STOP the server                                         │
│  2. OPEN server.properties in a text editor                 │
│  3. MODIFY the desired values                               │
│  4. SAVE the file                                           │
│  5. RESTART the server                                      │
└─────────────────────────────────────────────────────────────┘
```

> ⚠️ **Warning**: Changes don't apply until restart. Never edit while the server is running—it will overwrite your changes on shutdown.

---

### Differentiated Instruction

| Tech Level | Activity |
|------------|----------|
| **Level 0** | Mentor guides through changing `motd` and `gamemode`. Focus on save/restart cycle. |
| **Level 1** | Student independently changes 3 settings. Introduces boolean (`true`/`false`) concept. |
| **Level 2** | Student creates a complete server configuration from scratch. Explains each setting's purpose. |

---

## Module C2: Networking Fundamentals ("The Phone System")

### Objective

Understand how computers find and connect to each other.

### The Core Analogy

> *"The IP Address is your house address on the street. The Port (25565) is the specific door to your Minecraft room. If you don't know the port, you're just standing in the lobby."*

---

### Key Concepts

| Concept | Definition | Example |
|---------|------------|---------|
| **IP Address** | A unique number identifying a computer on a network | `192.168.1.5` |
| **Port** | A specific "door" for a type of traffic | `25565` (Minecraft) |
| **Localhost** | "This computer" | `127.0.0.1` |
| **LAN (Local Area Network)** | Computers on the same Wi-Fi/router | Your home network |
| **WAN (Wide Area Network)** | The public internet | Everything outside your router |

---

### Activity: The Localhost Loopback

1. Start a Single-player world
2. Press Escape → "Open to LAN"
3. Note the message: `"Local game hosted on port 12345"`
4. Open Minecraft again (second instance or another computer)
5. Direct Connect: `127.0.0.1:12345`

**Lesson**: `127.0.0.1` always points to "Me"—this computer.

---

### Activity: Finding Your Local IP

**Windows**:
```
1. Open Command Prompt
2. Type: ipconfig
3. Find "IPv4 Address" (e.g., 192.168.1.5)
```

**Mac**:
```
1. Open Terminal
2. Type: ifconfig | grep "inet "
3. Find the 192.168.x.x address
```

---

### The LAN Connection

For a friend on the SAME network to connect:

1. They CANNOT use `127.0.0.1` (that's their OWN computer)
2. They need YOUR Local IP + YOUR Port
3. Example: `192.168.1.5:12345`

---

### Panic Button: Connection Refused

| Issue | Cause | Fix |
|-------|-------|-----|
| "Connection Refused" | Firewall blocking Java | Allow `javaw.exe` through Windows Firewall |
| "Connection Timed Out" | Wrong IP or not on same network | Verify both computers on same Wi-Fi |
| Can connect localhost but not LAN | Port not exposed | Check router/firewall settings |

---

### Safety Note for Port Forwarding

> ⚠️ **For Level 0/Junior students**: Use LAN connections or tools like **Hamachi**, **Tailscale**, or **Ngrok** rather than real router port forwarding.

**Why?** Port forwarding exposes your home network to the public internet. This requires careful security consideration.

---

## Module C3: Permissions & Logic ("The Hierarchy")

### Objective

Create ranks (Admin, Moderator, Guest) with different abilities using the **LuckPerms** plugin.

### Technical Context

This teaches **Access Control Lists (ACLs)** and **Inheritance**—core concepts in enterprise security.

---

### The Permission System

Every ability in Minecraft plugins is controlled by a **permission node**:

| Permission Node | What It Allows |
|-----------------|---------------|
| `minecraft.command.kick` | Use /kick command |
| `minecraft.command.ban` | Use /ban command |
| `essentials.spawn` | Use /spawn command |
| `luckperms.editor` | Use web permission editor |

---

### Boolean Logic in Permissions

```
minecraft.command.ban = true   ← Player CAN ban
minecraft.command.ban = false  ← Player CANNOT ban
```

**Mentor Script**:
> *"We don't give people power they don't need. This is the 'Principle of Least Privilege.' Why shouldn't a Guest have the ban command? If a Guest account gets hacked, we don't want the hacker to burn the world."*

---

### Inheritance: Building the Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│  OWNER                                                       │
│  └── Inherits from: Admin                                   │
│  └── Extra permissions: server management                   │
├─────────────────────────────────────────────────────────────┤
│  ADMIN                                                       │
│  └── Inherits from: Moderator                               │
│  └── Extra permissions: ban, config access                  │
├─────────────────────────────────────────────────────────────┤
│  MODERATOR                                                   │
│  └── Inherits from: Member                                  │
│  └── Extra permissions: kick, mute, teleport                │
├─────────────────────────────────────────────────────────────┤
│  MEMBER                                                      │
│  └── Inherits from: Guest                                   │
│  └── Extra permissions: build, chat, basic commands         │
├─────────────────────────────────────────────────────────────┤
│  GUEST                                                       │
│  └── Base permissions only: look around, limited chat       │
└─────────────────────────────────────────────────────────────┘
```

**The CS Lesson**: If the "Admin" group **inherits** from "Moderator," it gets all Mod permissions PLUS new ones. This teaches **Object-Oriented Programming (OOP)** concepts like class inheritance.

---

### LuckPerms Commands

| Command | Effect |
|---------|--------|
| `/lp user [name] parent set [group]` | Assign player to a rank |
| `/lp group [name] permission set [node] true` | Grant permission to rank |
| `/lp editor` | Open web-based permission editor |

---

### Example Setup Project

Create these groups from scratch:

1. **Guest**: Can only chat and look around
2. **Member**: Can build, use `/spawn`, use `/home`
3. **Moderator**: Can `/kick`, `/mute`, `/tp`
4. **Admin**: Can `/ban`, `/unban`, access server files

---

## Module C4: Server Maintenance (Optional)

For advanced Operators who complete C1-C3.

### Topics

- **Automated Backups**: Scripted backup solutions
- **Performance Monitoring**: TPS, memory usage, player counts
- **Crash Analysis**: Reading server logs and crash reports
- **Plugin Management**: Installing, updating, removing plugins safely

---

## The Trojan Horse Summary

| What They Build | What They Learn |
|-----------------|-----------------|
| Custom server with rules | Configuration file management |
| LAN game with friends | Networking fundamentals |
| Permission hierarchy | Access Control, Security |
| Server backup system | Data integrity, disaster recovery |

---

## Track Completion Checklist

- [ ] Can edit `server.properties` without help
- [ ] Understands the difference between IP and Port
- [ ] Can find their local IP address
- [ ] Successfully hosted a LAN game
- [ ] Created a working permission hierarchy
- [ ] Can explain "Principle of Least Privilege"
- [ ] Set up basic server roles (Guest through Admin)

---

## Capstone Project Ideas

| Level | Project |
|-------|---------|
| **Beginner** | Configure a server for a friend group with custom rules |
| **Intermediate** | Full permission system with 4+ ranks |
| **Advanced** | Public-ready server with whitelist, anti-grief measures, and documentation |

---

## CSTA Standards Alignment

| Standard | Description | Coverage |
|----------|-------------|----------|
| 2-NI-04 | Model the role of protocols in transmitting data | IP/Port networking |
| 1B-NI-04 | Explain what passwords are and why we use them | Whitelist, permissions |
| 2-NI-05 | Explain how security measures protect information | ACLs, least privilege |

---

## Related Documents

- [Core Trunk](core-trunk.md) — Prerequisites for this track
- [Diagnostic Protocol](diagnostic-protocol.md) — How students are assigned here
- [Troubleshooting Framework](troubleshooting-framework.md) — Connection and config debugging
- [Mastery Tree](mastery-tree.md) — Extended server administration modules
