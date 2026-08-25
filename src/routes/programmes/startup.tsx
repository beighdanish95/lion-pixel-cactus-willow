import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { startupPackage } from "@/lib/content";

export const Route = createFileRoute("/programmes/startup")({ component: StartupPage });

function StartupPage() {
  return (
    <main>
      <PageHero
        kicker="Startup acceleration"
        title="A stage, not a hallway."
        lede="Structured showcases, mentor clinics, and a dedicated investor track for companies still proving the platform — with manufacturing-ready CGT as the filter."
      >
        <Button asChild variant="primary" size="lg">
          <Link to="/participate" search={{ intent: "startup" }}>
            Apply to the programme
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Kicker>The package</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">Where science gets funded.</h2>
        <ol className="mt-10 space-y-4">
          {startupPackage.map((item, i) => (
            <li key={item} className="flex gap-4 border-t border-line pt-4">
              <span className="font-display text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper">
        <Kicker>Who should apply</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">Manufacturing-ready CGT as the filter.</h2>
        <ul className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
          <li className="border-t border-line pt-4">
            Seed to Series B ventures in cell therapy, gene editing, delivery, analytics, or the
            plants behind the construct.
          </li>
          <li className="border-t border-line pt-4">
            Actively seeking capital, CDMO capacity, hospital-system partners, or US market entry.
          </li>
          <li className="border-t border-line pt-4">
            Ready to present to funds and strategics who buy platforms, plants, and pipelines —
            not a corridor of decks.
          </li>
        </ul>
        <Button asChild variant="ink" className="mt-10">
          <Link to="/participate" search={{ intent: "startup" }}>
            Apply now
          </Link>
        </Button>
      </Section>

      <CloseCta />
    </main>
  );
}
