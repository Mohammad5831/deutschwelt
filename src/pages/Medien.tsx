import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, SectionHeader } from "../components/ui";

const articles = [
  {
    id: "1",
    title: "Künstliche Intelligenz verändert den deutschen Arbeitsmarkt",
    category: "Technologie",
    level: "A2",
    time: "4 Min.",
    words: 320,
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=320&fit=crop&auto=format",
    top: true,
  },
  {
    id: "2",
    title: "Berliner Start-ups ziehen internationale Talente an",
    category: "Wirtschaft",
    level: "B1",
    time: "6 Min.",
    words: 480,
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=320&fit=crop&auto=format",
    top: true,
  },
  {
    id: "3",
    title: "Deutsche Sprache: Neue Wörter für das digitale Zeitalter",
    category: "Kultur",
    level: "A2",
    time: "3 Min.",
    words: 260,
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=320&fit=crop&auto=format",
    top: false,
  },
  {
    id: "4",
    title: "Klimaschutz in Deutschland: Neue Gesetzgebung 2025",
    category: "Deutschland",
    level: "B2",
    time: "8 Min.",
    words: 640,
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=320&fit=crop&auto=format",
    top: false,
  },
];

const podcasts = [
  {
    id: "1",
    title: "Langsam gesprochene Nachrichten",
    host: "Deutsche Welle",
    level: "A2",
    duration: "12 Min.",
    ep: 142,
    cover: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=80&h=80&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "Coffee Break German",
    host: "Radio Lingua Network",
    level: "A1",
    duration: "28 Min.",
    ep: 67,
    cover: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=80&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "Deutsch Warum Nicht",
    host: "DW Radio",
    level: "A2",
    duration: "18 Min.",
    ep: 93,
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=80&h=80&fit=crop&auto=format",
  },
];

const videos = [
  {
    id: "1",
    title: "Berliner Alltag — Ein Tag in der Stadt",
    channel: "DeutschWelt",
    level: "A2",
    duration: "8:24",
    category: "Alltag",
    thumb: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=320&h=180&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "Deutsche Grammatik: Perfekt erklärt",
    channel: "Deutsch lernen mit DW",
    level: "A2",
    duration: "12:50",
    category: "Bildung",
    thumb: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=320&h=180&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "Reise durch Bayern — Wörter und Landschaft",
    channel: "Deutsche Entdeckungen",
    level: "B1",
    duration: "15:30",
    category: "Reisen",
    thumb: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=320&h=180&fit=crop&auto=format",
  },
];

export default function Nachrichten() {
  const [category, setCategory] = useState("Alle");
  const cats = ["Alle", "Deutschland", "Welt", "Wirtschaft", "Technologie", "Kultur", "Wissenschaft", "Sport"];

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Nachrichten" subtitle="Deutsch außerhalb des Klassenzimmers" />

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className="px-4 py-2 rounded-xl text-[13px] font-medium whitespace-nowrap transition-all shrink-0"
            style={{
              background: category === c ? "var(--color-gold)" : "var(--color-surface-elevated)",
              color: category === c ? "#08080B" : "var(--color-text-muted)",
              border: `1px solid ${category === c ? "transparent" : "var(--color-border)"}`,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Top articles */}
      <div className="mb-8">
        <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--color-text-subtle)" }}>Top Nachrichten</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.filter((a) => a.top).map((article) => (
            <Link key={article.id} to={`/app/nachrichten/${article.id}`}>
              <div
                className="rounded-xl overflow-hidden transition-all hover:translate-y-[-2px] cursor-pointer"
                style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}
              >
                <div className="h-40 overflow-hidden" style={{ background: "var(--color-surface-interactive)" }}>
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium" style={{ color: "var(--color-gold)" }}>{article.category}</span>
                    <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>·</span>
                    <Badge level={article.level.toLowerCase()}>{article.level}</Badge>
                  </div>
                  <h3 className="font-semibold text-[14px] leading-snug mb-2" style={{ color: "var(--color-text)" }}>{article.title}</h3>
                  <div className="flex items-center gap-3 text-[11px]" style={{ color: "var(--color-text-subtle)" }}>
                    <span>⏱ {article.time}</span>
                    <span>📝 {article.words} Wörter</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* More articles */}
      <div className="space-y-2 mb-20 md:mb-0">
        {articles.filter((a) => !a.top).map((article) => (
          <Link key={article.id} to={`/app/nachrichten/${article.id}`}>
            <div className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/3 cursor-pointer" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
              <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0" style={{ background: "var(--color-surface-interactive)" }}>
                <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px]" style={{ color: "var(--color-gold)" }}>{article.category}</span>
                  <Badge level={article.level.toLowerCase()}>{article.level}</Badge>
                </div>
                <div className="text-[13px] font-medium truncate" style={{ color: "var(--color-text)" }}>{article.title}</div>
              </div>
              <div className="text-[11px] shrink-0" style={{ color: "var(--color-text-subtle)" }}>{article.time}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ArticleDetail() {
  const [wordInfo, setWordInfo] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const highlightedWords: Record<string, string> = {
    "Künstliche Intelligenz": "Artificial intelligence — computer systems that simulate human intelligence",
    "Arbeitsmarkt": "The job market — the labor market in a country or region",
    "Automatisierung": "Automation — the use of machines to perform tasks automatically",
  };

  return (
    <div className="flex-1 overflow-y-auto animate-fade-in">
      {/* Article header */}
      <div className="h-64 relative" style={{ background: "var(--color-surface-interactive)" }}>
        <img
          src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=400&fit=crop&auto=format"
          alt="KI Artikel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,11,0.95) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px]" style={{ color: "var(--color-gold)" }}>Technologie</span>
            <Badge level="a2">A2</Badge>
          </div>
          <h1 className="text-[22px] font-bold leading-snug" style={{ color: "var(--color-text)" }}>
            Künstliche Intelligenz verändert den deutschen Arbeitsmarkt
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 text-[12px]" style={{ color: "var(--color-text-subtle)" }}>
            <span>⏱ 4 Min. Lesezeit</span>
            <span>📝 320 Wörter</span>
            <span>📅 15. Sept. 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setSaved(!saved)}>
              {saved ? "✓ Gespeichert" : "Speichern"}
            </Button>
          </div>
        </div>

        <div className="text-[15px] leading-relaxed space-y-4 mb-8" style={{ color: "var(--color-text-muted)" }}>
          <p>
            Die{" "}
            <button
              onClick={() => setWordInfo("Künstliche Intelligenz")}
              className="font-medium transition-colors"
              style={{ color: "var(--color-gold)", textDecoration: "underline dotted" }}
            >
              Künstliche Intelligenz
            </button>{" "}
            verändert grundlegend, wie Menschen in Deutschland arbeiten. Laut einer neuen Studie werden bis 2030 bis zu 20% aller Arbeitsplätze durch{" "}
            <button
              onClick={() => setWordInfo("Automatisierung")}
              className="font-medium transition-colors"
              style={{ color: "var(--color-gold)", textDecoration: "underline dotted" }}
            >
              Automatisierung
            </button>{" "}
            beeinflusst.
          </p>
          <p>
            Besonders der{" "}
            <button
              onClick={() => setWordInfo("Arbeitsmarkt")}
              className="font-medium"
              style={{ color: "var(--color-gold)", textDecoration: "underline dotted" }}
            >
              Arbeitsmarkt
            </button>{" "}
            im Bereich der Logistik und Verwaltung steht vor großen Veränderungen. Gleichzeitig entstehen neue Berufsfelder in der Technologie und im Bereich der KI-Entwicklung.
          </p>
          <p>
            Experten empfehlen, sich frühzeitig mit digitalen Kompetenzen auseinanderzusetzen. Die Bundesregierung plant daher Investitionen in die digitale Bildung und Weiterbildung von Arbeitnehmern.
          </p>
        </div>

        {wordInfo && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full px-4 animate-fade-in">
            <div
              className="rounded-2xl p-4"
              style={{
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border-strong)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-bold text-[16px]" style={{ color: "var(--color-gold)" }}>{wordInfo}</span>
                <button onClick={() => setWordInfo(null)} style={{ color: "var(--color-text-muted)" }}>✕</button>
              </div>
              <p className="text-[13px] mb-3" style={{ color: "var(--color-text-muted)" }}>{highlightedWords[wordInfo]}</p>
              <div className="flex gap-2">
                <Button variant="primary" size="sm">Zum Wortschatz hinzufügen</Button>
                <Button variant="ghost" size="sm">Anhören 🔊</Button>
              </div>
            </div>
          </div>
        )}

        {/* Comprehension questions */}
        <div className="rounded-xl p-5" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <h3 className="font-semibold text-[15px] mb-4" style={{ color: "var(--color-text)" }}>Verständnisfragen</h3>
          <div className="space-y-3">
            {["Wie viele Arbeitsplätze werden bis 2030 beeinflusst?", "Welche Bereiche sind besonders betroffen?"].map((q, i) => (
              <div key={i} className="text-[13px] px-4 py-3 rounded-lg" style={{ background: "var(--color-surface-interactive)", color: "var(--color-text-muted)" }}>
                {i + 1}. {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Podcasts() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Podcasts" subtitle="Echtes Deutsch in deinem Tempo" />
      <div className="space-y-3 mb-20 md:mb-0">
        {podcasts.map((pod) => (
          <div key={pod.id} className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-4 p-4">
              <Link to={`/app/podcasts/${pod.id}`} className="w-14 h-14 rounded-xl overflow-hidden shrink-0" style={{ background: "var(--color-surface-interactive)" }}>
                <img src={pod.cover} alt={pod.title} className="w-full h-full object-cover" />
              </Link>
              <Link to={`/app/podcasts/${pod.id}`} className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge level={pod.level.toLowerCase()}>{pod.level}</Badge>
                  <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Episode {pod.ep}</span>
                </div>
                <div className="font-semibold text-[14px] truncate" style={{ color: "var(--color-text)" }}>{pod.title}</div>
                <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{pod.host} · {pod.duration}</div>
              </Link>
              <button
                onClick={() => setPlaying(playing === pod.id ? null : pod.id)}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all"
                style={{ background: playing === pod.id ? "var(--color-gold)" : "var(--color-surface-interactive)" }}
              >
                {playing === pod.id ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="3" y="2" width="3" height="10" rx="1" fill={playing === pod.id ? "#08080B" : "currentColor"} /><rect x="8" y="2" width="3" height="10" rx="1" fill={playing === pod.id ? "#08080B" : "currentColor"} /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2l9 5-9 5V2z" fill="var(--color-gold)" /></svg>
                )}
              </button>
            </div>
            {playing === pod.id && (
              <div className="px-4 pb-4 animate-fade-in">
                <div className="h-1.5 rounded-full mb-2 cursor-pointer" style={{ background: "var(--color-surface-interactive)" }}>
                  <div className="h-full rounded-full" style={{ width: "35%", background: "var(--color-gold)" }} />
                </div>
                <div className="flex justify-between text-[11px]" style={{ color: "var(--color-text-subtle)" }}>
                  <span>4:12</span>
                  <span>{pod.duration}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Videos() {
  return (
    <div className="flex-1 overflow-y-auto py-8 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Videos" subtitle="Lerne mit echten deutschen Videos" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20 md:mb-0">
        {videos.map((vid) => (
          <Link key={vid.id} to={`/app/videos/${vid.id}`}><div className="rounded-xl overflow-hidden cursor-pointer transition-all hover:translate-y-[-2px]" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            <div className="relative h-44" style={{ background: "var(--color-surface-interactive)" }}>
              <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(232,184,75,0.9)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 3l11 6-11 6V3z" fill="#08080B" /></svg>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[11px] font-medium" style={{ background: "rgba(8,8,11,0.85)", color: "var(--color-text)" }}>
                {vid.duration}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Badge level={vid.level.toLowerCase()}>{vid.level}</Badge>
                <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>{vid.category}</span>
              </div>
              <div className="font-medium text-[14px] leading-snug" style={{ color: "var(--color-text)" }}>{vid.title}</div>
              <div className="text-[12px] mt-1" style={{ color: "var(--color-text-muted)" }}>{vid.channel}</div>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}
