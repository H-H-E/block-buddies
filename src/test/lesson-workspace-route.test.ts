import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { render, screen } from "@testing-library/react";
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

  it("uses the selected session on the adult route", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson?session=S06"] },
        createElement(LessonWorkspace),
      ),
    );

    expect(screen.getByRole("heading", { name: /S06 Troubleshooting Studio/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Read logs or symptoms/i).length).toBeGreaterThan(0);
  });

  it("uses the selected session on the student route", () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ["/lesson/student?session=S08"] },
        createElement(LessonWorkspace, { mode: "student" }),
      ),
    );

    expect(screen.getByRole("heading", { name: /S08 Demo Reflection/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Deliver structured demo/i).length).toBeGreaterThan(0);
  });
});
