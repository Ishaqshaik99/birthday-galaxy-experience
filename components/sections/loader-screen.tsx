"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
          onComplete,
        });
      },
    });

    timeline.fromTo(
      ".loader-logo",
      { opacity: 0, y: 24, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" },
    );

    const proxy = { value: 0 };
    gsap.to(proxy, {
      value: 100,
      duration: 3.2,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.round(proxy.value)),
    });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[80] flex items-center justify-center bg-night">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,100,255,0.24),transparent_35%)]" />
      <div className="relative flex w-full max-w-xl flex-col items-center gap-8 px-6 text-center">
        <div className="loader-logo relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-glow backdrop-blur-xl">
          <div className="absolute inset-2 animate-spinSlow rounded-full border border-violet-300/25 border-t-white/70" />
          <span className="font-display text-3xl tracking-[0.3em] text-gradient">HB</span>
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.5em] text-white/50">Loading Constellation</p>
          <h1 className="font-display text-3xl text-white sm:text-4xl">Preparing a night made of memories</h1>
        </div>
        <div className="w-full rounded-full border border-white/10 bg-white/5 p-1">
          <div
            className="h-2 rounded-full bg-[linear-gradient(90deg,#57d6ff,#a864ff,#ffd76a)] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm tracking-[0.35em] text-white/50">{progress}%</p>
      </div>
    </div>
  );
}
