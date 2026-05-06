import { Pause } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { workspaceRoles, type LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

import { MentorMasteryPanel } from "./MentorMasteryPanel";

interface MentorSupportRailProps {
  workspace: LessonWorkspaceContent;
}

export function MentorSupportRail({ workspace }: MentorSupportRailProps) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start" aria-label="Mentor support controls">
      <MentorMasteryPanel workspace={workspace} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Intervention Timer</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between">
              <p className="font-display text-3xl font-bold text-[#0d4a28]">00:03:21</p>
              <Button variant="outline" size="icon" className="rounded-md border-[#cdbf9b]" aria-label="Pause intervention timer">
                <Pause className="h-4 w-4" />
              </Button>
            </div>
            <Progress value={48} className="mt-3 h-2" />
            <p className="mt-2 text-sm text-[#8a5a07]">3:39 remaining before fallback trigger</p>
            <Button className="mt-3 w-full rounded-md bg-[#d98a0a] text-white hover:bg-[#b66f00]" size="sm">
              Start fallback
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Parent Summary Preview</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm leading-6 text-[#4a4437]">{workspace.parentSummary}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Adult Context</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <ScrollArea className="h-[260px] pr-3">
            <div className="space-y-2">
              {workspaceRoles.map((role) => (
                <article key={role.id} className="rounded-md border border-[#e0d5bb] bg-white/55 p-3">
                  <h3 className="font-semibold">{role.label}</h3>
                  <p className="text-sm text-[#5b584f]">{role.emphasis}</p>
                </article>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </aside>
  );
}
