import { useState } from "react";
import { Badge, Button, SectionHeader, Tabs } from "../components/ui";

const topics = [
  { cat: "Artikel", items: ["Der bestimmte Artikel", "Der unbestimmte Artikel", "Artikel im Plural"] },
  { cat: "Nomen", items: ["Nomenformen", "Pluralbildung", "Komposita"] },
  { cat: "Pronomen", items: ["Personalpronomen", "Possessivpronomen", "Reflexivpronomen", "Relativpronomen"] },
  { cat: "Verben", items: ["Konjugation im Präsens", "Trennbare Verben", "Modalverben", "Hilfsverben"] },
  { cat: "Zeiten", items: ["Präsens", "Perfekt", "Präteritum", "Futur I", "Plusquamperfekt"] },
  { cat: "Satzbau", items: ["Wortstellung im Satz", "Fragewörter", "Verneinung", "Hauptsatz & Nebensatz"] },
  { cat: "Präpositionen", items: ["Wechselpräpositionen", "Akkusativpräpositionen", "Dativpräpositionen", "Genitivpräpositionen"] },
  { cat: "Adjektive", items: ["Adjektivendungen", "Steigerung", "Prädikatives Adjektiv"] },
  { cat: "Kasus", items: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"] },
];

const levelColors: Record<string, string> = {
  A1: "#5EB496", A2: "#5E96E6", B1: "#9664E6", B2: "#E6823C", C1: "#E8B84B", C2: "#E84B4B",
};

export default function Grammatik() {
  const [levelFilter, setLevelFilter] = useState("Alle");
  const [search, setSearch] = useState("");

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Grammatik" subtitle="Alle Regeln übersichtlich erklärt" />

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          placeholder="Grammatikthema suchen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-xl text-[13px] outline-none"
          style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
        />
        <Tabs tabs={["Alle", "A1", "A2", "B1", "B2", "C1"]} active={levelFilter} onChange={setLevelFilter} />
      </div>

      <div className="space-y-4 mb-20 mb:mb-8">
        {topics.map((topic) => (
          <div key={topic.cat} className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <div className="px-5 py-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <h3 className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>{topic.cat}</h3>
            </div>
            <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
              {topic.items
                .filter((item) => !search || item.toLowerCase().includes(search.toLowerCase()))
                .map((item) => {
                  const lvl = ["A1", "A2", "B1"][Math.floor(Math.random() * 3)];
                  return (
                    <GrammarRow key={item} title={item} level={lvl} />
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrammarRow({ title, level }: { title: string; level: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 hover:bg-white/3 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full" style={{ background: levelColors[level] || "var(--color-gold)" }} />
        <span className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <Badge level={level.toLowerCase()}>{level}</Badge>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--color-text-subtle)" }}>
          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function GrammatikDetail() {
  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6 text-[13px]" style={{ color: "var(--color-text-muted)" }}>
        <span className="hover:underline cursor-pointer">Grammatik</span>
        <span>/</span>
        <span style={{ color: "var(--color-text)" }}>Der Akkusativ</span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-[28px] font-bold" style={{ color: "var(--color-text)" }}>Der Akkusativ</h1>
        <Badge level="a2">A2</Badge>
      </div>

      {/* Explanation */}
      <div className="rounded-xl p-5 mb-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
        <h2 className="font-semibold text-[16px] mb-3" style={{ color: "var(--color-text)" }}>Was ist der Akkusativ?</h2>
        <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          Der Akkusativ ist der 4. Fall im Deutschen. Er bezeichnet das direkte Objekt im Satz — also die Person oder Sache, auf die sich die Handlung direkt bezieht.
        </p>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden mb-5" style={{ border: "1px solid var(--color-border)" }}>
        <div className="px-4 py-3 font-semibold text-[13px]" style={{ background: "var(--color-surface-elevated)", color: "var(--color-text)" }}>
          Artikel im Akkusativ
        </div>
        <table className="w-full text-[13px]" style={{ background: "var(--color-surface)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
              {["Genus", "Nominativ", "Akkusativ"].map((h) => (
                <th key={h} className="text-left px-4 py-2.5 font-medium" style={{ color: "var(--color-text-muted)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Maskulin", "der Mann", "den Mann"],
              ["Feminin", "die Frau", "die Frau"],
              ["Neutrum", "das Kind", "das Kind"],
              ["Plural", "die Leute", "die Leute"],
            ].map(([g, nom, akk], i) => (
              <tr key={g} style={{ borderBottom: i < 3 ? "1px solid var(--color-border)" : "none" }}>
                <td className="px-4 py-3" style={{ color: "var(--color-text-muted)" }}>{g}</td>
                <td className="px-4 py-3" style={{ color: "var(--color-text)" }}>{nom}</td>
                <td className="px-4 py-3 font-medium" style={{ color: "var(--color-gold)" }}>{akk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Examples */}
      <div className="rounded-xl p-5 mb-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
        <h2 className="font-semibold text-[15px] mb-4" style={{ color: "var(--color-text)" }}>Beispielsätze</h2>
        <div className="space-y-3">
          {[
            { de: "Ich kaufe einen Apfel.", note: "kauf-en → Akkusativ (einen)" },
            { de: "Sie sieht den Film.", note: "seh-en → Akkusativ (den)" },
            { de: "Er liest das Buch.", note: "les-en → Akkusativ (das)" },
          ].map((ex, i) => (
            <div key={i} className="rounded-lg p-3" style={{ background: "var(--color-surface-interactive)" }}>
              <div className="text-[14px] font-medium mb-1" style={{ color: "var(--color-text)" }}>{ex.de}</div>
              <div className="text-[12px]" style={{ color: "var(--color-text-subtle)" }}>{ex.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      <div className="rounded-xl p-5 mb-6" style={{ background: "rgba(232,86,75,0.05)", border: "1px solid rgba(232,86,75,0.15)" }}>
        <h2 className="font-semibold text-[15px] mb-3" style={{ color: "var(--color-error)" }}>⚠️ Häufige Fehler</h2>
        <div className="space-y-2 text-[13px]">
          <div className="line-through" style={{ color: "rgba(232,86,75,0.7)" }}>„Ich sehe der Mann." ✗</div>
          <div style={{ color: "var(--color-success)" }}>„Ich sehe den Mann." ✓</div>
        </div>
      </div>

      <Button variant="primary" size="lg">Übungen starten →</Button>
    </div>
  );
}
