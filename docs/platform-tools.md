# Platform & Tools

## Technology Stack Options

### Communication & Coordination

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Email** | Universal, familiar | Clunky for groups, easy to miss | ✅ Required for parents |
| **Slack (free)** | Organized, searchable | Learning curve, message limits | 🤔 Good for mentors |
| **Discord** | Teens already use it, free | Harder for parents, less "professional" | 🤔 Consider for mentor community |
| **WhatsApp** | Universal, easy | Not great for documentation | 🤔 Backup option |

**Recommendation**: Email for official communication, Slack or Discord for mentor community

---

### Video Calls

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Zoom (free)** | Reliable, recording, breakouts | 40-min limit on free | ⭐ Good option |
| **Zoom (paid)** | No time limit | $15/month/host | ⭐ If budget allows |
| **Google Meet** | Free with Google account, no time limit, recording | Slightly clunkier UI | ⭐ Good free option |
| **Jitsi** | Free, open source, no account needed | Less polished | 🤔 Backup option |
| **Discord** | Free, easy for teens | Not as reliable, less controlled | ❌ Too risky for child safety |

**Recommendation**: Google Meet for MVP (free, recording), Zoom if you have budget

**Recording requirements:**
- Sessions should be recorded (with consent)
- Storage: Google Drive, deleted after 30 days
- Purpose: Safety review, NOT content creation

---

### Scheduling

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Calendly (free)** | Easy, syncs calendars | Limited to 1 event type on free | ⭐ Good for signup |
| **When2Meet** | Great for finding overlap | Ugly, no calendar sync | 🤔 For initial matching |
| **Google Calendar** | Everyone has it | Manual coordination | ✅ Required for reminders |
| **Cal.com** | Open source Calendly | Requires setup | 🤔 Future option |

**Recommendation**: When2Meet for initial matching, Google Calendar invites for ongoing

---

### File Storage & Resources

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Google Drive** | Free, universal, familiar | Organization can get messy | ⭐ MVP choice |
| **Notion** | Beautiful, structured | Learning curve, paid for team | 🤔 If you know Notion |
| **GitHub** | Version control, public | Technical, not for everyone | 🤔 For curriculum development |

**Recommendation**: Google Drive for sharing, Notion or GitHub for building curriculum

---

### Participant Management

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Google Sheets** | Free, simple, familiar | Not purpose-built, easy to mess up | ⭐ MVP choice |
| **Airtable (free)** | Relational, pretty | Limits on free tier | 🤔 If spreadsheet gets complex |
| **Notion database** | Flexible, nice views | Requires Notion familiarity | 🤔 Alternative |
| **Custom app** | Exactly what you need | Development time/cost | ❌ Not for MVP |

**Recommendation**: Google Sheets for MVP, Airtable if you outgrow it

---

### Forms

| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Google Forms** | Free, integrates with Sheets | Limited design | ⭐ MVP choice |
| **Typeform (free)** | Beautiful, conversational | Limits on free | 🤔 For better UX |
| **Tally** | Pretty, generous free tier | Less known | 🤔 Alternative |
| **Jotform** | E-signatures available | Limits on free | 🤔 For consent forms |

**Recommendation**: Google Forms for MVP, consider Jotform for legal consents

---

### Website (Future)

| Tool | Pros | Cons | Notes |
|------|------|------|-------|
| **Notion (public)** | Super fast to set up | Limited customization | For MVP "website" |
| **Carrd** | Simple one-pagers, $19/year | Very limited | Landing page only |
| **Webflow** | Professional, visual | Complex, expensive at scale | If design matters |
| **Hugo/11ty + Netlify** | Free, fast, version controlled | Requires coding | If you have dev help |
| **Squarespace/Wix** | Easy, templates | Monthly cost, less control | Standard choice |

**Recommendation**: Notion public page for MVP, simple static site later

---

## Minecraft-Specific Tools

### For Teaching

| Tool | Purpose | Notes |
|------|---------|-------|
| **Minecraft Java Edition** | Primary platform | Best for modding, costs $30 |
| **Minecraft Education** | Classroom features, MakeCode integration | Free for schools, requires license |
| **Forge** | Mod loader | Most tutorials use this |
| **Fabric** | Alternative mod loader | Lighter weight, gaining popularity |
| **IntelliJ IDEA Community** | Java IDE | Free, industry standard |
| **VS Code** | Code editor | Free, great for beginners |
| **Blockbench** | 3D model creation | Free, great for custom assets |

### For Collaboration

| Tool | Purpose | Notes |
|------|---------|-------|
| **Aternos** | Free Minecraft server hosting | Great for shared building |
| **Minehut** | Free server hosting | Alternative to Aternos |
| **GitHub** | Share mod code | For more advanced projects |

### For Resources

| Tool | Purpose | Notes |
|------|---------|-------|
| **CurseForge** | Mod distribution | Where most mods live |
| **Modrinth** | Alternative mod site | Newer, cleaner |
| **MCStacker** | Command generator | Essential for command blocks |

---

## MVP Tech Stack

```
Communication:     Email (parents) + Google Chat/Slack (mentors)
Video calls:       Google Meet (free with recording)
Scheduling:        When2Meet (matching) + Google Calendar (sessions)
File storage:      Google Drive
Forms:             Google Forms
Tracking:          Google Sheets
Website:           Notion public page (or nothing)
Minecraft:         Java Edition + screen share
```

**Total cost: $0** (assuming participants have Minecraft already)

---

## Scale-Up Tech Stack

```
Communication:     Slack or Discord for community
Video calls:       Zoom Pro for reliability
Scheduling:        Calendly + Google Calendar
Participant mgmt:  Airtable
Forms:             Typeform or Jotform (for e-signatures)
Website:           Custom site with:
                   - Public info pages
                   - Application forms
                   - Member portal (matching, scheduling, progress)
Minecraft server:  Dedicated server for group activities
```

---

## Security & Privacy Considerations

### Data We'll Collect

- Names (kids and parents)
- Ages
- Email addresses
- Video call recordings
- Session notes

### How to Protect It

- [ ] Only collect what's necessary
- [ ] Store in password-protected, limited-access drives
- [ ] Delete recordings after 30 days
- [ ] Clear data retention policy in consent forms
- [ ] No sharing of participant info externally
- [ ] Mentor/mentee identities protected (first names only publicly)

### Platform Security

- [ ] Strong passwords on all accounts
- [ ] 2FA where available
- [ ] Limited admin access (principle of least privilege)
- [ ] Waiting rooms / meeting passwords on video calls

---

## Technical Requirements for Participants

### For Mentees (Family Provides)

- Computer (Windows/Mac) capable of running Minecraft
- Stable internet connection
- Webcam and microphone
- Minecraft Java Edition ($30 one-time)
- Google account (for Meet/Drive)

### For Mentors (Personal Equipment)

- Computer with Minecraft and modding tools installed
- Stable internet (video + screen share)
- Webcam and microphone
- Quiet place for sessions

### Minimum Specs for Minecraft

```
OS: Windows 10/11, macOS 10.14+, or Linux
RAM: 4GB minimum, 8GB recommended
Storage: 4GB free (more for mods)
Graphics: Integrated OK for vanilla, dedicated recommended for mods
Internet: 10 Mbps download/upload for video + gameplay
```

---

## Future Integrations to Consider

- **LMS (Learning Management)**: Track progress through curriculum
- **Badging system**: Digital badges for achievements
- **Parent dashboard**: View session history, child progress
- **Matching algorithm**: Automated pairing based on preferences
- **Calendar sync**: Automatic reminders, rescheduling
- **Analytics**: Program-wide metrics and insights
