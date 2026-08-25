import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { event, nav } from "@/lib/content";
import { saveEnquiry } from "@/lib/enquiries";

export function Footer() {
  const [email, setEmail] = useState("");

  function onSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email.");
      return;
    }
    saveEnquiry("newsletter", { email });
    toast.success("You’re on the list.");
    setEmail("");
  }

  return (
    <footer className="hero-wash text-on-primary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-primary/75">
            The United States’ dedicated red biotechnology exhibition and conference. Cell and
            gene therapy at the centre of the floor — and the programme.
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-on-primary/60">
            Organised by {event.organiser}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-on-primary/85 hover:text-on-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/participate" className="text-on-primary/85 hover:text-on-primary">
                Participate
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-on-primary/85 hover:text-on-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55">Offices</p>
          <div className="mt-3 grid gap-4 text-sm text-on-primary/80">
            {event.offices.map((office) => (
              <p key={office.label}>
                <span className="block font-medium text-on-primary">{office.label}</span>
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm">
            {event.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-on-primary/85 hover:text-on-primary">
                {p}
              </a>
            ))}
            <a href={`mailto:${event.email}`} className="mt-1 block text-on-primary/85 hover:text-on-primary">
              {event.email}
            </a>
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55">Newsletter</p>
          <p className="mt-3 text-sm text-on-primary/75">
            Speaker announcements and floor updates. No filler.
          </p>
          <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="border-on-primary/20 bg-on-primary/10 text-on-primary placeholder:text-on-primary/50"
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-on-primary/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-on-primary/60 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            {event.hashtag} · {event.organiser}
          </p>
          <p className="flex gap-4">
            <Link to="/terms" className="hover:text-on-primary">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-on-primary">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
