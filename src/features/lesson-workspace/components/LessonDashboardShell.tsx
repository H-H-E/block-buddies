import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

import { LessonSidebar } from "./LessonSidebar";
import { LessonTopBar } from "./LessonTopBar";

interface LessonDashboardShellProps {
  workspace: LessonWorkspaceContent;
  children: ReactNode;
}

export function LessonDashboardShell({ workspace, children }: LessonDashboardShellProps) {
  return (
    <SidebarProvider defaultOpen className="min-h-screen bg-[#f4f0e6] text-[#182018]">
      <LessonSidebar workspace={workspace} />
      <SidebarInset className="bg-[#f4f0e6]">
        <LessonTopBar workspace={workspace} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
