import Image from "next/image";
import type { TimelineItem } from "@/types/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function TimelineSection({ items }: { items: TimelineItem[] }) {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Timeline"
      title="The chapters that turned moments into a constellation"
      description="A horizontal story ribbon for childhood, school, college, favorite memories, and the birthday chapter that shines brightest."
    >
      <div className="timeline-scrollbar flex snap-x gap-6 overflow-x-auto pb-6">
        {items.map((item, index) => (
          <Reveal key={item.title} className="min-w-[84vw] snap-center md:min-w-[40rem]" delay={index * 0.08}>
            <article className="glass-card relative overflow-hidden rounded-[2rem] p-5">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
              <div className="relative grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] border border-white/15">
                  <Image
                    src={item.image}
                    alt={`${item.title} memory placeholder`}
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-white/15 bg-night/40 p-6 backdrop-blur-2xl">
                  <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-white/50">{item.era}</p>
                    <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-white/72">{item.memory}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/45">
                    <span className="h-px flex-1 bg-white/15" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
