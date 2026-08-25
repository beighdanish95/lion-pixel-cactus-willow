import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { MeetingDialog } from "@/components/meeting-dialog";
import { Button } from "@/components/ui/button";
import { event, nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [meeting, setMeeting] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="hero-wash">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
            <Logo inverted />
            <div className="hidden items-center gap-2 lg:flex">
              <Button type="button" variant="secondary" size="sm" onClick={() => setMeeting(true)}>
                Book a meeting
              </Button>
              <Button asChild variant="primary" size="sm">
                <Link to="/participate" search={{ intent: "pass" }}>
                  Get your pass
                </Link>
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-on-primary lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
          <nav className="hidden border-t border-on-primary/15 lg:block" aria-label="Primary">
            <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 px-6 py-2.5 text-sm text-on-primary/80">
              {nav.map((item) => {
                const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "inline-flex h-10 items-center border-b-2 border-transparent transition-colors hover:text-on-primary",
                        active && "border-accent text-on-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {open ? (
          <div className="hero-wash border-t border-on-primary/15 px-4 py-4 lg:hidden">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-12 items-center text-on-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-3 flex flex-col gap-2">
              <Button type="button" variant="secondary" onClick={() => { setOpen(false); setMeeting(true); }}>
                Book a meeting
              </Button>
              <Button asChild variant="primary">
                <Link to="/participate" search={{ intent: "pass" }} onClick={() => setOpen(false)}>
                  Get your pass
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs tracking-[0.18em] text-on-primary/60 uppercase">{event.hashtag}</p>
          </div>
        ) : null}
      </header>
      <MeetingDialog open={meeting} onOpenChange={setMeeting} />
    </>
  );
}
