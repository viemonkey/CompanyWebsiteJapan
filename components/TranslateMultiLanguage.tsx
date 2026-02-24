"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SearchLanguage from './SearchLanguage';

const SUPPORTED_LANGUAGES = [
  { label: "ENGLISH",    code: "en" },
  { label: "TIẾNG VIỆT", code: "vi" },
  { label: "日本語",      code: "ja" },
  { label: "FRANÇAIS",   code: "fr" },
  { label: "DEUTSCH",    code: "de" },
  { label: "ESPAÑOL",    code: "es" },
  { label: "한국어",      code: "ko" },
  { label: "ไทย",        code: "th" },
];

const TranslateMultiLanguage: React.FC = () => {
  const [isOpen, setIsOpen]         = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dropdownRef                 = useRef<HTMLDivElement>(null);
  const { setLocale, locale }       = useLanguage();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTranslate = (langCode: string) => {
    // ✅ Gọi setLocale → Context cập nhật → toàn bộ trang re-render tức thì
    // Không cần Google Translate, không cần overlay, không có flash
    setLocale(langCode);
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(lang =>
    lang.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
          className={`text-white transition-all duration-700 ${isOpen ? 'rotate-[360deg]' : 'opacity-70 group-hover:opacity-100'}`}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-32 z-[100] flex flex-col items-center animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="w-2 h-2 bg-[#1c1c16]/80 rotate-45 border-t border-l border-white/10 mb-[-4px] relative z-20 backdrop-blur-xl" />
          <div className="backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl w-full relative z-10 overflow-hidden bg-[#1c1c16]/80">
            <SearchLanguage value={searchTerm} onChange={setSearchTerm} />
            <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
              <ul className="flex flex-col">
                {filteredLanguages.map((lang) => (
                  <li key={lang.code} className="border-b border-white/5 last:border-none">
                    <button
                      onClick={() => handleTranslate(lang.code)}
                      className={`w-full px-4 py-3 text-[10px] tracking-[0.1em] transition-all duration-300 flex flex-col items-center justify-center uppercase font-light text-center
                        ${locale === lang.code
                          ? 'text-yellow-500 bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <span className="font-medium">{lang.label}</span>
                      <span className={`mt-1 h-[1px] transition-all duration-500 ${locale === lang.code ? 'w-8 bg-yellow-500' : 'w-4 bg-white/20'}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateMultiLanguage;
