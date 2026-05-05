import { describe, expect, it } from "vitest";
import {
  adultLessonSteps,
  lessonWorkspaceRunbook,
  studentLessonActions,
  workspaceRoles,
} from "@/lib/lessonWorkspaceData";

describe("lesson workspace data", () => {
  it("anchors the workspace to the S03 Track Onboarding runbook", () => {
    expect(lessonWorkspaceRunbook.sessionId).toBe("S03");
    expect(lessonWorkspaceRunbook.objective).toContain("Track onboarding");
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
