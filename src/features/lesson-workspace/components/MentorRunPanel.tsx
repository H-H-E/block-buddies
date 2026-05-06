import { CheckCircle2, Clock3, Flag, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface MentorRunPanelProps {
  workspace: LessonWorkspaceContent;
}

export function MentorRunPanel({ workspace }: MentorRunPanelProps) {
  return (
    <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardHeader className="p-5 pb-3">
        <div className="flex flex-wrap items-start gap-3">
          <div className="mr-auto">
            <CardDescription className="text-xs uppercase tracking-[0.16em] text-[#756a55]">Step 3 of 5</CardDescription>
            <CardTitle className="font-display text-2xl font-bold">Core Quest · {workspace.studentBuildTitle}</CardTitle>
            <CardDescription className="mt-1 max-w-2xl text-[#5b584f]">
              {workspace.runbook.objective}. Learner builds evidence that demonstrates the session pathway.
            </CardDescription>
          </div>
          <Badge variant="outline" className="rounded-md border-[#d8ceb5] bg-white/65 px-3 py-2 text-sm text-[#0d4a28]">
            <Clock3 className="mr-2 h-4 w-4" />
            16 min
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <Tabs defaultValue="run" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-3 rounded-md border border-[#d8ceb5] bg-white/55">
            <TabsTrigger value="run">Run</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>

          <TabsContent value="run" className="mt-0 grid gap-4 md:grid-cols-2">
            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Mentor Script</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="rounded border border-[#e6dcc4] bg-[#fffaf0] p-4 text-sm leading-6 text-[#4a4437]">
                  {workspace.runbook.hook}. Start with {workspace.runbook.coreQuestSteps[0]?.toLowerCase() ?? "the first core step"}, keep the scope small, and capture evidence as you go.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Core Quest Steps</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-2 text-sm text-[#4a4437]">
                  {workspace.runbook.coreQuestSteps.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d4a28]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evidence" className="mt-0 grid gap-4 md:grid-cols-2">
            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Evidence To Collect</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-2 text-sm text-[#4a4437]">
                  {workspace.evidenceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border border-[#9d9279]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Exit Ticket</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="rounded border border-[#e6dcc4] bg-[#fffaf0] p-4 text-sm leading-6 text-[#4a4437]">
                  <Flag className="mr-2 inline h-4 w-4 text-[#0d4a28]" />
                  {workspace.exitTicket}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="review" className="mt-0 grid gap-4 md:grid-cols-2">
            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Common Failure Signs</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="space-y-2 text-sm text-[#4a4437]">
                  {workspace.commonFailureSigns.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#c5523c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Parent Summary Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm leading-6 text-[#4a4437]">{workspace.parentSummary}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="rounded-md border-[#e0d5bb] bg-white/55 text-[#182018]">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-[0.14em] text-[#756a55]">Live Evidence Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-4 pt-0 text-sm text-[#4a4437]">
              <p className="rounded border border-[#e6dcc4] bg-[#fffaf0] p-3 leading-6">{workspace.exitTicket}</p>
              <ul className="space-y-2">
                {workspace.commonFailureSigns.slice(0, 2).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#c5523c]" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
