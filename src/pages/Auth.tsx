import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoFull } from "../components/Logo";
import { Button, Input } from "../components/ui";

function AuthLayout({ children, title, sub }: { children: React.ReactNode; title: string; sub: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{ background: "var(--color-background)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(232,184,75,0.05) 0%, transparent 70%)" }} />
      <div className="w-full max-w-sm animate-fade-in">
        <div className="flex justify-center mb-8">
          <Link to="/"><LogoFull /></Link>
        </div>
        <div className="rounded-2xl p-8" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
          <h1 className="text-[22px] font-bold mb-1" style={{ color: "var(--color-text)" }}>{title}</h1>
          <p className="text-[13px] mb-6" style={{ color: "var(--color-text-muted)" }}>{sub}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <AuthLayout title="Willkommen zurück" sub="Melde dich in deinem Konto an.">
      <div className="flex flex-col gap-4">
        <Input placeholder="deine@email.de" value={email} onChange={setEmail} type="email" icon={<MailIcon />} />
        <Input placeholder="Passwort" value={pw} onChange={setPw} type="password" icon={<LockIcon />} />
        <div className="text-right">
          <button className="text-[12px] hover:underline" style={{ color: "var(--color-gold)" }}>Passwort vergessen?</button>
        </div>
        <Button variant="primary" size="lg" className="w-full justify-center" onClick={() => navigate("/app")}>
          Anmelden
        </Button>
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>oder</span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </div>
        <button
          className="flex items-center justify-center gap-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
          onClick={() => navigate("/app")}
        >
          <GoogleIcon /> Mit Google anmelden
        </button>
        <p className="text-center text-[13px] mt-2" style={{ color: "var(--color-text-muted)" }}>
          Du hast noch kein Konto?{" "}
          <Link to="/registrierung" style={{ color: "var(--color-gold)" }} className="hover:underline">Registrieren</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export function Register() {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <AuthLayout title="Konto erstellen" sub="Beginne deine Deutsche Reise noch heute.">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="Vorname" value={first} onChange={setFirst} />
          <Input placeholder="Nachname" value={last} onChange={setLast} />
        </div>
        <Input placeholder="E-Mail-Adresse" value={email} onChange={setEmail} type="email" icon={<MailIcon />} />
        <Input placeholder="Passwort wählen" value={pw} onChange={setPw} type="password" icon={<LockIcon />} />
        <Button variant="primary" size="lg" className="w-full justify-center" onClick={() => navigate("/onboarding/niveau")}>
          Weiter
        </Button>
        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          <span className="text-[11px]" style={{ color: "var(--color-text-subtle)" }}>oder</span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </div>
        <button
          className="flex items-center justify-center gap-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
          onClick={() => navigate("/onboarding/niveau")}
        >
          <GoogleIcon /> Mit Google fortfahren
        </button>
        <p className="text-center text-[13px] mt-2" style={{ color: "var(--color-text-muted)" }}>
          Bereits registriert?{" "}
          <Link to="/anmeldung" style={{ color: "var(--color-gold)" }} className="hover:underline">Anmelden</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14.5 8.2c0-.5-.1-.9-.2-1.3H8v2.5h3.6c-.2.9-.7 1.6-1.4 2.1v1.7h2.3c1.3-1.2 2-3 2-5z" fill="#4285F4" />
      <path d="M8 15c1.8 0 3.3-.6 4.4-1.7l-2.3-1.7c-.6.4-1.3.7-2.1.7-1.6 0-3-1.1-3.5-2.6H2.1v1.8C3.2 13.5 5.5 15 8 15z" fill="#34A853" />
      <path d="M4.5 9.7C4.4 9.3 4.3 8.9 4.3 8.5s.1-.8.2-1.2V5.5H2.1C1.6 6.5 1.3 7.5 1.3 8.5s.3 2 .8 3l2.4-1.8z" fill="#FBBC05" />
      <path d="M8 4.4c.9 0 1.7.3 2.3.9l1.7-1.7C10.9 2.6 9.6 2 8 2 5.5 2 3.2 3.5 2.1 5.5l2.4 1.8C5 5.5 6.4 4.4 8 4.4z" fill="#EA4335" />
    </svg>
  );
}
