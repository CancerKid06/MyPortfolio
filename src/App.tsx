/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { FellahAiSection } from './components/FellahAiSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IdpsSection } from './components/IdpsSection';
import { Navbar } from './components/Navbar';
import { OtherProjectsSection } from './components/OtherProjectsSection';
import { SkillsLeadershipSection } from './components/SkillsLeadershipSection';
import { Lang, SITE_CONTENT } from './content/siteContent';

const STORAGE_KEY = 'ali_portfolio_lang';

function readInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted contexts
  }
  return 'en';
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  const content = SITE_CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.metaTitle;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage access errors in restricted contexts
    }
  }, [lang, content.metaTitle]);

  return (
    <div className="min-h-screen bg-white text-[#111816] font-sans">
      <Navbar lang={lang} onToggleLang={setLang} content={content.nav} />

      <main>
        <HeroSection content={content.hero} cvHref={content.nav.cvHref} />
        <FellahAiSection content={content.fellahAi} />
        <IdpsSection content={content.idps} />
        <OtherProjectsSection content={content.otherProjects} />
        <ExperienceEducationSection content={content.experienceEducation} />
        <SkillsLeadershipSection content={content.skillsLeadership} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
}
