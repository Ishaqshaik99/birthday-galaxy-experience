export function AuroraBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="aurora-orb left-[5%] top-[8%] h-56 w-56 bg-cyan-400/40 animate-drift" />
      <div className="aurora-orb right-[8%] top-[16%] h-72 w-72 bg-fuchsia-500/35 animate-pulseGlow" />
      <div className="aurora-orb bottom-[12%] left-[35%] h-64 w-64 bg-amber-300/25 animate-drift" />
      <div className="absolute inset-0 bg-aurora-mesh opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-night via-night/80 to-transparent" />
    </div>
  );
}
