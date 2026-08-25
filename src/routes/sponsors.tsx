import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { event, sponsorTiers } from "@/lib/content";

export const Route = createFileRoute("/sponsors")({ component: SponsorsPage });

function SponsorsPage() {
  return (
    <main>
      <PageHero
        kicker="Sponsorship"
        title="Theatres, receptions, and the Hosted Buyer lounge."
        lede="Put your name on the rooms where operators, capital, and hospital systems actually talk. Packages are built around CGT — not a generic banner wall."
      >
        <Button asChild variant="primary" size="lg">
          <Link to="/participate" search={{ intent: "sponsor" }}>
            Request sponsor packs
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Kicker>Where your name sits</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">Four ways to own the room.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sponsorTiers.map((t) => (
            <article key={t.title} className="rounded-xl bg-surface p-6 hairline">
              <h3 className="font-display text-2xl">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Sponsorship enquiries:{" "}
          <a className="font-medium text-primary underline" href={`mailto:${event.sponsorshipEmail}`}>
            {event.sponsorshipEmail}
          </a>
        </p>
      </Section>

      <CloseCta />
    </main>
  );
}
