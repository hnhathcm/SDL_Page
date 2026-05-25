import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' or 'vi'

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'vi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);