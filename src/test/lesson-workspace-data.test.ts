import { describe, expect, it } from "vitest";
import { sessionRunbooks } from "@/lib/curriculumData";
import {
  adultLessonSteps,
  lessonWorkspaceRunbook,
  resolveLessonWorkspaceContent,
  studentLessonActions,
  workspaceRoles,
} from "@/lib/lessonWorkspaceData";

describe("lesson workspace data", () => {
  it("anchors the workspace to the S03 Track Onboarding runbook", () => {
    expect(lessonWorkspaceRunbook.sessionId).toBe("S03");
    expect(lessonWorkspaceRunbook.objective).toContain("Track onboarding");
  });

  it("resolves workspace content for every canonical session", () => {
    const workspaces = sessionRunbooks.map((runbook) => resolveLessonWorkspaceContent(runbook.sessionId));

    expect(workspaces.map((workspace) => workspace.sessionId)).toEqual([
      "S01",
      "S02",
      "S03",
      "S04",
      "S05",
      "S06",
      "S07",
      "S08",
    ]);

    for (const workspace of workspaces) {
      expect(workspace.title).toContain(workspace.sessionId);
      expect(workspace.runbook.sessionId).toBe(workspace.sessionId);
      expect(workspace.adultLessonSteps.at(0)?.note).toContain(workspace.runbook.hook);
      expect(workspace.studentLessonActions.length).toBeGreaterThanOrEqual(3);
      expect(workspace.studentChecklist).toEqual(workspace.runbook.coreQuestSteps);
      expect(workspace.fallbackHints.length).toBeGreaterThan(0);
    }
  });

  it("defaults unknown or missing selections to S03", () => {
    expect(resolveLessonWorkspaceContent()).toMatchObject({ sessionId: "S03" });
    expect(resolveLessonWorkspaceContent("S99")).toMatchObject({ sessionId: "S03" });
  });

  it("supports mentor, teacher, and parent adult contexts", () => {
    expect(workspaceRoles.map((role) => role.id)).toEqual(["mentor", "teacher", "parent"]);
  });

  it("keeps adult and student lesson flows aligned", () => {
    expect(adultLessonSteps.map((step) => step.title)).toEqual([
      "Hook",
      "Worked Example",
      "Core Quest",
      "Side Quest / Fallback",
      "Exit Ticket",
    ]);

    expect(studentLessonActions.map((action) => action.title)).toEqual([
      "Watch the example",
      "Build your version",
      "Test and explain",
    ]);
  });
});
