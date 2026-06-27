"use client";

import { CursorGlow } from "@/components/effects/cursor-glow";
import { FloatingDecorations } from "@/components/effects/floating-decorations";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <CursorGlow />
      <FloatingDecorations />
      {children}
    </SmoothScrollProvider>
  );
}
