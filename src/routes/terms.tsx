import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-hero";
import { event } from "@/lib/content";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Terms and conditions." />
      <Section>
        <div className="mx-auto max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            {event.name} is organised by {event.organiser}. Enquiries submitted through this site
            are received by the organising team and used solely to respond to your request —
            passes, stands, sponsorship, hosted buyer, startup, or general contact.
          </p>
          <p>
            Submitting an enquiry does not constitute a confirmed booking, stand allocation, or
            hosted-buyer place. Confirmations are issued in writing by the organisers.
          </p>
          <p>
            All trademarks and programme names remain the property of their respective owners.
            Content on this site describes the exhibition and conference and may be updated as
            the programme is confirmed.
          </p>
          <p>
            Questions:{" "}
            <a className="text-primary underline" href={`mailto:${event.email}`}>
              {event.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
