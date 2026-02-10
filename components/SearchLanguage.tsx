"use client";
import React from 'react';

interface SearchLanguageProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchLanguage: React.FC<SearchLanguageProps> = ({ value, onChange }) => {
  return (
    <div className="sticky top-0 z-30 border-b border-white/10 bg-[#1c1c16]/50 backdrop-blur-md">
      <input 
        type="text"
        placeholder="SEARCH..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent px-3 py-3 text-[10px] tracking-[0.2em] text-white placeholder:text-white/20 outline-none uppercase font-light"
        autoFocus
      />
    </div>
  );
};

export default SearchLanguage;