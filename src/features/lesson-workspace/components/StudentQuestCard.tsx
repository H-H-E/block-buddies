import { Flag, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { BuildPreviewCard } from "./BuildPreviewCard";
import { StudentHintPanel } from "./StudentHintPanel";
import { StudentStepList } from "./StudentStepList";

interface StudentQuestCardProps {
  workspace: LessonWorkspaceContent;
  activeActionIndex: number;
  revealedHints: string[];
  onSelectStep: (index: number) => void;
  onRevealNextHint: () => void;
}

export function StudentQuestCard({
  workspace,
  activeActionIndex,
  revealedHints,
  onSelectStep,
  onRevealNextHint,
}: StudentQuestCardProps) {
  return (
    <Card className="border-[#d8ceb5] bg-[#fbf7ed] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-[#f1dfb9] p-3">
            <MonitorPlay className="h-8 w-8 text-[#6b4a16]" />
          </span>
          <div className="mr-auto">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d4a28]">Core Quest</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Core Quest: {workspace.studentBuildTitle}</h2>
          </div>
          <Button className="rounded-md bg-[#0d4a28] text-white hover:bg-[#09391e]">Open in Minecraft</Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-5 flex items-center gap-2 text-lg">
          <Flag className="h-5 w-5 text-[#0d4a28]" />
          <span className="font-bold">Goal:</span> {workspace.studentGoal}.
        </p>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_480px]">
          <BuildPreviewCard />
          <div className="space-y-3">
            <StudentStepList
              actions={workspace.studentLessonActions}
              activeActionIndex={activeActionIndex}
              onSelectStep={onSelectStep}
            />
            <StudentHintPanel hints={workspace.fallbackHints} revealedHints={revealedHints} onRevealNextHint={onRevealNextHint} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
