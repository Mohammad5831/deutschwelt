import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "../components/ui";

const transcript = [
  { time: 0, end: 6, speaker: "Sprecher", text: "Willkommen bei den langsam gesprochenen Nachrichten. Heute, am fünfzehnten September zweitausendundfünfundzwanzig." },
  { time: 6, end: 14, speaker: "Sprecher", text: "Unsere erste Meldung: Die Bundesregierung hat heute neue Maßnahmen zur Förderung der Elektromobilität angekündigt." },
  { time: 14, end: 23, speaker: "Sprecher", text: "Finanzminister Lindner erklärte, dass ab dem nächsten Jahr zusätzliche Mittel für den Ausbau der Ladeinfrastruktur bereitgestellt werden." },
  { time: 23, end: 32, speaker: "Sprecher", text: "Die Opposition kritisierte den Plan als unzureichend. Sie fordert schnellere und umfangreichere Investitionen in den öffentlichen Nahverkehr." },
  { time: 32, end: 41, speaker: "Sprecher", text: "Unsere zweite Meldung: Der Deutsche Fußball-Bund gab bekannt, dass die Nationalmannschaft nächsten Monat gegen Spanien spielen wird." },
  { time: 41, end: 52, speaker: "Sprecher", text: "Das Spiel findet im Münchner Allianz-Arena statt. Bundestrainer Nagelsmann rechnet mit einem spannenden Duell zwischen den beiden europäischen Spitzenmannschaften." },
  { time: 52, end: 62, speaker: "Sprecher", text: "Und schließlich: Wissenschaftler der Universität Heidelberg haben eine neue Methode entwickelt, um Kunststoff effizienter zu recyceln." },
  { time: 62, end: 75, speaker: "Sprecher", text: "Das neue Verfahren könnte laut den Forschern den Energieverbrauch beim Recycling um bis zu vierzig Prozent senken. Das war unsere heutige Sendung. Auf Wiederhören!" },
];

const vocabulary = [
  { word: "die Elektromobilität", meaning: "electric mobility", level: "B2" },
  { word: "die Ladeinfrastruktur", meaning: "charging infrastructure", level: "C1" },
  { word: "bereitstellen", meaning: "to provide / make available", level: "B1" },
  { word: "unzureichend", meaning: "insufficient, inadequate", level: "B2" },
  { word: "der Nahverkehr", meaning: "local public transport", level: "B1" },
  { word: "das Duell", meaning: "the duel / clash", level: "B1" },
];

export default function PodcastPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"transcript" | "vocab">("transcript");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const duration = 75;

  // Simulate playback
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((t) => {
          if (t >= duration) { setPlaying(false); return duration; }
          return t + 0.25 * speed;
        });
      }, 250);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, speed]);

  const activeSegment = transcript.find((s) => currentTime >= s.time && currentTime < s.end);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = (currentTime / duration) * 100;

  return (
    <div className="flex-1 overflow-y-auto animate-fade-in">
      {/* Back nav */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <Link to="/app/podcasts" className="flex items-center gap-1.5 text-[13px] transition-colors hover:text-white" style={{ color: "var(--color-text-muted)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Podcasts
        </Link>
        <span style={{ color: "var(--color-border-strong)" }}>/</span>
        <span className="text-[13px]" style={{ color: "var(--color-text)" }}>Langsam gesprochene Nachrichten</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-8">
          <div
            className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center text-4xl"
            style={{ background: "linear-gradient(135deg, rgba(94,150,230,0.3) 0%, rgba(78,203,164,0.2) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            🎙️
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge level="a2">A2</Badge>
              <span className="text-[12px]" style={{ color: "var(--color-text-subtle)" }}>Deutsche Welle · Episode 142</span>
            </div>
            <h1 className="text-[22px] font-bold leading-snug mb-1" style={{ color: "var(--color-text)" }}>
              Langsam gesprochene Nachrichten
            </h1>
            <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
              15. September 2025 · 1 Min. 15 Sek.
            </p>
          </div>
          <button style={{ color: "var(--color-text-subtle)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 3h8a1 1 0 011 1v11l-5-3-5 3V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
          </button>
        </div>

        {/* Player */}
        <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          {/* Waveform visual */}
          <div className="flex items-center gap-px h-10 mb-5">
            {[...Array(80)].map((_, i) => {
              const h = 20 + Math.sin(i * 0.4) * 14 + Math.random() * 8;
              const filled = (i / 80) * 100 < pct;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-colors"
                  style={{
                    height: `${h}%`,
                    background: filled ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
                    opacity: filled ? 1 : 0.6,
                  }}
                />
              );
            })}
          </div>

          {/* Seekbar */}
          <div className="relative mb-2 cursor-pointer" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = (e.clientX - rect.left) / rect.width;
            setCurrentTime(ratio * duration);
          }}>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-interactive)" }}>
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--color-gold)" }} />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 shadow-sm"
              style={{ left: `calc(${pct}% - 7px)`, background: "var(--color-gold)", borderColor: "var(--color-surface-elevated)" }}
            />
          </div>
          <div className="flex justify-between text-[11px] mb-5" style={{ color: "var(--color-text-subtle)" }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[0.75, 1, 1.25, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all"
                  style={{
                    background: speed === s ? "var(--color-gold)" : "var(--color-surface-interactive)",
                    color: speed === s ? "#08080B" : "var(--color-text-muted)",
                  }}
                >
                  {s}×
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Rewind */}
              <button onClick={() => setCurrentTime((t) => Math.max(0, t - 10))} className="transition-opacity hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10a7 7 0 1 0 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 4v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><text x="7.5" y="14" fontSize="5" fill="currentColor" fontFamily="Inter" fontWeight="600">10</text></svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={() => setPlaying(!playing)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:brightness-110"
                style={{ background: "var(--color-gold)", boxShadow: "0 0 20px rgba(232,184,75,0.3)" }}
              >
                {playing ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="4" height="12" rx="1.5" fill="#08080B" /><rect x="9" y="2" width="4" height="12" rx="1.5" fill="#08080B" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2.5l10 5.5-10 5.5V2.5z" fill="#08080B" /></svg>
                )}
              </button>

              {/* Forward */}
              <button onClick={() => setCurrentTime((t) => Math.min(duration, t + 10))} className="transition-opacity hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 10a7 7 0 1 1-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M17 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><text x="7.5" y="14" fontSize="5" fill="currentColor" fontFamily="Inter" fontWeight="600">10</text></svg>
              </button>
            </div>

            <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5h4l4-3v12l-4-3H2V5z" stroke="currentColor" strokeWidth="1.3" /><path d="M12 5.5c1.5 1 1.5 4 0 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
              <input type="range" min="0" max="100" defaultValue="80" className="w-16 h-1 accent-gold" style={{ accentColor: "var(--color-gold)" }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl mb-5 w-fit" style={{ background: "var(--color-surface)" }}>
          {[
            { id: "transcript", label: "Transkript" },
            { id: "vocab", label: "Vokabeln" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
              style={{
                background: activeTab === t.id ? "var(--color-surface-elevated)" : "transparent",
                color: activeTab === t.id ? "var(--color-text)" : "var(--color-text-muted)",
                border: activeTab === t.id ? "1px solid var(--color-border)" : "1px solid transparent",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "transcript" && (
          <div className="space-y-3">
            {transcript.map((seg, i) => {
              const isActive = activeSegment?.time === seg.time;
              return (
                <div
                  key={i}
                  onClick={() => setCurrentTime(seg.time)}
                  className="flex gap-4 p-4 rounded-xl cursor-pointer transition-all"
                  style={{
                    background: isActive ? "rgba(232,184,75,0.07)" : "var(--color-surface-elevated)",
                    border: `1px solid ${isActive ? "rgba(232,184,75,0.25)" : "var(--color-border)"}`,
                  }}
                >
                  <span
                    className="text-[11px] font-mono shrink-0 mt-0.5"
                    style={{ color: isActive ? "var(--color-gold)" : "var(--color-text-subtle)" }}
                  >
                    {formatTime(seg.time)}
                  </span>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: isActive ? "var(--color-text)" : "var(--color-text-muted)" }}
                  >
                    {seg.text.split(" ").map((word, wi) => {
                      const clean = word.replace(/[.,!?]/g, "");
                      const isVocab = vocabulary.some((v) => v.word.toLowerCase().includes(clean.toLowerCase()) && clean.length > 5);
                      return (
                        <span
                          key={wi}
                          onClick={(e) => { e.stopPropagation(); if (isVocab) setActiveWord(clean); }}
                          className={isVocab ? "cursor-pointer transition-colors" : ""}
                          style={isVocab ? { color: "var(--color-gold)", textDecoration: "underline dotted" } : {}}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "vocab" && (
          <div className="space-y-3">
            {vocabulary.map((v, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[15px]" style={{ color: "var(--color-text)" }}>{v.word}</span>
                    <Badge level={v.level.toLowerCase()}>{v.level}</Badge>
                  </div>
                  <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{v.meaning}</div>
                </div>
                <button
                  onClick={() => setSavedWords((s) => s.includes(v.word) ? s.filter((w) => w !== v.word) : [...s, v.word])}
                  className="text-[11px] px-3 py-1.5 rounded-lg transition-all"
                  style={{
                    background: savedWords.includes(v.word) ? "rgba(78,203,164,0.1)" : "var(--color-surface-interactive)",
                    color: savedWords.includes(v.word) ? "var(--color-success)" : "var(--color-text-muted)",
                    border: savedWords.includes(v.word) ? "1px solid rgba(78,203,164,0.25)" : "1px solid transparent",
                  }}
                >
                  {savedWords.includes(v.word) ? "✓ Gespeichert" : "+ Speichern"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Word tooltip */}
        {activeWord && (
          <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-xs w-full px-4 animate-fade-in"
          >
            <div
              className="rounded-2xl p-4"
              style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border-strong)", boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-[16px]" style={{ color: "var(--color-gold)" }}>{activeWord}</div>
                <button onClick={() => setActiveWord(null)} style={{ color: "var(--color-text-subtle)" }}>✕</button>
              </div>
              <p className="text-[12px] mb-3" style={{ color: "var(--color-text-muted)" }}>
                {vocabulary.find((v) => v.word.toLowerCase().includes(activeWord.toLowerCase()))?.meaning || "Keine Übersetzung verfügbar"}
              </p>
              <div className="flex gap-2">
                <Button variant="primary" size="sm">Zum Wortschatz +</Button>
                <Button variant="ghost" size="sm">🔊</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
