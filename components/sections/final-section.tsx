import Image from "next/image";
import { FiRotateCcw } from "react-icons/fi";
import { MagneticButton } from "@/components/ui/magnetic-button";

type FinalSectionProps = {
  image: string;
  quote: string;
};

export function FinalSection({ image, quote }: FinalSectionProps) {
  return (
    <section id="finale" className="relative section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card relative overflow-hidden rounded-[2.4rem]">
          <div className="grid min-h-[38rem] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[24rem]">
              <Image
                src={image}
                alt="Favorite memory placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night/15 via-transparent to-night/65" />
            </div>
            <div className="relative flex flex-col justify-center gap-8 p-8 sm:p-12 lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,209,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-2xl" />
              <div className="relative z-10 space-y-6">
                <p className="text-sm uppercase tracking-[0.5em] text-white/50">The Last Frame</p>
                <h2 className="balanced-wrap font-display text-4xl text-white sm:text-5xl xl:text-6xl">
                  Keep this night close. Some memories are meant to glow forever.
                </h2>
                <p className="font-script text-3xl leading-[1.8] text-[#f6ead0] sm:text-4xl">“{quote}”</p>
                <MagneticButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <span className="flex items-center gap-3">
                    Replay Journey <FiRotateCcw />
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
