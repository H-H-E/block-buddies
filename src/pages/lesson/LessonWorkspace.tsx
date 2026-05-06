import { useSearchParams } from "react-router-dom";
import { MentorDashboard, StudentDashboard } from "@/features/lesson-workspace/components";
import { resolveLessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface LessonWorkspaceProps {
  mode?: "adult" | "student";
}

const LessonWorkspace = ({ mode = "adult" }: LessonWorkspaceProps) => {
  const [searchParams] = useSearchParams();
  const workspace = resolveLessonWorkspaceContent(searchParams.get("session") ?? searchParams.get("sessionId"));

  if (mode === "student") {
    return <StudentDashboard workspace={workspace} />;
  }

  return <MentorDashboard workspace={workspace} />;
};

export default LessonWorkspace;
