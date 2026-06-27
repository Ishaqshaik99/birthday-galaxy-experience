import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative section-padding", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">{eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
          {description ? (
            <p className="balanced-wrap max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
