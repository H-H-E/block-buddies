import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface StudentCurrentStepCardProps {
  workspace: LessonWorkspaceContent;
  activeAction: LessonWorkspaceContent["studentLessonActions"][number];
  activeActionIndex: number;
  canAdvance: boolean;
  onAdvance: () => void;
}

export function StudentCurrentStepCard({
  workspace,
  activeAction,
  activeActionIndex,
  canAdvance,
  onAdvance,
}: StudentCurrentStepCardProps) {
  return (
    <Card className="border-2 border-[#d98a0a] bg-[#fff4d7] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardContent className="p-4">
        <div className="mb-1 flex items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a5a07]">Current Step</p>
          <Badge className="bg-[#d98a0a] text-white hover:bg-[#d98a0a]">Step {activeActionIndex + 1}</Badge>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-display text-2xl font-bold text-[#3f2c09]">Next up: {activeAction.title}</p>
          <Button className="rounded-md bg-[#0d4a28] text-white hover:bg-[#09391e]" disabled={!canAdvance} onClick={onAdvance}>
            Continue with Step {Math.min(activeActionIndex + 1, workspace.studentLessonActions.length)}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
