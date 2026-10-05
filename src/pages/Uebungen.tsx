import { useState } from "react";
import { Badge, Button, SectionHeader } from "../components/ui";

const exerciseTypes = [
  { id: "mc", label: "Multiple Choice", icon: "🔘", count: 48, level: "A2" },
  { id: "fill", label: "Lückentext", icon: "✏️", count: 36, level: "A2" },
  { id: "order", label: "Sätze ordnen", icon: "🔀", count: 24, level: "B1" },
  { id: "listen", label: "Hören", icon: "🎧", count: 20, level: "A2" },
  { id: "read", label: "Lesen", icon: "📖", count: 32, level: "A2" },
  { id: "write", label: "Schreiben", icon: "📝", count: 15, level: "B1" },
  { id: "vocab", label: "Wortschatz", icon: "⭐", count: 60, level: "A1" },
];

function MultipleChoice() {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = 2;

  const options = [
    "Ich bin seit zwei Jahre hier.",
    "Ich bin seit zwei Jahren hier.",
    "Ich war seit zwei Jahren hier.",
    "Ich bin für zwei Jahren hier.",
  ];

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>
          Aufgabe 1 von 10 · Grammatik
        </div>
        <div className="w-full h-1.5 rounded-full mb-5" style={{ background: "var(--color-surface-interactive)" }}>
          <div className="h-full rounded-full" style={{ width: "10%", background: "var(--color-gold)" }} />
        </div>
        <h2 className="text-[20px] font-semibold mb-6" style={{ color: "var(--color-text)" }}>
          Welcher Satz ist grammatikalisch korrekt?
        </h2>
        <div className="space-y-3 mb-6">
          {options.map((opt, i) => {
            let bg = "var(--color-surface-elevated)";
            let border = "var(--color-border)";
            let color = "var(--color-text)";
            if (checked) {
              if (i === correct) { bg = "rgba(78,203,164,0.1)"; border = "rgba(78,203,164,0.4)"; color = "var(--color-success)"; }
              else if (i === selected && i !== correct) { bg = "rgba(232,86,75,0.1)"; border = "rgba(232,86,75,0.4)"; color = "var(--color-error)"; }
            } else if (selected === i) {
              bg = "var(--color-gold-dim)"; border = "rgba(232,184,75,0.4)"; color = "var(--color-gold)";
            }
            return (
              <button
                key={i}
                onClick={() => !checked && setSelected(i)}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all"
                style={{ background: bg, border: `1px solid ${border}`, color }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-[12px] font-bold"
                  style={{ borderColor: border === "var(--color-border)" ? "rgba(255,255,255,0.2)" : border }}
                >
                  {checked && i === correct ? "✓" : checked && i === selected && i !== correct ? "✗" : String.fromCharCode(65 + i)}
                </div>
                <span className="text-[14px]">{opt}</span>
              </button>
            );
          })}
        </div>
        {checked && (
          <div className="rounded-xl p-4 mb-4 animate-fade-in" style={{ background: "rgba(78,203,164,0.08)", border: "1px solid rgba(78,203,164,0.2)" }}>
            <div className="font-semibold text-[14px] mb-1" style={{ color: "var(--color-success)" }}>✓ Richtig!</div>
            <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
              „Seit" mit Zeitangabe erfordert den Dativ. „Jahr" im Dativ Plural lautet „Jahren".
            </div>
          </div>
        )}
        <div className="flex gap-3">
          {!checked ? (
            <Button variant="primary" className="flex-1 justify-center" disabled={selected === null} onClick={() => setChecked(true)}>
              Antwort prüfen
            </Button>
          ) : (
            <Button variant="primary" className="flex-1 justify-center" onClick={() => { setChecked(false); setSelected(null); }}>
              Nächste Aufgabe →
            </Button>
          )}
          <Button variant="ghost">Hinweis</Button>
        </div>
      </div>
    </div>
  );
}

export default function Uebungen() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

  if (activeExercise === "mc") {
    return (
      <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setActiveExercise(null)} style={{ color: "var(--color-text-muted)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 16L7 10l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <span className="text-[15px] font-semibold" style={{ color: "var(--color-text)" }}>Multiple Choice · A2 Grammatik</span>
        </div>
        <MultipleChoice />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Übungen" subtitle="Teste und festige dein Wissen" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-20 md:mb-0">
        {exerciseTypes.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setActiveExercise(ex.id)}
            className="p-5 rounded-2xl text-left transition-all duration-150 hover:translate-y-[-2px]"
            style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
          >
            <div className="text-3xl mb-3">{ex.icon}</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>{ex.label}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{ex.count} Aufgaben</span>
              <Badge level={ex.level.toLowerCase()}>{ex.level}</Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
