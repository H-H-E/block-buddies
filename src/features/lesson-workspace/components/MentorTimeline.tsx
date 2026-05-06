import { CheckCircle2, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

interface MentorTimelineProps {
  workspace: LessonWorkspaceContent;
}

const statusClassNames = {
  complete: "border-[#2f6f3e] bg-[#e8f1df] text-[#18441f]",
  active: "border-[#d98a0a] bg-[#fff3d6] text-[#693c00]",
  ready: "border-[#cdbf9b] bg-[#fbf7eb] text-[#574b33]",
  next: "border-[#cdbf9b] bg-[#f5efe0] text-[#574b33]",
};

export function MentorTimeline({ workspace }: MentorTimelineProps) {
  return (
    <section className="space-y-4" aria-label="Lesson timeline">
      <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
        <CardHeader className="p-4 pb-3">
          <CardTitle className="font-display text-lg">Session Timeline</CardTitle>
          <CardDescription>Hook, model, quest, fallback, and exit flow.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {workspace.adultLessonSteps.map((step, index) => (
            <article
              key={step.id}
              className={cn("flex gap-3 border-t border-[#e3d9c0] p-4", step.status === "active" && "bg-[#fff8e8]")}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-sm font-bold",
                  statusClassNames[step.status],
                )}
              >
                {index + 1}
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.12em] text-[#756a55]">{step.window}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-base font-bold">{step.title}</h2>
                  {step.status === "active" && <Badge className="rounded-full bg-[#d98a0a] text-white hover:bg-[#d98a0a]">Current Step</Badge>}
                </div>
                <p className="text-sm leading-6 text-[#5b584f]">{step.note}</p>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="font-display text-base">Lesson Materials</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          {workspace.materials.map((item) => (
            <div key={item} className="flex items-center justify-between border-t border-[#e6dcc4] py-2 text-sm first:border-t-0">
              <span>{item}</span>
              <FileText className="h-4 w-4 text-[#0d4a28]" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="font-display text-base">Ready Checks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-4 pt-0 text-sm text-[#4a4437]">
          {workspace.studentChecklist.slice(0, 3).map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0d4a28]" />
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
