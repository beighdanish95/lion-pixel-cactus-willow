import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function HelixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M13 5c8 6 8 24 0 30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M27 5c-8 6-8 24 0 30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M14.5 11h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 24h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 29h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="13.2" cy="11" r="1.6" fill="currentColor" />
      <circle cx="26.8" cy="11" r="1.6" fill="currentColor" />
      <circle cx="15.2" cy="20" r="1.6" fill="currentColor" />
      <circle cx="24.8" cy="20" r="1.6" fill="currentColor" />
      <circle cx="13.2" cy="29" r="1.6" fill="currentColor" />
      <circle cx="26.8" cy="29" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-3 no-underline",
        inverted ? "text-on-primary" : "text-ink",
      )}
      aria-label="Future Biotech Expo home"
    >
      <HelixMark className={inverted ? "text-on-primary" : "text-primary"} />
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span className="block font-display text-lg font-semibold tracking-tight md:text-xl">
          Future Biotech Expo
        </span>
        <span
          className={cn(
            "block text-xs font-semibold tracking-[0.18em] uppercase",
            inverted ? "text-on-primary/70" : "text-muted",
          )}
        >
          Philadelphia 2027
        </span>
      </span>
    </Link>
  );
}
