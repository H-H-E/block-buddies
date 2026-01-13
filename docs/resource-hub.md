# Resource Hub Vision

## Purpose

A central website where:
1. **Teen mentors** find everything they need to run effective sessions
2. **Parents** understand the program and feel confident
3. **Potential participants** learn about Block Buddies and sign up
4. **The community** accesses free Minecraft learning resources

---

## Site Structure

```
blockbuddies.org/
├── / (Home)
│   └── What is Block Buddies?
│   └── Impact stats
│   └── Get involved CTAs
│
├── /for-mentors
│   ├── Getting started guide
│   ├── Lesson plans library
│   ├── Teaching tips
│   ├── Troubleshooting
│   └── Mentor community (login)
│
├── /for-parents
│   ├── FAQ
│   ├── Safety & guidelines
│   ├── What your child will learn
│   └── Sign up your child
│
├── /for-teens
│   ├── Why become a mentor
│   ├── What you'll gain
│   ├── Requirements
│   └── Apply to mentor
│
├── /resources (public)
│   ├── Beginner tutorials
│   ├── Recommended tools
│   ├── Project ideas
│   └── External links
│
├── /about
│   ├── Our story
│   ├── Team
│   └── Partners
│
└── /portal (authenticated)
    ├── Dashboard
    ├── My matches
    ├── Session notes
    └── Resources
```

---

## Key Pages & Content

### Homepage

**Hero section:**
> "Teens teaching kids to code through Minecraft"

**Key messages:**
- Real coding skills, real fun
- Peer mentorship that works
- Free and volunteer-powered

**Social proof:**
- Testimonials from parents, mentors, kids
- Number of sessions completed
- Partner organization logos

---

### For Mentors Section

This is the **most critical** part of the site. Mentors need to feel:
1. Prepared and confident
2. Supported when things go wrong
3. Part of a community

**Must-have resources:**
- [ ] Step-by-step first session guide
- [ ] Printable session plan templates
- [ ] "What to do if..." quick reference
- [ ] Video examples of good sessions
- [ ] Tech troubleshooting flowchart
- [ ] Glossary of terms

**Nice-to-have:**
- Discussion forum
- Mentor spotlight stories
- Advanced technique library

---

### Lesson Plans Library

**Format for each lesson:**
```markdown
# [Lesson Title]

## Overview
- **Duration**: 45 min
- **Skill level**: Beginner / Intermediate / Advanced
- **Prerequisites**: [what should they know first]
- **Materials needed**: [download links]

## Learning Objectives
By the end of this lesson, the mentee will be able to:
- [Objective 1]
- [Objective 2]

## Preparation (Mentor)
[What to do before the session]

## Lesson Plan
[Minute-by-minute breakdown]

## Common Issues
[What might go wrong and how to fix it]

## Extension Ideas
[For kids who finish early or want more]

## Homework
[Optional practice for between sessions]
```

---

### For Parents Section

**Tone**: Reassuring, professional, transparent

**Must answer:**
- Is this safe?
- Who are the teen mentors?
- What will my child actually learn?
- What do I need to provide (computer, software, time)?
- How much supervision do I need to do?
- What if it's not working out?

**Trust builders:**
- Clear safety policies
- Partner organization affiliations
- Parent testimonials
- Easy way to reach coordinators

---

### Application Forms

**Mentee Application (filled by parent):**
- Child's age
- Minecraft experience
- Learning goals
- Availability
- Technical setup (what computer, internet speed)
- Consent agreements

**Mentor Application:**
- Age/grade
- School (for reference)
- Minecraft modding experience
- Why do you want to mentor?
- Availability
- Parent/guardian approval

---

## Technology Decisions

### Options for the Site

**Simple / MVP:**
- Static site (Hugo, Eleventy, plain HTML)
- Google Forms for applications
- Google Drive for resource library
- Email for communication

**More Robust:**
- Simple CMS (Notion as backend? Webflow?)
- Signup/login system
- Dashboard for mentors
- Scheduling integration

**Full Platform:**
- Custom web app
- Matching algorithm
- Session scheduling built in
- Video call integration
- Progress tracking

**Recommendation**: Start simple. MVP could even be a Notion site.

---

## Content Priorities

### Phase 1 (Minimum for launch)
- [ ] Homepage explaining the concept
- [ ] Application forms (mentor + mentee)
- [ ] Safety guidelines page
- [ ] 3-5 lesson plans
- [ ] Basic FAQ

### Phase 2 (After first cohort)
- [ ] Mentor testimonials
- [ ] More lesson plans
- [ ] Troubleshooting guide
- [ ] Parent dashboard (view progress)

### Phase 3 (Scale)
- [ ] Self-service matching
- [ ] Full curriculum library
- [ ] Community features
- [ ] Analytics/impact tracking

---

## Content Creation TODO

### Written Content Needed
- [ ] "What is Block Buddies" overview
- [ ] Safety guidelines (detailed)
- [ ] Mentor training content
- [ ] FAQ for parents
- [ ] FAQ for teens
- [ ] Session plan template
- [ ] First 5 lesson plans

### Visual Content Needed
- [ ] Logo
- [ ] Brand colors/fonts
- [ ] Illustrations or photos
- [ ] Diagrams (how it works, program flow)
- [ ] Video: "What is Block Buddies?" (1-2 min)

### Forms/Documents Needed
- [ ] Mentor application
- [ ] Mentee application
- [ ] Parent consent form
- [ ] Mentor consent form
- [ ] Code of conduct acknowledgment
- [ ] Photography/recording release

---

## SEO & Discoverability

**Keywords to target:**
- Minecraft coding for kids
- Teen volunteer opportunities
- Coding mentorship
- Learn to mod Minecraft
- Minecraft education

**Link building ideas:**
- Partner organization websites
- Homeschool resource lists
- STEM education directories
- Local community calendars
