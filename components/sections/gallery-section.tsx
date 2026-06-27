"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { GalleryImage } from "@/types/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const positions = [
  "rotate-[-6deg] md:translate-y-6",
  "rotate-[5deg] md:-translate-y-8",
  "rotate-[-3deg] md:translate-y-3",
  "rotate-[8deg] md:-translate-y-6",
  "rotate-[-7deg] md:translate-y-9",
];

export function GallerySection({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <SectionShell
      id="gallery"
      eyebrow="Photo Gallery"
      title="Floating polaroids with depth, glow, and a little VisionOS attitude"
      description="Hover, tilt, and tap into a fullscreen memory modal designed to feel cinematic instead of ordinary."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {images.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.08}>
            <motion.button
              type="button"
              whileHover={{ y: -12, rotateX: -8, rotateY: 6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 16 }}
              onClick={() => setSelected(image)}
              className={`glass-card group relative min-h-[22rem] overflow-hidden rounded-[2rem] p-4 text-left ${positions[index % positions.length]}`}
            >
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-white/15 bg-night/30">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.42em] text-white/45">Polaroid {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl text-white">{image.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{image.caption}</p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-night/80 p-6 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass-card relative w-full max-w-5xl overflow-hidden rounded-[2rem] p-4"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border border-white/15">
                <Image src={selected.src} alt={selected.title} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="space-y-3 p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.45em] text-white/45">Fullscreen Memory</p>
                <h3 className="font-display text-3xl text-white">{selected.title}</h3>
                <p className="max-w-3xl text-base leading-8 text-white/72">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
