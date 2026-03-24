import React, { createContext, useContext, useMemo, useState } from 'react';

export type AppLanguage = 'pt' | 'en';

type AppLanguageContextValue = {
  language: AppLanguage;
  setLanguage: React.Dispatch<React.SetStateAction<AppLanguage>>;
  toggleLanguage: () => void;
};

const AppLanguageContext = createContext<AppLanguageContextValue | null>(null);

export function AppLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<AppLanguage>('pt');
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((p) => (p === 'pt' ? 'en' : 'pt')),
    }),
    [language]
  );
  return <AppLanguageContext.Provider value={value}>{children}</AppLanguageContext.Provider>;
}

export function useAppLanguage() {
  const ctx = useContext(AppLanguageContext);
  if (!ctx) {
    throw new Error('useAppLanguage deve ser usado dentro de AppLanguageProvider');
  }
  return ctx;
}
