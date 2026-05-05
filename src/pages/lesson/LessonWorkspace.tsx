import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Clock3,
  Eye,
  FileText,
  Flag,
  Gauge,
  HelpCircle,
  Layers3,
  MessageSquare,
  MonitorPlay,
  Pause,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  lessonWorkspaceSessions,
  resolveLessonWorkspaceContent,
  trackExamples,
  workspaceRoles,
  type LessonWorkspaceContent,
} from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

interface LessonWorkspaceProps {
  mode?: "adult" | "student";
}

const statusStyles = {
  complete: "border-[#2f6f3e] bg-[#e8f1df] text-[#18441f]",
  active: "border-[#d98a0a] bg-[#fff3d6] text-[#693c00]",
  ready: "border-[#cdbf9b] bg-[#fbf7eb] text-[#574b33]",
  next: "border-[#cdbf9b] bg-[#f5efe0] text-[#574b33]",
};

const AdultChrome = ({ children, workspace }: { children: React.ReactNode; workspace: LessonWorkspaceContent }) => (
  <div className="min-h-screen bg-[#f4f0e6] text-[#182018]">
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-[#21482d] bg-[#062a18] text-[#f8f3df] xl:flex xl:flex-col">
        <div className="border-b border-white/10 p-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 grid-cols-3 gap-0.5">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="rounded-[2px] bg-[#89b545]" />
              ))}
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">BLOCK</p>
              <p className="font-display text-lg font-bold leading-none">BUDDIES</p>
            </div>
          </Link>
        </div>

        <nav className="space-y-1 p-4 text-sm">
          {[
            ["Runbooks", BookOpen, true],
            ["Mastery", Gauge, false],
            ["Profiles", Users, false],
            ["Operations", ClipboardCheck, false],
            ["Metrics", Layers3, false],
          ].map(([label, Icon, active]) => (
            <div
              key={label as string}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-3",
                active ? "bg-[#e8f1df] text-[#0d3d20]" : "text-[#cbd8bd]",
              )}
            >
              <Icon className="h-4 w-4" />
              {label as string}
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#a8bf91]">Session Spine</p>
          <div className="space-y-1 text-xs">
            {lessonWorkspaceSessions.map((session) => (
              <Link
                key={session.sessionId}
                to={`/lesson?session=${session.sessionId}`}
                className={cn(
                  "flex items-center justify-between rounded px-3 py-2",
                  session.sessionId === workspace.sessionId ? "bg-[#b9d98d] text-[#12351d]" : "bg-white/5",
                )}
              >
                <span>{session.sessionId}</span>
                {session.sessionId === workspace.sessionId ? <Circle className="h-3 w-3 fill-current" /> : <CheckCircle2 className="h-3 w-3" />}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  </div>
);

const TopCommandBar = ({ workspace }: { workspace: LessonWorkspaceContent }) => (
  <header className="sticky top-0 z-30 border-b border-[#d8ceb5] bg-[#f8f3e7]/95 px-4 py-3 backdrop-blur md:px-6">
    <div className="flex flex-wrap items-center gap-3">
      <div className="mr-auto">
        <p className="text-xs uppercase tracking-[0.18em] text-[#456042]">Mentor Console</p>
        <h1 className="font-display text-xl font-bold md:text-2xl">{workspace.title}</h1>
      </div>
      {[
        ["Session", `Lesson ${workspace.sessionNumber} of ${workspace.totalSessions}`],
        ["Focus", workspace.shortTitle],
        ["Session Timer", "00:18:34"],
        ["Mode", "Live Instruction"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-md border border-[#cfc2a3] bg-white/55 px-4 py-2">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#6b604c]">{label}</p>
          <p className="text-sm font-semibold">{value}</p>
        </div>
      ))}
      <Link to={`/lesson/student?session=${workspace.sessionId}`}>
        <Button className="rounded-md bg-[#0d4a28] text-white hover:bg-[#09391e]" size="sm">
          Student View
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </header>
);

const LessonStepList = ({ steps }: { steps: LessonWorkspaceContent["adultLessonSteps"] }) => (
  <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed]">
    {steps.map((step, index) => (
      <div
        key={step.id}
        className={cn(
          "flex gap-3 border-b border-[#e3d9c0] p-4 last:border-b-0",
          step.status === "active" && "bg-[#fff8e8]",
        )}
      >
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-sm font-bold",
            statusStyles[step.status as keyof typeof statusStyles],
          )}
        >
          {index + 1}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-[#756a55]">{step.window}</p>
          <p className="font-display text-base font-bold">{step.title}</p>
          <p className="text-sm text-[#5b584f]">{step.note}</p>
        </div>
      </div>
    ))}
  </div>
);

const AdultLessonView = ({ workspace }: { workspace: LessonWorkspaceContent }) => (
  <AdultChrome workspace={workspace}>
    <TopCommandBar workspace={workspace} />
    <main className="grid gap-4 p-4 lg:grid-cols-[220px_minmax(0,1fr)_360px] md:p-6">
      <section className="space-y-4">
        <LessonStepList steps={workspace.adultLessonSteps} />
        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#756a55]">Lesson Materials</p>
          {workspace.materials.map((item) => (
            <div key={item} className="flex items-center justify-between border-t border-[#e6dcc4] py-2 text-sm first:border-t-0">
              <span>{item}</span>
              <FileText className="h-4 w-4 text-[#0d4a28]" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <div className="mb-5 flex flex-wrap items-start gap-3">
            <div className="mr-auto">
              <p className="text-xs uppercase tracking-[0.16em] text-[#756a55]">Step 3 of 5</p>
              <h2 className="font-display text-2xl font-bold">Core Quest · {workspace.studentBuildTitle}</h2>
              <p className="mt-1 max-w-2xl text-sm text-[#5b584f]">
                {workspace.runbook.objective}. Learner builds evidence that demonstrates the session pathway.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-[#d8ceb5] bg-white/65 px-3 py-2 text-sm font-semibold">
              <Clock3 className="h-4 w-4 text-[#0d4a28]" />
              16 min
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-[#e0d5bb] bg-white/55 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Mentor Script</p>
              <p className="rounded border border-[#e6dcc4] bg-[#fffaf0] p-4 text-sm leading-6 text-[#4a4437]">
                {workspace.runbook.hook}. Start with {workspace.runbook.coreQuestSteps[0]?.toLowerCase() ?? "the first core step"},
                keep the scope small, and capture evidence as you go.
              </p>
            </div>
            <div className="rounded-md border border-[#e0d5bb] bg-white/55 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Core Quest Steps</p>
              <ul className="space-y-2 text-sm text-[#4a4437]">
                {workspace.runbook.coreQuestSteps.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0d4a28]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-[#e0d5bb] bg-white/55 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Evidence To Collect</p>
              <ul className="space-y-2 text-sm text-[#4a4437]">
                {workspace.evidenceItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-[3px] border border-[#9d9279]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-[#e0d5bb] bg-white/55 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Common Failure Signs</p>
              <ul className="space-y-2 text-sm text-[#4a4437]">
                {workspace.commonFailureSigns.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#c5523c]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Track Lens</p>
            <div className="rounded-md border border-[#d8ceb5] bg-white/60 p-1 text-xs">
              <span className="rounded bg-[#e8f1df] px-3 py-1 text-[#0d4a28]">B Mechanist selected</span>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {trackExamples.map((example) => (
              <article
                key={example.track}
                className={cn(
                  "rounded-md border bg-white/60 p-4",
                  example.track === "B" ? "border-[#d98a0a] shadow-[0_0_0_2px_rgba(217,138,10,0.12)]" : "border-[#e0d5bb]",
                )}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d4a28]">
                  {example.track} {example.name}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold">{example.title}</h3>
                <div className="my-3 h-24 rounded border border-[#d6c9ad] bg-[linear-gradient(90deg,#7aa05a_25%,transparent_25%),linear-gradient(#7aa05a_25%,transparent_25%)] bg-[length:22px_22px]">
                  <div className="mx-auto mt-8 h-10 w-28 rounded-[3px] border-4 border-[#756a55] bg-[#c8c0ad] shadow-[18px_0_0_#6b3b2f,-18px_0_0_#6b3b2f]" />
                </div>
                <p className="text-sm text-[#5b584f]">{example.goal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Live Mastery</p>
            <Link to={`/lesson/student?session=${workspace.sessionId}`} className="text-xs font-semibold text-[#0d4a28]">
              What student sees
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {workspace.masteryChecks.map((check) => (
              <div key={check.gate} className="rounded-md border border-[#e0d5bb] bg-white/60 p-3">
                <p className="mb-2 text-center text-xs font-bold uppercase">{check.gate}</p>
                {["Pass", "Support-Pass", "Fail"].map((state) => (
                  <div key={state} className="flex items-center gap-2 border-t border-[#eadfc7] py-2 text-xs first:border-t-0">
                    <Circle className={cn("h-3 w-3", state === "Fail" ? "text-[#c5523c]" : "text-[#0d4a28]")} />
                    {state}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Intervention Timer</p>
            <div className="flex items-center justify-between">
              <p className="font-display text-3xl font-bold text-[#0d4a28]">00:03:21</p>
              <Button variant="outline" size="icon" className="rounded-md">
                <Pause className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-sm text-[#8a5a07]">3:39 remaining before fallback trigger</p>
          </div>
          <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Parent Summary Preview</p>
            <p className="text-sm leading-6 text-[#4a4437]">
              {workspace.parentSummary}
            </p>
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Adult Context</p>
          <div className="space-y-2">
            {workspaceRoles.map((role) => (
              <div key={role.id} className="rounded-md border border-[#e0d5bb] bg-white/55 p-3">
                <p className="font-semibold">{role.label}</p>
                <p className="text-sm text-[#5b584f]">{role.emphasis}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  </AdultChrome>
);

const BuildPreview = () => (
  <div className="rounded-md border border-[#d8ceb5] bg-white/65 p-4">
    <p className="mb-3 font-semibold">Build Preview</p>
    <div className="relative h-64 overflow-hidden rounded-md border border-[#cdbf9b] bg-[#9cc978]">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#6a9c46]" />
      <div className="absolute left-1/2 top-10 grid -translate-x-1/2 grid-cols-5 gap-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="h-9 w-12 border border-[#5c5a55] bg-[#a8a49b]" />
        ))}
      </div>
      <div className="absolute left-1/2 top-24 h-24 w-14 -translate-x-1/2 border-4 border-[#554a3e] bg-[#e8e3d4]" />
      <div className="absolute bottom-10 left-1/2 h-2 w-52 -translate-x-1/2 bg-[#b42922]" />
      <div className="absolute bottom-8 left-[30%] h-8 w-10 border border-[#5c5a55] bg-[#bfb7a5]" />
      <div className="absolute bottom-6 left-[58%] h-5 w-8 border border-[#5c5a55] bg-[#8d7c68]" />
    </div>
    <div className="mt-4 grid grid-cols-9 gap-1 rounded-md border border-[#d8ceb5] bg-[#eef0d9] p-2">
      {Array.from({ length: 45 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "aspect-square rounded-[2px]",
            index === 19 || index === 20 || index === 21 || index === 22 || index === 23
              ? "bg-[#b42922]"
              : index === 18 || index === 24
                ? "bg-[#bfb7a5]"
                : "bg-[#7aa05a]",
          )}
        />
      ))}
    </div>
  </div>
);

const StudentLessonView = ({ workspace }: { workspace: LessonWorkspaceContent }) => (
  <div className="min-h-screen bg-[#f4f0e6] text-[#182018]">
    <header className="border-b border-[#d8ceb5] bg-[#fbf7ed] px-4 py-4 md:px-8">
      <div className="flex flex-wrap items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="rounded-[2px] bg-[#4e8b35]" />
            ))}
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none">BLOCK</p>
            <p className="font-display text-lg font-bold leading-none">BUDDIES</p>
          </div>
        </Link>
        <div className="mr-auto border-l border-[#d8ceb5] pl-4">
          <h1 className="font-display text-xl font-bold">{workspace.title}</h1>
          <p className="text-sm text-[#5b584f]">
            Lesson {workspace.sessionNumber} of {workspace.totalSessions}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-[#d8ceb5] bg-white/65 px-4 py-2">
          <TimerReset className="h-5 w-5 text-[#0d4a28]" />
          <div>
            <p className="font-display text-xl font-bold">29:36</p>
            <p className="text-xs text-[#5b584f]">Time Left</p>
          </div>
        </div>
        <Link to={`/lesson?session=${workspace.sessionId}`}>
          <Button variant="outline" className="rounded-md border-[#cdbf9b]">
            Adult View
          </Button>
        </Link>
      </div>
    </header>

    <main className="grid gap-5 p-4 lg:grid-cols-[minmax(0,1fr)_350px] md:p-8">
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md border border-[#8fb16a] bg-[#e8f1df] px-4 py-2 font-semibold text-[#0d4a28]">
            My Track: {workspace.runbook.track === "core" ? "Core Path" : workspace.runbook.track}
          </span>
          <div className="ml-auto flex items-center gap-2 rounded-md border border-[#d8ceb5] bg-white/65 px-4 py-2">
            <span className="text-sm">How confident do you feel?</span>
            {[0, 1, 2, 3, 4].map((index) => (
              <span key={index} className={cn("h-4 w-4 rounded", index < 3 ? "bg-[#4e8b35]" : "bg-[#ddd6c5]")} />
            ))}
            <span className="text-sm font-semibold">Medium</span>
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-[#f1dfb9] p-3">
              <MonitorPlay className="h-8 w-8 text-[#6b4a16]" />
            </span>
            <div className="mr-auto">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d4a28]">Core Quest</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Core Quest: {workspace.studentBuildTitle}</h2>
            </div>
            <Button className="rounded-md bg-[#0d4a28] text-white hover:bg-[#09391e]">
              Open in Minecraft
            </Button>
          </div>
          <p className="mb-5 flex items-center gap-2 text-lg">
            <Flag className="h-5 w-5 text-[#0d4a28]" />
            <span className="font-bold">Goal:</span> {workspace.studentGoal}.
          </p>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_480px]">
            <BuildPreview />
            <div className="space-y-3">
              {workspace.studentLessonActions.map((action, index) => (
                <div key={action.id} className="flex items-center gap-4 rounded-md border border-[#d8ceb5] bg-white/65 p-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#2f6f3e] font-display text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mr-auto">
                    <h3 className="font-display text-xl font-bold">{action.title}</h3>
                    <p className="text-[#5b584f]">{action.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#0d4a28]" />
                </div>
              ))}

              <div className="rounded-md border border-[#d8ceb5] bg-white/65 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold">Need a hint?</p>
                  <HelpCircle className="h-5 w-5 text-[#756a55]" />
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {workspace.fallbackHints.map((hint, index) => (
                    <button
                      key={hint}
                      className="rounded-md border border-[#d8ceb5] bg-[#fffaf0] p-3 text-left text-sm transition hover:border-[#0d4a28]"
                    >
                      <span className="font-semibold">Hint Level {index + 1}</span>
                      <span className="block text-[#5b584f]">{index === 0 ? "Small clue" : index === 1 ? "More details" : "Show me"}</span>
                    </button>
                  ))}
                </div>
                <Button variant="outline" className="mt-3 w-full rounded-md border-[#c5523c] text-[#a73828]">
                  I am stuck · Get extra help
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-4">
          <div className="mb-3 flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-[#0d4a28]" />
            <p className="font-display text-lg font-bold">Reflect</p>
            <p className="text-sm text-[#5b584f]">I think it works because...</p>
          </div>
          <div className="rounded-md border border-[#d8ceb5] bg-white/70 px-4 py-3 text-[#8b836f]">
            Type your explanation here...
          </div>
        </div>
      </section>

      <aside className="space-y-5">
        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <p className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
            <Sparkles className="h-5 w-5 text-[#d98a0a]" />
            What counts today
          </p>
          <div className="space-y-3">
            {workspace.masteryChecks.map((check, index) => (
              <div key={check.gate} className="rounded-md border border-[#e0d5bb] bg-white/65 p-4">
                <p className="font-display text-lg font-bold text-[#0d4a28]">
                  {check.gate} - {check.student}
                </p>
                <p className="text-sm text-[#5b584f]">
                  {workspace.studentChecklist[index] ?? "Capture proof for this mastery check."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <p className="mb-3 font-display text-lg font-bold">Core Quest Checklist</p>
          <div className="space-y-2">
            {workspace.studentChecklist.map((item, index) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <span className={cn("h-4 w-4 rounded-[3px] border", index < 2 ? "border-[#0d4a28] bg-[#0d4a28]" : "border-[#a79a7e]")} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fbf7ed] p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-display text-lg font-bold">Parent Note</p>
            <span className="rounded-full bg-[#e8f1df] px-3 py-1 text-xs font-semibold text-[#0d4a28]">Hidden</span>
          </div>
          <p className="text-sm leading-6 text-[#5b584f]">
            {workspace.parentSummary}
          </p>
        </div>

        <div className="rounded-md border border-[#d8ceb5] bg-[#fff4d7] p-5">
          <p className="mb-3 font-display text-lg font-bold">Today&apos;s Reward</p>
          <div className="flex items-center gap-2 text-[#d98a0a]">
            <Sparkles className="h-8 w-8 fill-current" />
            <Sparkles className="h-8 w-8 fill-current" />
            <Sparkles className="h-8 w-8 text-[#bdb39e]" />
            <span className="ml-auto font-display text-xl font-bold">2 / 3</span>
          </div>
        </div>
      </aside>
    </main>
  </div>
);

const LessonWorkspace = ({ mode = "adult" }: LessonWorkspaceProps) => {
  const [searchParams] = useSearchParams();
  const workspace = resolveLessonWorkspaceContent(searchParams.get("session") ?? searchParams.get("sessionId"));

  return mode === "student" ? <StudentLessonView workspace={workspace} /> : <AdultLessonView workspace={workspace} />;
};

export default LessonWorkspace;
