'use client';
import React from 'react';
import { Sparkles, ShieldCheck, Gem, Compass, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PILLAR_ICONS = [
  <ShieldCheck size={18} strokeWidth={1} />,
  <Sparkles size={18} strokeWidth={1} />,
  <Gem size={18} strokeWidth={1} />,
  <Compass size={18} strokeWidth={1} />,
];

export default function About() {
  const { t } = useLanguage();
  const pillars: any[] = t('about.pillars') || [];
  const timelineItems: any[] = t('timeline.items') || [];

  const ts = (key: string, fallback = '') => {
    try { const v = t(key); return v && typeof v === 'string' ? v : fallback; }
    catch { return fallback; }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">

      {/* ── 1. HERO + STATS ── */}
      <section className="relative h-[85vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/workshop-bg.jpg')] bg-cover bg-center opacity-10 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0f0f0f]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-900/10 blur-[140px] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-in">
          <div className="text-amber-500/60 tracking-[0.6em] text-[10px] uppercase font-light">
            {t('about.heroLabel')}
          </div>
          <h1 className="text-4xl md:text-[54px] font-serif italic text-white leading-[1.3] font-light tracking-wide">
            {t('about.heroTitle')} <br />
            <span className="text-amber-500 not-italic font-normal">{t('about.heroTitleHighlight')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 text-sm leading-relaxed font-light">
            {t('about.heroDesc')}
          </p>
          <div className="flex justify-center gap-8 pt-4">
            {[t('about.stat1'), t('about.stat2'), t('about.stat3')].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-serif text-amber-400">{['10+', '3', '100%'][i]}</div>
                <div className="text-stone-500 text-[10px] tracking-widest uppercase mt-1">{stat}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* ── 2. GIỚI THIỆU CÔNG TY — Pioneer ── */}
      <section className="relative py-32 border-t border-white/5 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-[9px] tracking-[0.4em] text-amber-600/60 uppercase font-bold">{t('about.pioneerlabel')}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">{t('about.pioneerTitle')}</h2>
                <div className="h-[1px] w-12 bg-amber-600/30" />
              </div>
              <div className="space-y-6 text-stone-400 text-[14px] leading-[2] font-light border-l border-amber-500/10 pl-8">
                <p>{t('about.pioneerP1')}</p>
                <p>{t('about.pioneerP2')}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[t('about.tag1'), t('about.tag2'), t('about.tag3')].map((tag, i) => (
                  <span key={i} className="px-4 py-2 border border-amber-500/20 text-amber-400/70 text-[10px] tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 border border-amber-900/10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                <img src="https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png" alt="Vien Chi Bao"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100" />
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm border border-amber-500/20 px-4 py-3">
                  <div className="text-amber-400 text-[10px] tracking-widest uppercase">{t('about.imageBadge')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TIMELINE — chuyển từ Home về đây vì là lịch sử công ty ── */}
      <section className="py-32 bg-[#141414] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[9px] tracking-[0.6em] text-amber-500/60 uppercase font-bold mb-4">
              {ts('timeline.label', 'OUR JOURNEY')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic">
              {ts('timeline.title', 'Hành Trình')}
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/25 mx-auto mt-6" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/40 via-amber-500/10 to-transparent" />
            <div className="space-y-12">
              {timelineItems.map((item: any, i: number) => (
                <div key={i} className="group flex gap-8 items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border border-amber-500/30 bg-[#141414] flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300">
                      <span className="text-amber-400 text-[10px] font-serif">{item.year?.slice(2)}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-4 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-amber-400 text-2xl font-serif font-light">{item.year}</span>
                      <div className="w-6 h-[1px] bg-amber-500/30" />
                      <h3 className="text-sm font-bold text-white tracking-wider uppercase">{item.title}</h3>
                    </div>
                    <p className="text-[13px] text-stone-500 leading-relaxed font-light group-hover:text-stone-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION HUYK ── */}
      <section className="relative py-32 border-t border-white/5 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-amber-900/10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                <img src="https://vienchibao.com/wp-content/uploads/2025/07/12.png" alt="HuyK"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100" />
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[9px] tracking-[0.4em] text-amber-600/60 uppercase font-bold">{t('about.missionLabel')}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">{t('about.missionTitle')}</h2>
                <div className="h-[1px] w-12 bg-amber-600/30" />
              </div>
              <div className="space-y-8 text-stone-400 text-[14px] leading-[2] font-light italic border-l border-amber-500/10 pl-8">
                <p>{t('about.missionP1')}</p>
                <p>{t('about.missionP2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TINH THẦN SHOKUNIN — chuyển từ Home về đây vì là triết lý công ty ── */}
      <section className="py-32 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-[9px] tracking-[0.6em] text-amber-500/60 uppercase font-bold mb-6">
                  {ts('spirit.label', 'TRIẾT LÝ')}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  {ts('spirit.title', 'Tinh Thần')} <br />
                  <span className="text-amber-400 italic">{ts('spirit.highlight', 'Shokunin')}</span>
                </h2>
              </div>
              <div className="space-y-6 text-stone-400 text-[14px] leading-[2] font-light border-l border-amber-500/10 pl-8">
                <p>{ts('spirit.p1', '')}</p>
                <p>{ts('spirit.p2', '')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-4 text-[8rem] font-serif text-amber-500/8 leading-none select-none pointer-events-none">"</div>
              <div className="relative p-10 border border-amber-500/15 bg-amber-500/[0.03] space-y-6">
                <p className="text-2xl font-serif text-stone-200 leading-relaxed italic font-light">
                  {ts('spirit.quote', '')}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-serif font-bold text-lg">H</div>
                  <div>
                    <p className="text-white font-medium text-sm">HuyK</p>
                    <p className="text-stone-500 text-xs">{ts('spirit.quoteRole', 'Founder & Master Craftsman')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PILLARS TRIẾT LÝ — chi tiết, khác với Values tóm tắt ở Home ── */}
      <section className="relative py-32 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="text-amber-600/40 text-[10px] tracking-[0.5em] uppercase font-bold">{t('about.philosophyLabel')}</div>
            <h2 className="text-3xl font-serif italic text-white leading-relaxed">{t('about.philosophyTitle')}</h2>
            <div className="h-[1px] w-16 bg-amber-500/20" />
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {pillars.map((item: any, i: number) => (
              <div key={i} className="group p-8 bg-[#141414] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors">{PILLAR_ICONS[i]}</div>
                  <div className="space-y-1">
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{item.title}</h3>
                    <div className="w-4 h-[1px] bg-amber-900/30 group-hover:w-8 transition-all duration-500" />
                  </div>
                </div>
                <p className="text-[13px] text-stone-500 font-light mt-6 leading-relaxed group-hover:text-stone-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[9px] text-stone-600 tracking-[0.3em] uppercase">{t('about.footer')}</p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}
