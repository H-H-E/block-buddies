import { sessionRunbooks } from "@/lib/curriculumData";

export type ResourceAudience = "public" | "mentor" | "coordinator";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  audience: ResourceAudience;
  path?: string;
  href: string;
  labels: string[];
  sessionId?: string;
}

export interface ResourceGroup {
  id: string;
  title: string;
  description: string;
  audience: ResourceAudience;
  resources: ResourceItem[];
}

export interface ResourceHubSection {
  id: string;
  label: string;
  eyebrow: string;
  summary: string;
  audience: ResourceAudience;
  groups: ResourceGroup[];
}

const docsBaseUrl = "https://github.com/H-H-E/block-buddies/blob/main";

const docHref = (path: string) => `${docsBaseUrl}/${path}`;

const routeResource = (
  id: string,
  title: string,
  description: string,
  href: string,
  labels: string[],
): ResourceItem => ({
  id,
  title,
  description,
  audience: "public",
  href,
  labels,
});

const docResource = (
  audience: ResourceAudience,
  id: string,
  title: string,
  description: string,
  path: string,
  labels: string[],
  sessionId?: string,
): ResourceItem => ({
  id,
  title,
  description,
  audience,
  path,
  href: docHref(path),
  labels,
  sessionId,
});

const runbookPathsBySessionId: Record<string, string> = {
  S01: "docs/runbooks/session-01-diagnostic-trust-win.md",
  S02: "docs/runbooks/session-02-safety-backups-recovery.md",
  S03: "docs/runbooks/session-03-track-onboarding.md",
  S04: "docs/runbooks/session-04-foundation-build-debug.md",
  S05: "docs/runbooks/session-05-extension-sidequest-unlocks.md",
  S06: "docs/runbooks/session-06-troubleshooting-studio.md",
  S07: "docs/runbooks/session-07-capstone-build-fade.md",
  S08: "docs/runbooks/session-08-demo-reflection-verification.md",
};

const sessionTitleById: Record<string, string> = {
  S01: "Diagnostic, Trust, and First Win",
  S02: "Safety, Backups, and Recovery",
  S03: "Track Onboarding",
  S04: "Foundation Build and Debug Drill",
  S05: "Extension Task and Side-Quest Unlocks",
  S06: "Troubleshooting Studio",
  S07: "Capstone Build and Mentor Fade",
  S08: "Demo, Reflection, and Mastery Verification",
};

const runbookResources = sessionRunbooks.map((runbook) =>
  docResource(
    "mentor",
    `runbook-${runbook.sessionId.toLowerCase()}`,
    `${runbook.sessionId}: ${sessionTitleById[runbook.sessionId] ?? runbook.objective}`,
    runbook.objective,
    runbookPathsBySessionId[runbook.sessionId],
    [runbook.track, "runbook", "mastery gates"],
    runbook.sessionId,
  ),
);

const postS08LabPath = "docs/lessons/post-s08-advanced-labs.md";

const postS08LabResources: ResourceItem[] = [
  docResource(
    "mentor",
    "lab-l09-a-resource-pack",
    "L09-A Resource Pack Packaging and Validation",
    "Package and validate a resource pack with metadata, icon, and a verified texture override.",
    postS08LabPath,
    ["optional", "visualist", "post-S08"],
  ),
  docResource(
    "mentor",
    "lab-l09-b-gamerule-diagnostics",
    "L09-B Gamerule Diagnostics Mini-Lab",
    "Apply gamerule changes safely, verify behavior, and roll back controlled experiments.",
    postS08LabPath,
    ["optional", "mechanist", "operator"],
  ),
  docResource(
    "mentor",
    "lab-l10-data-pack",
    "L10 Data Pack Load/Tick Function Lab",
    "Build a minimal data pack with load and tick functions, then verify execution.",
    postS08LabPath,
    ["optional", "data pack", "post-S08"],
  ),
  docResource(
    "mentor",
    "lab-l11-server-properties",
    "L11 Server Properties Safety Lab",
    "Edit server properties with backup, restart validation, and rollback discipline.",
    postS08LabPath,
    ["optional", "operator", "safety"],
  ),
  docResource(
    "mentor",
    "lab-l12-paper-bootstrap",
    "L12 Paper Server Bootstrap Lab",
    "Boot a Paper server with a safe startup command and baseline verification.",
    postS08LabPath,
    ["optional", "server", "operator"],
  ),
  docResource(
    "mentor",
    "lab-l13-reliability-drill",
    "L13 Capstone Reliability Drill",
    "Add one reliability control to a capstone and prove stability through repeated tests.",
    postS08LabPath,
    ["optional", "capstone", "reliability"],
  ),
];

const publicResources: ResourceItem[] = [
  docResource(
    "public",
    "program-overview",
    "Program overview",
    "Family-safe program narrative and value proposition.",
    "docs/value-proposition.md",
    ["public", "overview"],
  ),
  docResource(
    "public",
    "safety-trust-faqs",
    "Safety and trust FAQs",
    "Public-facing safety posture and trust language.",
    "docs/safety-guidelines.md",
    ["public", "safety"],
  ),
  docResource(
    "public",
    "curriculum-overview",
    "Curriculum overview",
    "Learner-facing curriculum path and V2 session spine.",
    "docs/curriculum.md",
    ["public", "curriculum"],
  ),
  routeResource(
    "application-links",
    "Application links",
    "Mentee and mentor application entry points.",
    "/apply/mentee",
    ["public", "apply"],
  ),
];

const mentorTroubleshootingAndTemplates: ResourceItem[] = [
  docResource(
    "mentor",
    "troubleshooting-framework",
    "Troubleshooting Framework",
    "Controlled debugging algorithm, error atlas, and recovery-to-learning policy.",
    "docs/troubleshooting-framework.md",
    ["debugging", "fallback"],
  ),
  docResource(
    "mentor",
    "session-06-troubleshooting-studio",
    "Session 6: Troubleshooting Studio",
    "Runbook for root-cause reasoning and independent diagnosis practice.",
    "docs/runbooks/session-06-troubleshooting-studio.md",
    ["runbook", "debugging"],
    "S06",
  ),
  docResource(
    "mentor",
    "session-log-template",
    "Session Log Template",
    "Required fields for mastery evidence, fallback use, and next-session conditions.",
    "docs/pedagogy/session-log-template.md",
    ["template", "logging"],
  ),
  docResource(
    "mentor",
    "session-runbook-template",
    "Session Runbook Template",
    "Required structure for future runbooks and session materials.",
    "docs/pedagogy/session-template.md",
    ["template", "authoring"],
  ),
  docResource(
    "mentor",
    "mentor-decision-tree",
    "Mentor Decision Tree",
    "Live-session routing rules for scaffolding, fallback, and required logging.",
    "docs/pedagogy/mentor-decision-tree.md",
    ["mentor", "decision tree"],
  ),
  docResource(
    "mentor",
    "mentor-pedagogy",
    "Mentor Pedagogy",
    "Non-negotiables, recovery ladder, intervention timing, and mastery protocol.",
    "docs/mentor-pedagogy.md",
    ["mentor", "pedagogy"],
  ),
  docResource(
    "mentor",
    "quality-checklist",
    "Quality Checklist",
    "Pedagogy quality gate for structure, learning integrity, safety, and readiness.",
    "docs/pedagogy/quality-checklist.md",
    ["quality", "review"],
  ),
];

const coordinatorOperationsResources: ResourceItem[] = [
  docResource(
    "coordinator",
    "pilot-coordinator-runbook",
    "Pilot Coordinator Runbook",
    "Week-by-week operating cadence from setup through S08 verification.",
    "docs/operations/pilot-coordinator-runbook.md",
    ["operations", "cadence"],
  ),
  docResource(
    "coordinator",
    "coordinator-quick-view-template",
    "Coordinator Quick-View Template",
    "Pair snapshot, routing contract, match decision, and first-session planning.",
    "docs/operations/coordinator-quick-view-template.md",
    ["matching", "template"],
  ),
  docResource(
    "coordinator",
    "intake-field-mapping",
    "Intake Field-to-Operations Mapping",
    "Mentee and mentor intake fields required before match decisions.",
    "docs/operations/intake-field-mapping.md",
    ["intake", "matching"],
  ),
  docResource(
    "coordinator",
    "incident-drill-protocol",
    "Incident Drill Protocol",
    "Escalation drills, response flow, and service-level targets.",
    "docs/operations/incident-drill.md",
    ["incident", "escalation"],
  ),
  docResource(
    "coordinator",
    "mentor-calibration-protocol",
    "Mentor Calibration Protocol",
    "Biweekly calibration checklist and corrective actions.",
    "docs/operations/mentor-calibration.md",
    ["calibration", "mentor quality"],
  ),
  docResource(
    "coordinator",
    "parent-communication-templates",
    "Parent Communication Templates",
    "Welcome, progress, reassessment, rematch, and incident follow-up templates.",
    "docs/operations/parent-communication-templates.md",
    ["communications", "family"],
  ),
  docResource(
    "coordinator",
    "fallback-hardcap-dashboard-spec",
    "Fallback and Hard-Cap Dashboard Spec",
    "Dashboard dimensions, charts, thresholds, and data inputs for operational monitoring.",
    "docs/metrics/fallback-hardcap-dashboard-spec.md",
    ["metrics", "dashboard"],
  ),
  docResource(
    "coordinator",
    "session-kpi-rollup-template",
    "Session KPI Rollup Template",
    "Cohort snapshot, session-level metrics, risk notes, and actions.",
    "docs/metrics/session-kpi-rollup-template.md",
    ["metrics", "template"],
  ),
];

export const resourceHubSections: ResourceHubSection[] = [
  {
    id: "public-layer",
    label: "Public Layer",
    eyebrow: "Family-facing",
    summary: "External resources stay limited to program, safety, curriculum, and application entry points.",
    audience: "public",
    groups: [
      {
        id: "public-resources",
        title: "Public Resources",
        description: "Materials safe to share with families and learners.",
        audience: "public",
        resources: publicResources,
      },
    ],
  },
  {
    id: "mentor-layer",
    label: "Mentor Layer",
    eyebrow: "Session delivery",
    summary: "Runbooks, optional labs, and session tools for mentors running live V2 learning loops.",
    audience: "mentor",
    groups: [
      {
        id: "s01-s08-runbooks",
        title: "S01-S08 Runbooks",
        description: "Canonical session spine from diagnostic trust-building through demo verification.",
        audience: "mentor",
        resources: runbookResources,
      },
      {
        id: "post-s08-labs",
        title: "Post-S08 Advanced Labs",
        description: "Optional extension labs for learners who complete the S01-S08 spine.",
        audience: "mentor",
        resources: postS08LabResources,
      },
      {
        id: "mentor-troubleshooting-and-templates",
        title: "Troubleshooting and Session Tools",
        description: "Debugging, logging, and mentor decision materials kept out of the public layer.",
        audience: "mentor",
        resources: mentorTroubleshootingAndTemplates,
      },
    ],
  },
  {
    id: "coordinator-layer",
    label: "Coordinator Layer",
    eyebrow: "Program operations",
    summary: "Matching, escalation, calibration, communication, and metric artifacts for operators.",
    audience: "coordinator",
    groups: [
      {
        id: "coordinator-operations-materials",
        title: "Operations and Coordinator Materials",
        description: "Coordinator-only references for running the pilot and monitoring quality.",
        audience: "coordinator",
        resources: coordinatorOperationsResources,
      },
    ],
  },
];

export const resourceHubGroups = resourceHubSections.flatMap((section) => section.groups);

export const getResourceGroup = (groupId: string): ResourceGroup => {
  const group = resourceHubGroups.find((candidate) => candidate.id === groupId);

  if (!group) {
    throw new Error(`Unknown resource hub group: ${groupId}`);
  }

  return group;
};

export const getResourcesByAudience = (audience: ResourceAudience): ResourceItem[] =>
  resourceHubSections
    .filter((section) => section.audience === audience)
    .flatMap((section) => section.groups)
    .flatMap((group) => group.resources);
