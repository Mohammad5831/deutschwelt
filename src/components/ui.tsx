import { ReactNode } from "react";

// ── Shared UI primitives ──────────────────────────────────────────

export function Badge({ children, level }: { children: ReactNode; level?: string }) {
  const cls = level ? `level-${level.toLowerCase()}` : "";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase ${cls}`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`h-1.5 rounded-full overflow-hidden ${className}`} style={{ background: "var(--color-surface-interactive)" }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%`, background: "var(--color-gold)" }}
      />
    </div>
  );
}

export function ProgressRing({
  value,
  size = 64,
  stroke = 5,
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="progress-ring">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} stroke="rgba(255,255,255,0.06)" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          stroke="var(--color-gold)"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
}

export function Card({ children, className = "", style = {} }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", ...style }}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  className = "",
  disabled,
}: {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  const base = "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-150 select-none cursor-pointer";
  const sizes = { sm: "px-3 py-1.5 text-[12px]", md: "px-4 py-2 text-[13px]", lg: "px-5 py-2.5 text-[14px]" };
  const variants = {
    primary: "text-[#08080B] hover:brightness-110 active:brightness-90",
    secondary: "hover:bg-white/10 active:bg-white/5",
    ghost: "hover:bg-white/6 active:bg-white/4",
    danger: "hover:bg-red-500/20",
  };
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { background: "var(--color-gold)", color: "#08080B" },
    secondary: { background: "rgba(255,255,255,0.07)", color: "var(--color-text)", border: "1px solid var(--color-border)" },
    ghost: { background: "transparent", color: "var(--color-text-muted)" },
    danger: { background: "rgba(232,86,75,0.1)", color: "var(--color-error)", border: "1px solid rgba(232,86,75,0.2)" },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-40 cursor-not-allowed" : ""} ${className}`}
      style={variantStyles[variant]}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

export function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  icon,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-3" style={{ color: "var(--color-text-muted)" }}>
          {icon}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg px-3 py-2.5 text-[13px] outline-none transition-all"
        style={{
          background: "var(--color-surface-interactive)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text)",
          paddingLeft: icon ? "36px" : "12px",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(232,184,75,0.4)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
      />
    </div>
  );
}

export function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="flex gap-1 p-1 rounded-xl" style={{ background: "var(--color-surface)" }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
          style={{
            background: active === tab ? "var(--color-surface-elevated)" : "transparent",
            color: active === tab ? "var(--color-text)" : "var(--color-text-muted)",
            border: active === tab ? "1px solid var(--color-border)" : "1px solid transparent",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-[17px] font-semibold" style={{ color: "var(--color-text)" }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-[13px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  desc,
  action,
}: {
  icon: ReactNode;
  title: string;
  desc?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--color-surface-interactive)" }}>
        {icon}
      </div>
      <div>
        <p className="text-[15px] font-medium" style={{ color: "var(--color-text)" }}>{title}</p>
        {desc && <p className="text-[13px] mt-1" style={{ color: "var(--color-text-muted)" }}>{desc}</p>}
      </div>
      {action && action}
    </div>
  );
}

export function StatTile({ label, value, sub, color }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-4 py-3 rounded-xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
      <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--color-text-subtle)" }}>{label}</span>
      <span className="text-[22px] font-bold" style={{ color: color || "var(--color-text)" }}>{value}</span>
      {sub && <span className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{sub}</span>}
    </div>
  );
}
