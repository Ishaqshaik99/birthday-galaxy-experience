import Image from "next/image";
import { FiArrowDown, FiGift, FiHeart } from "react-icons/fi";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";

type HeroSectionProps = {
  recipientName: string;
  heroImage: string;
  headline: string;
  subheadline: string;
};

export function HeroSection({ recipientName, heroImage, headline, subheadline }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="relative z-10 space-y-8">
          <p className="text-sm uppercase tracking-[0.5em] text-white/55">For {recipientName}</p>
          <h1 className="balanced-wrap font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl xl:text-7xl">
            {headline}
          </h1>
          <p className="max-w-2xl balanced-wrap text-lg leading-8 text-white/72">{subheadline}</p>
          <div className="flex flex-wrap gap-4">
            <MagneticButton onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}>
              <span className="flex items-center gap-3">
                Explore Memories <FiGift />
              </span>
            </MagneticButton>
            <MagneticButton
              className="bg-transparent"
              onClick={() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="flex items-center gap-3">
                Open The Letter <FiHeart />
              </span>
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="glass-card relative mx-auto aspect-[0.86] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/15">
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/15 to-transparent" />
            <Image
              src={heroImage}
              alt="Birthday hero portrait placeholder"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">Star Of The Day</p>
              <p className="mt-2 font-display text-2xl text-white">The universe looks softer around you.</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-white/55">
        <div className="mx-auto mb-3 flex h-12 w-8 items-start justify-center rounded-full border border-white/15 p-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em]">
          <span>Scroll</span>
          <FiArrowDown />
        </div>
      </div>
    </section>
  );
}
