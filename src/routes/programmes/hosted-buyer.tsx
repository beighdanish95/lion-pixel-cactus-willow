import { createFileRoute, Link } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { buyerEntitlements } from "@/lib/content";

export const Route = createFileRoute("/programmes/hosted-buyer")({
  component: HostedBuyerPage,
});

function HostedBuyerPage() {
  return (
    <main>
      <PageHero
        kicker="Hosted Buyer Program"
        title="Skip the noise. Meet the right people."
        lede="Qualified scientific and procurement leaders travel with a pre-set diary of meetings — the deal engine of the expo, rebuilt for CGT purchasing."
      >
        <Button asChild variant="primary" size="lg">
          <Link to="/participate" search={{ intent: "buyer" }}>
            Apply to the programme
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Kicker>Entitlements</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">Every meeting counts.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {buyerEntitlements.map((e) => (
            <article key={e.title} className="rounded-xl bg-surface p-6 hairline">
              <h3 className="font-display text-2xl">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{e.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Who qualifies</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">
          Apply if you buy, partner, or in-license in CGT.
        </h2>
        <ul className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
          <li className="border-t border-line pt-4">
            Purchasing influence — scientific, procurement, or business-development leaders who
            shape technology, capacity, and in-licensing.
          </li>
          <li className="border-t border-line pt-4">
            Organisation profile — cell and gene therapy companies, pharma, CDMOs, hospital
            systems and AMCs, and well-funded platforms investing in the dose.
          </li>
          <li className="border-t border-line pt-4">
            Meeting commitment — a diary of high-value 1:1s across the two-day floor, matched
            against intent.
          </li>
        </ul>
        <Button asChild variant="ink" className="mt-10">
          <Link to="/participate" search={{ intent: "buyer" }}>
            Submit an application
          </Link>
        </Button>
      </Section>

      <CloseCta />
    </main>
  );
}
