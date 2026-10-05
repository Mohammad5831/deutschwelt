import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "../components/ui";

const post = {
  author: "Yuki T.",
  avatar: "Y",
  time: "vor 2 Stunden",
  category: "Grammatik",
  level: "B2",
  title: "Wie benutzt man obwohl und obgleich richtig?",
  body: `Hallo zusammen!

Ich studiere seit einigen Monaten Deutsch auf B2-Niveau und habe eine Frage zu den konzessiven Konjunktionen.

Ich weiß, dass "obwohl" und "obgleich" beide "although / even though" bedeuten, aber ich bin mir nicht sicher, wann ich welches benutze. Gibt es einen Unterschied in der Formalität? Oder sind sie austauschbar?

Beispielsatz:
"Obwohl / Obgleich es stark regnete, gingen wir spazieren."

Beide klingen für mich richtig, aber ich möchte sichergehen. Danke im Voraus!`,
  likes: 34,
  bookmarks: 12,
};

const replies = [
  {
    author: "Thomas M.",
    avatar: "T",
    time: "vor 1 Stunde",
    native: true,
    text: "Sehr gute Frage! Beide Wörter sind im Wesentlichen austauschbar. Der einzige Unterschied ist, dass \"obgleich\" etwas formeller und literarischer klingt. Im alltäglichen Gespräch und in normaler Schriftsprache bevorzugen wir meistens \"obwohl\". \"Obgleich\" klingt etwas gehoben und wirst du eher in der Literatur oder sehr formellen Texten finden.",
    likes: 28,
    correct: true,
  },
  {
    author: "Priya S.",
    avatar: "P",
    time: "vor 45 Min.",
    native: false,
    text: "Ich hatte dieselbe Frage! Was ich gelernt habe: Es gibt auch noch \"obschon\" und \"wiewohl\", die ähnlich klingen. Diese sind aber noch formeller und werden kaum noch benutzt. Am besten lernst du erst \"obwohl\" gut und verwendest das immer im Alltag.",
    likes: 15,
    correct: false,
  },
  {
    author: "KI-Assistent",
    avatar: "🤖",
    time: "vor 30 Min.",
    native: false,
    ai: true,
    text: `Hier eine strukturierte Übersicht:

obwohl → neutral, allgemein, alltäglich ✓
obgleich → formell, literarisch, gehoben
obschon → sehr formal, selten (veraltet)
wiewohl → archaisch, dichterisch

Für B2 empfehle ich, beide zu kennen, aber im aktiven Gebrauch hauptsächlich "obwohl" zu verwenden. "Obgleich" ist passiv nützlich für das Leseverstehen.`,
    likes: 42,
    correct: false,
  },
];

export default function DiscussionDetail() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [localReplies, setLocalReplies] = useState(replies);

  const sendReply = () => {
    if (!replyText.trim()) return;
    setLocalReplies((r) => [
      ...r,
      {
        author: "Mohammad",
        avatar: "M",
        time: "gerade eben",
        native: false,
        ai: false,
        text: replyText,
        likes: 0,
        correct: false,
      },
    ]);
    setReplyText("");
  };

  return (
    <div className="flex-1 overflow-y-auto animate-fade-in">
      {/* Back nav */}
      <div className="flex items-center gap-2 px-6 pt-5 pb-4 text-[13px]" style={{ color: "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)" }}>
        <Link to="/app/community" className="hover:text-white transition-colors flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8 3L5 6.5l3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Community
        </Link>
        <span>/</span>
        <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Grammatik</span>
        <span>/</span>
        <span style={{ color: "var(--color-text)" }} className="truncate max-w-xs">Obwohl und Obgleich</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Original post */}
        <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] shrink-0" style={{ background: "rgba(150,100,230,0.2)", color: "#9664E6" }}>
              {post.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-[14px]" style={{ color: "var(--color-text)" }}>{post.author}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "rgba(150,100,230,0.1)", color: "#9664E6" }}>{post.category}</span>
                <Badge level={post.level.toLowerCase()}>{post.level}</Badge>
                <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{post.time}</span>
              </div>
            </div>
          </div>

          <h1 className="text-[20px] font-bold mb-4" style={{ color: "var(--color-text)" }}>{post.title}</h1>
          <div className="text-[14px] leading-[1.8] whitespace-pre-line mb-5" style={{ color: "var(--color-text-muted)" }}>
            {post.body}
          </div>

          <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-1.5 text-[12px] transition-colors"
              style={{ color: liked ? "var(--color-error)" : "var(--color-text-subtle)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.3">
                <path d="M7 12.5S1.5 9 1.5 5a3 3 0 015.5-1.6A3 3 0 0112.5 5C12.5 9 7 12.5 7 12.5z" />
              </svg>
              {liked ? post.likes + 1 : post.likes} Gefällt mir
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="flex items-center gap-1.5 text-[12px] transition-colors"
              style={{ color: bookmarked ? "var(--color-gold)" : "var(--color-text-subtle)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.3">
                <path d="M3 2h8a1 1 0 011 1v9.5l-5-3-5 3V3a1 1 0 011-1z" strokeLinejoin="round" />
              </svg>
              Lesezeichen
            </button>
            <button className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--color-text-subtle)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M2 2h10a1 1 0 011 1v7a1 1 0 01-1 1H8l-3 2v-2H2a1 1 0 01-1-1V3a1 1 0 011-1z" strokeLinejoin="round" />
              </svg>
              {localReplies.length} Antworten
            </button>
          </div>
        </div>

        {/* Replies */}
        <div className="space-y-4 mb-6">
          {localReplies.map((reply, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{
                background: reply.ai ? "rgba(232,184,75,0.04)" : reply.correct ? "rgba(78,203,164,0.04)" : "var(--color-surface-elevated)",
                border: `1px solid ${reply.ai ? "rgba(232,184,75,0.15)" : reply.correct ? "rgba(78,203,164,0.15)" : "var(--color-border)"}`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] shrink-0"
                  style={{
                    background: reply.ai ? "var(--color-gold-dim)" : reply.correct ? "rgba(78,203,164,0.15)" : "var(--color-surface-interactive)",
                    color: reply.ai ? "var(--color-gold)" : reply.correct ? "var(--color-success)" : "var(--color-text-muted)",
                  }}
                >
                  {reply.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-[13px]" style={{ color: "var(--color-text)" }}>{reply.author}</span>
                    {reply.native && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(78,203,164,0.1)", color: "var(--color-success)" }}>Muttersprachler</span>}
                    {reply.ai && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-gold-dim)", color: "var(--color-gold)" }}>KI-Assistent</span>}
                    {reply.correct && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(78,203,164,0.1)", color: "var(--color-success)" }}>✓ Beste Antwort</span>}
                    <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{reply.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] leading-[1.8] whitespace-pre-line mb-3" style={{ color: "var(--color-text-muted)" }}>
                {reply.text}
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-[11px]" style={{ color: "var(--color-text-subtle)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M6 10.5S1 7.5 1 4.5a2.5 2.5 0 014.5-1.5A2.5 2.5 0 0111 4.5C11 7.5 6 10.5 6 10.5z" />
                  </svg>
                  {reply.likes}
                </button>
                <button className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Antworten</button>
              </div>
            </div>
          ))}
        </div>

        {/* Reply editor */}
        <div className="rounded-2xl p-5 mb-20 md:mb-0" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px]" style={{ background: "var(--color-gold)", color: "#08080B" }}>
              M
            </div>
            <span className="text-[13px] font-medium" style={{ color: "var(--color-text)" }}>Deine Antwort</span>
          </div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Schreibe deine Antwort auf Deutsch..."
            className="w-full p-3 rounded-xl text-[13px] outline-none resize-none mb-3"
            rows={4}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(232,184,75,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="text-[11px] px-2.5 py-1.5 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                🤖 KI-Überprüfung
              </button>
              <button className="text-[11px] px-2.5 py-1.5 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                📎 Datei
              </button>
            </div>
            <Button variant="primary" size="sm" disabled={!replyText.trim()} onClick={sendReply}>
              Antwort senden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
