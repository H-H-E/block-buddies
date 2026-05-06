import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

interface StudentStepListProps {
  actions: LessonWorkspaceContent["studentLessonActions"];
  activeActionIndex: number;
  onSelectStep: (index: number) => void;
}

export function StudentStepList({ actions, activeActionIndex, onSelectStep }: StudentStepListProps) {
  return (
    <div className="space-y-3" aria-label="Student quest steps">
      {actions.map((action, index) => (
        <Button
          key={action.id}
          type="button"
          variant="ghost"
          onClick={() => onSelectStep(index)}
          className={cn(
            "h-auto w-full justify-start rounded-md border p-4 text-left transition hover:bg-white/80",
            index === activeActionIndex
              ? "border-[#d98a0a] bg-[#fff4d7] shadow-[3px_3px_0_#d8ceb5]"
              : "border-[#d8ceb5] bg-white/65 hover:border-[#0d4a28]",
          )}
          aria-current={index === activeActionIndex ? "step" : undefined}
        >
          <span
            className={cn(
              "mr-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-md font-display text-2xl font-bold text-white",
              index === activeActionIndex ? "bg-[#d98a0a]" : "bg-[#2f6f3e]",
            )}
          >
            {index + 1}
          </span>
          <span className="mr-auto block min-w-0">
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-display text-xl font-bold text-[#182018]">{action.title}</span>
              {index === activeActionIndex && <Badge className="bg-[#d98a0a] text-white hover:bg-[#d98a0a]">Current</Badge>}
            </span>
            <span className="block whitespace-normal text-sm text-[#5b584f]">{action.description}</span>
          </span>
          <ArrowRight className="ml-3 h-5 w-5 shrink-0 text-[#0d4a28]" />
        </Button>
      ))}
    </div>
  );
}

export function StudentStepListCard(props: StudentStepListProps) {
  return (
    <Card className="border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
      <CardContent className="p-4">
        <StudentStepList {...props} />
      </CardContent>
    </Card>
  );
}
