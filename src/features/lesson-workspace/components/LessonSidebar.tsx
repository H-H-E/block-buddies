import { Link } from "react-router-dom";
import { BookOpen, CheckCircle2, Circle, ClipboardCheck, Gauge, Layers3, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { lessonWorkspaceSessions, type LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

interface LessonSidebarProps {
  workspace: LessonWorkspaceContent;
}

const consoleItems = [
  { label: "Runbooks", icon: BookOpen, active: true },
  { label: "Mastery", icon: Gauge, active: false },
  { label: "Profiles", icon: Users, active: false },
  { label: "Operations", icon: ClipboardCheck, active: false },
  { label: "Metrics", icon: Layers3, active: false },
];

export function LessonSidebar({ workspace }: LessonSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" className="border-r border-[#21482d] bg-[#062a18] text-[#f8f3df]">
      <SidebarHeader className="border-b border-white/10 p-5">
        <Link to="/" className="flex items-center gap-3" aria-label="Block Buddies home">
          <div className="grid h-10 w-10 grid-cols-3 gap-0.5" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="rounded-[2px] bg-[#89b545]" />
            ))}
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none">BLOCK</p>
            <p className="font-display text-lg font-bold leading-none">BUDDIES</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-[#062a18]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#a8bf91]">Mentor tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {consoleItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.active}
                    className={cn(
                      "text-[#cbd8bd] hover:bg-[#e8f1df] hover:text-[#0d3d20] data-[active=true]:bg-[#e8f1df] data-[active=true]:text-[#0d3d20]",
                    )}
                  >
                    <span aria-current={item.active ? "page" : undefined} aria-disabled={!item.active}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-white/10" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#a8bf91]">Session Spine</SidebarGroupLabel>
          <SidebarGroupContent>
            <nav aria-label="Lesson sessions">
              <SidebarMenu>
                {lessonWorkspaceSessions.map((session) => {
                  const isActive = session.sessionId === workspace.sessionId;
                  return (
                    <SidebarMenuItem key={session.sessionId}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        size="sm"
                        className="text-[#d8e4cb] hover:bg-[#b9d98d] hover:text-[#12351d] data-[active=true]:bg-[#b9d98d] data-[active=true]:text-[#12351d]"
                      >
                        <Link
                          to={`/lesson?session=${session.sessionId}`}
                          aria-current={isActive ? "page" : undefined}
                          aria-label={`${session.title}${isActive ? " active session" : ""}`}
                        >
                          <span className="font-semibold">{session.sessionId}</span>
                          <span className="truncate text-xs opacity-90">{session.shortTitle}</span>
                          {isActive ? <Circle className="ml-auto h-3 w-3 fill-current" /> : <CheckCircle2 className="ml-auto h-3 w-3" />}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 bg-[#062a18] p-4">
        <Badge className="w-fit rounded-md bg-[#e8f1df] text-[#0d3d20] hover:bg-[#e8f1df]">MENTOR CONSOLE</Badge>
        <p className="text-xs text-[#cbd8bd]">Live runbook and evidence capture</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
