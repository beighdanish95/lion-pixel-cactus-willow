import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { Kicker, PageHero, Section } from "@/components/page-hero";
import { event } from "@/lib/content";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Write to the organisers."
        lede={`${event.organiser}. Offices in Business Bay and St. Petersburg.`}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Kicker>Direct</Kicker>
            <div className="mt-6 space-y-6">
              {event.offices.map((o) => (
                <p key={o.label} className="text-muted">
                  <span className="block font-medium text-ink">{o.label}</span>
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              ))}
              <p>
                {event.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-ink hover:text-primary">
                    {p}
                  </a>
                ))}
                <a href={`mailto:${event.email}`} className="mt-2 block text-primary underline">
                  {event.email}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-surface p-6 hairline lg:col-span-3 md:p-8">
            <EnquiryForm intent="contact" />
          </div>
        </div>
      </Section>
    </main>
  );
}
