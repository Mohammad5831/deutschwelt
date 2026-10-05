export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#E8B84B" />
      <path d="M7 10h4l5 12 5-12h4" stroke="#08080B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="22" r="2.5" fill="#08080B" />
    </svg>
  );
}

export function LogoFull({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Logo size={28} />
      {!collapsed && (
        <div className="flex flex-col leading-none">
          <span className="font-bold text-[15px] tracking-tight" style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)" }}>
            Deutsch<span style={{ color: "var(--color-gold)" }}>Welt</span>
          </span>
          <span className="text-[9px] tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
            Lerne · Entdecke · Verbinde
          </span>
        </div>
      )}
    </div>
  );
}
