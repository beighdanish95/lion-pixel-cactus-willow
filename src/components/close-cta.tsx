import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/content";

export function CloseCta() {
  return (
    <section className="hero-wash relative overflow-hidden text-on-primary">
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-xs font-semibold tracking-[0.28em] text-on-primary/70 uppercase">
          {event.hashtag}
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-medium md:text-5xl">
          There’s a place for you on the floor.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-on-primary/80">
          Whether you exhibit, sponsor, speak, buy, or come to learn — the programme is built for
          people already shaping cell and gene therapy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" size="lg">
            <Link to="/participate">Claim your place</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Talk to the organisers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
