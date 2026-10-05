import { useState } from "react";
import { Badge, Button, ProgressBar, ProgressRing, SectionHeader } from "../components/ui";

export function Profil() {
  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8 p-6 rounded-2xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold" style={{ background: "var(--color-gold)", color: "#08080B" }}>
              M
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "var(--color-success)", border: "2px solid var(--color-surface-elevated)" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-bold" style={{ color: "var(--color-text)" }}>Mohammad Al-Rashid</h1>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <Badge level="a2">A2</Badge>
              <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>1.240 XP · 🔥 6 Tage Streak</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Technologie", "Filme", "Wissenschaft"].map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-full" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>{t}</span>
              ))}
            </div>
          </div>
          <Button variant="secondary" size="sm">Profil bearbeiten</Button>
        </div>

        {/* Level progress */}
        <div className="rounded-2xl p-5 mb-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="flex items-center gap-4 mb-3">
            <ProgressRing value={68} size={64}>
              <div className="text-[13px] font-bold" style={{ color: "var(--color-gold)" }}>A2</div>
            </ProgressRing>
            <div>
              <div className="font-semibold" style={{ color: "var(--color-text)" }}>Fortschritt zu B1</div>
              <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>1.240 / 1.800 XP</div>
            </div>
          </div>
          <ProgressBar value={68} />
        </div>

        {/* Recent activity */}
        <div className="rounded-2xl p-5 mb-20 md:mb-0" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <h3 className="font-semibold text-[15px] mb-4" style={{ color: "var(--color-text)" }}>Letzte Aktivitäten</h3>
          <div className="space-y-3">
            {[
              { icon: "📚", text: "Lektion 11 abgeschlossen", time: "vor 2 Std.", color: "#5E96E6" },
              { icon: "⭐", text: "10 neue Wörter gelernt", time: "gestern", color: "#E8B84B" },
              { icon: "💬", text: "Gespräch mit KI-Assistent", time: "vor 2 Tagen", color: "#4ECBA4" },
              { icon: "✅", text: "Grammatikübung abgeschlossen", time: "vor 3 Tagen", color: "#9664E6" },
            ].map((act, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: `${act.color}15` }}>
                  {act.icon}
                </div>
                <div className="flex-1 text-[13px]" style={{ color: "var(--color-text)" }}>{act.text}</div>
                <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{act.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Einstellungen() {
  const [theme, setTheme] = useState("dunkel");
  const [notifications, setNotifications] = useState({ daily: true, streak: true, newContent: false, community: true });
  const [level, setLevel] = useState("A2");

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Einstellungen" subtitle="Passe DeutschWelt an deine Bedürfnisse an" />

      <div className="max-w-xl space-y-5 mb-20 md:mb-0">

        {/* Account */}
        <Section title="Konto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl" style={{ background: "var(--color-gold)", color: "#08080B" }}>M</div>
            <div>
              <div className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>Mohammad Al-Rashid</div>
              <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>mohammad@example.de</div>
            </div>
          </div>
          <Button variant="secondary" size="sm">Konto bearbeiten</Button>
        </Section>

        {/* Learning */}
        <Section title="Lernen">
          <div className="mb-3">
            <div className="text-[13px] mb-2" style={{ color: "var(--color-text-muted)" }}>Aktuelles Niveau</div>
            <div className="flex gap-2 flex-wrap">
              {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => (
                <button key={l} onClick={() => setLevel(l)} className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all"
                  style={{ background: level === l ? "var(--color-gold)" : "var(--color-surface-interactive)", color: level === l ? "#08080B" : "var(--color-text-muted)" }}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[13px] mb-2" style={{ color: "var(--color-text-muted)" }}>Tägliches Ziel</div>
            <div className="flex gap-2 flex-wrap">
              {["10 Min.", "20 Min.", "30 Min.", "45 Min.", "60+ Min."].map((t) => (
                <button key={t} className="px-3 py-1.5 rounded-lg text-[12px]" style={{ background: t === "30 Min." ? "var(--color-gold)" : "var(--color-surface-interactive)", color: t === "30 Min." ? "#08080B" : "var(--color-text-muted)" }}>{t}</button>
              ))}
            </div>
          </div>
        </Section>

        {/* Notifications */}
        <Section title="Benachrichtigungen">
          {[
            { key: "daily", label: "Tägliche Erinnerung", desc: "Erinnere mich täglich ans Lernen" },
            { key: "streak", label: "Streak-Schutz", desc: "Warnung wenn Streak in Gefahr ist" },
            { key: "newContent", label: "Neue Inhalte", desc: "Benachrichtigung bei neuen Kursen" },
            { key: "community", label: "Community", desc: "Antworten auf meine Beiträge" },
          ].map((n) => (
            <div key={n.key} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <div>
                <div className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>{n.label}</div>
                <div className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{n.desc}</div>
              </div>
              <Toggle
                on={notifications[n.key as keyof typeof notifications]}
                onChange={(v) => setNotifications((prev) => ({ ...prev, [n.key]: v }))}
              />
            </div>
          ))}
        </Section>

        {/* Appearance */}
        <Section title="Darstellung">
          <div className="flex gap-3">
            {[
              { id: "dunkel", label: "Dunkel", icon: "🌙" },
              { id: "hell", label: "Hell", icon: "☀️" },
              { id: "system", label: "System", icon: "💻" },
            ].map((t) => (
              <button key={t.id} onClick={() => setTheme(t.id)} className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-all"
                style={{ background: theme === t.id ? "var(--color-gold-dim)" : "var(--color-surface-interactive)", border: `1px solid ${theme === t.id ? "rgba(232,184,75,0.3)" : "transparent"}` }}>
                <span className="text-xl">{t.icon}</span>
                <span className="text-[12px]" style={{ color: theme === t.id ? "var(--color-gold)" : "var(--color-text-muted)" }}>{t.label}</span>
              </button>
            ))}
          </div>
        </Section>

        {/* Danger */}
        <Section title="Datenschutz">
          <div className="flex flex-col gap-2">
            <Button variant="ghost" size="sm">Daten exportieren</Button>
            <Button variant="danger" size="sm">Konto löschen</Button>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
      <h3 className="font-semibold text-[13px] uppercase tracking-widest mb-4" style={{ color: "var(--color-text-subtle)" }}>{title}</h3>
      {children}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="relative w-11 h-6 rounded-full transition-colors duration-200"
      style={{ background: on ? "var(--color-gold)" : "var(--color-surface-interactive)" }}
    >
      <div
        className="absolute top-1 w-4 h-4 rounded-full transition-transform duration-200"
        style={{ background: on ? "#08080B" : "rgba(255,255,255,0.3)", left: on ? "24px" : "4px" }}
      />
    </button>
  );
}
