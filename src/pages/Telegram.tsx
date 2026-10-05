import { useState } from "react";
import { Button } from "../components/ui";

const features = [
  { icon: "📚", title: "Tageslektion", desc: "Jeden Tag eine neue kurze Lektion direkt im Chat" },
  { icon: "🔤", title: "Wort des Tages", desc: "Lerne täglich ein neues deutsches Wort mit Beispiel" },
  { icon: "🧠", title: "Quiz", desc: "Täglich 5 kurze Quizfragen zum Festigen" },
  { icon: "🔄", title: "Wiederholung", desc: "Spaced-Repetition-Erinnerungen für gespeicherte Wörter" },
  { icon: "⏰", title: "Erinnerungen", desc: "Individuelle Lernzeiten, die du selbst festlegst" },
  { icon: "📊", title: "Fortschritt", desc: "Dein Lernfortschritt immer griffbereit" },
];

const chatPreview = [
  { from: "bot", text: "🌅 Guten Morgen, Mohammad!\n\n📚 Wort des Tages: entdecken\n(to discover)\n\n💬 Beispiel: Heute möchte ich etwas Neues entdecken.\n\n/quiz — Fange dein Quiz an\n/lektion — Heutige Lektion" },
  { from: "user", text: "/quiz" },
  { from: "bot", text: "🧠 Frage 1/5 — Grammatik A2\n\nWas ist die richtige Form?\nIch __ seit zwei ___ in Deutschland.\n\n🔘 A) bin · Jahre\n🔘 B) bin · Jahren\n🔘 C) war · Jahren\n🔘 D) bin · Jahr" },
  { from: "user", text: "B" },
  { from: "bot", text: "✅ Richtig! +10 XP\n\nSeit verlangt den Dativ → Jahren\n\nWeiter zu Frage 2? /weiter" },
];

export default function Telegram() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 text-4xl"
            style={{ background: "rgba(37, 211, 102, 0.1)", border: "1px solid rgba(37, 211, 102, 0.25)" }}
          >
            ✈️
          </div>
          <h1 className="text-[32px] font-bold mb-3" style={{ color: "var(--color-text)" }}>
            DeutschWelt auf Telegram
          </h1>
          <p className="text-[15px] max-w-md mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Lerne Deutsch direkt in deinem Messenger. Täglich, spielend, ohne die App öffnen zu müssen.
          </p>
        </div>

        {/* Features + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="font-semibold text-[16px] mb-4" style={{ color: "var(--color-text)" }}>Was kannst du mit dem Bot?</h2>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="font-medium text-[13px]" style={{ color: "var(--color-text)" }}>{f.title}</div>
                    <div className="text-[12px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat preview */}
          <div>
            <h2 className="font-semibold text-[16px] mb-4" style={{ color: "var(--color-text)" }}>So sieht es aus</h2>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#1c2735", border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Telegram header */}
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#17212B", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: "rgba(37,211,102,0.2)" }}>🤖</div>
                <div>
                  <div className="font-medium text-[13px] text-white">DeutschWelt Bot</div>
                  <div className="text-[11px] text-green-400">● online</div>
                </div>
              </div>
              {/* Messages */}
              <div className="p-3 space-y-2 max-h-80 overflow-y-auto scrollbar-hide">
                {chatPreview.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="px-3 py-2 rounded-2xl text-[12px] max-w-[85%] whitespace-pre-line leading-relaxed"
                      style={{
                        background: msg.from === "user" ? "#2B5278" : "#212D3B",
                        color: "rgba(255,255,255,0.9)",
                        borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "4px 16px 16px 16px",
                      }}
                    >
                      {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {!connected ? (
          <div className="text-center rounded-2xl p-8" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <h3 className="font-bold text-[18px] mb-2" style={{ color: "var(--color-text)" }}>Bereit zum Verbinden?</h3>
            <p className="text-[14px] mb-6" style={{ color: "var(--color-text-muted)" }}>
              Verbinde DeutschWelt mit deinem Telegram-Konto und lerne jeden Tag ein bisschen Deutsch.
            </p>
            <Button variant="primary" size="lg" onClick={() => setConnected(true)}>
              Telegram verbinden
            </Button>
          </div>
        ) : (
          <div className="text-center rounded-2xl p-8 animate-fade-in" style={{ background: "rgba(78,203,164,0.06)", border: "1px solid rgba(78,203,164,0.2)" }}>
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-[18px] mb-2" style={{ color: "var(--color-success)" }}>Verbunden!</h3>
            <p className="text-[14px] mb-4" style={{ color: "var(--color-text-muted)" }}>
              Dein Telegram-Bot ist aktiv. Du erhältst morgen früh deine erste Nachricht.
            </p>
            <Button variant="secondary" size="sm">Einstellungen anpassen</Button>
          </div>
        )}
      </div>
    </div>
  );
}
