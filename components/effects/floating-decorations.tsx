"use client";

const petals = Array.from({ length: 12 }, (_, index) => ({
  id: `petal-${index}`,
  left: `${5 + index * 8}%`,
  duration: `${14 + (index % 4) * 3}s`,
  delay: `${index * 0.8}s`,
}));

const balloons = Array.from({ length: 5 }, (_, index) => ({
  id: `balloon-${index}`,
  left: `${10 + index * 18}%`,
  duration: `${18 + index * 2}s`,
  delay: `${index * 2.5}s`,
}));

export function FloatingDecorations() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute top-[-10%] h-3 w-3 rounded-full bg-gradient-to-br from-pink-200/70 to-fuchsia-500/10 blur-[1px]"
          style={{
            left: petal.left,
            animation: `fall ${petal.duration} linear ${petal.delay} infinite`,
          }}
        />
      ))}
      {balloons.map((balloon, index) => (
        <span
          key={balloon.id}
          className="absolute bottom-[-12%] h-16 w-12 rounded-[999px] opacity-30 blur-[0.5px]"
          style={{
            left: balloon.left,
            background:
              index % 2 === 0
                ? "linear-gradient(180deg, rgba(255,215,106,0.72), rgba(255,120,209,0.16))"
                : "linear-gradient(180deg, rgba(87,214,255,0.72), rgba(146,99,255,0.16))",
            animation: `rise ${balloon.duration} ease-in ${balloon.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
