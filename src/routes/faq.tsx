import { createFileRoute } from "@tanstack/react-router";
import { CloseCta } from "@/components/close-cta";
import { PageHero, Section } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <main>
      <PageHero
        kicker="FAQ"
        title="Straight answers."
        lede="Passes, the floor, hosted buyers, startups, and how to reach the organisers."
      />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <CloseCta />
    </main>
  );
}
