import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogoFull } from "./Logo";

const navGroups = [
  {
    label: null,
    items: [
      { to: "/app", label: "Übersicht", icon: HomeIcon, exact: true },
    ],
  },
  {
    label: "Lernen",
    items: [
      { to: "/app/kurse", label: "Kurse", icon: BookIcon },
      { to: "/app/grammatik", label: "Grammatik", icon: PenIcon },
      { to: "/app/wortschatz", label: "Wortschatz", icon: StarIcon },
      { to: "/app/uebungen", label: "Übungen", icon: CheckIcon },
    ],
  },
  {
    label: "Medien",
    items: [
      { to: "/app/nachrichten", label: "Nachrichten", icon: NewsIcon },
      { to: "/app/podcasts", label: "Podcasts", icon: HeadphonesIcon },
      { to: "/app/videos", label: "Videos", icon: VideoIcon },
    ],
  },
  {
    label: "Community",
    items: [
      { to: "/app/community", label: "Community", icon: UsersIcon },
      { to: "/app/sprachpartner", label: "Sprachpartner", icon: ChatIcon },
    ],
  },
  {
    label: "Werkzeuge",
    items: [
      { to: "/app/woerterbuch", label: "Wörterbuch", icon: BookOpenIcon },
      { to: "/app/uebersetzer", label: "Übersetzer", icon: TranslateIcon },
      { to: "/app/ki-assistent", label: "KI-Assistent", icon: AIIcon },
      { to: "/app/notizen", label: "Notizen", icon: NoteIcon },
    ],
  },
  {
    label: "Telegram",
    items: [
      { to: "/app/telegram", label: "Telegram Bot", icon: TelegramIcon },
    ],
  },
];

const bottomNav = [
  { to: "/app/fortschritt", label: "Fortschritt", icon: TrendingIcon },
  { to: "/app/einstellungen", label: "Einstellungen", icon: SettingsIcon },
  { to: "/app/profil", label: "Profil", icon: UserIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (to: string, exact?: boolean) => {
    if (exact) return location.pathname === to;
    return location.pathname.startsWith(to);
  };

  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 shrink-0"
      style={{
        width: collapsed ? 64 : 224,
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 shrink-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
        {!collapsed && <LogoFull />}
        {collapsed && (
          <div className="mx-auto">
            <LogoFull collapsed />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1.5 rounded-lg transition-colors"
          style={{ color: "var(--color-text-muted)" }}
          title={collapsed ? "Erweitern" : "Einklappen"}
        >
          <ChevronIcon collapsed={collapsed} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 scrollbar-hide">
        {navGroups.map((group, gi) => (
          <div key={gi} className={gi > 0 ? "mt-1" : ""}>
            {group.label && !collapsed && (
              <div
                className="px-4 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-text-subtle)" }}
              >
                {group.label}
              </div>
            )}
            {group.label && collapsed && <div className="my-2 mx-3" style={{ borderTop: "1px solid var(--color-border)" }} />}
            {group.items.map((item) => {
              const active = isActive(item.to, item.exact);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className="flex items-center gap-3 mx-2 my-0.5 px-3 py-2 rounded-lg transition-all duration-150 group"
                  style={{
                    background: active ? "var(--color-gold-dim)" : "transparent",
                    color: active ? "var(--color-gold)" : "var(--color-text-muted)",
                    fontWeight: active ? 500 : 400,
                    fontSize: 13,
                  }}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon size={16} active={active} />
                  {!collapsed && <span>{item.label}</span>}
                  {!collapsed && active && (
                    <div className="ml-auto w-1 h-1 rounded-full" style={{ background: "var(--color-gold)" }} />
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="shrink-0 py-3" style={{ borderTop: "1px solid var(--color-border)" }}>
        {/* User */}
        <NavLink
          to="/app/profil"
          className="flex items-center gap-3 mx-2 mb-2 px-3 py-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-muted)" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            style={{ background: "var(--color-gold)", color: "#08080B" }}
          >
            M
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-[13px] font-medium truncate" style={{ color: "var(--color-text)" }}>Mohammad</div>
              <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>A2 · 1.240 XP</div>
            </div>
          )}
        </NavLink>
        {bottomNav.map((item) => {
          const active = isActive(item.to);
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 mx-2 my-0.5 px-3 py-2 rounded-lg transition-colors"
              style={{ color: active ? "var(--color-gold)" : "var(--color-text-muted)", fontSize: 13 }}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={16} active={active} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

// Mobile bottom nav
export function MobileNav() {
  const location = useLocation();
  const items = [
    { to: "/app", label: "Übersicht", icon: HomeIcon, exact: true },
    { to: "/app/kurse", label: "Lernen", icon: BookIcon },
    { to: "/app/nachrichten", label: "Medien", icon: NewsIcon },
    { to: "/app/community", label: "Community", icon: UsersIcon },
    { to: "/app/profil", label: "Profil", icon: UserIcon },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 md:hidden"
      style={{
        background: "rgba(17,17,22,0.96)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid var(--color-border)",
        paddingBottom: "max(8px, env(safe-area-inset-bottom))",
      }}
    >
      {items.map((item) => {
        const active = item.exact
          ? location.pathname === item.to
          : location.pathname.startsWith(item.to);
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all"
          >
            <item.icon size={20} active={active} />
            <span
              className="text-[10px] font-medium"
              style={{ color: active ? "var(--color-gold)" : "var(--color-text-subtle)" }}
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}

// Icons
function ChevronIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d={collapsed ? "M5 3l4 4-4 4" : "M9 3L5 7l4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M2 6.5L8 2l6 4.5V14H10V10H6v4H2V6.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill={active ? "rgba(232,184,75,0.2)" : "none"}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7a1 1 0 011 1v9a1 1 0 01-1 1H3V2z" stroke="currentColor" strokeWidth="1.3" fill={active ? "rgba(232,184,75,0.15)" : "none"} />
      <path d="M10 13h1a1 1 0 001-1V3a1 1 0 00-1-1h-1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 6h4M5 8.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function PenIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M10.5 2.5l3 3-8 8H2.5v-3l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2l1.6 4.1H14l-3.5 2.6 1.3 4.1L8 10.2l-3.8 2.6 1.3-4.1L2 6.1h4.4L8 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill={active ? "rgba(232,184,75,0.2)" : "none"}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewsIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 5.5h6M5 8h6M5 10.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function HeadphonesIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 9V8a5 5 0 0110 0v1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="9" width="2.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="11.5" y="9" width="2.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function VideoIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11 6.5l4-2v7l-4-2v-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 13.5c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7c1.5 0 3 1.2 3 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12.5" cy="4.5" r="1.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ChatIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 3h10a1 1 0 011 1v6a1 1 0 01-1 1H9l-3 2v-2H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function BookOpenIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 4v10M8 4C8 4 6 3 3 3v10c3 0 5 1 5 1s2-1 5-1V3c-3 0-5 1-5 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function TranslateIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 4h7M5.5 2v2M3 4c0 2.5 3 5 3 5M7 4c0 2 -1.5 3.5-3 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9 9l2-5 2 5M10 7.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AIIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="2" fill={active ? "var(--color-gold)" : "currentColor"} />
      <path d="M8 2.5V1M8 15v-1.5M2.5 8H1M15 8h-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function NoteIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 2h8a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TelegramIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 7.5L14 2l-4 12-3-4.5-5 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7 9.5L10.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TrendingIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 11l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 5h3v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SettingsIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ size = 16, active }: { size?: number; active?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.3" fill={active ? "rgba(232,184,75,0.2)" : "none"} />
      <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
