"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type Language = "en" | "sw";

type Dictionary = Record<string, string>;

/**
 * Flat-keyed translation dictionaries. Add a language by adding a new entry
 * here — every component using useLanguage()/t() picks it up automatically.
 */
const translations: Record<Language, Dictionary> = {
  en: {
    "gulfShowcase.eyebrow": "OVERSEAS RECRUITMENT",
    "gulfShowcase.nameLabel": "AJIRA MAJUU",
    "gulfShowcase.headlineTop": "Your Job",
    "gulfShowcase.headlineBottom": "Beyond Borders.",
    "gulfShowcase.sub":
      "Connecting Kenyans with employment opportunities across the Gulf — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.",
    "gulfShowcase.cta": "Find a Job",
    "gulfShowcase.missionLabel": "Our Mission",
    "gulfShowcase.missionTitle": "Opening Doors",
    "gulfShowcase.missionBody":
      "We help job seekers discover overseas opportunities and guide them through every step of the recruitment process.",
    "gulfShowcase.learnMore": "Learn More",
    "gulfShowcase.aboutLabel": "Who We Are",
    "gulfShowcase.aboutTitle": "About Ajira Majuu",
    "gulfShowcase.aboutBody":
      "An overseas recruitment company connecting Kenyans with employment opportunities beyond Kenya, with a focus on the Gulf region.",
    "gulfShowcase.visionLabel": "Our Vision",
    "gulfShowcase.visionTitle": "Beyond Borders",
    "gulfShowcase.visionBody":
      "To connect people, opportunities, and possibilities across borders — simply, respectfully, and professionally.",
    "gulfShowcase.destinationsLabel": "Where We Place Talent",
    "gulfShowcase.destinationsTitle": "Gulf Destinations",
    "gulfShowcase.promiseLabel": "Our Promise",
    "gulfShowcase.promiseTitle": "Simple. Respectful. Professional.",
  },
  sw: {
    "gulfShowcase.eyebrow": "AJIRA NJE YA NCHI",
    "gulfShowcase.nameLabel": "AJIRA MAJUU",
    "gulfShowcase.headlineTop": "Kazi Yako",
    "gulfShowcase.headlineBottom": "Ughaibuni.",
    "gulfShowcase.sub":
      "Tunaunganisha Wakenya na nafasi za ajira katika nchi za Ghuba — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, na Oman.",
    "gulfShowcase.cta": "Tafuta Kazi",
    "gulfShowcase.missionLabel": "Dhamira Yetu",
    "gulfShowcase.missionTitle": "Kufungua Milango",
    "gulfShowcase.missionBody":
      "Tunasaidia watafuta kazi kugundua nafasi za nje na kuwaongoza katika kila hatua ya mchakato wa ajira.",
    "gulfShowcase.learnMore": "Jifunze Zaidi",
    "gulfShowcase.aboutLabel": "Sisi Ni Nani",
    "gulfShowcase.aboutTitle": "Kuhusu Ajira Majuu",
    "gulfShowcase.aboutBody":
      "Kampuni ya uajiri wa nje inayounganisha Wakenya na fursa za ajira nje ya nchi, hasa katika eneo la Ghuba.",
    "gulfShowcase.visionLabel": "Dira Yetu",
    "gulfShowcase.visionTitle": "Zaidi ya Mipaka",
    "gulfShowcase.visionBody":
      "Kuunganisha watu, fursa, na uwezekano kuvuka mipaka — kwa urahisi, heshima, na weledi.",
    "gulfShowcase.destinationsLabel": "Tunapopeleka Vipaji",
    "gulfShowcase.destinationsTitle": "Nchi za Ghuba",
    "gulfShowcase.promiseLabel": "Ahadi Yetu",
    "gulfShowcase.promiseTitle": "Rahisi. Heshima. Weledi.",
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[language][key] ?? translations.en[key] ?? key,
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}
