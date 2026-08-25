import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CloseCta } from "@/components/close-cta";
import { HelixField } from "@/components/helix-field";
import { Kicker, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  audiences,
  event,
  participate,
  programmes,
  sectors,
  stats,
  theatres,
} from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function programmeTo(slug: string) {
  if (slug === "hosted-buyer") return "/programmes/hosted-buyer" as const;
  if (slug === "startup") return "/programmes/startup" as const;
  return "/programmes" as const;
}

function Home() {
  return (
    <main>
      <section className="hero-wash relative overflow-hidden text-on-primary">
        <HelixField />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24 lg:py-28">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold tracking-[0.32em] text-on-primary/70 uppercase">
              {event.eyebrow}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[0.95] font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Future
              <br />
              Biotech
              <br />
              Expo
            </h1>
            <p className="font-display mt-4 text-3xl italic text-on-primary/90 md:text-4xl">
              Philadelphia {event.year}
            </p>
            <div className="mt-8 max-w-lg border-t border-on-primary/20 pt-6">
              <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
                Center stage
              </p>
              <p className="font-display mt-2 text-3xl md:text-4xl">{event.centerStage}</p>
              <p className="mt-3 text-base leading-relaxed text-on-primary/80">
                The United States’ dedicated red biotechnology exhibition and conference. One
                question: who reaches patients at a cost the system can bear.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link to="/participate">Claim your place</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/exhibition">See the floor</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-end md:col-span-4">
            <p className="hashtag-stroke font-display text-right text-6xl font-semibold tracking-tight text-transparent opacity-40 md:text-7xl lg:text-8xl">
              {event.hashtag}
            </p>
            <p className="mt-4 text-right text-sm text-on-primary/70">{event.tagline}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-on-primary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 md:px-6">
              <p className="font-display text-4xl font-medium tracking-tight md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-on-primary/60 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <Kicker>The argument</Kicker>
        <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-medium md:text-5xl">
          Cell & gene therapy takes the centre of the floor — and the programme.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Six theatres. Built for operators, not spectators.
        </p>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {theatres.map((t) => (
            <article key={t.n} className="border-t border-line pt-5">
              <p className="font-display text-sm tracking-[0.2em] text-primary">{t.n}</p>
              <h3 className="font-display mt-2 text-2xl">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>The floor</Kicker>
            <h2 className="font-display mt-3 text-4xl leading-tight font-medium md:text-5xl">
              A curated red-biotech showcase with a CGT pavilion at its heart.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Products, platforms, and manufacturing innovations meeting qualified buyers — not a
              general life-sciences bazaar. The centre of the floor is reserved for cell and gene
              therapy: processing, vectors, non-viral delivery, analytics, cryo, and the CDMOs who
              can actually make the dose.
            </p>
            <Button asChild variant="ink" className="mt-8">
              <Link to="/exhibition">
                Exhibition overview <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-1 gap-px sm:grid-cols-2">
            {sectors.map((s) => (
              <li
                key={s}
                className="flex min-h-14 items-center border-b border-line bg-surface/40 px-4 text-sm font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <Kicker>Carried forward</Kicker>
        <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-medium md:text-5xl">
          Four ways the floor creates deals — all tighter.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              to={programmeTo(p.slug)}
              className="group rounded-xl bg-surface p-6 hairline transition-transform duration-200 hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{p.kicker}</p>
              <h3 className="font-display mt-3 text-2xl group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <Kicker onDark>Who is in the room</Kicker>
        <h2 className="font-display mt-3 text-4xl leading-tight font-medium md:text-5xl">
          The people who prevent, diagnose, and treat.
        </h2>
        <ul className="mt-10 divide-y divide-on-primary/15">
          {audiences.map((a) => (
            <li key={a} className="py-3 text-lg text-on-primary/90">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Participate</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium md:text-5xl">Take your place.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {participate.map((p) => (
            <Link
              key={p.intent}
              to="/participate"
              search={{ intent: p.intent }}
              className="rounded-xl bg-surface p-6 hairline transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted">{p.body}</p>
              <p className="mt-4 text-sm font-semibold tracking-wide text-primary uppercase">
                {p.cta}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CloseCta />
    </main>
  );
}
