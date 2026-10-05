import { useState, useRef, useEffect } from "react";
import { Button, Input, SectionHeader } from "../components/ui";

// ── Wörterbuch ────────────────────────────────────────────────────

export function Woerterbuch() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Wörterbuch" subtitle="Was möchtest du nachschlagen?" />

      <div className="max-w-xl">
        <div className="flex gap-2 mb-8">
          <Input
            placeholder="Deutsches Wort eingeben..."
            value={query}
            onChange={setQuery}
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
          <Button variant="primary" onClick={() => query && setSearched(true)}>Suchen</Button>
        </div>

        {searched && query && (
          <div className="animate-fade-in">
            <div className="rounded-2xl p-6 mb-4" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-[30px] font-bold mb-1" style={{ color: "var(--color-text)" }}>{query}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] px-2 py-0.5 rounded" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>Verb</span>
                    <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>entdeckte · entdeckt</span>
                    <button className="text-[13px] px-2 py-1 rounded-lg" style={{ background: "var(--color-gold-dim)", color: "var(--color-gold)" }}>A2</button>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--color-surface-interactive)", color: "var(--color-gold)" }}>
                  🔊
                </button>
              </div>

              <div className="mb-4 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
                <div className="text-[11px] uppercase tracking-widest mb-2" style={{ color: "var(--color-text-subtle)" }}>Bedeutung</div>
                <div className="text-[15px] font-medium" style={{ color: "var(--color-text)" }}>etwas Neues finden; eine Entdeckung machen</div>
              </div>

              <div className="mb-4 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
                <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>Beispielsätze</div>
                <div className="space-y-2">
                  {[
                    "Ich möchte die Stadt entdecken.",
                    "Er hat ein neues Restaurant entdeckt.",
                    "Kinder entdecken die Welt mit Neugier.",
                  ].map((ex, i) => (
                    <div key={i} className="text-[13px] px-3 py-2.5 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                      „{ex}"
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-subtle)" }}>Synonyme</div>
                <div className="flex flex-wrap gap-2">
                  {["finden", "aufspüren", "erschließen", "erleben"].map((s) => (
                    <button key={s} onClick={() => setQuery(s)} className="px-3 py-1.5 rounded-lg text-[13px] transition-colors hover:bg-white/10" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="sm">Zum Wortschatz hinzufügen ⭐</Button>
            </div>
          </div>
        )}

        {!searched && (
          <div className="space-y-2">
            <div className="text-[12px] mb-3" style={{ color: "var(--color-text-subtle)" }}>Häufige Suchanfragen</div>
            {["entdecken", "die Ausbildung", "zuverlässig", "beantragen", "die Möglichkeit"].map((w) => (
              <button key={w} onClick={() => { setQuery(w); setSearched(true); }} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-colors hover:bg-white/5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "var(--color-text-subtle)" }}><circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" /><path d="M8 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{w}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Übersetzer ────────────────────────────────────────────────────

export function Uebersetzer() {
  const [source, setSource] = useState("");
  const [translated] = useState("I am learning German for my apprenticeship. It is an exciting journey.");

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Übersetzer" subtitle="Deutsch mit Kontext verstehen" />

      <div className="max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "var(--color-surface-elevated)", borderBottom: "1px solid var(--color-border)" }}>
              <span className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>Deutsch</span>
              <button className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>🔊</button>
            </div>
            <textarea
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Deutschen Text eingeben..."
              className="w-full p-4 text-[14px] outline-none resize-none"
              rows={6}
              style={{ background: "var(--color-surface)", color: "var(--color-text)" }}
            />
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(232,184,75,0.2)" }}>
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "var(--color-gold-dim)", borderBottom: "1px solid rgba(232,184,75,0.15)" }}>
              <span className="text-[13px] font-medium" style={{ color: "var(--color-gold)" }}>Englisch</span>
              <button className="text-[12px]" style={{ color: "var(--color-gold)" }}>🔊</button>
            </div>
            <div className="p-4 text-[14px] min-h-[144px]" style={{ background: "var(--color-surface)", color: "var(--color-text-muted)" }}>
              {source ? translated : <span style={{ color: "var(--color-text-subtle)" }}>Übersetzung erscheint hier...</span>}
            </div>
          </div>
        </div>

        {source && (
          <div className="animate-fade-in">
            <div className="text-[12px] mb-3" style={{ color: "var(--color-text-subtle)" }}>Erkannte Schlüsselwörter</div>
            <div className="flex flex-wrap gap-2">
              {["Ausbildung", "lernen", "aufregend", "Reise"].map((w) => (
                <span key={w} className="px-3 py-1.5 rounded-full text-[12px]" style={{ background: "var(--color-surface-elevated)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── KI-Assistent ──────────────────────────────────────────────────

type Msg = { role: "user" | "ai"; text: string; correction?: { original: string; corrected: string; reason: string } };

export function KIAssistent() {
  const [mode, setMode] = useState<"chat" | "schreiben" | "rollenspiel">("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "Hallo Mohammad! Ich bin dein Deutsch-Assistent. Worüber möchtest du heute sprechen oder üben? Ich passe meine Sprache an dein A2-Niveau an. 😊",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", text: input };
    const aiReply: Msg = {
      role: "ai",
      text: "Das ist sehr interessant! Du machst große Fortschritte. Kannst du mir mehr darüber erzählen? Zum Beispiel: Was magst du an deiner Arbeit besonders gern?",
      correction:
        input.toLowerCase().includes("ich bin") && input.includes("jahre")
          ? {
              original: input,
              corrected: input.replace(/jahre\b/i, "Jahren"),
              reason: "\"Seit\" + Zeitangabe verlangt den Dativ. \"Jahr\" im Dativ Plural: \"Jahren\"",
            }
          : undefined,
    };
    setMessages((m) => [...m, userMsg, aiReply]);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 shrink-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-[18px] font-bold" style={{ color: "var(--color-text)" }}>Dein Deutsch-Assistent</h1>
            <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Niveau: A2 · Passt sich an dich an</p>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(232,184,75,0.25)" }}>
            <span className="text-lg">🤖</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          {(["chat", "schreiben", "rollenspiel"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-3 py-1.5 rounded-lg text-[12px] font-medium capitalize transition-all"
              style={{
                background: mode === m ? "var(--color-gold)" : "var(--color-surface-interactive)",
                color: mode === m ? "#08080B" : "var(--color-text-muted)",
              }}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
            <div className={`max-w-[75%] ${msg.role === "user" ? "" : ""}`}>
              {msg.role === "ai" && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm mb-1.5" style={{ background: "var(--color-gold-dim)" }}>
                  🤖
                </div>
              )}
              <div
                className="px-4 py-3 rounded-2xl text-[14px] leading-relaxed"
                style={{
                  background: msg.role === "user" ? "var(--color-gold)" : "var(--color-surface-elevated)",
                  color: msg.role === "user" ? "#08080B" : "var(--color-text)",
                  border: msg.role === "ai" ? "1px solid var(--color-border)" : "none",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                }}
              >
                {msg.text}
              </div>
              {msg.correction && (
                <div
                  className="mt-2 p-3 rounded-xl text-[13px] animate-fade-in"
                  style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)" }}
                >
                  <div className="font-medium mb-1" style={{ color: "var(--color-gold)" }}>✏️ Kleine Korrektur:</div>
                  <div className="line-through mb-0.5" style={{ color: "rgba(240,237,232,0.4)" }}>„{msg.correction.original}"</div>
                  <div className="mb-1.5" style={{ color: "var(--color-text)" }}>„{msg.correction.corrected}"</div>
                  <div style={{ color: "var(--color-text-muted)" }}>→ {msg.correction.reason}</div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 shrink-0" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Schreib auf Deutsch..."
            className="flex-1 px-4 py-3 rounded-xl text-[14px] outline-none transition-all"
            style={{
              background: "var(--color-surface-elevated)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(232,184,75,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
          <button
            onClick={send}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:brightness-110"
            style={{ background: "var(--color-gold)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 4l5 4-5 4" stroke="#08080B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="flex gap-2 mt-2 overflow-x-auto scrollbar-hide">
          {["Wie geht es dir?", "Ich habe eine Frage.", "Kannst du das erklären?", "Auf Deutsch bitte"].map((s) => (
            <button key={s} onClick={() => setInput(s)} className="px-3 py-1 rounded-full text-[11px] whitespace-nowrap shrink-0 transition-colors" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Notizen ────────────────────────────────────────────────────────

export function Notizen() {
  const [selected, setSelected] = useState(0);
  const notes = [
    { title: "Akkusativ Notizen", preview: "Der Akkusativ ist der 4. Fall...", tag: "Grammatik", date: "Heute", pinned: true },
    { title: "Neue Vokabeln – Woche 3", preview: "entdecken, verbessern, beantragen...", tag: "Wortschatz", date: "Gestern", pinned: true },
    { title: "Restaurant Dialog", preview: "Kellner: Was darf es sein? Ich: Ich hätte gerne...", tag: "Übung", date: "12. Sept.", pinned: false },
    { title: "Grammatik: Perfekt", preview: "Haben oder Sein? Bewegungsverben → sein...", tag: "Grammatik", date: "10. Sept.", pinned: false },
  ];

  return (
    <div className="flex-1 overflow-hidden flex">
      {/* Notes list */}
      <div className="w-64 shrink-0 overflow-y-auto" style={{ borderRight: "1px solid var(--color-border)" }}>
        <div className="p-4">
          <Button variant="primary" size="sm" className="w-full justify-center mb-4">+ Neue Notiz</Button>
          {notes.map((note, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="p-3 rounded-xl mb-2 cursor-pointer transition-colors"
              style={{
                background: selected === i ? "var(--color-surface-interactive)" : "transparent",
                border: `1px solid ${selected === i ? "var(--color-border-strong)" : "transparent"}`,
              }}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="font-medium text-[13px] truncate" style={{ color: "var(--color-text)" }}>{note.title}</div>
                {note.pinned && <span className="text-[10px] ml-1">📌</span>}
              </div>
              <div className="text-[11px] truncate mb-1.5" style={{ color: "var(--color-text-muted)" }}>{note.preview}</div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface-interactive)", color: "var(--color-gold)" }}>{note.tag}</span>
                <span className="text-[10px]" style={{ color: "var(--color-text-subtle)" }}>{note.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <input
            className="text-[20px] font-bold w-full outline-none bg-transparent"
            style={{ color: "var(--color-text)" }}
            defaultValue={notes[selected].title}
          />
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[11px] px-2 py-0.5 rounded" style={{ background: "var(--color-gold-dim)", color: "var(--color-gold)" }}>{notes[selected].tag}</span>
            <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{notes[selected].date}</span>
          </div>
        </div>
        <textarea
          className="flex-1 px-6 py-4 text-[14px] leading-relaxed outline-none resize-none bg-transparent"
          style={{ color: "var(--color-text-muted)" }}
          defaultValue={`${notes[selected].preview}\n\nBeispiele:\n• entdecken → to discover\n• verbessern → to improve\n• beantragen → to apply for\n\nVerknüpft mit: Lektion 12 · A2 Grammatik`}
        />
      </div>
    </div>
  );
}
