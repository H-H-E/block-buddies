import { Link } from "react-router-dom";
import { MessageSquare, TimerReset } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";
import { useLessonWorkspaceState, type LessonWorkspaceState } from "../hooks/useLessonWorkspaceState";
import { StudentCurrentStepCard } from "./StudentCurrentStepCard";
import { StudentQuestCard } from "./StudentQuestCard";
import { StudentRewardCard } from "./StudentRewardCard";
import { StudentSuccessRail } from "./StudentSuccessRail";

export interface StudentDashboardProps {
  workspace: LessonWorkspaceContent;
  state?: LessonWorkspaceState;
}

const BrandMark = () => (
  <Link to="/" className="flex items-center gap-3" aria-label="Block Buddies home">
    <div className="grid h-9 w-9 grid-cols-3 gap-0.5" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="rounded-[2px] bg-[#4e8b35]" />
      ))}
    </div>
    <div>
      <p className="font-display text-lg font-bold leading-none">BLOCK</p>
      <p className="font-display text-lg font-bold leading-none">BUDDIES</p>
    </div>
  </Link>
);

export function StudentDashboard({ workspace, state: providedState }: StudentDashboardProps) {
  const hookState = useLessonWorkspaceState(workspace);
  const state = providedState ?? hookState;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f0e6] text-[#182018]">
      <header className="border-b border-[#d8ceb5] bg-[#fbf7ed] px-4 py-4 md:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <BrandMark />
          <Separator orientation="vertical" className="hidden h-12 bg-[#d8ceb5] sm:block" />
          <div className="mr-auto">
            <h1 className="font-display text-xl font-bold">{workspace.title}</h1>
            <p className="text-sm text-[#5b584f]">
              Lesson {workspace.sessionNumber} of {workspace.totalSessions}
            </p>
          </div>
          <Card className="border-[#d8ceb5] bg-white/65 shadow-none text-[#182018]">
            <CardContent className="flex items-center gap-2 p-2 px-4">
              <TimerReset className="h-5 w-5 text-[#0d4a28]" />
              <div>
                <p className="font-display text-xl font-bold">29:36</p>
                <p className="text-xs text-[#5b584f]">Time Left</p>
              </div>
            </CardContent>
          </Card>
          <Button asChild variant="outline" className="rounded-md border-[#cdbf9b]">
            <Link to={`/lesson?session=${workspace.sessionId}`}>Adult View</Link>
          </Button>
        </div>
      </header>

      <main className="grid gap-5 p-4 md:p-8 lg:grid-cols-[minmax(0,1fr)_350px]">
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="rounded-md border-[#8fb16a] bg-[#e8f1df] px-4 py-2 font-semibold text-[#0d4a28]">
              My Track: {workspace.runbook.track === "core" ? "Core Path" : workspace.runbook.track}
            </Badge>
            <Card className="ml-auto border-[#d8ceb5] bg-white/65 shadow-none text-[#182018]">
              <CardContent className="flex items-center gap-2 p-2 px-4">
                <span className="text-sm">How confident do you feel?</span>
                {[0, 1, 2, 3, 4].map((index) => (
                  <span key={index} className={cn("h-4 w-4 rounded", index < 3 ? "bg-[#4e8b35]" : "bg-[#ddd6c5]")} />
                ))}
                <span className="text-sm font-semibold">Medium</span>
              </CardContent>
            </Card>
          </div>

          <StudentCurrentStepCard
            workspace={workspace}
            activeAction={state.activeAction}
            activeActionIndex={state.activeActionIndex}
            canAdvance={state.canAdvance}
            onAdvance={state.advanceStep}
          />

          <StudentQuestCard
            workspace={workspace}
            activeActionIndex={state.activeActionIndex}
            revealedHints={state.revealedHints}
            onSelectStep={state.selectStep}
            onRevealNextHint={state.revealNextHint}
          />

          <Card className="border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
            <CardContent className="p-4">
              <div className="mb-3 flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-[#0d4a28]" />
                <p className="font-display text-lg font-bold">Reflect</p>
                <p className="text-sm text-[#5b584f]">I think it works because...</p>
              </div>
              <div className="rounded-md border border-[#d8ceb5] bg-white/70 px-4 py-3 text-[#4a4437]">{workspace.exitTicket}</div>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-5">
          <StudentSuccessRail workspace={workspace} activeActionIndex={state.activeActionIndex} />
          <Card className="border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
            <CardContent className="p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Quest Progress</p>
              <Progress value={Math.round(((state.activeActionIndex + 1) / workspace.studentLessonActions.length) * 100)} className="h-3" />
            </CardContent>
          </Card>
          <StudentRewardCard workspace={workspace} missingRewardGate={state.missingRewardGate} />
        </aside>
      </main>
    </div>
  );
}

export default StudentDashboard;
