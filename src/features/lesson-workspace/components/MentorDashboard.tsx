import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

import { LessonDashboardShell } from "./LessonDashboardShell";
import { MentorRunPanel } from "./MentorRunPanel";
import { MentorSupportRail } from "./MentorSupportRail";
import { MentorTimeline } from "./MentorTimeline";
import { TrackLensCards } from "./TrackLensCards";

export interface MentorDashboardProps {
  workspace: LessonWorkspaceContent;
}

export function MentorDashboard({ workspace }: MentorDashboardProps) {
  return (
    <LessonDashboardShell workspace={workspace}>
      <div className="grid gap-4 p-4 md:p-6 lg:grid-cols-[240px_minmax(0,1fr)_360px]">
        <MentorTimeline workspace={workspace} />
        <section className="space-y-4" aria-label="Mentor lesson dashboard">
          <MentorRunPanel workspace={workspace} />
          <TrackLensCards />
        </section>
        <MentorSupportRail workspace={workspace} />
      </div>
    </LessonDashboardShell>
  );
}
