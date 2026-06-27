"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { useCountdown } from "@/hooks/use-countdown";

const keys = ["years", "months", "days", "hours", "minutes", "seconds"] as const;

export function CountdownSection({ targetDate }: { targetDate: string }) {
  const countdown = useCountdown(targetDate);

  return (
    <SectionShell
      id="countdown"
      eyebrow="Countdown"
      title="The sky is counting down to her next radiant moment"
      description="A live animated timer that keeps the anticipation glowing until the celebration begins."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {keys.map((key, index) => (
          <motion.div
            key={key}
            className="glass-card rounded-[2rem] p-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <motion.p
              key={countdown[key]}
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="font-display text-5xl text-gradient sm:text-6xl"
            >
              {String(countdown[key]).padStart(2, "0")}
            </motion.p>
            <p className="mt-3 text-xs uppercase tracking-[0.45em] text-white/50">{key}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
