"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FloatingPlayer } from "@/components/ui/floating-player";
import { LoaderScreen } from "@/components/sections/loader-screen";
import { LandingSection } from "@/components/sections/landing-section";
import { HeroSection } from "@/components/sections/hero-section";
import { CountdownSection } from "@/components/sections/countdown-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { MemoriesSection } from "@/components/sections/memories-section";
import { LetterSection } from "@/components/sections/letter-section";
import { CakeSection } from "@/components/sections/cake-section";
import { FireworksSection } from "@/components/sections/fireworks-section";
import { FinalSection } from "@/components/sections/final-section";
import { AuroraBackdrop } from "@/components/backgrounds/aurora-backdrop";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import type { BirthdayContent } from "@/types/content";

const SpaceCanvas = dynamic(() => import("@/components/backgrounds/space-canvas"), { ssr: false });
const StarParticles = dynamic(() => import("@/components/backgrounds/star-particles"), { ssr: false });

export function BirthdayExperience({ content }: { content: BirthdayContent }) {
  const [loaded, setLoaded] = useState(false);
  const audio = useAudioPlayer(content.audioTrack);

  return (
    <main className="relative isolate overflow-hidden">
      {!loaded ? <LoaderScreen onComplete={() => setLoaded(true)} /> : null}
      <div className="fixed inset-0 z-0">
        <AuroraBackdrop />
        <SpaceCanvas />
        <StarParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(4,3,11,0.2)_35%,rgba(4,3,11,0.72)_100%)]" />
      </div>
      <div className="relative z-10">
        <LandingSection
          lines={content.introLines}
          onBegin={() => {
            audio.play();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <HeroSection
          recipientName={content.recipientName}
          heroImage={content.heroImage}
          headline={content.headline}
          subheadline={content.subheadline}
        />
        <CountdownSection targetDate={content.nextBirthday} />
        <TimelineSection items={content.timeline} />
        <GallerySection images={content.gallery} />
        <MemoriesSection memories={content.memories} />
        <LetterSection title={content.letterTitle} paragraphs={content.letterParagraphs} />
        <CakeSection candles={content.turningAge} />
        <FireworksSection />
        <FinalSection image={content.favoriteImage} quote={content.quote} />
      </div>
      {loaded ? (
        <FloatingPlayer
          isPlaying={audio.isPlaying}
          muted={audio.muted}
          volume={audio.volume}
          onToggle={audio.toggle}
          onMute={audio.toggleMute}
          onVolume={audio.setVolume}
        />
      ) : null}
    </main>
  );
}
