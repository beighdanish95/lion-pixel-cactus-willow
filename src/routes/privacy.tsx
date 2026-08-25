import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-hero";
import { event } from "@/lib/content";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Privacy." />
      <Section>
        <div className="mx-auto max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            When you send an enquiry or subscribe, we store the details you provide — name, work
            email, organisation, and message — so the {event.organiser} team can reply. In this
            preview, those records stay on your device.
          </p>
          <p>
            We do not sell enquiry data. We do not use it for unrelated marketing lists. You may
            ask for a record to be removed by writing to{" "}
            <a className="text-primary underline" href={`mailto:${event.email}`}>
              {event.email}
            </a>
            .
          </p>
          <p>
            This site is operated from offices in the United Arab Emirates and the United States.
            By sending an enquiry you agree that the organisers may contact you about{" "}
            {event.name}.
          </p>
        </div>
      </Section>
    </main>
  );
}
