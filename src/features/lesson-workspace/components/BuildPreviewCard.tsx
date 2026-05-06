import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BuildPreviewCard() {
  return (
    <Card className="border-[#d8ceb5] bg-white/70 shadow-[4px_4px_0_#d8ceb5] text-[#182018]">
      <CardHeader className="pb-3">
        <CardTitle className="font-display text-lg">Build Preview</CardTitle>
        <CardDescription>Compare this known-good preview with your own build before changing anything.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 overflow-hidden rounded-md border border-[#cdbf9b] bg-[#9cc978]" role="img" aria-label="Minecraft-style build preview">
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[#6a9c46]" />
          <div className="absolute left-1/2 top-10 grid -translate-x-1/2 grid-cols-5 gap-1">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className={cn("h-9 w-12 border border-[#5c5a55]", index % 4 === 0 ? "bg-[#8d7c68]" : "bg-[#a8a49b]")}
              />
            ))}
          </div>
          <div className="absolute left-1/2 top-24 h-24 w-14 -translate-x-1/2 border-4 border-[#554a3e] bg-[#e8e3d4]" />
          <div className="absolute bottom-10 left-1/2 h-2 w-52 -translate-x-1/2 bg-[#b42922]" />
          <div className="absolute bottom-8 left-[30%] h-8 w-10 border border-[#5c5a55] bg-[#bfb7a5]" />
          <div className="absolute bottom-6 left-[58%] h-5 w-8 border border-[#5c5a55] bg-[#8d7c68]" />
        </div>
      </CardContent>
    </Card>
  );
}
