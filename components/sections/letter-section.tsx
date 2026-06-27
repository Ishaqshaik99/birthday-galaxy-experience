"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionShell } from "@/components/ui/section-shell";

type LetterSectionProps = {
  title: string;
  paragraphs: string[];
};

export function LetterSection({ title, paragraphs }: LetterSectionProps) {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const fullLetter = useMemo(() => paragraphs.join("\n\n"), [paragraphs]);

  useEffect(() => {
    if (!open) return;
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(fullLetter.slice(0, index));
      if (index >= fullLetter.length) {
        window.clearInterval(timer);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [fullLetter, open]);

  return (
    <SectionShell
      id="letter"
      eyebrow="Letter"
      title="An envelope sealed with warmth, opened with one gentle tap"
      description="Wax seal, unfolding paper, and handwritten energy for the most heartfelt part of the experience."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="glass-card relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-[2.4rem] p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,106,0.14),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
          <motion.div
            animate={open ? { rotateX: -24, y: -10 } : { rotateX: 0, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md perspective-[1400px]"
          >
            <div className="rounded-[2rem] border border-white/15 bg-[#f8eed6] px-6 pb-6 pt-20 text-night shadow-soft">
              <div className="absolute inset-x-0 top-0 h-24 rounded-t-[2rem] bg-[#f5e5c1]" />
              <div className="absolute left-1/2 top-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-rose-500 shadow-gold">
                <span className="font-display text-2xl text-night">S</span>
              </div>
              <div className="relative z-10 space-y-3 pt-8 text-center">
                <p className="text-xs uppercase tracking-[0.45em] text-black/55">Wax-Sealed Note</p>
                <h3 className="font-display text-3xl text-black/85">{title}</h3>
                <p className="text-sm leading-7 text-black/65">Tap the envelope and let the words unfold.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="absolute inset-0 rounded-[2rem]"
              aria-label={open ? "Close letter" : "Open letter"}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]" />
          <div className="relative flex h-full flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/45">Open Letter</p>
                <h3 className="mt-3 font-display text-3xl text-white">With all my heart</h3>
              </div>
              <FiMail className="text-3xl text-amber-200/80" />
            </div>
            <div className="min-h-[18rem] rounded-[1.5rem] border border-white/10 bg-night/40 p-5">
              <p className="whitespace-pre-wrap font-script text-2xl leading-[1.9] text-[#f6ead0] sm:text-3xl">
                {open ? typed : "Click the envelope to reveal the letter..."}
              </p>
            </div>
            <MagneticButton onClick={() => setOpen((current) => !current)} className="self-start">
              {open ? "Seal It Back" : "Open Envelope"}
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
