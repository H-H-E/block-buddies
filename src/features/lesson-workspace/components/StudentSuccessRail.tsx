import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface StudentSuccessRailProps {
  workspace: LessonWorkspaceContent;
  activeActionIndex: number;
}

export function StudentSuccessRail({ workspace, activeActionIndex }: StudentSuccessRailProps) {
  return (
    <div className="space-y-5">
      <Card className="border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-display text-xl">
            <Sparkles className="h-5 w-5 text-[#d98a0a]" />
            What counts today
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {workspace.masteryChecks.map((check, index) => (
            <Card key={check.gate} className="border-[#e0d5bb] bg-white/65 shadow-none">
              <CardContent className="p-4">
                <p className="font-display text-lg font-bold text-[#0d4a28]">
                  {check.gate} - {check.student}
                </p>
                <p className="text-sm text-[#5b584f]">
                  {workspace.studentChecklist[index] ?? "Capture proof for this mastery check."}
                </p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card className="border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg">Core Quest Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {workspace.studentChecklist.map((item, index) => {
            const checkboxId = `student-checklist-${workspace.sessionId}-${index}`;
            return (
              <div key={item} className="flex items-center gap-2 text-sm">
                <Checkbox
                  id={checkboxId}
                  className="border-[#0d4a28] data-[state=checked]:bg-[#0d4a28] data-[state=checked]:text-white"
                  checked={index <= activeActionIndex}
                  disabled
                />
                <label htmlFor={checkboxId} className="text-[#4a4437]">
                  {item}
                </label>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
