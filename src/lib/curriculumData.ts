import type {
  CurriculumPhase,
  MasteryGate,
  SessionRunbook,
  TrackOverview,
} from "@/lib/curriculumModel";

export const masteryGates: MasteryGate[] = [
  {
    id: "MG-DO-EXPLAIN-DEBUG",
    doCriterion: "Learner performs the core task",
    explainCriterion: "Learner explains why it works",
    debugCriterion: "Learner fixes a realistic failure",
    passRule: "do_plus_one",
  },
];

export const curriculumPhases: CurriculumPhase[] = [
  {
    phase: 1,
    title: "The Mechanic",
    subtitle: "Core Setup and Safety",
    color: "primary",
    description:
      "Students establish file-system confidence, backups, and safe workflow habits before specialization.",
    objectives: [
      "Complete profile diagnostic with confidence rating",
      "Create and restore named backups",
      "Understand safe editing workflow",
      "Build confidence with first visible wins",
    ],
    activities: [
      { name: "Profile Setup", description: "Capture fluency-archetype code and confidence" },
      { name: "Backup Drill", description: "Run zip-label-restore cycle" },
      { name: "Safe Edit", description: "Apply one reversible config change" },
    ],
    skills: ["File Systems", "Safety", "Rollback", "Confidence"],
    standards: "CSTA 1A-CS-01, 2-AP-19",
  },
  {
    phase: 2,
    title: "Track Onboarding",
    subtitle: "Guided Specialization Entry",
    color: "secondary",
    description:
      "Learners enter A/B/C tracks with starter builds and controlled debugging.",
    objectives: [
      "Complete track starter artifact",
      "Fix one seeded fault",
      "Practice guided troubleshooting",
      "Use side-quest unlock logic",
    ],
    activities: [
      { name: "Starter Build", description: "Track-specific core artifact" },
      { name: "Debug Drill", description: "Fix one intentional break" },
      { name: "Stretch Branch", description: "Optional extension if ready" },
    ],
    skills: ["Specialization", "Diagnostics", "Adaptation", "Resilience"],
    standards: "CSTA 2-AP-13, 2-CS-03",
  },
  {
    phase: 3,
    title: "Troubleshooting Studio",
    subtitle: "Independent Diagnosis",
    color: "accent",
    description:
      "Learners apply root-cause reasoning to authentic errors with bounded support.",
    objectives: [
      "Read logs and isolate variables",
      "Use binary-search style debugging",
      "Justify chosen fixes",
      "Avoid unproductive trial-and-error loops",
    ],
    activities: [
      { name: "Error Atlas", description: "Solve track-relevant fault" },
      { name: "Root Cause", description: "Separate symptom from cause" },
      { name: "Recovery Path", description: "Escalate to fallback when needed" },
    ],
    skills: ["Debugging", "Evidence", "Isolation", "Reasoning"],
    standards: "CSTA 1B-AP-15, 2-CS-03",
  },
  {
    phase: 4,
    title: "Capstone and Verification",
    subtitle: "Demonstrate and Reflect",
    color: "gold",
    description:
      "Learners deliver capstone outcomes and verify mastery through demo and reflection.",
    objectives: [
      "Build a scoped capstone slice",
      "Demonstrate Do/Explain/Debug outcomes",
      "Reflect on growth and next steps",
      "Prepare independent continuation plan",
    ],
    activities: [
      { name: "Capstone Build", description: "Produce final artifact" },
      { name: "Live Demo", description: "Explain build and fixes" },
      { name: "Roadmap", description: "Define next project goals" },
    ],
    skills: ["Presentation", "Mastery", "Ownership", "Transfer"],
    standards: "CSTA 2-IC-20, 2-IC-21",
  },
];

export const trackOverviews: TrackOverview[] = [
  {
    id: "visualist",
    name: "Track A: Visualist",
    subtitle: "For Builders and Designers",
    description:
      "Focus on textures, shaders, and visual systems while learning file formats and rendering concepts.",
    focus: ["Resource Packs", "Shader Tuning", "Visual Debugging"],
  },
  {
    id: "mechanist",
    name: "Track B: Mechanist",
    subtitle: "For Engineers",
    description:
      "Focus on redstone and automation systems while learning logic and optimization.",
    focus: ["Logic Gates", "Automation", "Systems Debugging"],
  },
  {
    id: "operator",
    name: "Track C: Operator",
    subtitle: "For Admins",
    description:
      "Focus on server control and permissions while learning networking and reliability.",
    focus: ["Server Config", "Networking", "Access Control"],
  },
];

export const sessionRunbooks: SessionRunbook[] = [
  {
    sessionId: "S01",
    track: "core",
    objective: "Diagnostic, trust setup, and first win",
    prerequisites: ["intake completed"],
    hook: "Unlock a hidden pro capability safely",
    coreQuestSteps: [
      "Run file navigation task",
      "Locate Minecraft data path",
      "Assign profile code",
    ],
    sideQuests: [
      {
        id: "S01-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 8,
        outcome: "Use semantic naming for artifacts",
      },
      {
        id: "S01-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S01-DO"],
        durationMin: 8,
        outcome: "Navigate via terminal without mouse",
      },
    ],
    fallbackSteps: [
      "Mentor models one path action",
      "Learner repeats action independently",
    ],
    masteryGateIds: ["MG-S01-DO", "MG-S01-EXPLAIN", "MG-S01-DEBUG"],
  },
  {
    sessionId: "S02",
    track: "core",
    objective: "Backup, controlled failure, and restore",
    prerequisites: ["S01 pass or support-pass"],
    hook: "Create a save point before risky changes",
    coreQuestSteps: [
      "Create labeled backup",
      "Perform controlled change",
      "Restore from backup",
    ],
    sideQuests: [
      {
        id: "S02-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 8,
        outcome: "Compare multiple restore points",
      },
      {
        id: "S02-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S02-DO"],
        durationMin: 8,
        outcome: "Design backup naming strategy",
      },
    ],
    fallbackSteps: ["Use prepared sandbox folder", "Complete one guided restore loop"],
    masteryGateIds: ["MG-S02-DO", "MG-S02-EXPLAIN", "MG-S02-DEBUG"],
  },
  {
    sessionId: "S03",
    track: "core",
    objective: "Track onboarding and starter artifact",
    prerequisites: ["S02 pass or support-pass"],
    hook: "Choose your build path and ship first artifact",
    coreQuestSteps: [
      "Run A/B/C starter task",
      "Verify output",
      "Record chosen track",
    ],
    sideQuests: [
      {
        id: "S03-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 10,
        outcome: "Add one extension to starter artifact",
      },
      {
        id: "S03-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S03-DO"],
        durationMin: 10,
        outcome: "Recreate starter flow from memory",
      },
    ],
    fallbackSteps: ["Use prebuilt starter files", "Complete one low-risk edit"],
    masteryGateIds: ["MG-S03-DO", "MG-S03-EXPLAIN", "MG-S03-DEBUG"],
  },
  {
    sessionId: "S04",
    track: "core",
    objective: "Foundation build and seeded debug",
    prerequisites: ["S03 pass or support-pass"],
    hook: "Build it, break it safely, and repair it",
    coreQuestSteps: [
      "Build track foundation",
      "Inject one fault",
      "Fix with guided algorithm",
    ],
    sideQuests: [
      {
        id: "S04-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 8,
        outcome: "Optimize one performance or reliability parameter",
      },
      {
        id: "S04-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S04-DO"],
        durationMin: 8,
        outcome: "Run binary-search-style fault isolation",
      },
    ],
    fallbackSteps: ["Use minimal project", "Diagnose from two-choice causes"],
    masteryGateIds: ["MG-S04-DO", "MG-S04-EXPLAIN", "MG-S04-DEBUG"],
  },
  {
    sessionId: "S05",
    track: "core",
    objective: "Extension task and side-quest unlocks",
    prerequisites: ["S04 pass or support-pass"],
    hook: "Upgrade your build with one real feature",
    coreQuestSteps: ["Implement extension", "Test extension", "Document expected behavior"],
    sideQuests: [
      {
        id: "S05-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: ["MG-S04-DEBUG"],
        durationMin: 10,
        outcome: "Integrate one cross-concept dependency",
      },
      {
        id: "S05-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S05-DO"],
        durationMin: 10,
        outcome: "Define and run own validation checklist",
      },
    ],
    fallbackSteps: ["Limit scope to one variable change", "Run immediate verification"],
    masteryGateIds: ["MG-S05-DO", "MG-S05-EXPLAIN", "MG-S05-DEBUG"],
  },
  {
    sessionId: "S06",
    track: "core",
    objective: "Troubleshooting studio and root-cause reasoning",
    prerequisites: ["S05 pass or support-pass"],
    hook: "You are on-call; diagnose and recover",
    coreQuestSteps: [
      "Read logs or symptoms",
      "Isolate variable",
      "Apply fix and verify",
    ],
    sideQuests: [
      {
        id: "S06-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 10,
        outcome: "Eliminate false cause with evidence",
      },
      {
        id: "S06-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S06-DO"],
        durationMin: 10,
        outcome: "Complete independent diagnosis loop",
      },
    ],
    fallbackSteps: [
      "Use curated failure puzzle",
      "Choose between two root-cause candidates",
    ],
    masteryGateIds: ["MG-S06-DO", "MG-S06-EXPLAIN", "MG-S06-DEBUG"],
  },
  {
    sessionId: "S07",
    track: "core",
    objective: "Capstone build with mentor fade",
    prerequisites: ["S06 pass or support-pass"],
    hook: "Ship a capstone slice and own the process",
    coreQuestSteps: ["Scope capstone slice", "Build and test", "Prepare demo story"],
    sideQuests: [
      {
        id: "S07-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 8,
        outcome: "Add reliability or usability improvement",
      },
      {
        id: "S07-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S07-DO"],
        durationMin: 8,
        outcome: "Self-grade against rubric before mentor review",
      },
    ],
    fallbackSteps: ["Reduce capstone scope", "Complete one end-to-end slice"],
    masteryGateIds: ["MG-S07-DO", "MG-S07-EXPLAIN", "MG-S07-DEBUG"],
  },
  {
    sessionId: "S08",
    track: "core",
    objective: "Demo, reflection, and mastery verification",
    prerequisites: ["S07 pass or support-pass"],
    hook: "Show what you built and how you debugged",
    coreQuestSteps: [
      "Deliver structured demo",
      "Explain core concept transfer",
      "Set next-step roadmap",
    ],
    sideQuests: [
      {
        id: "S08-STRETCH",
        tier: "stretch",
        unlockMinFluency: 1,
        unlockGateIds: [],
        durationMin: 8,
        outcome: "Compare first vs final skill evidence",
      },
      {
        id: "S08-EXPERT",
        tier: "expert",
        unlockMinFluency: 2,
        unlockGateIds: ["MG-S08-DO"],
        durationMin: 8,
        outcome: "Propose independent project plan",
      },
    ],
    fallbackSteps: ["Use mentor-guided demo script", "Complete reflection checklist"],
    masteryGateIds: ["MG-S08-DO", "MG-S08-EXPLAIN", "MG-S08-DEBUG"],
  },
];

export { stageTwoModpackSessions } from "@/lib/stageTwoCurriculumData";
