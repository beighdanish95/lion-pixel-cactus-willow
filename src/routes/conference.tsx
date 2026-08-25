import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { conferenceDays, conferenceFormats, event, theatres } from "@/lib/content";

export const Route = createFileRoute("/conference")({ component: ConferencePage });

function ConferencePage() {
  return (
    <main>
      <PageHero
        kicker="Conference"
        title="High-calibre sessions for people already shaping the sector."
        lede="Built for operators, not spectators. Plenary mornings, technical theatres, and closed-door roundtables. Eighty speakers. No filler keynotes. Speaker line-up to be announced."
      >
        <Button asChild variant="primary" size="lg">
          <Link to="/participate" search={{ intent: "pass" }}>
            Get a delegate pass
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Kicker>Two-day programme</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">The science of scale. The business of access.</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {conferenceDays.map((day) => (
            <article key={day.day} className="rounded-xl bg-surface p-6 hairline md:p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">{day.day}</p>
              <h3 className="font-display mt-2 text-3xl">{day.title}</h3>
              <ul className="mt-6 space-y-3">
                {day.sessions.map((s) => (
                  <li key={s} className="border-t border-line pt-3 leading-relaxed text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Six theatres</Kicker>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-medium">
          One question: who reaches patients at a cost the system can bear.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {theatres.map((t) => (
            <article key={t.n} className="border-t border-line pt-4">
              <p className="font-display text-primary">{t.n}</p>
              <h3 className="font-display mt-1 text-xl">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Kicker>On the floor</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">What to expect.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conferenceFormats.map((f) => (
            <article key={f.title} className="rounded-xl bg-surface p-5 hairline">
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Speaking enquiries:{" "}
          <a className="font-medium text-primary underline" href={`mailto:${event.speakingEmail}`}>
            {event.speakingEmail}
          </a>
        </p>
      </Section>

      <CloseCta />
    </main>
  );
}
