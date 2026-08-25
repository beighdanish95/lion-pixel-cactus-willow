import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CloseCta } from "@/components/close-cta";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { programmes } from "@/lib/content";

export const Route = createFileRoute("/programmes/")({ component: ProgrammesPage });

function ProgrammesPage() {
  return (
    <main>
      <PageHero
        kicker="Programmes"
        title="Four ways the floor creates deals — all tighter."
        lede="Hosted buyers, startup acceleration, B2B matchmaking, and investor sessions. Introductions scheduled against intent, not badges."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {programmes.map((p) => (
            <article key={p.slug} className="rounded-xl bg-surface p-7 hairline">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{p.kicker}</p>
              <h2 className="font-display mt-3 text-3xl">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              <ProgrammeLink slug={p.slug} />
            </article>
          ))}
        </div>
      </Section>
      <Section tone="paper">
        <Kicker>The grid</Kicker>
        <h2 className="font-display mt-3 text-4xl font-medium">
          CDMO capacity, vector slots, analytics, and capital sit on the same diary.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Matchmaking is curated, timed, and followed up. Hosted buyers diaries, startup pitch
          rooms, and closed-door investor sessions share one commercial spine — so a conversation
          on the floor can become a slot, a plant, or a term sheet.
        </p>
      </Section>
      <CloseCta />
    </main>
  );
}

function ProgrammeLink({ slug }: { slug: string }) {
  const className = "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink";
  if (slug === "hosted-buyer") {
    return (
      <Link to="/programmes/hosted-buyer" className={className}>
        Learn more <ArrowRight className="size-4" />
      </Link>
    );
  }
  if (slug === "startup") {
    return (
      <Link to="/programmes/startup" className={className}>
        Learn more <ArrowRight className="size-4" />
      </Link>
    );
  }
  return (
    <Link to="/participate" className={className}>
      Take part <ArrowRight className="size-4" />
    </Link>
  );
}
