export function HelixField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-25 ${className}`}
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="helixStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 80 + i * 80;
        return (
          <g key={i} opacity={0.55 - i * 0.04}>
            <path
              d={`M${x} 40 C ${x + 50} 180, ${x - 50} 320, ${x} 460 S ${x + 50} 700, ${x} 780`}
              fill="none"
              stroke="url(#helixStroke)"
              strokeWidth="1.2"
            />
            <path
              d={`M${x} 40 C ${x - 50} 180, ${x + 50} 320, ${x} 460 S ${x - 50} 700, ${x} 780`}
              fill="none"
              stroke="url(#helixStroke)"
              strokeWidth="1.2"
            />
          </g>
        );
      })}
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={`n-${i}`}
          cx={120 + (i * 97) % 620}
          cy={70 + ((i * 137) % 660)}
          r={i % 3 === 0 ? 3.2 : 1.8}
          fill="white"
          opacity={0.35}
        />
      ))}
    </svg>
  );
}
