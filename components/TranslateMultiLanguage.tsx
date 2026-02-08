"use client";
import React, { useState, useEffect, useRef } from 'react';
import languagesLib from '@cospired/i18n-iso-languages';
import { useLanguage } from '../context/LanguageContext';
import SearchLanguage from './SearchLanguage'; // Import file ngang cấp

languagesLib.registerLocale(require("@cospired/i18n-iso-languages/langs/en.json"));

const TranslateMultiLanguage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [languages, setLanguages] = useState<{ label: string; code: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State tìm kiếm
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setLocale, locale } = useLanguage();

  // 1. Tự động reset UI về English khi component mount (load lại trang)
  useEffect(() => {
    setLocale('en'); // Đảm bảo state locale luôn là 'en' khi F5
  }, [setLocale]);

  useEffect(() => {
    const langObj = languagesLib.getNames("en");
    const formattedLangs = Object.entries(langObj).map(([code, name]) => ({
      label: name.toUpperCase(),
      code: code.toLowerCase()
    }));
    setLanguages(formattedLangs);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm(""); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTranslate = (langCode: string) => {
    setLocale(langCode);
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event('change'));
    }
    setIsOpen(false);
    setSearchTerm("");
  };

  // Logic lọc ngôn ngữ
  const filteredLanguages = languages.filter(lang => 
    lang.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={`text-white transition-all duration-700 ${isOpen ? 'rotate-[360deg]' : 'opacity-70 group-hover:opacity-100'}`}>
          <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-32 z-[100] flex flex-col items-center animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="w-2 h-2 bg-[#1c1c16]/80 rotate-45 border-t border-l border-white/10 mb-[-4px] relative z-20 backdrop-blur-xl"></div>

          <div className="backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl w-full relative z-10 overflow-hidden bg-[#1c1c16]/40">
            
            {/* Thanh tìm kiếm ngang cấp */}
            <SearchLanguage value={searchTerm} onChange={setSearchTerm} />

            <div className="max-h-[250px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <ul className="flex flex-col">
                {filteredLanguages.length > 0 ? (
                  filteredLanguages.map((lang) => (
                    <li key={lang.code} className="border-b border-white/5 last:border-none">
                      <button
                        onClick={() => handleTranslate(lang.code)}
                        className={`w-full px-2 py-4 text-[9px] tracking-[0.2em] transition-all duration-300 flex flex-col items-center justify-center uppercase font-light text-center
                          ${locale === lang.code ? 'text-yellow-500 bg-white/5' : 'text-white hover:bg-white/5'}`}
                      >
                        <span className="opacity-90">{lang.label}</span>
                        <span className={`mt-1 h-[1px] transition-all duration-500 ${locale === lang.code ? 'w-6 bg-yellow-500' : 'w-4 bg-white/20'}`}></span>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="px-2 py-4 text-[8px] text-white/40 text-center tracking-widest uppercase">No result</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateMultiLanguage;