import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, SectionHeader } from "../components/ui";

const discussions = [
  {
    id: "1",
    title: "Wie benutzt man obwohl und obgleich richtig?",
    author: "Yuki T.",
    avatar: "Y",
    replies: 12,
    likes: 34,
    category: "Grammatik",
    time: "vor 2 Std.",
    level: "B2",
  },
  {
    id: "2",
    title: "Meine Erfahrungen mit der Ausbildung in Deutschland",
    author: "Priya S.",
    avatar: "P",
    replies: 28,
    likes: 87,
    category: "Ausbildung",
    time: "vor 5 Std.",
    level: "B1",
  },
  {
    id: "3",
    title: "Welche Podcasts empfehlt ihr für A2?",
    author: "Carlos M.",
    avatar: "C",
    replies: 19,
    likes: 55,
    category: "Deutsch lernen",
    time: "gestern",
    level: "A2",
  },
  {
    id: "4",
    title: "Unterschied zwischen weil und da – verwirrt!",
    author: "Aisha K.",
    avatar: "A",
    replies: 8,
    likes: 22,
    category: "Grammatik",
    time: "vor 1 Tag",
    level: "B1",
  },
];

const partners = [
  {
    name: "Ling Wei",
    avatar: "L",
    native: "🇨🇳 Mandarin",
    level: "B1",
    goal: "Studium",
    interests: ["Technologie", "Musik"],
    online: true,
  },
  {
    name: "Sofía García",
    avatar: "S",
    native: "🇪🇸 Spanisch",
    level: "A2",
    goal: "Arbeit",
    interests: ["Kultur", "Reisen"],
    online: false,
  },
  {
    name: "Dmitri Petrov",
    avatar: "D",
    native: "🇷🇺 Russisch",
    level: "B2",
    goal: "Ausbildung",
    interests: ["Wirtschaft", "Technik"],
    online: true,
  },
  {
    name: "Fatima Al-Hassan",
    avatar: "F",
    native: "🇸🇦 Arabisch",
    level: "A2",
    goal: "Integration",
    interests: ["Alltag", "Sport"],
    online: false,
  },
];

const forumCategories = [
  { label: "Deutsch lernen", count: 2340, icon: "📚" },
  { label: "Grammatik", count: 1820, icon: "✏️" },
  { label: "Wortschatz", count: 980, icon: "📝" },
  { label: "Deutschland", count: 1450, icon: "🇩🇪" },
  { label: "Ausbildung", count: 670, icon: "🏗️" },
  { label: "Studium", count: 890, icon: "🎓" },
  { label: "Arbeit", count: 560, icon: "💼" },
  { label: "Alltag", count: 1200, icon: "☕" },
];

export default function Community() {
  const [tab, setTab] = useState<"diskussionen" | "partner" | "forum">("diskussionen");

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Community" subtitle="Lerne mit Menschen weltweit" />

      <div className="flex gap-1 p-1 rounded-xl mb-6 w-fit" style={{ background: "var(--color-surface)" }}>
        {[
          { id: "diskussionen", label: "Diskussionen" },
          { id: "partner", label: "Sprachpartner" },
          { id: "forum", label: "Forum" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
            style={{
              background: tab === t.id ? "var(--color-surface-elevated)" : "transparent",
              color: tab === t.id ? "var(--color-text)" : "var(--color-text-muted)",
              border: tab === t.id ? "1px solid var(--color-border)" : "1px solid transparent",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "diskussionen" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div />
            <Button variant="primary" size="sm">+ Neuer Beitrag</Button>
          </div>
          <div className="space-y-3 mb-20 md:mb-0">
            {discussions.map((d) => (
              <Link key={d.id} to={`/app/community/${d.id}`}><div className="p-5 rounded-xl cursor-pointer transition-colors hover:bg-white/3" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[14px] shrink-0" style={{ background: "var(--color-surface-interactive)", color: "var(--color-gold)" }}>
                    {d.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[14px] mb-1.5" style={{ color: "var(--color-text)" }}>{d.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-[11px]">
                      <span style={{ color: "var(--color-text-muted)" }}>{d.author}</span>
                      <span style={{ color: "var(--color-text-subtle)" }}>{d.time}</span>
                      <span className="px-2 py-0.5 rounded-full" style={{ background: "rgba(232,184,75,0.1)", color: "var(--color-gold)" }}>{d.category}</span>
                      <Badge level={d.level.toLowerCase()}>{d.level}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] shrink-0" style={{ color: "var(--color-text-subtle)" }}>
                    <span>💬 {d.replies}</span>
                    <span>❤️ {d.likes}</span>
                  </div>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      )}

      {tab === "partner" && (
        <div>
          <div className="rounded-xl p-4 mb-5" style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(232,184,75,0.2)" }}>
            <p className="text-[13px]" style={{ color: "var(--color-gold)" }}>
              💡 Verbinde dich mit Muttersprachlern und anderen Deutschlernenden. Übe Gespräche und verbessere deine Kommunikation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 md:mb-0">
            {partners.map((p, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[18px]" style={{ background: "var(--color-surface-interactive)", color: "var(--color-gold)" }}>
                      {p.avatar}
                    </div>
                    {p.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2" style={{ background: "var(--color-success)", borderColor: "var(--color-surface-elevated)" }} />}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>{p.name}</div>
                    <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{p.native}</div>
                  </div>
                  <Badge level={p.level.toLowerCase()}>{p.level}</Badge>
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-[11px] px-2 py-1 rounded-full" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                    Ziel: {p.goal}
                  </span>
                  {p.interests.map((int) => (
                    <span key={int} className="text-[11px] px-2 py-1 rounded-full" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                      {int}
                    </span>
                  ))}
                </div>
                <Button variant="secondary" size="sm" className="w-full justify-center">Kontakt aufnehmen</Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "forum" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20 md:mb-0">
          {forumCategories.map((cat) => (
            <div key={cat.label} className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-white/3 transition-colors" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
              <span className="text-2xl">{cat.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-[14px]" style={{ color: "var(--color-text)" }}>{cat.label}</div>
                <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{cat.count.toLocaleString("de")} Beiträge</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--color-text-subtle)" }}>
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
