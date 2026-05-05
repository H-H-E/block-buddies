import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import ResourceHub from "@/pages/ResourceHub";
import {
  resourceHubSections,
  getResourceGroup,
  getResourcesByAudience,
} from "@/lib/resourceHubData";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

describe("resource hub content", () => {
  beforeAll(() => {
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it("keeps public, mentor, and coordinator materials in separate layers", () => {
    expect(resourceHubSections.map((section) => section.audience)).toEqual([
      "public",
      "mentor",
      "coordinator",
    ]);

    const publicTitles = getResourcesByAudience("public").map((resource) => resource.title);
    const mentorTitles = getResourcesByAudience("mentor").map((resource) => resource.title);
    const coordinatorTitles = getResourcesByAudience("coordinator").map((resource) => resource.title);

    expect(publicTitles).toEqual([
      "Program overview",
      "Safety and trust FAQs",
      "Curriculum overview",
      "Application links",
    ]);
    expect(mentorTitles).toContain("Session Log Template");
    expect(coordinatorTitles).toContain("Pilot Coordinator Runbook");
    expect(publicTitles).not.toContain("Session Log Template");
    expect(publicTitles).not.toContain("Pilot Coordinator Runbook");
  });

  it("indexes S01-S08 runbooks and the post-S08 advanced labs", () => {
    const runbookGroup = getResourceGroup("s01-s08-runbooks");
    const labGroup = getResourceGroup("post-s08-labs");

    expect(runbookGroup.resources.map((resource) => resource.sessionId)).toEqual([
      "S01",
      "S02",
      "S03",
      "S04",
      "S05",
      "S06",
      "S07",
      "S08",
    ]);
    expect(runbookGroup.resources.map((resource) => resource.path)).toEqual([
      "docs/runbooks/session-01-diagnostic-trust-win.md",
      "docs/runbooks/session-02-safety-backups-recovery.md",
      "docs/runbooks/session-03-track-onboarding.md",
      "docs/runbooks/session-04-foundation-build-debug.md",
      "docs/runbooks/session-05-extension-sidequest-unlocks.md",
      "docs/runbooks/session-06-troubleshooting-studio.md",
      "docs/runbooks/session-07-capstone-build-fade.md",
      "docs/runbooks/session-08-demo-reflection-verification.md",
    ]);

    expect(labGroup.resources.map((resource) => resource.title)).toEqual([
      "L09-A Resource Pack Packaging and Validation",
      "L09-B Gamerule Diagnostics Mini-Lab",
      "L10 Data Pack Load/Tick Function Lab",
      "L11 Server Properties Safety Lab",
      "L12 Paper Server Bootstrap Lab",
      "L13 Capstone Reliability Drill",
    ]);
  });

  it("indexes troubleshooting, session templates, and coordinator operations materials", () => {
    const mentorTools = getResourceGroup("mentor-troubleshooting-and-templates");
    const coordinatorOps = getResourceGroup("coordinator-operations-materials");

    expect(mentorTools.resources.map((resource) => resource.title)).toEqual([
      "Troubleshooting Framework",
      "Session 6: Troubleshooting Studio",
      "Session Log Template",
      "Session Runbook Template",
      "Mentor Decision Tree",
      "Mentor Pedagogy",
      "Quality Checklist",
    ]);
    expect(coordinatorOps.resources.map((resource) => resource.title)).toEqual([
      "Pilot Coordinator Runbook",
      "Coordinator Quick-View Template",
      "Intake Field-to-Operations Mapping",
      "Incident Drill Protocol",
      "Mentor Calibration Protocol",
      "Parent Communication Templates",
      "Fallback and Hard-Cap Dashboard Spec",
      "Session KPI Rollup Template",
    ]);
  });

  it("renders the key internal index categories", () => {
    render(React.createElement(MemoryRouter, null, React.createElement(ResourceHub)));

    expect(screen.getByRole("heading", { name: "Resource Hub" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Public Layer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mentor Layer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Coordinator Layer" })).toBeInTheDocument();

    const mentorLayer = screen.getByTestId("resource-hub-mentor");
    expect(within(mentorLayer).getByRole("heading", { name: "S01-S08 Runbooks" })).toBeInTheDocument();
    expect(within(mentorLayer).getByRole("heading", { name: "Post-S08 Advanced Labs" })).toBeInTheDocument();
    expect(
      within(mentorLayer).getByRole("heading", { name: "Troubleshooting and Session Tools" }),
    ).toBeInTheDocument();

    const coordinatorLayer = screen.getByTestId("resource-hub-coordinator");
    expect(
      within(coordinatorLayer).getByRole("heading", { name: "Operations and Coordinator Materials" }),
    ).toBeInTheDocument();
  });
});
