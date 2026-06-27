"use client";

import { FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";

type FloatingPlayerProps = {
  isPlaying: boolean;
  muted: boolean;
  volume: number;
  onToggle: () => void;
  onMute: () => void;
  onVolume: (value: number) => void;
};

export function FloatingPlayer({
  isPlaying,
  muted,
  volume,
  onToggle,
  onMute,
  onVolume,
}: FloatingPlayerProps) {
  return (
    <div className="glass-card fixed bottom-5 right-5 z-50 flex w-[min(92vw,22rem)] items-center gap-4 rounded-[28px] p-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-lg text-white transition hover:bg-white/20"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <FiPause /> : <FiPlay />}
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium uppercase tracking-[0.3em] text-white/50">Soundtrack</p>
        <p className="truncate font-display text-lg text-white">Soft Piano in Starlight</p>
        <input
          aria-label="Music volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => onVolume(Number(event.target.value))}
          className="mt-3 h-1.5 w-full accent-violet-300"
        />
      </div>
      <button
        type="button"
        onClick={onMute}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <FiVolumeX /> : <FiVolume2 />}
      </button>
    </div>
  );
}
