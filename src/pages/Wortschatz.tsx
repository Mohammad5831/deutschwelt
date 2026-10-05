import { useState } from "react";
import { Badge, Button, ProgressBar, SectionHeader, StatTile } from "../components/ui";

const words = [
  { de: "entdecken", en: "to discover", type: "Verb", level: "A2", mastery: 80, example: "Ich möchte die Stadt entdecken." },
  { de: "die Möglichkeit", en: "the possibility", type: "Nomen", level: "B1", mastery: 60, example: "Das ist eine gute Möglichkeit." },
  { de: "verbessern", en: "to improve", type: "Verb", level: "B1", mastery: 40, example: "Ich möchte mein Deutsch verbessern." },
  { de: "zuverlässig", en: "reliable", type: "Adjektiv", level: "B2", mastery: 20, example: "Er ist ein zuverlässiger Kollege." },
  { de: "die Ausbildung", en: "the apprenticeship", type: "Nomen", level: "A2", mastery: 90, example: "Ich mache eine Ausbildung als Mechatroniker." },
  { de: "beantragen", en: "to apply for", type: "Verb", level: "B1", mastery: 50, example: "Ich muss ein Visum beantragen." },
];

export default function Wortschatz() {
  const [tab, setTab] = useState<"uebersicht" | "trainer" | "gespeichert">("uebersicht");
  const [trainerIndex, setTrainerIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current = words[trainerIndex % words.length];

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Wortschatz" subtitle="Lerne und wiederhole deine Vokabeln" />

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl mb-6 w-fit" style={{ background: "var(--color-surface)" }}>
        {[
          { id: "uebersicht", label: "Übersicht" },
          { id: "trainer", label: "Trainer" },
          { id: "gespeichert", label: "Gespeichert" },
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

      {tab === "uebersicht" && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <StatTile label="Gesamt" value="847" sub="Wörter im Wortschatz" color="var(--color-gold)" />
            <StatTile label="Gelernt" value="612" sub="Gut beherrscht" color="var(--color-success)" />
            <StatTile label="In Übung" value="180" sub="Werden wiederholt" color="var(--color-info)" />
            <StatTile label="Schwierig" value="55" sub="Brauchen mehr Übung" color="var(--color-error)" />
          </div>
          <div className="space-y-2 mb-20 md:mb-0">
            {words.map((word, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 rounded-xl transition-colors hover:bg-white/3" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[15px]" style={{ color: "var(--color-text)" }}>{word.de}</span>
                    <span className="text-[11px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-subtle)" }}>{word.type}</span>
                  </div>
                  <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{word.en}</div>
                </div>
                <div className="hidden md:block w-24">
                  <div className="text-[11px] mb-1 text-right" style={{ color: "var(--color-text-subtle)" }}>{word.mastery}%</div>
                  <ProgressBar value={word.mastery} />
                </div>
                <Badge level={word.level.toLowerCase()}>{word.level}</Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "trainer" && (
        <div className="max-w-md mx-auto">
          <div className="text-[13px] mb-4 text-center" style={{ color: "var(--color-text-muted)" }}>
            {trainerIndex + 1} / {words.length} · Spaced Repetition
          </div>
          <div
            className="rounded-2xl p-8 mb-4 text-center cursor-pointer transition-all"
            style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", minHeight: 220 }}
            onClick={() => setRevealed(!revealed)}
          >
            <div className="text-[11px] uppercase tracking-widest mb-6" style={{ color: "var(--color-text-subtle)" }}>{current.type} · {current.level}</div>
            <div className="text-[36px] font-bold mb-4" style={{ color: "var(--color-text)" }}>{current.de}</div>
            <div className="text-[14px] italic mb-6" style={{ color: "var(--color-text-muted)" }}>„{current.example}"</div>
            {revealed ? (
              <div>
                <div className="text-[20px] font-semibold" style={{ color: "var(--color-gold)" }}>{current.en}</div>
                <div className="text-[12px] mt-2" style={{ color: "var(--color-text-subtle)" }}>Mastery: {current.mastery}%</div>
              </div>
            ) : (
              <div className="text-[13px] px-4 py-2 rounded-full inline-block" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                Tippen um zu enthüllen
              </div>
            )}
          </div>
          {revealed && (
            <div className="grid grid-cols-4 gap-2 animate-fade-in">
              {[
                { label: "Sehr leicht", color: "#4ECBA4" },
                { label: "Leicht", color: "#5E96E6" },
                { label: "Mittel", color: "#E8B84B" },
                { label: "Schwer", color: "#E84B4B" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => { setTrainerIndex(trainerIndex + 1); setRevealed(false); }}
                  className="py-2.5 rounded-xl text-[12px] font-medium transition-all hover:brightness-110"
                  style={{ background: `${btn.color}15`, color: btn.color, border: `1px solid ${btn.color}30` }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
          {!revealed && (
            <Button variant="primary" className="w-full justify-center" onClick={() => setRevealed(true)}>
              Bedeutung anzeigen
            </Button>
          )}
        </div>
      )}

      {tab === "gespeichert" && (
        <div className="space-y-3 mb-20 md:mb-0">
          {words.slice(0, 4).map((word, i) => (
            <WordCard key={i} word={word} />
          ))}
        </div>
      )}
    </div>
  );
}

function WordCard({ word }: { word: any }) {
  const [saved, setSaved] = useState(true);
  return (
    <div className="rounded-xl p-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="text-[20px] font-bold" style={{ color: "var(--color-text)" }}>{word.de}</span>
          <span className="ml-2 text-[11px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-subtle)" }}>{word.type}</span>
        </div>
        <button onClick={() => setSaved(!saved)} style={{ color: saved ? "var(--color-gold)" : "var(--color-text-muted)" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            <path d="M5 3h8a1 1 0 011 1v11l-5-3-5 3V4a1 1 0 011-1z" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="text-[14px] mb-2" style={{ color: "var(--color-gold)" }}>{word.en}</div>
      <div className="text-[13px] italic mb-3" style={{ color: "var(--color-text-muted)" }}>„{word.example}"</div>
      <div className="flex items-center gap-3">
        <Badge level={word.level.toLowerCase()}>{word.level}</Badge>
        <ProgressBar value={word.mastery} className="flex-1" />
      </div>
    </div>
  );
}
