import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoFull } from "../components/Logo";
import { Button } from "../components/ui";

const features = [
  { icon: "📚", title: "Strukturierte Kurse", desc: "Von A1 bis C2 – klar und präzise aufgebaut" },
  { icon: "🎙️", title: "Echte Medien", desc: "Nachrichten, Podcasts und Videos auf deinem Niveau" },
  { icon: "🤖", title: "KI-Assistent", desc: "Dein persönlicher Deutsch-Coach. Immer verfügbar." },
  { icon: "👥", title: "Community", desc: "Sprachpartner aus aller Welt" },
  { icon: "✈️", title: "Telegram Bot", desc: "Tägliche Übungen direkt in deinem Messenger" },
  { icon: "📊", title: "Intelligenter Fortschritt", desc: "Spaced Repetition und adaptives Lernen" },
];

const stats = [
  { value: "42.000+", label: "Lernende weltweit" },
  { value: "A1–C2", label: "Alle CEFR-Niveaus" },
  { value: "6 Sprachen", label: "Benutzeroberfläche" },
  { value: "98%", label: "Weiterempfehlungsrate" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    country: "🇮🇳 Indien",
    level: "B2",
    text: "Ich habe in 8 Monaten von A2 auf B2 gebracht. Die KI-Korrekturen sind unglaublich hilfreich.",
    avatar: "P",
  },
  {
    name: "Carlos Mendez",
    country: "🇲🇽 Mexiko",
    level: "B1",
    text: "Die Nachrichten-Funktion hat mein Hörverständnis revolutioniert. Endlich echtes Deutsch!",
    avatar: "C",
  },
  {
    name: "Yuki Tanaka",
    country: "🇯🇵 Japan",
    level: "C1",
    text: "DeutschWelt ist das einzige Tool, das sich wirklich wie eine echte Sprachumgebung anfühlt.",
    avatar: "Y",
  },
];

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const step = Math.ceil(target / 60);
    let cur = 0;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(cur);
      if (cur >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count.toLocaleString("de")}{suffix}</>;
}

// App preview mockup
function AppPreview() {
  return (
    <div
      className="rounded-2xl overflow-hidden relative"
      style={{
        background: "var(--color-surface)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#E84B4B", opacity: 0.8 }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#E8B84B", opacity: 0.8 }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#4ECBA4", opacity: 0.8 }} />
        <div className="ml-4 h-5 rounded-full px-6 text-[10px] flex items-center" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-text-subtle)" }}>
          app.deutschwelt.de
        </div>
      </div>
      {/* App layout */}
      <div className="flex h-52">
        {/* Sidebar */}
        <div className="w-14 shrink-0 py-4 flex flex-col gap-3 items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.05)", background: "rgba(17,17,22,0.8)" }}>
          <div className="w-7 h-7 rounded-lg" style={{ background: "var(--color-gold)" }} />
          <div className="mt-2 flex flex-col gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-5 h-1 rounded-full" style={{ background: i === 1 ? "var(--color-gold)" : "rgba(255,255,255,0.1)" }} />
            ))}
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="h-3 w-44 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[68, 45, 82].map((pct, i) => (
              <div key={i} className="rounded-lg p-2" style={{ background: "rgba(24,24,31,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="h-1.5 w-full rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--color-gold)" }} />
                </div>
                <div className="h-2 w-3/4 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg p-2" style={{ background: "rgba(24,24,31,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="h-2 w-2/3 rounded-full mb-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                <div className="h-1.5 w-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
              </div>
            ))}
          </div>
        </div>
        {/* Right panel */}
        <div className="w-36 shrink-0 p-3 flex flex-col gap-2" style={{ borderLeft: "1px solid rgba(255,255,255,0.05)", background: "rgba(17,17,22,0.5)" }}>
          <div className="rounded-lg p-2" style={{ background: "rgba(232,184,75,0.08)", border: "1px solid rgba(232,184,75,0.15)" }}>
            <div className="h-2 w-3/4 rounded-full mb-1" style={{ background: "rgba(232,184,75,0.3)" }} />
            <div className="h-1.5 w-1/2 rounded-full" style={{ background: "rgba(232,184,75,0.15)" }} />
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: "rgba(24,24,31,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="h-2 w-full rounded-full mb-1" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-1.5 w-2/3 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-background)" }}>
      {/* Nav */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(8,8,11,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <LogoFull />
        <nav className="hidden md:flex items-center gap-6 text-[13px]" style={{ color: "var(--color-text-muted)" }}>
          <a href="#features" className="hover:text-white transition-colors">Funktionen</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="#telegram" className="hover:text-white transition-colors">Telegram</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/anmeldung">
            <Button variant="ghost" size="sm">Anmelden</Button>
          </Link>
          <Link to="/registrierung">
            <Button variant="primary" size="sm">Jetzt starten</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 md:px-12 pt-24 pb-20 md:pt-32 md:pb-28">
          {/* Background glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute"
              style={{
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "60%",
                background: "radial-gradient(ellipse, rgba(232,184,75,0.06) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute"
              style={{
                top: "30%",
                left: "-10%",
                width: "40%",
                height: "40%",
                background: "radial-gradient(ellipse, rgba(94,150,230,0.04) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute"
              style={{
                top: "20%",
                right: "-10%",
                width: "40%",
                height: "50%",
                background: "radial-gradient(ellipse, rgba(78,203,164,0.03) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-medium mb-8"
                style={{
                  background: "rgba(232,184,75,0.08)",
                  border: "1px solid rgba(232,184,75,0.2)",
                  color: "var(--color-gold)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-gold)", boxShadow: "0 0 6px var(--color-gold)" }}
                />
                KI-gestütztes Deutschlernen der nächsten Generation
              </div>

              <h1
                className="text-[46px] sm:text-[60px] md:text-[76px] font-bold leading-[0.95] tracking-[-0.03em] mb-8"
                style={{ color: "var(--color-text)" }}
              >
                Deutsch lernen.
                <br />
                <em className="gold-text font-serif not-italic">Deutsch erleben.</em>
              </h1>

              <p
                className="text-[18px] md:text-[20px] max-w-xl mx-auto leading-relaxed mb-10"
                style={{ color: "var(--color-text-muted)" }}
              >
                Eine digitale Welt für dein Deutsch – Lernen, Medien, Übungen, Community und KI an einem Ort.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
                <Link to="/registrierung">
                  <button
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:brightness-110 active:scale-98"
                    style={{ background: "var(--color-gold)", color: "#08080B", boxShadow: "0 0 32px rgba(232,184,75,0.2)" }}
                  >
                    Kostenlos starten
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </Link>
                <Link to="/anmeldung">
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-[15px] transition-colors hover:bg-white/8"
                    style={{ color: "var(--color-text-muted)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    Bereits Mitglied? Anmelden
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[22px] font-bold" style={{ color: "var(--color-text)" }}>{s.value}</div>
                    <div className="text-[12px]" style={{ color: "var(--color-text-subtle)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* App preview */}
            <div className="relative max-w-4xl mx-auto">
              <AppPreview />
              {/* Fade bottom */}
              <div
                className="absolute -bottom-1 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, var(--color-background))" }}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Funktionen</div>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
              Alles, was du brauchst
            </h2>
            <p className="text-[16px] mt-3 max-w-md mx-auto" style={{ color: "var(--color-text-muted)" }}>
              Kein Wechseln zwischen Apps. Kein Verlieren des Lernfortschritts. Eine Welt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-3px]"
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[16px] mb-2" style={{ color: "var(--color-text)" }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Levels showcase */}
        <section className="px-6 md:px-12 py-20" style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-sm">
                <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Alle Niveaus</div>
                <h2 className="text-[28px] font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  Von der ersten Phrase bis zur Perfektion
                </h2>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  DeutschWelt begleitet dich vom absoluten Anfänger bis zum nahezu muttersprachlichen Niveau. Adaptives Lernen passt sich deinem Tempo an.
                </p>
              </div>
              <div className="flex gap-3">
                {["A1", "A2", "B1", "B2", "C1", "C2"].map((l, i) => {
                  const clsMap: Record<string, string> = { A1: "level-a1", A2: "level-a2", B1: "level-b1", B2: "level-b2", C1: "level-c1", C2: "level-c2" };
                  return (
                    <div key={l} className={`flex flex-col items-center gap-2 px-3 py-4 rounded-xl ${clsMap[l]}`} style={{ minWidth: 56 }}>
                      <div className="font-bold text-[18px]">{l}</div>
                      <div className="w-1 rounded-full" style={{ height: `${20 + i * 12}px`, background: "currentColor", opacity: 0.4 }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="community" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Community</div>
            <h2 className="text-[32px] font-bold" style={{ color: "var(--color-text)" }}>Was Lernende sagen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px]" style={{ background: "var(--color-gold)", color: "#08080B" }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[14px]" style={{ color: "var(--color-text)" }}>{t.name}</div>
                    <div className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{t.country} · Niveau {t.level}</div>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="13" height="13" viewBox="0 0 13 13" fill="var(--color-gold)">
                      <path d="M6.5 1l1.2 3.2H11l-2.6 1.9 1 3.2L6.5 7.3 4.1 9.3l1-3.2L2.5 4.2H5.3L6.5 1z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Telegram CTA */}
        <section id="telegram" className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: "linear-gradient(135deg, rgba(24,24,31,0.98) 0%, rgba(22,20,12,0.98) 100%)",
              border: "1px solid rgba(232,184,75,0.15)",
              boxShadow: "inset 0 0 80px rgba(232,184,75,0.03)",
            }}
          >
            {/* Telegram chat preview */}
            <div className="rounded-2xl overflow-hidden w-64 shrink-0" style={{ background: "#1c2735", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "#17212B" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-base" style={{ background: "rgba(232,184,75,0.15)" }}>🤖</div>
                <div>
                  <div className="text-[11px] font-medium text-white">DeutschWelt Bot</div>
                  <div className="text-[9px] text-green-400">online</div>
                </div>
              </div>
              <div className="p-3 space-y-2">
                {[
                  { from: "bot", text: "🌅 Guten Morgen! Wort des Tages: entdecken" },
                  { from: "bot", text: "📚 Deine Lektion wartet: Perfekt mit sein" },
                  { from: "user", text: "/quiz" },
                  { from: "bot", text: "🧠 Frage 1/5: Der oder Die oder Das Tisch?" },
                ].map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : ""}`}>
                    <div
                      className="px-2.5 py-1.5 rounded-xl text-[11px]"
                      style={{
                        background: m.from === "user" ? "#2B5278" : "#212D3B",
                        color: "rgba(255,255,255,0.85)",
                        maxWidth: "85%",
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Telegram Bot</div>
              <h3 className="text-[28px] md:text-[34px] font-bold mb-3 leading-tight" style={{ color: "var(--color-text)" }}>
                DeutschWelt auch auf Telegram
              </h3>
              <p className="text-[15px] mb-6 max-w-md" style={{ color: "var(--color-text-muted)" }}>
                Tägliche Lektionen, Wort des Tages, Quiz und Wiederholungen – direkt in deinem Telegram. Kein App-Öffnen nötig.
              </p>
              <Link to="/registrierung">
                <Button variant="primary" size="lg">Bot aktivieren →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 py-24 text-center max-w-3xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-5" style={{ color: "var(--color-text)" }}>
            Bereit, Deutsch wirklich
            <br />
            <em className="gold-text font-serif not-italic">zu erleben?</em>
          </h2>
          <p className="text-[16px] mb-8" style={{ color: "var(--color-text-muted)" }}>
            Kostenlos starten. Kein Kreditkarte. Sofort lernen.
          </p>
          <Link to="/registrierung">
            <button
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[16px] transition-all hover:brightness-110"
              style={{ background: "var(--color-gold)", color: "#08080B", boxShadow: "0 0 40px rgba(232,184,75,0.25)" }}
            >
              Jetzt kostenlos starten
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </Link>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-8" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoFull />
          <div className="flex gap-6 text-[12px]" style={{ color: "var(--color-text-subtle)" }}>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Nutzungsbedingungen</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <div className="text-[12px]" style={{ color: "var(--color-text-subtle)" }}>
            © 2025 DeutschWelt · Lerne. Entdecke. Verbinde.
          </div>
        </div>
      </footer>
    </div>
  );
}
