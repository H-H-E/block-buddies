import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StudentHintPanelProps {
  hints: string[];
  revealedHints: string[];
  onRevealNextHint: () => void;
}

export function StudentHintPanel({ hints, revealedHints, onRevealNextHint }: StudentHintPanelProps) {
  const hasMoreHints = revealedHints.length < hints.length;

  return (
    <Card className="border-[#d8ceb5] bg-white/70 text-[#182018]">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="font-display text-lg">Need a hint?</CardTitle>
        <HelpCircle className="h-5 w-5 text-[#756a55]" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 sm:grid-cols-3">
          {revealedHints.map((hint, index) => (
            <Card key={`${index}-${hint}`} className="border-[#d8ceb5] bg-[#fffaf0] shadow-none">
              <CardContent className="p-3 text-sm">
                <span className="font-semibold">Hint Level {index + 1}</span>
                <span className="block text-[#5b584f]">{hint}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        {hasMoreHints && (
          <Button variant="outline" className="mt-3 w-full rounded-md border-[#8fb16a] text-[#0d4a28]" onClick={onRevealNextHint}>
            Reveal next hint
          </Button>
        )}
        <Button variant="outline" className="mt-3 w-full rounded-md border-[#c5523c] text-[#a73828]">
          I am stuck · Get extra help
        </Button>
      </CardContent>
    </Card>
  );
}
