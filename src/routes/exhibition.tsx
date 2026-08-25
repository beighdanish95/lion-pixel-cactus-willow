import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { exhibitReasons, sectors } from "@/lib/content";

export const Route = createFileRoute("/exhibition")({ component: ExhibitionPage });

function ExhibitionPage() {
  return (
    <main>
      <PageHero
        kicker="Exhibition"
        title="A curated red-biotech showcase with a CGT pavilion at its heart."
        lede="Products, platforms, and manufacturing innovations meeting qualified buyers — not a general life-sciences bazaar. The centre of the floor is reserved for cell and gene therapy."
      >
        <Button asChild variant="primary" size="lg">
          <Link to="/participate" search={{ intent: "exhibit" }}>
            Book a stand
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Kicker>Sectors on the floor</Kicker>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-medium">
          Processing, vectors, non-viral delivery, analytics, cryo — and the CDMOs who can actually make the dose.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {sectors.map((s, i) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-lg border border-line bg-surface px-5 py-4"
            >
              <span className="font-medium">{s}</span>
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Why exhibit</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">You’re not here to blend in.</h2>
        <ol className="mt-10 space-y-4">
          {exhibitReasons.map((r, i) => (
            <li key={r} className="flex gap-4 border-t border-line pt-4">
              <span className="font-display text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg leading-relaxed">{r}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ink">
            <Link to="/participate" search={{ intent: "exhibit" }}>
              Exhibit enquiry
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/programmes">See matchmaking</Link>
          </Button>
        </div>
      </Section>

      <CloseCta />
    </main>
  );
}
