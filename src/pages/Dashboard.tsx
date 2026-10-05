import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, ProgressBar, ProgressRing, StatTile, SectionHeader } from "../components/ui";

const recommended = [
  { type: "Podcast", level: "A2", title: "Langsam gesprochene Nachrichten", desc: "Deutsche Welle · Ep. 142", time: "12 Min.", emoji: "🎧", to: "/app/podcasts", color: "#5E96E6" },
  { type: "Artikel", level: "A2", title: "KI verändert den Arbeitsmarkt", desc: "DeutschWelt Nachrichten", time: "5 Min.", emoji: "📰", to: "/app/nachrichten", color: "#4ECBA4" },
  { type: "Wortschatz", level: "A2", title: "10 neue Wörter: Technologie", desc: "Vokabeln · Thema: Technik", time: "8 Min.", emoji: "📝", to: "/app/wortschatz", color: "#9664E6" },
  { type: "Grammatik", level: "A2", title: "Perfekt mit sein und haben", desc: "Grammatikübung · 5 Aufgaben", time: "6 Min.", emoji: "✏️", to: "/app/grammatik", color: "#E8B84B" },
];

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const weekActivity = [true, true, true, true, false, true, false];
const todayIndex = 5;

// Right panel: AI assistant preview messages
const aiMessages = [
  { role: "ai", text: "Hallo Mohammad! Möchtest du heute über die Perfektbildung üben? Das ist dein Schwerpunkt dieser Woche." },
  { role: "user", text: "Ja, gerne! Wie bilde ich Perfekt mit sein?" },
];

export default function Dashboard() {
  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 12) return "Guten Morgen";
    if (h < 18) return "Guten Tag";
    return "Guten Abend";
  });
  const [aiInput, setAiInput] = useState("");

  return (
    <div className="flex-1 overflow-hidden flex">
      {/* ── Center content ─────────────────────── */}
      <div className="flex-1 overflow-y-auto py-7 px-6 md:px-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <div className="text-[13px] mb-1 flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-success)", boxShadow: "0 0 6px var(--color-success)" }} />
              A2 · 1.240 XP · 🔥 6 Tage Streak
            </div>
            <h1 className="text-[26px] md:text-[30px] font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
              {greeting}, Mohammad.
            </h1>
            <p className="text-[15px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
              Bereit für dein Deutsch heute?
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/app/uebungen">
              <Button variant="primary">
                Heute lernen
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* Level + daily goal row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Main level card */}
          <div
            className="md:col-span-3 rounded-2xl p-6"
            style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="text-[11px] uppercase tracking-widest mb-2" style={{ color: "var(--color-text-subtle)" }}>Aktuelles Niveau</div>
                <div className="flex items-center gap-3">
                  <span className="text-[32px] font-black" style={{ color: "var(--color-gold)" }}>A2</span>
                  <div>
                    <div className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>Grundlegendes Niveau</div>
                    <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>68% Weg zu B1</div>
                  </div>
                </div>
              </div>
              <ProgressRing value={68} size={72} stroke={5}>
                <span className="text-[13px] font-bold" style={{ color: "var(--color-gold)" }}>68%</span>
              </ProgressRing>
            </div>
            <div className="mb-2 flex items-center justify-between text-[12px]">
              <span style={{ color: "var(--color-text-muted)" }}>XP Fortschritt</span>
              <span style={{ color: "var(--color-gold)" }}>1.240 / 1.800 XP</span>
            </div>
            <ProgressBar value={68} />
            <div className="mt-5 pt-4 grid grid-cols-3 gap-3" style={{ borderTop: "1px solid var(--color-border)" }}>
              {[
                { label: "Wörter", value: "847", icon: "📝" },
                { label: "Lernzeit", value: "42 Std.", icon: "⏱" },
                { label: "Übungen", value: "234", icon: "✅" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[18px] font-bold" style={{ color: "var(--color-text)" }}>{s.value}</div>
                  <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{s.icon} {s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily goal card */}
          <div
            className="md:col-span-2 rounded-2xl p-5 flex flex-col"
            style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] uppercase tracking-widest" style={{ color: "var(--color-text-subtle)" }}>Tagesziel</div>
              <div className="text-[12px] font-medium" style={{ color: "var(--color-gold)" }}>18 / 30 Min.</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <ProgressRing value={60} size={88} stroke={6}>
                <div className="text-center">
                  <div className="text-[18px] font-bold" style={{ color: "var(--color-text)" }}>18</div>
                  <div className="text-[9px]" style={{ color: "var(--color-text-muted)" }}>Min. heute</div>
                </div>
              </ProgressRing>
              <p className="text-[12px] text-center" style={{ color: "var(--color-text-muted)" }}>
                Noch 12 Minuten bis zum Ziel
              </p>
            </div>
            {/* Week dots */}
            <div className="flex justify-between mt-4">
              {weekDays.map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-semibold"
                    style={{
                      background: weekActivity[i]
                        ? "var(--color-gold)"
                        : i === todayIndex
                        ? "rgba(232,184,75,0.15)"
                        : "var(--color-surface-interactive)",
                      color: weekActivity[i] ? "#08080B" : i === todayIndex ? "var(--color-gold)" : "var(--color-text-subtle)",
                      border: i === todayIndex && !weekActivity[i] ? "1px solid rgba(232,184,75,0.3)" : "none",
                    }}
                  >
                    {weekActivity[i] ? "✓" : d[0]}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/app/uebungen" className="mt-4">
              <Button variant="primary" className="w-full justify-center" size="sm">Weiter lernen →</Button>
            </Link>
          </div>
        </div>

        {/* Continue learning */}
        <div className="mb-6">
          <SectionHeader
            title="Weiterlernen"
            action={<Link to="/app/kurse"><Button variant="ghost" size="sm">Alle Kurse</Button></Link>}
          />
          <Link to="/app/kurse/a2">
            <div
              className="flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all hover:border-white/15"
              style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--color-surface-interactive)" }}>
                📚
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge level="a2">A2</Badge>
                  <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Modul 2 · Lektion 12</span>
                </div>
                <div className="font-semibold text-[15px] truncate" style={{ color: "var(--color-text)" }}>
                  Deutsch A2 — Alltag & Kommunikation
                </div>
                <div className="text-[13px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>Im Restaurant bestellen</div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span style={{ color: "var(--color-text-subtle)" }}>Kursfortschritt</span>
                    <span style={{ color: "var(--color-gold)" }}>12 / 24 Lektionen (50%)</span>
                  </div>
                  <ProgressBar value={50} />
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <Button variant="primary" size="sm">Weiter →</Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Recommended */}
        <div className="mb-6">
          <SectionHeader title="Heute für dich" subtitle="Basierend auf deinen Interessen und deinem A2-Niveau" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {recommended.map((item, i) => (
              <Link key={i} to={item.to}>
                <div
                  className="p-4 rounded-xl transition-all duration-200 hover:translate-y-[-2px] cursor-pointer h-full"
                  style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <Badge level={item.level.toLowerCase()}>{item.level}</Badge>
                  </div>
                  <div className="font-semibold text-[13px] mb-1 leading-snug" style={{ color: "var(--color-text)" }}>{item.title}</div>
                  <div className="text-[11px] mb-3" style={{ color: "var(--color-text-muted)" }}>{item.desc}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.type}
                    </span>
                    <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>⏱ {item.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: Today button */}
        <div className="md:hidden mb-24">
          <Link to="/app/uebungen">
            <Button variant="primary" size="lg" className="w-full justify-center">Heute lernen →</Button>
          </Link>
        </div>
      </div>

      {/* ── Right panel ─────────────────────────── */}
      <aside
        className="hidden xl:flex flex-col w-72 shrink-0 overflow-y-auto py-7 px-5"
        style={{ borderLeft: "1px solid var(--color-border)" }}
      >
        {/* Mini AI chat */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(232,184,75,0.2)" }}>
              🤖
            </div>
            <div>
              <div className="text-[12px] font-semibold" style={{ color: "var(--color-text)" }}>KI-Assistent</div>
              <div className="text-[10px]" style={{ color: "var(--color-success)" }}>● Bereit</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden mb-2" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <div className="p-3 space-y-2 max-h-36 overflow-y-auto scrollbar-hide">
              {aiMessages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                  <div
                    className="px-3 py-2 rounded-xl text-[11px] leading-relaxed max-w-[90%]"
                    style={{
                      background: m.role === "user" ? "var(--color-gold)" : "var(--color-surface-interactive)",
                      color: m.role === "user" ? "#08080B" : "var(--color-text-muted)",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 px-3 pb-3">
              <input
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Auf Deutsch schreiben..."
                className="flex-1 px-2.5 py-1.5 rounded-lg text-[11px] outline-none"
                style={{ background: "var(--color-surface-interactive)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
              />
              <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--color-gold)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M6 3l2 2-2 2" stroke="#08080B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
          <Link to="/app/ki-assistent">
            <Button variant="ghost" size="sm" className="w-full justify-center">Vollständiger Chat →</Button>
          </Link>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)" }} className="my-1" />

        {/* Streak tracker */}
        <div className="my-5">
          <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>Diese Woche</div>
          <div className="flex justify-between">
            {weekDays.map((d, i) => (
              <div key={d} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold"
                  style={{
                    background: weekActivity[i] ? "var(--color-gold)" : "var(--color-surface-interactive)",
                    color: weekActivity[i] ? "#08080B" : "var(--color-text-subtle)",
                  }}
                >
                  {weekActivity[i] ? "✓" : ""}
                </div>
                <span className="text-[9px]" style={{ color: "var(--color-text-subtle)" }}>{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(232,86,75,0.06)", border: "1px solid rgba(232,86,75,0.12)" }}>
            <span className="text-xl">🔥</span>
            <div>
              <div className="font-bold text-[15px]" style={{ color: "var(--color-error)" }}>6 Tage Streak</div>
              <div className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>Rekord: 14 Tage</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)" }} className="my-1" />

        {/* Today's words */}
        <div className="my-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px] uppercase tracking-widest" style={{ color: "var(--color-text-subtle)" }}>Wort des Tages</div>
            <Link to="/app/wortschatz">
              <span className="text-[11px]" style={{ color: "var(--color-gold)" }}>Alle →</span>
            </Link>
          </div>
          <div className="rounded-xl p-4" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <div className="font-bold text-[20px] mb-1" style={{ color: "var(--color-text)" }}>entdecken</div>
            <div className="text-[12px] mb-2" style={{ color: "var(--color-gold)" }}>to discover</div>
            <div className="text-[11px] italic mb-3" style={{ color: "var(--color-text-muted)" }}>
              &ldquo;Ich möchte Berlin entdecken.&rdquo;
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 rounded-lg text-[11px] font-medium" style={{ background: "var(--color-gold-dim)", color: "var(--color-gold)", border: "1px solid rgba(232,184,75,0.2)" }}>
                🔊 Anhören
              </button>
              <button className="flex-1 py-1.5 rounded-lg text-[11px] font-medium" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                ⭐ Speichern
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)" }} className="my-1" />

        {/* Quick links */}
        <div className="mt-5">
          <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>Schnellzugriff</div>
          <div className="space-y-1.5">
            {[
              { label: "Wörterbuch", emoji: "📖", to: "/app/woerterbuch" },
              { label: "Übersetzer", emoji: "🔄", to: "/app/uebersetzer" },
              { label: "Notizen", emoji: "📝", to: "/app/notizen" },
              { label: "Telegram Bot", emoji: "✈️", to: "/app/telegram" },
            ].map((item) => (
              <Link key={item.to} to={item.to}>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/5 cursor-pointer">
                  <span className="text-base">{item.emoji}</span>
                  <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{item.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto" style={{ color: "var(--color-text-subtle)" }}>
                    <path d="M4 3l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
