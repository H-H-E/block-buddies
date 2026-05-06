import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

interface StudentRewardCardProps {
  workspace: LessonWorkspaceContent;
  missingRewardGate: string;
}

export function StudentRewardCard({ workspace, missingRewardGate }: StudentRewardCardProps) {
  const earnedCount = workspace.masteryChecks.filter((check) => check.gate !== missingRewardGate).length;
  const totalCount = workspace.masteryChecks.length;

  return (
    <Card className="border-[#d8ceb5] bg-[#fff4d7] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardHeader className="pb-3">
        <CardTitle className="font-display text-lg">Today&apos;s Reward</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-[#d98a0a]">
          {workspace.masteryChecks.map((check) => {
            const earned = check.gate !== missingRewardGate;
            return (
              <Sparkles
                key={check.gate}
                className={cn("h-8 w-8", earned ? "fill-current" : "text-[#bdb39e]")}
                aria-label={earned ? `${check.gate} star earned` : `${check.gate} star still open`}
              />
            );
          })}
          <span className="ml-auto font-display text-xl font-bold">{earnedCount} / {totalCount}</span>
        </div>
        <p className="mt-3 text-sm font-semibold text-[#8a5a07]">
          {missingRewardGate} star still open: fix or explain one issue to earn it.
        </p>
      </CardContent>
    </Card>
  );
}
