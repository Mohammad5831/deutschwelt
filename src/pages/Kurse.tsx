import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, ProgressBar, SectionHeader, Tabs } from "../components/ui";

const courses = [
  {
    id: "a1",
    level: "A1",
    title: "Deutsch A1 — Erste Schritte",
    desc: "Grundlagen der deutschen Sprache für absolute Anfänger.",
    lessons: 18,
    duration: "9 Std.",
    progress: 100,
    modules: 3,
    icon: "🌱",
  },
  {
    id: "a2",
    level: "A2",
    title: "Deutsch A2 — Alltag & Kommunikation",
    desc: "Alltägliche Situationen meistern und kommunikativ werden.",
    lessons: 24,
    duration: "12 Std.",
    progress: 50,
    modules: 4,
    icon: "🗣️",
  },
  {
    id: "b1",
    level: "B1",
    title: "Deutsch B1 — Sicher sprechen",
    desc: "Klare Ausdrucksfähigkeit in Beruf und Alltag entwickeln.",
    lessons: 32,
    duration: "16 Std.",
    progress: 0,
    modules: 5,
    icon: "💼",
  },
  {
    id: "b2",
    level: "B2",
    title: "Deutsch B2 — Beruf & Studium",
    desc: "Komplexe Themen verstehen und differenziert ausdrücken.",
    lessons: 36,
    duration: "18 Std.",
    progress: 0,
    modules: 6,
    icon: "🎓",
  },
  {
    id: "c1",
    level: "C1",
    title: "Deutsch C1 — Fortgeschritten",
    desc: "Anspruchsvolle Texte und fachliche Kommunikation meistern.",
    lessons: 40,
    duration: "20 Std.",
    progress: 0,
    modules: 6,
    icon: "⚡",
  },
  {
    id: "c2",
    level: "C2",
    title: "Deutsch C2 — Perfektion",
    desc: "Nahezu muttersprachliches Niveau erreichen.",
    lessons: 44,
    duration: "22 Std.",
    progress: 0,
    modules: 7,
    icon: "🏆",
  },
];

export default function Kurse() {
  const [filter, setFilter] = useState("Alle");
  const levels = ["Alle", "A1", "A2", "B1", "B2", "C1", "C2"];
  const filtered = filter === "Alle" ? courses : courses.filter((c) => c.level === filter);

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Kurse" subtitle="Strukturiertes Lernen von A1 bis C2" />

      <div className="mb-6">
        <Tabs tabs={levels} active={filter} onChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20 md:mb-0">
        {filtered.map((course) => (
          <Link key={course.id} to={`/app/kurse/${course.id}`}>
            <div
              className="p-5 rounded-2xl h-full transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
              style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{course.icon}</span>
                <Badge level={course.level.toLowerCase()}>{course.level}</Badge>
              </div>
              <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--color-text)" }}>
                {course.title}
              </h3>
              <p className="text-[13px] mb-4" style={{ color: "var(--color-text-muted)" }}>{course.desc}</p>
              <div className="flex items-center gap-4 text-[12px] mb-4" style={{ color: "var(--color-text-subtle)" }}>
                <span>📚 {course.lessons} Lektionen</span>
                <span>⏱ {course.duration}</span>
                <span>📦 {course.modules} Module</span>
              </div>
              {course.progress > 0 && (
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span style={{ color: "var(--color-text-subtle)" }}>Fortschritt</span>
                    <span style={{ color: "var(--color-gold)" }}>{course.progress}%</span>
                  </div>
                  <ProgressBar value={course.progress} />
                </div>
              )}
              {course.progress === 0 && (
                <div className="flex items-center gap-2">
                  <div className="text-[12px] px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-muted)" }}>
                    Noch nicht gestartet
                  </div>
                </div>
              )}
              {course.progress === 100 && (
                <div className="flex items-center gap-2">
                  <div className="text-[12px] px-3 py-1 rounded-full" style={{ background: "rgba(78,203,164,0.1)", color: "var(--color-success)", border: "1px solid rgba(78,203,164,0.2)" }}>
                    ✓ Abgeschlossen
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function KursDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[1];

  const modules = [
    {
      id: 1,
      title: "Modul 1: Sich vorstellen",
      lessons: [
        { n: 1, title: "Hallo, ich bin...", dur: "8 Min.", done: true },
        { n: 2, title: "Woher kommst du?", dur: "10 Min.", done: true },
        { n: 3, title: "Familie & Freunde", dur: "12 Min.", done: true },
        { n: 4, title: "Berufe beschreiben", dur: "10 Min.", done: false },
      ],
    },
    {
      id: 2,
      title: "Modul 2: Im Alltag",
      lessons: [
        { n: 5, title: "Einkaufen gehen", dur: "10 Min.", done: false },
        { n: 6, title: "Im Restaurant bestellen", dur: "12 Min.", done: false },
        { n: 7, title: "Mit dem Bus fahren", dur: "8 Min.", done: false },
        { n: 8, title: "Beim Arzt", dur: "14 Min.", done: false },
      ],
    },
    {
      id: 3,
      title: "Modul 3: Kommunikation",
      lessons: [
        { n: 9, title: "Telefongespräche", dur: "12 Min.", done: false },
        { n: 10, title: "E-Mails schreiben", dur: "15 Min.", done: false },
        { n: 11, title: "Meinungen ausdrücken", dur: "10 Min.", done: false },
        { n: 12, title: "Diskutieren", dur: "18 Min.", done: false },
      ],
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 text-[13px]" style={{ color: "var(--color-text-muted)" }}>
        <Link to="/app/kurse" className="hover:underline">Kurse</Link>
        <span>/</span>
        <span style={{ color: "var(--color-text)" }}>{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4 mb-5">
            <div className="text-4xl">{course.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge level={course.level.toLowerCase()}>{course.level}</Badge>
              </div>
              <h1 className="text-[24px] font-bold" style={{ color: "var(--color-text)" }}>{course.title}</h1>
              <p className="text-[14px] mt-1" style={{ color: "var(--color-text-muted)" }}>{course.desc}</p>
            </div>
          </div>
          {course.progress > 0 && (
            <div className="mb-5">
              <div className="flex items-center justify-between text-[12px] mb-2">
                <span style={{ color: "var(--color-text-muted)" }}>Kursfortschritt</span>
                <span style={{ color: "var(--color-gold)" }}>{course.progress}%</span>
              </div>
              <ProgressBar value={course.progress} />
            </div>
          )}
        </div>
        <div className="rounded-2xl p-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div><div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Lektionen</div><div className="font-bold text-[18px]">{course.lessons}</div></div>
            <div><div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Dauer</div><div className="font-bold text-[18px]">{course.duration}</div></div>
            <div><div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Module</div><div className="font-bold text-[18px]">{course.modules}</div></div>
            <div><div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Niveau</div><div className="font-bold text-[18px]">{course.level}</div></div>
          </div>
          <Link to="/app/kurse/a2/lektion">
            <Button variant="primary" className="w-full justify-center">
              {course.progress > 0 ? "Weiterlernen →" : "Kurs starten →"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4 mb-20 md:mb-0">
        {modules.map((mod) => (
          <ModuleCard key={mod.id} mod={mod} />
        ))}
      </div>
    </div>
  );
}

function ModuleCard({ mod }: { mod: any }) {
  const [open, setOpen] = useState(mod.id === 2);
  const done = mod.lessons.filter((l: any) => l.done).length;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div>
          <div className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>{mod.title}</div>
          <div className="text-[12px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>{done} / {mod.lessons.length} Lektionen abgeschlossen</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "var(--color-text-muted)" }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{ borderTop: "1px solid var(--color-border)" }}>
          {mod.lessons.map((lesson: any) => (
            <Link key={lesson.n} to="/app/kurse/a2/lektion">
              <div
                className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-white/3"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                  style={{
                    background: lesson.done ? "rgba(78,203,164,0.15)" : "var(--color-surface-interactive)",
                    color: lesson.done ? "var(--color-success)" : "var(--color-text-muted)",
                    border: `1px solid ${lesson.done ? "rgba(78,203,164,0.25)" : "var(--color-border)"}`,
                  }}
                >
                  {lesson.done ? "✓" : lesson.n}
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-medium" style={{ color: lesson.done ? "var(--color-text-muted)" : "var(--color-text)" }}>{lesson.title}</div>
                </div>
                <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{lesson.dur}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Lektion() {
  const [step, setStep] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const vocab = [
    { de: "bestellen", en: "to order", example: "Ich möchte ein Wasser bestellen.", type: "Verb" },
    { de: "die Speisekarte", en: "the menu", example: "Kann ich bitte die Speisekarte haben?", type: "Nomen" },
    { de: "empfehlen", en: "to recommend", example: "Was können Sie empfehlen?", type: "Verb" },
  ];

  return (
    <div className="flex-1 overflow-y-auto animate-fade-in">
      {/* Header */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(8,8,11,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="flex items-center gap-3">
          <Link to="/app/kurse/a2" className="p-2 rounded-lg" style={{ color: "var(--color-text-muted)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <div>
            <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>A2 · Modul 2</div>
            <div className="text-[14px] font-semibold" style={{ color: "var(--color-text)" }}>Im Restaurant bestellen</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Schritt {step + 1} / 5</div>
          <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-interactive)" }}>
            <div className="h-full rounded-full" style={{ width: `${((step + 1) / 5) * 100}%`, background: "var(--color-gold)" }} />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Vocabulary section */}
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--color-text-subtle)" }}>Wortschatz</div>
          <div className="space-y-3">
            {vocab.map((w, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[18px] font-bold" style={{ color: "var(--color-text)" }}>{w.de}</span>
                    <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>{w.type}</span>
                  </div>
                  <button
                    onClick={() => setShowTranslation(!showTranslation)}
                    className="text-[12px] px-2 py-1 rounded-lg"
                    style={{ color: "var(--color-gold)", background: "var(--color-gold-dim)" }}
                  >
                    {showTranslation ? w.en : "Übersetzung"}
                  </button>
                </div>
                <p className="text-[13px] italic" style={{ color: "var(--color-text-muted)" }}>„{w.example}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grammar explanation */}
        <div className="mb-8 rounded-xl p-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>Grammatik</div>
          <h3 className="font-semibold text-[16px] mb-3" style={{ color: "var(--color-text)" }}>Höfliche Bitten mit „Könnten Sie..."</h3>
          <p className="text-[13px] mb-4" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            Im Restaurant benutzt man höfliche Formen mit „Könnten Sie" oder „Ich hätte gerne" um Wünsche auszudrücken.
          </p>
          <div className="rounded-lg p-4 font-mono text-[13px]" style={{ background: "var(--color-surface-interactive)" }}>
            <div className="mb-2">
              <span style={{ color: "var(--color-gold)" }}>Könnten Sie</span>
              <span style={{ color: "var(--color-text-muted)" }}> + Infinitiv</span>
            </div>
            <div style={{ color: "var(--color-text)" }}>„Könnten Sie mir bitte die Karte bringen?"</div>
            <div style={{ color: "var(--color-text)" }}>„Ich hätte gerne ein Schnitzel."</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
            ← Zurück
          </Button>
          <Button variant="primary" className="flex-1 justify-center" onClick={() => setStep(Math.min(4, step + 1))}>
            {step === 4 ? "Lektion abschließen ✓" : "Weiter →"}
          </Button>
        </div>
      </div>
    </div>
  );
}
