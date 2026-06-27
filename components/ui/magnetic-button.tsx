"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 180, damping: 12 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 12 });

  return (
    <motion.button
      type="button"
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-medium tracking-[0.18em] text-white shadow-glow backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/15",
        className,
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_55%)] opacity-70 transition duration-300 group-hover:scale-110" />
      <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] bg-[length:200%_100%] animate-shimmer opacity-70" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
