import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { audiences, event, gains, philadelphia, stats } from "@/lib/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="The edition"
        title="Built as the United States’ dedicated red biotechnology expo."
        lede="Purpose-built for the science at the intersection of biology and human health. A world-class exhibition floor, a two-day conference, structured startup showcases, investor sessions, curated B2B matchmaking, and an exclusive Hosted Buyer Program."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker>Red biotechnology</Kicker>
            <h2 className="font-display mt-3 text-4xl leading-tight font-medium">
              The same commercial architecture. A sharper scientific argument.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {event.name} gathers leaders around products, platforms, and manufacturing
              innovations — not a general life-sciences bazaar. In Philadelphia the expo is larger,
              more precise, and cell and gene therapy is the centre of gravity.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From pharmaceutical innovation and gene therapy to delivery, CMC, and access, red
              biotech is rewriting what is possible in healthcare. This floor exists to accelerate
              that progress — and to ask who reaches patients at a cost the system can bear.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-line">
            {stats.map((s) => (
              <li key={s.label} className="bg-surface px-5 py-8">
                <p className="font-display text-4xl text-primary">{s.value}</p>
                <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Why this city</Kicker>
        <h2 className="font-display mt-3 text-4xl leading-tight font-medium md:text-5xl">
          They call it Cellicon Valley for a reason.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Staging {event.hashtag} in Philadelphia puts every attendee inside the most concentrated
          cell and gene therapy ecosystem in the United States.
        </p>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {philadelphia.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-primary/30 bg-surface px-4 py-3 text-sm leading-relaxed text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Kicker>What you gain</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">Science meets commerce.</h2>
        <ol className="mt-10 space-y-5">
          {gains.map((g, i) => (
            <li key={g} className="flex gap-4 border-t border-line pt-5">
              <span className="font-display text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg leading-relaxed">{g}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink">
        <Kicker onDark>Who is in the room</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">The people who prevent, diagnose, and treat.</h2>
        <ul className="mt-8 divide-y divide-on-primary/15">
          {audiences.map((a) => (
            <li key={a} className="py-3 text-lg">
              {a}
            </li>
          ))}
        </ul>
        <Button asChild variant="primary" className="mt-10">
          <Link to="/participate">Request a pass</Link>
        </Button>
      </Section>

      <CloseCta />
    </main>
  );
}
