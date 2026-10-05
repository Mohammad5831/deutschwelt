import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
} from "recharts";
import { Badge, ProgressBar, ProgressRing, SectionHeader, StatTile } from "../components/ui";

const weekData = [
  { day: "Mo", minuten: 32, xp: 120 },
  { day: "Di", minuten: 28, xp: 95 },
  { day: "Mi", minuten: 35, xp: 140 },
  { day: "Do", minuten: 30, xp: 110 },
  { day: "Fr", minuten: 0, xp: 0 },
  { day: "Sa", minuten: 42, xp: 160 },
  { day: "So", minuten: 18, xp: 65 },
];

const monthData = [
  { week: "KW 33", minuten: 145 },
  { week: "KW 34", minuten: 178 },
  { week: "KW 35", minuten: 165 },
  { week: "KW 36", minuten: 185 },
];

const skillData = [
  { skill: "Hören", value: 72 },
  { skill: "Lesen", value: 65 },
  { skill: "Schreiben", value: 48 },
  { skill: "Sprechen", value: 40 },
  { skill: "Grammatik", value: 58 },
  { skill: "Wortschatz", value: 68 },
];

const achievements = [
  { icon: "🌱", title: "Erste Woche", desc: "7 Tage am Stück gelernt", earned: true, date: "1. Sept." },
  { icon: "📝", title: "100 Wörter", desc: "100 Vokabeln gelernt", earned: true, date: "5. Sept." },
  { icon: "🔥", title: "7 Tage Streak", desc: "7 Tage in Folge aktiv", earned: true, date: "8. Sept." },
  { icon: "💬", title: "Erstes Gespräch", desc: "Mit dem KI-Assistenten gesprochen", earned: true, date: "10. Sept." },
  { icon: "✅", title: "50 Übungen", desc: "50 Übungen abgeschlossen", earned: false, progress: 47, total: 50 },
  { icon: "🏆", title: "A2 Abschluss", desc: "Kurs A2 komplett abgeschlossen", earned: false, progress: 12, total: 24 },
  { icon: "🎧", title: "Podcast-Fan", desc: "10 Podcasts angehört", earned: false, progress: 4, total: 10 },
  { icon: "📰", title: "Leseratte", desc: "20 Artikel gelesen", earned: false, progress: 8, total: 20 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl px-3 py-2 text-[12px]" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
      <div className="font-medium mb-1" style={{ color: "var(--color-text)" }}>{label}</div>
      {payload.map((p: any) => (
        <div key={p.name} style={{ color: p.color }}>{p.name}: {p.value}</div>
      ))}
    </div>
  );
};

export default function Fortschritt() {
  return (
    <div className="flex-1 overflow-y-auto py-7 px-6 md:px-8 animate-fade-in">
      <SectionHeader title="Fortschritt" subtitle="Deine Lernreise im Überblick" />

      {/* Level + streak */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2 rounded-2xl p-6 flex items-center gap-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <ProgressRing value={68} size={96} stroke={7}>
            <div className="text-center">
              <div className="text-[20px] font-black" style={{ color: "var(--color-gold)" }}>A2</div>
            </div>
          </ProgressRing>
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-widest mb-1" style={{ color: "var(--color-text-subtle)" }}>Aktuelles Niveau</div>
            <div className="text-[22px] font-bold mb-2" style={{ color: "var(--color-text)" }}>A2 — Grundlegendes Niveau</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>1.240 / 1.800 XP bis B1</span>
            </div>
            <ProgressBar value={68} />
            <div className="mt-3 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Gesamt-XP", value: "1.240" },
                { label: "Lernzeit", value: "42 Std." },
                { label: "Lektionen", value: "12" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-bold text-[16px]" style={{ color: "var(--color-text)" }}>{s.value}</div>
                  <div className="text-[10px]" style={{ color: "var(--color-text-subtle)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-6 flex flex-col items-center justify-center gap-1" style={{ background: "rgba(232,86,75,0.05)", border: "1px solid rgba(232,86,75,0.15)" }}>
          <div className="text-5xl mb-2">🔥</div>
          <div className="text-[48px] font-black leading-none" style={{ color: "var(--color-error)" }}>6</div>
          <div className="text-[14px] font-medium" style={{ color: "var(--color-text)" }}>Tage Streak</div>
          <div className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>Persönlicher Rekord: 14 Tage</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatTile label="Wörter gelernt" value="847" sub="+24 diese Woche" color="var(--color-gold)" />
        <StatTile label="Übungen" value="234" sub="Abgeschlossen" />
        <StatTile label="Podcasts gehört" value="4" sub="Gesammt" color="var(--color-info)" />
        <StatTile label="Artikel gelesen" value="8" sub="Gesammt" color="var(--color-success)" />
      </div>

      {/* Weekly activity chart */}
      <div className="rounded-2xl p-6 mb-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-[15px]" style={{ color: "var(--color-text)" }}>Wöchentliche Aktivität</h3>
          <div className="flex gap-3 text-[11px]">
            <div className="flex items-center gap-1.5"><div className="w-3 h-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />Minuten</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-1.5 rounded-full" style={{ background: "var(--color-info)" }} />XP</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={weekData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8B84B" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#E8B84B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorXP" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5B9EE8" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#5B9EE8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fill: "rgba(240,237,232,0.35)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(240,237,232,0.25)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="minuten" name="Minuten" stroke="#E8B84B" strokeWidth={2} fill="url(#colorMin)" dot={{ fill: "#E8B84B", strokeWidth: 0, r: 3 }} />
            <Area type="monotone" dataKey="xp" name="XP" stroke="#5B9EE8" strokeWidth={2} fill="url(#colorXP)" dot={{ fill: "#5B9EE8", strokeWidth: 0, r: 3 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Skills radar + monthly */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Radar */}
        <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <h3 className="font-semibold text-[15px] mb-1" style={{ color: "var(--color-text)" }}>Fertigkeiten</h3>
          <p className="text-[12px] mb-4" style={{ color: "var(--color-text-muted)" }}>Stärken und Schwächen auf einen Blick</p>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={skillData}>
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: "rgba(240,237,232,0.4)", fontSize: 11 }} />
              <Radar name="Niveau" dataKey="value" stroke="#E8B84B" fill="#E8B84B" fillOpacity={0.12} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly */}
        <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <h3 className="font-semibold text-[15px] mb-1" style={{ color: "var(--color-text)" }}>Monatlicher Trend</h3>
          <p className="text-[12px] mb-4" style={{ color: "var(--color-text-muted)" }}>Gesamte Lernminuten pro Woche</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ECBA4" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#4ECBA4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fill: "rgba(240,237,232,0.35)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "rgba(240,237,232,0.25)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="minuten" name="Minuten" stroke="#4ECBA4" strokeWidth={2} fill="url(#colorMonth)" dot={{ fill: "#4ECBA4", strokeWidth: 0, r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-20 md:mb-0">
        <h3 className="font-semibold text-[15px] mb-4" style={{ color: "var(--color-text)" }}>Erfolge & Meilensteine</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="p-4 rounded-xl transition-all duration-200"
              style={{
                background: ach.earned ? "rgba(232,184,75,0.06)" : "var(--color-surface-elevated)",
                border: `1px solid ${ach.earned ? "rgba(232,184,75,0.18)" : "var(--color-border)"}`,
                opacity: ach.earned ? 1 : 0.65,
              }}
            >
              <div className="text-2xl mb-2">{ach.earned ? ach.icon : "🔒"}</div>
              <div className="font-semibold text-[13px] mb-0.5" style={{ color: ach.earned ? "var(--color-gold)" : "var(--color-text-muted)" }}>
                {ach.title}
              </div>
              <div className="text-[11px] mb-2" style={{ color: "var(--color-text-subtle)" }}>{ach.desc}</div>
              {ach.earned ? (
                <div className="text-[10px]" style={{ color: "var(--color-text-subtle)" }}>✓ Erreicht am {ach.date}</div>
              ) : (
                <div>
                  <ProgressBar value={(ach.progress! / ach.total!) * 100} className="mt-1" />
                  <div className="text-[10px] mt-1" style={{ color: "var(--color-text-subtle)" }}>{ach.progress} / {ach.total}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
