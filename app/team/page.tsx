"use client";
import React, { useState } from 'react';
import { ArrowDown, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const MEMBER_IMAGES = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
];

export default function Team() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const members: any[] = t('team.members') || [];

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">

      {/* 1. HERO */}
      <section className="relative h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video src="/images/noname.mp4" autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 transition-transform duration-[10s] hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0f0f0f]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-in-down">
            <div className="mb-6 text-amber-500/60 tracking-[0.8em] text-[10px] uppercase font-light">
              {t('team.heroLabel')}
            </div>
            <h1 className="text-4xl md:text-[64px] font-serif text-white leading-[1.2] italic font-light tracking-wide">
              {t('team.heroTitle')} <br />
              <span className="text-amber-500 not-italic font-normal">{t('team.heroTitleHighlight')}</span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* 2. GRID */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-24 text-center space-y-4">
          <p className="text-amber-600/60 text-[10px] tracking-[0.6em] uppercase font-bold">{t('team.gridLabel')}</p>
          <h2 className="text-2xl font-serif italic text-white/90">{t('team.gridTitle')}</h2>
          <div className="w-10 h-[1px] bg-amber-500/20 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="group flex flex-col items-center text-center space-y-8">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900 border border-white/5 shadow-2xl">
                <img src={MEMBER_IMAGES[index]} alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-in-out" />
              </div>

              <div className="space-y-4 px-4">
                <div className="space-y-1">
                  <p className="text-amber-600 text-[9px] tracking-[0.4em] uppercase font-bold">{member.position}</p>
                  <h3 className="font-serif text-2xl text-white tracking-wide italic">{member.name}</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-stone-500 leading-relaxed font-light line-clamp-3 group-hover:text-stone-300 transition-colors duration-500">
                    {member.bio}
                  </p>
                  <button onClick={() => setSelectedIndex(index)}
                    className="text-[10px] text-amber-500/60 uppercase tracking-widest font-bold hover:text-amber-500 transition-colors border-b border-amber-500/20 pb-1">
                    {t('team.seeMore')}
                  </button>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2">
                  {member.expertise.map((skill: string, idx: number) => (
                    <span key={idx} className="text-[10px] text-amber-500/40 uppercase tracking-widest italic border-b border-amber-500/10 pb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MODAL */}
      {selectedIndex !== null && members[selectedIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}></div>
          <div className="relative bg-[#141414] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-6 h-6 text-stone-400" />
            </button>
            <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto h-64 md:h-auto">
              <img src={MEMBER_IMAGES[selectedIndex]} alt={members[selectedIndex].name} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <p className="text-amber-600 text-[11px] tracking-[0.5em] uppercase font-bold">{members[selectedIndex].position}</p>
                <h2 className="font-serif text-4xl text-white italic">{members[selectedIndex].name}</h2>
              </div>
              <div className="w-12 h-[1px] bg-amber-500/30"></div>
              <p className="text-stone-300 text-base leading-[1.8] font-light font-serif italic text-justify">{members[selectedIndex].bio}</p>
              <div className="pt-4">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-4">{t('team.expertiseLabel')}</p>
                <div className="flex flex-wrap gap-3">
                  {members[selectedIndex].expertise.map((skill: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 text-[11px] border border-amber-500/20 text-amber-500 uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] text-stone-600 tracking-[0.4em] uppercase">{t('team.footer')}</p>
      </footer>
    </div>
  );
}
