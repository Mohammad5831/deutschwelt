import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import { Login, Register } from "./pages/Auth";
import {
  OnboardingNiveau,
  OnboardingZiel,
  OnboardingLernzeit,
  OnboardingInteressen,
  OnboardingLernplan,
} from "./pages/Onboarding";

import AppShell from "./pages/AppShell";
import Dashboard from "./pages/Dashboard";
import Kurse, { KursDetail, Lektion } from "./pages/Kurse";
import Grammatik, { GrammatikDetail } from "./pages/Grammatik";
import Wortschatz from "./pages/Wortschatz";
import Uebungen from "./pages/Uebungen";
import Nachrichten, { ArticleDetail, Podcasts, Videos } from "./pages/Medien";
import PodcastPlayer from "./pages/PodcastPlayer";
import VideoPlayer from "./pages/VideoPlayer";
import Community from "./pages/Community";
import DiscussionDetail from "./pages/DiscussionDetail";
import { Woerterbuch, Uebersetzer, KIAssistent, Notizen } from "./pages/Werkzeuge";
import Telegram from "./pages/Telegram";
import Fortschritt from "./pages/Fortschritt";
import { Profil, Einstellungen } from "./pages/ProfilEinstellungen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Welcome />} />
        <Route path="/anmeldung" element={<Login />} />
        <Route path="/registrierung" element={<Register />} />

        {/* Onboarding */}
        <Route path="/onboarding/niveau" element={<OnboardingNiveau />} />
        <Route path="/onboarding/ziel" element={<OnboardingZiel />} />
        <Route path="/onboarding/lernzeit" element={<OnboardingLernzeit />} />
        <Route path="/onboarding/interessen" element={<OnboardingInteressen />} />
        <Route path="/onboarding/lernplan" element={<OnboardingLernplan />} />

        {/* App */}
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Dashboard />} />

          {/* Lernen */}
          <Route path="kurse" element={<Kurse />} />
          <Route path="kurse/:id" element={<KursDetail />} />
          <Route path="kurse/:id/lektion" element={<Lektion />} />
          <Route path="grammatik" element={<Grammatik />} />
          <Route path="grammatik/:topic" element={<GrammatikDetail />} />
          <Route path="wortschatz" element={<Wortschatz />} />
          <Route path="uebungen" element={<Uebungen />} />

          {/* Medien */}
          <Route path="nachrichten" element={<Nachrichten />} />
          <Route path="nachrichten/:id" element={<ArticleDetail />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="podcasts/:id" element={<PodcastPlayer />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<VideoPlayer />} />

          {/* Community */}
          <Route path="community" element={<Community />} />
          <Route path="community/:id" element={<DiscussionDetail />} />
          <Route path="sprachpartner" element={<Community />} />

          {/* Werkzeuge */}
          <Route path="woerterbuch" element={<Woerterbuch />} />
          <Route path="uebersetzer" element={<Uebersetzer />} />
          <Route path="ki-assistent" element={<KIAssistent />} />
          <Route path="notizen" element={<Notizen />} />

          {/* Telegram */}
          <Route path="telegram" element={<Telegram />} />

          {/* Progress & Profile */}
          <Route path="fortschritt" element={<Fortschritt />} />
          <Route path="profil" element={<Profil />} />
          <Route path="einstellungen" element={<Einstellungen />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
