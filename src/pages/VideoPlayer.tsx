import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "../components/ui";

const subtitles = [
  { time: 0, end: 5, text: "Willkommen in Berlin! Heute zeige ich euch meine Lieblingsplätze." },
  { time: 5, end: 11, text: "Wir beginnen am Brandenburger Tor. Hier treffen sich täglich Tausende von Touristen." },
  { time: 11, end: 18, text: "Von hier gehen wir zum Reichstag. Die Glaskuppel kann man kostenlos besichtigen." },
  { time: 18, end: 25, text: "Mein nächster Tipp: der Mauerweg. Ein lehrreicher Spaziergang durch die Geschichte Berlins." },
  { time: 25, end: 32, text: "Zu Mittag empfehle ich einen türkischen Dönerkebab. Berlin hat die beste türkische Küche außerhalb der Türkei!" },
  { time: 32, end: 40, text: "Am Nachmittag besuchen wir das Jüdische Museum. Es ist eines der bedeutendsten Museen in Deutschland." },
];

const related = [
  { title: "Deutsche Grammatik: Perfekt erklärt", level: "A2", dur: "12:50", thumb: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=160&h=90&fit=crop&auto=format" },
  { title: "Ein Tag in München", level: "B1", dur: "9:15", thumb: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=160&h=90&fit=crop&auto=format" },
  { title: "Berliner Dialekt verstehen", level: "B2", dur: "18:30", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&h=90&fit=crop&auto=format" },
];

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedWord, setClickedWord] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"transcript" | "vocab" | "notizen">("transcript");
  const duration = 40;

  const activeSubtitle = subtitles.find((s) => currentTime >= s.time && currentTime < s.end);
  const formatTime = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  const pct = (currentTime / duration) * 100;

  const highlightable = ["Berlin", "Brandenburger", "Reichstag", "Mauerweg", "Museum", "Dönerkebab", "Geschichte"];

  return (
    <div className="flex-1 overflow-y-auto animate-fade-in">
      {/* Back */}
      <div className="flex items-center gap-2 px-6 pt-5 pb-3 text-[13px]" style={{ color: "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)" }}>
        <Link to="/app/videos" className="hover:text-white transition-colors flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8 3L5 6.5l3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Videos
        </Link>
        <span>/</span>
        <span style={{ color: "var(--color-text)" }}>Berliner Alltag</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-0">
        {/* Left: video + controls */}
        <div className="xl:col-span-2">
          {/* Video area */}
          <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=900&h=506&fit=crop&auto=format"
              alt="Berlin Alltag Video"
              className="w-full h-full object-cover"
              style={{ opacity: 0.85 }}
            />
            {/* Overlay controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-105"
                style={{ background: "rgba(0,0,0,0.55)", border: "2px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}
              >
                {playing ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="5" height="16" rx="2" fill="white" /><rect x="11" y="2" width="5" height="16" rx="2" fill="white" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 3l13 7-13 7V3z" fill="white" /></svg>
                )}
              </button>
            </div>
            {/* Subtitle bar */}
            {activeSubtitle && (
              <div className="absolute bottom-12 left-0 right-0 flex justify-center px-6">
                <div
                  className="px-4 py-2 rounded-xl text-center text-[13px] font-medium leading-snug"
                  style={{ background: "rgba(0,0,0,0.8)", color: "white", backdropFilter: "blur(8px)", maxWidth: 500 }}
                >
                  {activeSubtitle.text.split(" ").map((word, i) => {
                    const clean = word.replace(/[.,!?]/g, "");
                    const isH = highlightable.includes(clean);
                    return (
                      <span
                        key={i}
                        onClick={() => isH && setClickedWord(clean)}
                        className={isH ? "cursor-pointer transition-colors" : ""}
                        style={isH ? { color: "var(--color-gold)", textDecoration: "underline" } : {}}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            {/* Badges */}
            <div className="absolute top-3 right-3 flex gap-2">
              <Badge level="a2">A2</Badge>
              <div className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ background: "rgba(0,0,0,0.6)", color: "white" }}>
                8:24
              </div>
            </div>
          </div>

          {/* Seekbar */}
          <div className="px-5 py-3" style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
            <div
              className="relative h-1.5 rounded-full cursor-pointer mb-2"
              style={{ background: "var(--color-surface-interactive)" }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCurrentTime(((e.clientX - rect.left) / rect.width) * duration);
              }}
            >
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--color-gold)" }} />
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ left: `calc(${pct}% - 6px)`, background: "var(--color-gold)", border: "2px solid var(--color-surface)" }} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setPlaying(!playing)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--color-gold)" }}>
                  {playing ? (
                    <svg width="10" height="10" fill="none"><rect x="1" y="0" width="3.5" height="10" rx="1" fill="#08080B" /><rect x="5.5" y="0" width="3.5" height="10" rx="1" fill="#08080B" /></svg>
                  ) : (
                    <svg width="10" height="10" fill="none"><path d="M2 1l7 4-7 4V1z" fill="#08080B" /></svg>
                  )}
                </button>
                <span className="text-[12px] font-mono" style={{ color: "var(--color-text-muted)" }}>{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>
              <div className="flex items-center gap-2">
                <select className="text-[11px] px-2 py-1 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>
                  <option>DE Untertitel</option>
                  <option>EN Übersetzung</option>
                  <option>Keine</option>
                </select>
                <button className="text-[11px] px-2 py-1 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                  ⛶ Vollbild
                </button>
              </div>
            </div>
          </div>

          {/* Video info */}
          <div className="px-6 py-5">
            <h1 className="text-[20px] font-bold mb-1" style={{ color: "var(--color-text)" }}>
              Berliner Alltag — Ein Tag in der Stadt
            </h1>
            <div className="flex items-center gap-3 text-[12px] mb-4" style={{ color: "var(--color-text-muted)" }}>
              <span>DeutschWelt</span>
              <span>·</span>
              <span>Alltag</span>
              <span>·</span>
              <span>1.240 Aufrufe</span>
              <span>·</span>
              <span>12. Sept. 2025</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl mb-5 w-fit" style={{ background: "var(--color-surface)" }}>
              {[
                { id: "transcript", label: "Transkript" },
                { id: "vocab", label: "Vokabeln" },
                { id: "notizen", label: "Notizen" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className="px-4 py-2 rounded-lg text-[12px] font-medium transition-all"
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
              <div className="space-y-2 mb-20 xl:mb-0">
                {subtitles.map((seg, i) => {
                  const isActive = activeSubtitle?.time === seg.time;
                  return (
                    <div
                      key={i}
                      onClick={() => setCurrentTime(seg.time)}
                      className="flex gap-3 p-3 rounded-xl cursor-pointer transition-all"
                      style={{
                        background: isActive ? "rgba(232,184,75,0.07)" : "transparent",
                        border: `1px solid ${isActive ? "rgba(232,184,75,0.2)" : "transparent"}`,
                      }}
                    >
                      <span className="text-[11px] font-mono shrink-0" style={{ color: isActive ? "var(--color-gold)" : "var(--color-text-subtle)" }}>
                        {formatTime(seg.time)}
                      </span>
                      <p className="text-[13px] leading-relaxed" style={{ color: isActive ? "var(--color-text)" : "var(--color-text-muted)" }}>
                        {seg.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "vocab" && (
              <div className="space-y-2">
                {["Brandenburger Tor", "der Reichstag", "der Mauerweg", "besichtigen", "bedeutend"].map((w, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                    <div>
                      <div className="font-medium text-[14px]" style={{ color: "var(--color-text)" }}>{w}</div>
                      <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{["Brandenburg Gate", "the Reichstag", "the Wall Trail", "to visit / tour", "significant"][i]}</div>
                    </div>
                    <Button variant="ghost" size="sm">+ Speichern</Button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "notizen" && (
              <textarea
                placeholder="Schreibe deine Notizen zum Video hier..."
                className="w-full p-4 rounded-xl text-[13px] outline-none resize-none"
                rows={6}
                style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
              />
            )}
          </div>
        </div>

        {/* Right: related videos */}
        <div className="xl:col-span-1 px-5 py-6" style={{ borderLeft: "1px solid var(--color-border)" }}>
          <h3 className="font-semibold text-[14px] mb-4" style={{ color: "var(--color-text)" }}>Ähnliche Videos</h3>
          <div className="space-y-3">
            {related.map((vid, i) => (
              <div key={i} className="flex gap-3 cursor-pointer group" onClick={() => setCurrentTime(0)}>
                <div className="w-28 h-16 rounded-lg overflow-hidden shrink-0" style={{ background: "var(--color-surface-interactive)" }}>
                  <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium leading-snug line-clamp-2 mb-1.5" style={{ color: "var(--color-text)" }}>{vid.title}</div>
                  <div className="flex items-center gap-1.5">
                    <Badge level={vid.level.toLowerCase()}>{vid.level}</Badge>
                    <span className="text-[10px]" style={{ color: "var(--color-text-subtle)" }}>{vid.dur}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Word popup */}
          {clickedWord && (
            <div className="mt-6 rounded-xl p-4 animate-fade-in" style={{ background: "var(--color-gold-dim)", border: "1px solid rgba(232,184,75,0.2)" }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[16px]" style={{ color: "var(--color-gold)" }}>{clickedWord}</span>
                <button onClick={() => setClickedWord(null)} style={{ color: "var(--color-text-subtle)" }}>✕</button>
              </div>
              <p className="text-[12px] mb-3" style={{ color: "var(--color-text-muted)" }}>
                {clickedWord === "Berlin" ? "Hauptstadt Deutschlands" :
                 clickedWord === "Brandenburger" ? "Brandenburger Tor — historisches Wahrzeichen Berlins" :
                 clickedWord === "Reichstag" ? "Deutsches Parlamentsgebäude in Berlin" :
                 clickedWord === "Museum" ? "das Museum — a museum, building with collections" : `${clickedWord} — ein wichtiges Wort aus diesem Video`}
              </p>
              <Button variant="primary" size="sm">Zum Wortschatz +</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
