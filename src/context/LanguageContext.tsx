import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationSchema, getTranslation } from '../i18n';
import { getProductLocale } from '../i18n/productLocales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
  productLocale: ReturnType<typeof getProductLocale>;
  isRTL: boolean;
  formatNumber: (num: number | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'fa') return saved;
    } catch {
      // ignore
    }
    return 'fa'; // Default to Persian as requested
  });

  const t = getTranslation(language);
  const productLocale = getProductLocale(language);
  const isRTL = language === 'fa';

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }

    // Set authoritative document attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.documentElement.classList.add('lang-fa');
      document.documentElement.classList.remove('lang-en');
      document.body.classList.add('rtl-mode');
      document.body.classList.remove('ltr-mode');
    } else {
      document.documentElement.classList.add('lang-en');
      document.documentElement.classList.remove('lang-fa');
      document.body.classList.add('ltr-mode');
      document.body.classList.remove('rtl-mode');
    }
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const formatNumber = (num: number | string): string => {
    if (!isRTL) return String(num);
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/[0-9]/g, (w) => persianDigits[+w]);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        productLocale,
        isRTL,
        formatNumber,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
