export function AzulejoTilePattern({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) {
  const patternId = 'azulejo-tile';
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{ opacity }}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
          {/* Tile border */}
          <rect x="0" y="0" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Circuit traces — right-angled paths */}
          <path d="M8 8 L8 24 L24 24 L24 40 L8 40" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M40 8 L56 8 L56 24 L40 24" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M40 40 L40 56 L56 56" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M24 8 L40 8" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M8 40 L8 56 L24 56" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Solder-dot circles */}
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
          <circle cx="56" cy="24" r="2" fill="currentColor" />
          <circle cx="40" cy="40" r="2" fill="currentColor" />
          <circle cx="24" cy="56" r="2" fill="currentColor" />
          <circle cx="56" cy="56" r="2" fill="currentColor" />
          {/* Diagonal accent */}
          <line x1="32" y1="32" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function TileStripDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 py-6 ${className}`}
      aria-hidden="true"
    >
      {[...Array(7)].map((_, i) => (
        <svg key={i} width="48" height="48" viewBox="0 0 64 64" className="text-accent-2">
          <rect x="2" y="2" width="60" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M12 12 L12 28 L28 28 L28 44 L12 44" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M36 12 L52 12 L52 28 L36 28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M36 44 L36 60 L52 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="28" cy="28" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="52" cy="28" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="36" cy="44" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="52" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      ))}
    </div>
  );
}

export function CashewAppleIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Cashew apple body */}
      <path
        d="M16 4 C 20 4 24 8 24 14 C 24 20 20 26 16 28 C 12 26 8 20 8 14 C 8 8 12 4 16 4 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Cashew nut shape */}
      <path
        d="M22 10 C 26 12 28 16 27 20 C 26 23 24 24 22 23 C 23 20 22 17 20 16 C 21 14 21 12 22 10 Z"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Stem */}
      <path d="M16 4 L16 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="1.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function MonogramCC({ className = '' }: { className?: string }) {
  return (
    <span className={`font-serif font-normal ${className}`} aria-hidden="true">
      CC
    </span>
  );
}

export function ArchFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="arch-top overflow-hidden rounded-b-xl border border-border bg-surface" style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
