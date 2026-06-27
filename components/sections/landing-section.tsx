"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { MagneticButton } from "@/components/ui/magnetic-button";

type LandingSectionProps = {
  lines: string[];
  onBegin: () => void;
};

export function LandingSection({ lines, onBegin }: LandingSectionProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setFinished(true);
      return;
    }

    const full = lines[lineIndex];
    let charIndex = 0;

    const type = window.setInterval(() => {
      charIndex += 1;
      setDisplayed(full.slice(0, charIndex));

      if (charIndex >= full.length) {
        window.clearInterval(type);
        window.setTimeout(() => {
          setLineIndex((current) => current + 1);
          setDisplayed("");
        }, 800);
      }
    }, lineIndex === 2 ? 85 : 55);

    return () => window.clearInterval(type);
  }, [lineIndex, lines]);

  const completed = useMemo(() => lines.slice(0, Math.min(lineIndex, lines.length)), [lineIndex, lines]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-16 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,214,255,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,120,209,0.14),transparent_22%),linear-gradient(180deg,rgba(4,3,11,0.75),rgba(4,3,11,0.96))]" />
      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <p className="text-sm uppercase tracking-[0.55em] text-white/55">A Birthday Story</p>
        <div className="space-y-4">
          {completed.map((line) => (
            <p key={line} className="font-display text-3xl text-white/85 sm:text-5xl lg:text-6xl">
              {line}
            </p>
          ))}
          {!finished ? (
            <p className="type-caret font-display text-3xl text-gradient sm:text-5xl lg:text-6xl">{displayed}</p>
          ) : (
            <p className="font-display text-4xl text-gradient sm:text-6xl lg:text-7xl">Happy Birthday</p>
          )}
        </div>
        <p className="mx-auto max-w-2xl balanced-wrap text-base leading-8 text-white/68 sm:text-lg">
          A premium cinematic journey through light, memory, and celebration, created for the brightest soul in the room.
        </p>
        <div className="pt-4">
          <MagneticButton onClick={onBegin} className={!finished ? "pointer-events-none opacity-50" : ""}>
            <span className="flex items-center gap-3">
              Begin Journey <FiArrowDownRight className="text-base" />
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
