"use client";
import React, { useState, useEffect, useRef } from 'react';

const TranslateMultiLanguage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: 'VIETNAMESE', code: 'vi' },
    { label: 'ENGLISH', code: 'en' },
    { label: 'JAPANESE', code: 'jp' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-28 z-[100] flex flex-col items-center animate-in fade-in slide-in-from-top-1 duration-300">
          
          {/* Mũi tên kim cương */}
          <div className="w-2 h-2 bg-[#1c1c16]/80 rotate-45 border-t border-l border-white/10 mb-[-4px] relative z-20 backdrop-blur-xl"></div>

          <div className="bg-[#1c1c16]/90 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl overflow-hidden w-full relative z-10">
            <ul className="flex flex-col">
              {languages.map((lang, index) => (
                <li key={index} className="relative group/item border-b border-white/5 last:border-none">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-2 py-4 text-[9px] tracking-[0.2em] text-white hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center uppercase font-light text-center"
                  >
                    {/* Chữ trắng 100% giống Contact */}
                    <span className="opacity-90 group-hover/item:opacity-100">{lang.label}</span>
                    
                    {/* Vạch ngang nhỏ trang trí */}
                    <span className="mt-1 w-4 h-[1px] bg-white/20 transition-all duration-500 group-hover/item:bg-white/50"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateMultiLanguage;