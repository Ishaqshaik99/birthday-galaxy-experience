"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Howl } from "howler";

export function useAudioPlayer(src: string) {
  const soundRef = useRef<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.45);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      loop: true,
      html5: false,
      volume,
      preload: true,
    });

    soundRef.current = sound;

    return () => {
      sound.stop();
      sound.unload();
      soundRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    soundRef.current?.volume(volume);
  }, [volume]);

  useEffect(() => {
    soundRef.current?.mute(muted);
  }, [muted]);

  const play = useCallback(() => {
    if (!soundRef.current) return;
    soundRef.current.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    soundRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const setVolume = useCallback(
    (next: number) => {
      const clamped = Math.min(1, Math.max(0, next));
      setVolumeState(clamped);
      if (clamped > 0 && muted) {
        setMuted(false);
      }
    },
    [muted],
  );

  const toggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  return {
    isPlaying,
    play,
    pause,
    toggle,
    volume,
    muted,
    setVolume,
    toggleMute,
  };
}
