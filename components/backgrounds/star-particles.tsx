"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="galaxy-particles"
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, width: 1000, height: 1000 } },
          color: { value: ["#ffffff", "#c8a8ff", "#78d7ff", "#ffd76a"] },
          shape: { type: ["circle", "star"] },
          opacity: { value: { min: 0.2, max: 0.8 } },
          size: { value: { min: 1, max: 3.2 } },
          move: {
            enable: true,
            direction: "none",
            speed: { min: 0.08, max: 0.4 },
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            color: "#8f7dff",
            opacity: 0.08,
            distance: 140,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
