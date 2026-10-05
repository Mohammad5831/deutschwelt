import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogoFull } from "../components/Logo";
import { Button } from "../components/ui";

function OnboardingLayout({
  step,
  total,
  children,
}: {
  step: number;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-background)" }}>
      <header className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <LogoFull />
        <div className="flex items-center gap-3">
          <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
            Schritt {step} von {total}
          </span>
          <div className="w-32 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-interactive)" }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${(step / total) * 100}%`, background: "var(--color-gold)" }}
            />
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg animate-fade-in">{children}</div>
      </div>
    </div>
  );
}

function Question({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-[28px] md:text-[34px] font-bold leading-tight" style={{ color: "var(--color-text)" }}>
        {title}
      </h1>
      {sub && <p className="text-[15px] mt-2" style={{ color: "var(--color-text-muted)" }}>{sub}</p>}
    </div>
  );
}

export function OnboardingNiveau() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const levels = [
    { id: "A1", label: "A1", desc: "Absoluter Anfänger" },
    { id: "A2", label: "A2", desc: "Grundkenntnisse vorhanden" },
    { id: "B1", label: "B1", desc: "Mittelstufenniveau" },
    { id: "B2", label: "B2", desc: "Gute Kenntnisse" },
    { id: "C1", label: "C1", desc: "Fortgeschritten" },
    { id: "C2", label: "C2", desc: "Nahezu muttersprachlich" },
  ];

  return (
    <OnboardingLayout step={1} total={5}>
      <Question title="Wie gut ist dein Deutsch?" sub="Wähle dein aktuelles Sprachniveau." />
      <div className="grid grid-cols-2 gap-3 mb-8">
        {levels.map((l) => (
          <button
            key={l.id}
            onClick={() => setSelected(l.id)}
            className="p-4 rounded-xl text-left transition-all duration-150"
            style={{
              background: selected === l.id ? "var(--color-gold-dim)" : "var(--color-surface-elevated)",
              border: `1px solid ${selected === l.id ? "rgba(232,184,75,0.4)" : "var(--color-border)"}`,
              color: selected === l.id ? "var(--color-gold)" : "var(--color-text)",
            }}
          >
            <div className="text-[22px] font-bold">{l.label}</div>
            <div className="text-[12px] mt-0.5" style={{ color: selected === l.id ? "rgba(232,184,75,0.7)" : "var(--color-text-muted)" }}>{l.desc}</div>
          </button>
        ))}
      </div>
      <button
        className="text-[13px] mb-6 block"
        style={{ color: "var(--color-text-muted)" }}
        onClick={() => navigate("/onboarding/ziel")}
      >``
        Ich bin mir nicht sicher →
      </button>
      <Button variant="primary" size="lg" disabled={!selected} onClick={() => navigate("/onboarding/ziel")} className="w-full justify-center">
        Weiter
      </Button>
    </OnboardingLayout>
  );
}

export function OnboardingZiel() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const goals = ["Ausbildung", "Studium", "Arbeit", "Alltag", "Reisen", "Prüfung", "Integration", "Persönliches Interesse"];
  const toggle = (g: string) => setSelected((s) => s.includes(g) ? s.filter((x) => x !== g) : [...s, g]);

  return (
    <OnboardingLayout step={2} total={5}>
      <Question title="Warum lernst du Deutsch?" sub="Mehrere Antworten möglich." />
      <div className="flex flex-wrap gap-2.5 mb-10">
        {goals.map((g) => (
          <button
            key={g}
            onClick={() => toggle(g)}
            className="px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all"
            style={{
              background: selected.includes(g) ? "var(--color-gold-dim)" : "var(--color-surface-elevated)",
              border: `1px solid ${selected.includes(g) ? "rgba(232,184,75,0.4)" : "var(--color-border)"}`,
              color: selected.includes(g) ? "var(--color-gold)" : "var(--color-text)",
            }}
          >
            {g}
          </button>
        ))}
      </div>
      <Button variant="primary" size="lg" disabled={selected.length === 0} onClick={() => navigate("/onboarding/lernzeit")} className="w-full justify-center">
        Weiter
      </Button>
    </OnboardingLayout>
  );
}

export function OnboardingLernzeit() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const times = [
    { id: "10", label: "10 Minuten", desc: "Kurze tägliche Einheiten" },
    { id: "20", label: "20 Minuten", desc: "Regelmäßig und effizient" },
    { id: "30", label: "30 Minuten", desc: "Empfohlen für schnellen Fortschritt" },
    { id: "45", label: "45 Minuten", desc: "Intensives Lernen" },
    { id: "60+", label: "60+ Minuten", desc: "Vollintensiv" },
  ];

  return (
    <OnboardingLayout step={3} total={5}>
      <Question title="Wie viel Zeit möchtest du täglich lernen?" />
      <div className="flex flex-col gap-2.5 mb-10">
        {times.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className="flex items-center justify-between px-5 py-4 rounded-xl transition-all"
            style={{
              background: selected === t.id ? "var(--color-gold-dim)" : "var(--color-surface-elevated)",
              border: `1px solid ${selected === t.id ? "rgba(232,184,75,0.4)" : "var(--color-border)"}`,
            }}
          >
            <div>
              <div className="font-semibold text-[15px]" style={{ color: selected === t.id ? "var(--color-gold)" : "var(--color-text)" }}>{t.label}</div>
              <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{t.desc}</div>
            </div>
            {selected === t.id && (
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "var(--color-gold)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#08080B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            )}
          </button>
        ))}
      </div>
      <Button variant="primary" size="lg" disabled={!selected} onClick={() => navigate("/onboarding/interessen")} className="w-full justify-center">
        Weiter
      </Button>
    </OnboardingLayout>
  );
}

export function OnboardingInteressen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const topics = [
    { id: "Technik", emoji: "💻" },
    { id: "Wissenschaft", emoji: "🔬" },
    { id: "Filme", emoji: "🎬" },
    { id: "Serien", emoji: "📺" },
    { id: "Musik", emoji: "🎵" },
    { id: "Gaming", emoji: "🎮" },
    { id: "Sport", emoji: "⚽" },
    { id: "Wirtschaft", emoji: "📈" },
    { id: "Geschichte", emoji: "🏛️" },
    { id: "Reisen", emoji: "✈️" },
    { id: "Kultur", emoji: "🎭" },
    { id: "Nachrichten", emoji: "📰" },
  ];
  const toggle = (g: string) => setSelected((s) => s.includes(g) ? s.filter((x) => x !== g) : [...s, g]);

  return (
    <OnboardingLayout step={4} total={5}>
      <Question title="Was interessiert dich?" sub="Wir personalisieren deine Inhalte entsprechend." />
      <div className="grid grid-cols-3 gap-2.5 mb-10">
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => toggle(t.id)}
            className="flex flex-col items-center gap-2 py-4 rounded-xl transition-all"
            style={{
              background: selected.includes(t.id) ? "var(--color-gold-dim)" : "var(--color-surface-elevated)",
              border: `1px solid ${selected.includes(t.id) ? "rgba(232,184,75,0.4)" : "var(--color-border)"}`,
            }}
          >
            <span className="text-2xl">{t.emoji}</span>
            <span className="text-[12px] font-medium" style={{ color: selected.includes(t.id) ? "var(--color-gold)" : "var(--color-text)" }}>{t.id}</span>
          </button>
        ))}
      </div>
      <Button variant="primary" size="lg" disabled={selected.length === 0} onClick={() => navigate("/onboarding/lernplan")} className="w-full justify-center">
        Lernplan erstellen
      </Button>
    </OnboardingLayout>
  );
}

export function OnboardingLernplan() {
  const navigate = useNavigate();
  return (
    <OnboardingLayout step={5} total={5}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl" style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(232,184,75,0.25)" }}>
          📋
        </div>
        <h1 className="text-[28px] font-bold mb-2" style={{ color: "var(--color-text)" }}>Dein Lernplan</h1>
        <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Basierend auf deinen Angaben haben wir einen Plan erstellt.</p>
      </div>

      <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
        <div className="flex items-center justify-between mb-5 pb-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div>
            <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>Niveau</div>
            <div className="font-bold text-[17px]" style={{ color: "var(--color-gold)" }}>A2</div>
          </div>
          <div>
            <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>Tägliches Ziel</div>
            <div className="font-bold text-[17px]" style={{ color: "var(--color-text)" }}>30 Minuten</div>
          </div>
          <div>
            <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>Ziel</div>
            <div className="font-bold text-[17px]" style={{ color: "var(--color-text)" }}>Ausbildung</div>
          </div>
        </div>
        <div className="text-[13px] font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--color-text-subtle)" }}>Tagesstruktur</div>
        {[
          { time: "10 Min.", label: "Wortschatz", color: "#5E96E6", emoji: "📝" },
          { time: "10 Min.", label: "Hören & Verstehen", color: "#4ECBA4", emoji: "🎧" },
          { time: "5 Min.", label: "Grammatik", color: "#9664E6", emoji: "✏️" },
          { time: "5 Min.", label: "Übungen & Tests", color: "#E8B84B", emoji: "✅" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 py-3" style={{ borderBottom: i < 3 ? "1px solid var(--color-border)" : "none" }}>
            <span className="text-xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>{item.label}</div>
            </div>
            <span className="text-[12px] font-semibold px-2 py-1 rounded-full" style={{ background: `${item.color}20`, color: item.color }}>
              {item.time}
            </span>
          </div>
        ))}
      </div>

      <Button variant="primary" size="lg" className="w-full justify-center" onClick={() => navigate("/app")}>
        Lernplan starten →
      </Button>
    </OnboardingLayout>
  );
}
