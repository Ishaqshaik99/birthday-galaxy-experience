"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden md:block" style={{ x: smoothX, y: smoothY }}>
      <div className="h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(168,100,255,0.28),rgba(87,214,255,0.12),transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
