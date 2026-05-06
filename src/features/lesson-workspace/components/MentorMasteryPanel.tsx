import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { LessonWorkspaceContent } from "@/lib/lessonWorkspaceData";

interface MentorMasteryPanelProps {
  workspace: LessonWorkspaceContent;
}

const masteryStates = ["Pass", "Support-Pass", "Fail"] as const;

export function MentorMasteryPanel({ workspace }: MentorMasteryPanelProps) {
  return (
    <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] text-[#182018]">
      <CardHeader className="p-4 pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="font-display text-base uppercase tracking-[0.16em] text-[#756a55]">Live Mastery</CardTitle>
          <Link to={`/lesson/student?session=${workspace.sessionId}`} className="text-xs font-semibold text-[#0d4a28]">
            What student sees
          </Link>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 p-4 pt-0 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {workspace.masteryChecks.map((check) => (
          <fieldset key={check.gate} className="rounded-md border border-[#e0d5bb] bg-white/60 p-3">
            <legend className="px-1 text-center text-xs font-bold uppercase text-[#182018]">{check.gate}</legend>
            <p className="mb-3 mt-1 text-center text-xs text-[#5b584f]">{check.adult}</p>
            <RadioGroup aria-label={`${check.gate} mastery gate`} defaultValue="Support-Pass" className="gap-1">
              {masteryStates.map((state) => {
                const id = `${check.gate.toLowerCase()}-${state.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <div key={state} className="flex items-center gap-2 border-t border-[#eadfc7] py-2 first:border-t-0">
                    <RadioGroupItem id={id} value={state} className={state === "Fail" ? "border-[#c5523c] text-[#c5523c]" : "border-[#0d4a28] text-[#0d4a28]"} />
                    <Label htmlFor={id} className="text-xs font-medium leading-none">
                      {state}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </fieldset>
        ))}
      </CardContent>
    </Card>
  );
}
