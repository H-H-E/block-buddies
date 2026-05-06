import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LessonWorkspace from "@/pages/lesson/LessonWorkspace";

describe("lesson workspace routes", () => {
  const appSource = fs.readFileSync(path.resolve(process.cwd(), "src/App.tsx"), "utf8");

  it("lazy-loads the lesson workspace page", () => {
    expect(appSource).toContain('lazy(() => import("./pages/lesson/LessonWorkspace"))');
  });

  it("exposes adult and student lesson routes", () => {
    expect(appSource).toContain('path="/lesson"');
    expect(appSource).toContain('path="/lesson/student"');
  });

  it("defaults the adult route to S03 when no selection is provided", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson"] },
        createElement(LessonWorkspace),
      ),
    );

    expect(screen.getByRole("heading", { name: /S03 Track Onboarding/i })).toBeInTheDocument();
  });

  it("renders selected mentor content from the Stage 1 runbook", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson?session=S06"] },
        createElement(LessonWorkspace),
      ),
    );

    expect(screen.getByRole("heading", { name: /S06 Troubleshooting Studio/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Read logs or symptoms/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Current Step/i)).toBeInTheDocument();
    expect(screen.getByText(/Start fallback/i)).toBeInTheDocument();
    expect(screen.getByText(/Expected: __\. Actual: __\. Cause: __\. Fix: __\./i)).toBeInTheDocument();
    expect(screen.getByText(/Learner jumps to fixes before describing the symptom/i)).toBeInTheDocument();
    expect(screen.getByText(/Today your child practiced structured troubleshooting/i)).toBeInTheDocument();
  });

  it("renders selected student content from the Stage 1 runbook", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson/student?session=S08"] },
        createElement(LessonWorkspace, { mode: "student" }),
      ),
    );

    expect(screen.getByRole("heading", { name: /S08 Demo Reflection/i })).toBeInTheDocument();
    expect(screen.getByText(/Next up: Build your version/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Step/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Deliver structured demo/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/I showed my working artifact/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/I built __\. I debugged __\. I can use this skill next by __\./i)).toBeInTheDocument();
    expect(screen.queryByText(/Parent Note/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hidden/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hint Level 5/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Debug star still open/i)).toBeInTheDocument();
  });

  it("lets the student reveal deeper hints and advance the current step", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson/student?session=S06"] },
        createElement(LessonWorkspace, { mode: "student" }),
      ),
    );

    expect(screen.getByText(/Next up: Build your version/i)).toBeInTheDocument();
    expect(screen.queryByText(/Hint Level 4/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Reveal next hint/i }));
    expect(screen.getByText(/Hint Level 4/i)).toBeInTheDocument();
    expect(screen.queryByText(/Hint Level 5/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Continue with Step 2/i }));
    expect(screen.getByText(/Next up: Test and explain/i)).toBeInTheDocument();
    expect(screen.getByText(/Explain star still open/i)).toBeInTheDocument();
  });

  it("uses clean mentor track-lens cards without connector artwork overlap", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson?session=S06"] },
        createElement(LessonWorkspace),
      ),
    );

    expect(screen.getByText(/Current learner lens: Mechanist/i)).toBeInTheDocument();
    expect(screen.queryByTestId("track-lens-connector-art")).not.toBeInTheDocument();
  });

  it("renders the mentor dashboard shell with accessible session navigation", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson?session=S06"] },
        createElement(LessonWorkspace),
      ),
    );

    const sessionNav = screen.getByRole("navigation", { name: /lesson sessions/i });
    expect(sessionNav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /S06 Troubleshooting Studio/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Toggle lesson navigation/i })).toBeInTheDocument();
  });

  it("renders mentor mastery gates as accessible radio controls", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson?session=S06"] },
        createElement(LessonWorkspace),
      ),
    );

    expect(screen.getByRole("radiogroup", { name: /Do mastery gate/i })).toBeInTheDocument();
    expect(screen.getByRole("radiogroup", { name: /Explain mastery gate/i })).toBeInTheDocument();
    expect(screen.getByRole("radiogroup", { name: /Debug mastery gate/i })).toBeInTheDocument();
    expect(screen.getAllByRole("radio", { name: /Pass/i }).length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByRole("radio", { name: /Support-Pass/i }).length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByRole("radio", { name: /Fail/i }).length).toBeGreaterThanOrEqual(3);
  });

  it("renders the student checklist as accessible checkboxes", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson/student?session=S06"] },
        createElement(LessonWorkspace, { mode: "student" }),
      ),
    );

    expect(screen.getByRole("checkbox", { name: /I described expected vs actual behavior/i })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: /I tested one likely cause/i })).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox").length).toBeGreaterThanOrEqual(3);
  });
});
