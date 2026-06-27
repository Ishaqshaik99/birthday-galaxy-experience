"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/ui/section-shell";

export function CakeSection({ candles = 21 }: { candles?: number }) {
  const [lit, setLit] = useState(false);
  const [burst, setBurst] = useState(0);
  const confetti = useMemo(() => Array.from({ length: 36 }, (_, index) => index), [burst]);

  return (
    <SectionShell
      id="cake"
      eyebrow="Cake Ritual"
      title="A birthday cake with twenty-one candles, smoke, and a confetti burst"
      description="Click once to light the candles. Click again to blow them out and release a glowing mini celebration."
    >
      <div className="glass-card relative overflow-hidden rounded-[2.4rem] p-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="relative mx-auto h-[28rem] w-full max-w-2xl">
            <div className="absolute bottom-0 left-1/2 h-16 w-[78%] -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl" />
            <div className="absolute bottom-12 left-1/2 h-16 w-[72%] -translate-x-1/2 rounded-[2rem] bg-gradient-to-b from-amber-100 to-pink-200 shadow-soft" />
            <div className="absolute bottom-28 left-1/2 h-20 w-[62%] -translate-x-1/2 rounded-[2rem] bg-gradient-to-b from-[#ffe6fd] to-[#fbc2eb] shadow-soft" />
            <div className="absolute bottom-48 left-1/2 h-20 w-[52%] -translate-x-1/2 rounded-[2rem] bg-gradient-to-b from-[#d4b5ff] to-[#fbd3e9] shadow-soft" />
            <div className="absolute bottom-[17.5rem] left-1/2 flex w-[54%] -translate-x-1/2 flex-wrap items-end justify-center gap-x-2 gap-y-6 px-2">
              {Array.from({ length: candles }, (_, index) => (
                <div key={index} className="relative flex h-12 w-3 items-start justify-center rounded-full bg-white/80">
                  <motion.span
                    animate={lit ? { opacity: [0.45, 1, 0.65], scale: [0.9, 1.15, 1] } : { opacity: 0, scale: 0.6 }}
                    transition={{ duration: 1.2, repeat: lit ? Infinity : 0, delay: index * 0.03 }}
                    className="absolute -top-4 h-5 w-4 rounded-full bg-gradient-to-b from-yellow-100 via-amber-300 to-orange-500 blur-[0.5px]"
                  />
                  {!lit ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: burst > 0 ? [0.2, 0.55, 0] : 0, y: burst > 0 ? [-2, -16] : 0 }}
                      transition={{ duration: 1.1, delay: index * 0.01 }}
                      className="absolute -top-4 h-4 w-4 rounded-full bg-white/40 blur-sm"
                    />
                  ) : null}
                </div>
              ))}
            </div>
            {burst > 0 ? (
              <div className="pointer-events-none absolute inset-0">
                {confetti.map((piece) => (
                  <motion.span
                    key={`${burst}-${piece}`}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: (piece % 6 - 3) * 42,
                      y: 60 + Math.floor(piece / 6) * 18,
                      opacity: 0,
                      scale: 0.7,
                      rotate: piece * 18,
                    }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute left-1/2 top-[35%] h-3 w-3 rounded-sm"
                    style={{
                      background: ["#ffd76a", "#ff78d1", "#57d6ff", "#ffffff"][piece % 4],
                    }}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.45em] text-white/45">Interactive Wish</p>
            <h3 className="font-display text-4xl text-white">Make a wish, light the glow, and celebrate the moment.</h3>
            <p className="text-base leading-8 text-white/72">
              This section is designed as a tactile celebration moment with candle toggles, soft smoke, and confetti to bring the birthday ritual to life.
            </p>
            <button
              type="button"
              onClick={() => {
                setLit((current) => {
                  if (current) {
                    setBurst((value) => value + 1);
                  }
                  return !current;
                });
              }}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm uppercase tracking-[0.32em] text-white transition hover:bg-white/15"
            >
              {lit ? "Blow Out Candles" : "Light Candles"}
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
