'use client';
import React from 'react';
import { Truck, Clock, ShieldCheck, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ShippingPolicy() {
  const { t } = useLanguage();
  const securityList: string[] = t('products.securityList') || [];

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">

      {/* 1. HERO */}
      <section className="relative h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0f0f0f] z-10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="animate-fade-in">
            <div className="mb-6 text-amber-500/60 tracking-[0.6em] text-[10px] uppercase font-light">
              {t('products.heroLabel')}
            </div>
            <h1 className="text-4xl md:text-[54px] font-serif text-white leading-tight italic font-light tracking-wide">
              {t('products.heroTitle')} <span className="text-amber-500 not-italic font-normal">{t('products.heroTitleHighlight')}</span>
            </h1>
            <div className="w-12 h-[1px] bg-amber-500/30 mx-auto mt-8"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center max-w-2xl mx-auto">
            <p className="text-[15px] md:text-lg text-stone-400 leading-[2] font-light italic">
              {t('products.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">

            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <Truck size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">{t('products.deliveryLabel')}</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">{t('products.deliveryTitle')}</h2>
              <p className="text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                {t('products.deliveryDesc')}
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <Clock size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">{t('products.timelineLabel')}</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">{t('products.timelineTitle')}</h2>
              <div className="space-y-4 text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                <p>{t('products.timelineP1')} <span className="text-amber-500/80 italic">{t('products.timelineHighlight')}</span>.</p>
                <p>{t('products.timelineP2')}</p>
              </div>
            </div>

            <div className="space-y-6 group lg:col-span-2">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <ShieldCheck size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">{t('products.securityLabel')}</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">{t('products.securityTitle')}</h2>
              <div className="grid md:grid-cols-2 gap-12 text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                <p>{t('products.securityP1')}</p>
                <ul className="space-y-2 italic text-[12px]">
                  {securityList.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}
