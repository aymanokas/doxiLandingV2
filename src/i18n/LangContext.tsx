import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';
import type { Lang } from './translations';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations['fr'];
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const t = translations[lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be inside LangProvider');
  return ctx;
}
