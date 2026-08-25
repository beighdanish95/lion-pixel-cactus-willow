import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm, type Intent } from "@/components/enquiry-form";
import { PageHero, Section } from "@/components/page-hero";
import { participate } from "@/lib/content";
import { cn } from "@/lib/utils";

const intents: Intent[] = ["pass", "exhibit", "sponsor", "buyer", "startup"];

function isIntent(v: unknown): v is Intent {
  return typeof v === "string" && (intents as string[]).includes(v);
}

export const Route = createFileRoute("/participate")({
  validateSearch: (search: Record<string, unknown>): { intent?: Intent } => ({
    intent: isIntent(search.intent) ? search.intent : undefined,
  }),
  component: ParticipatePage,
});

function ParticipatePage() {
  const { intent: raw } = Route.useSearch();
  const intent: Intent = raw ?? "pass";
  const navigate = Route.useNavigate();

  return (
    <main>
      <PageHero
        kicker="Take your place"
        title="The people who prevent, diagnose, and treat."
        lede="Request a pass, book a stand, sponsor a theatre, or apply as a hosted buyer. Every enquiry reaches the Maxpo team."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {participate.map((p) => (
            <button
              key={p.intent}
              type="button"
              onClick={() => navigate({ search: { intent: p.intent } })}
              className={cn(
                "h-11 rounded-pill px-4 text-sm font-semibold transition-colors",
                intent === p.intent
                  ? "bg-primary text-on-primary"
                  : "bg-paper text-ink hover:bg-line",
              )}
            >
              {p.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => navigate({ search: { intent: "startup" } })}
            className={cn(
              "h-11 rounded-pill px-4 text-sm font-semibold transition-colors",
              intent === "startup" ? "bg-primary text-on-primary" : "bg-paper text-ink hover:bg-line",
            )}
          >
            Startup
          </button>
        </div>
        <div className="mt-10 rounded-xl bg-surface p-6 hairline md:p-10">
          <EnquiryForm key={intent} intent={intent} />
        </div>
      </Section>
    </main>
  );
}
