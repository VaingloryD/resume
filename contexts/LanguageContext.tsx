import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, PortfolioData } from '../types';
import { DATA } from '../constants';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  // Sync Tailwind Dark Mode class
  useEffect(() => {
    const root = document.documentElement;
    if (language === 'en') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data: DATA[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};