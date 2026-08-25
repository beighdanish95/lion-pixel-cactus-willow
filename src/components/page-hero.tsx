import type { ReactNode } from "react";
import { HelixField } from "@/components/helix-field";

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-wash relative overflow-hidden text-on-primary">
      <HelixField />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold tracking-[0.28em] text-on-primary/70 uppercase">{kicker}</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight md:text-6xl">
          {title}
        </h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-primary/80">{lede}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "bg",
}: {
  children: ReactNode;
  className?: string;
  tone?: "bg" | "paper" | "surface" | "ink";
}) {
  const tones = {
    bg: "bg-bg text-ink",
    paper: "bg-paper text-ink",
    surface: "bg-surface text-ink",
    ink: "bg-ink text-on-primary",
  };
  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">{children}</div>
    </section>
  );
}

export function Kicker({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.28em] uppercase ${onDark ? "text-accent" : "text-primary"}`}
    >
      {children}
    </p>
  );
}
