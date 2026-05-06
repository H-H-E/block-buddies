import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackExamples } from "@/lib/lessonWorkspaceData";
import { cn } from "@/lib/utils";

export function TrackLensCards() {
  return (
    <Card className="rounded-md border-[#d8ceb5] bg-[#fbf7ed] shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardHeader className="p-5 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-xs font-bold uppercase tracking-[0.16em] text-[#756a55]">Track Lens</CardTitle>
          <Badge variant="outline" className="rounded-md border-[#d8ceb5] bg-[#e8f1df] px-3 py-1 text-[#0d4a28]">
            Current learner lens: Mechanist
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 p-5 pt-0 md:grid-cols-3">
        {trackExamples.map((example) => (
          <article
            key={example.track}
            className={cn(
              "rounded-md border bg-white/60 p-4",
              example.track === "B" ? "border-[#d98a0a] shadow-[0_0_0_2px_rgba(217,138,10,0.12)]" : "border-[#e0d5bb]",
            )}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d4a28]">
              {example.track} {example.name}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold">{example.title}</h3>
            <div className="my-3 rounded border border-[#d6c9ad] bg-[#eef0d9] p-3">
              <div className="grid grid-cols-5 gap-1" aria-hidden="true">
                {Array.from({ length: 15 }).map((_, blockIndex) => (
                  <span
                    key={blockIndex}
                    className={cn(
                      "aspect-square rounded-[2px] border border-[#d6c9ad]",
                      blockIndex === 7 ? "bg-[#d98a0a]" : blockIndex % 3 === 0 ? "bg-[#bfb7a5]" : "bg-[#7aa05a]",
                    )}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#5b584f]">{example.goal}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
