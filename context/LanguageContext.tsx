"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // 1. Luôn reset state về 'en' khi load lại trang
    setLocale('en');

    // 2. Hàm ép Google Translate về tiếng Anh
    const resetGoogleTranslate = () => {
      const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleCombo) {
        googleCombo.value = 'en';
        googleCombo.dispatchEvent(new Event('change'));
      }
    };

    // Đợi 1 khoảng thời gian ngắn để Google Script kịp sẵn sàng sau khi load trang
    const timer = setTimeout(resetGoogleTranslate, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};