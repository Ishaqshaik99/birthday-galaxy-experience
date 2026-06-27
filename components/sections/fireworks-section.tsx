"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/ui/section-shell";

export function FireworksSection() {
  const [trigger, setTrigger] = useState(0);
  const bursts = useMemo(() => Array.from({ length: 24 }, (_, index) => index), [trigger]);

  return (
    <SectionShell
      id="fireworks"
      eyebrow="Final Celebration"
      title="Golden fireworks, heart bursts, and a sky that applauds her"
      description="A stylized celebratory scene with sparkling radial bursts that feel festive without slowing the page down."
    >
      <div className="glass-card relative overflow-hidden rounded-[2.4rem] p-8">
        <div className="relative flex min-h-[28rem] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-night/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,106,0.14),transparent_30%),radial-gradient(circle_at_20%_30%,rgba(87,214,255,0.12),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,120,209,0.12),transparent_22%)]" />
          {bursts.map((burst) => {
            const left = 18 + (burst % 6) * 13;
            const top = 18 + Math.floor(burst / 6) * 14;
            const hue = ["#ffd76a", "#ff78d1", "#57d6ff", "#ffffff"][burst % 4];

            return (
              <motion.div
                key={`${trigger}-${burst}`}
                className="absolute"
                style={{ left: `${left}%`, top: `${top}%` }}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: [0.2, 1.2, 1], rotate: 180 }}
                transition={{ duration: 0.9, delay: (burst % 8) * 0.08 }}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <motion.span
                    key={index}
                    className="absolute block h-3 w-3 rounded-full"
                    style={{ background: hue }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0.9 }}
                    animate={{
                      x: Math.cos((index / 10) * Math.PI * 2) * 54,
                      y: Math.sin((index / 10) * Math.PI * 2) * 54,
                      opacity: 0,
                      scale: 0.1,
                    }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                ))}
                <motion.span
                  className="absolute left-1/2 top-1/2 text-2xl text-pink-200"
                  initial={{ x: "-50%", y: "-50%", scale: 0.2, opacity: 0 }}
                  animate={{ scale: [0.4, 1.2, 0.8], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  ♥
                </motion.span>
              </motion.div>
            );
          })}
          <div className="relative z-10 max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-white/50">Sky Full Of Applause</p>
            <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">Let the night celebrate a little louder.</h3>
            <p className="mt-4 text-base leading-8 text-white/70">
              Trigger an elegant fireworks bloom with gold, pink, blue, sparkles, and heart-shaped center bursts.
            </p>
            <button
              type="button"
              onClick={() => setTrigger((value) => value + 1)}
              className="mt-8 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm uppercase tracking-[0.32em] text-white transition hover:bg-white/15"
            >
              Launch Celebration
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
