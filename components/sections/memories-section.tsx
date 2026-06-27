import type { MemoryCard } from "@/types/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function MemoriesSection({ memories }: { memories: MemoryCard[] }) {
  return (
    <SectionShell
      id="memories"
      eyebrow="Memory Notes"
      title="Little truths that deserve to glow a little louder"
      description="A set of floating glass cards with premium motion, soft borders, and gentle storytelling energy."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {memories.map((memory, index) => (
          <Reveal key={memory.title} delay={index * 0.1}>
            <article className="glass-card group relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className={`absolute inset-0 bg-gradient-to-br ${memory.accent} opacity-70`} />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] bg-[length:200%_100%] opacity-0 transition duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
              <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.45em] text-white/50">Memory {String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-3xl text-white">{memory.title}</h3>
                <p className="balanced-wrap text-base leading-8 text-white/72">{memory.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
