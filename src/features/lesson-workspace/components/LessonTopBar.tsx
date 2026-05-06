import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface LessonTopBarProps {
  workspace: LessonWorkspaceContent;
}

export function LessonTopBar({ workspace }: LessonTopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d8ceb5] bg-[#f8f3e7]/95 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <SidebarTrigger aria-label="Toggle lesson navigation" className="rounded-md border border-[#cdbf9b] bg-white/60 text-[#0d4a28]" />
        <Separator orientation="vertical" className="hidden h-8 bg-[#d8ceb5] sm:block" />

        <div className="mr-auto min-w-[220px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#456042]">MENTOR CONSOLE</p>
          <h1 className="font-display text-xl font-bold md:text-2xl">{workspace.title}</h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="rounded-md border-[#cfc2a3] bg-white/55 px-3 py-1 text-[#574b33]">
            Lesson {workspace.sessionNumber} of {workspace.totalSessions}
          </Badge>
          <Badge variant="outline" className="rounded-md border-[#cfc2a3] bg-white/55 px-3 py-1 text-[#574b33]">
            {workspace.shortTitle}
          </Badge>
          <Badge className="rounded-md bg-[#0d4a28] px-3 py-1 text-white hover:bg-[#0d4a28]">Live Instruction</Badge>
        </div>

        <Button asChild className="rounded-md bg-[#0d4a28] text-white hover:bg-[#09391e]" size="sm">
          <Link to={`/lesson/student?session=${workspace.sessionId}`}>
            Student View
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
