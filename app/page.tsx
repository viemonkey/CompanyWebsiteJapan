'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Gem, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORY_IMAGES = [
  "/images/knowledgeAboutJewelry.png",
  "https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png",
  "https://vienchibao.com/wp-content/uploads/2025/07/12.png",
];

const VALUE_ICONS = [<ShieldCheck key="s" />, <Sparkles key="sp" />, <Gem key="g" />];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);

  const ts = (key: string, fallback = '') => {
    try { const v = t(key); return v && typeof v === 'string' ? v : fallback; }
    catch { return fallback; }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-stone-100 selection:bg-amber-200/30 font-sans overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <video src="/images/noname.mp4" autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-black/40" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="text-amber-400 tracking-[0.8em] text-xs font-semibold uppercase drop-shadow-md" translate="no">
              {t('hero.brand')}
            </div>
            <h1 className="text-5xl md:text-[4.5rem] font-serif text-white leading-[1.1] italic font-light drop-shadow-2xl">
              {t('hero.title')} <br />
              <span className="text-amber-400 italic">{t('hero.titleHighlight')}</span>
            </h1>
          </div>
          <Link href="/about"
            className="inline-block mt-8 px-12 py-5 bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all text-xs tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            {ts('hero.button', 'KHÁM PHÁ')}
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </div>
      </section>

      {/* ── 2. STORY — Câu chuyện khởi nguồn ── */}
      <section className="relative py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img key={STORY_IMAGES[currentIndex]} src={STORY_IMAGES[currentIndex]}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700" alt="Story" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-amber-500 font-bold text-sm tracking-widest">
                  {t(`story.items.${currentIndex}.part`)}
                </p>
                <h2 className="text-5xl font-serif text-white">
                  {t(`story.items.${currentIndex}.title`)}
                </h2>
              </div>
              <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light border-l-2 border-amber-500/30 pl-8">
                <p>{t(`story.items.${currentIndex}.description.0`)}</p>
                <p>{t(`story.items.${currentIndex}.description.1`)}</p>
              </div>
              <div className="flex gap-6 pt-4">
                <button onClick={prevStory} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronLeft className="w-6 h-6 text-amber-500" />
                </button>
                <button onClick={nextStory} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronRight className="w-6 h-6 text-amber-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VIDEO SHOWCASE ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video src="https://vienchibao.com/wp-content/uploads/2025/07/video.mp4"
          autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-black/50 to-[#121212]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-6">
          <p className="text-amber-400 tracking-[0.6em] text-xs font-semibold uppercase">
            {ts('videoSection.highlight', 'Tâm Hồn & Di Sản')}
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic font-light leading-tight">
            10 {ts('videoSection.years', 'Năm Chế Tác')} <br />
            <span className="text-amber-400">{ts('videoSection.highlight', 'Soul & Heritage')}</span>
          </h2>
          <p className="text-stone-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {ts('videoSection.desc', '')}
          </p>
        </div>
      </section>

      {/* ── 4. SẢN PHẨM NỔI BẬT — 3 card teaser (khác với 4 dòng chi tiết ở /products) ── */}
      <section className="py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.6em] text-xs font-semibold uppercase mb-4">COLLECTIONS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {ts('featuredProducts.heading', 'Dòng Sản Phẩm Tinh Hoa')}
            </h2>
            <div className="w-24 h-px bg-amber-500 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: 'https://huyk.asia/cdn/shop/files/2_948cbf35-5a9b-4a82-9de5-bad5e5589a9e.png?v=1762264861&width=1100', labelKey: 'products.silver.label', titleKey: 'products.silver.title', descKey: 'products.silver.desc' },
              { image: 'https://vienchibao.com/wp-content/uploads/2025/02/Charm-kim-ngu-vang-24k-2.png', labelKey: 'products.gold.label', titleKey: 'products.gold.title', descKey: 'products.gold.desc' },
              { image: 'https://file.hstatic.net/200000468171/file/ruby-do__1__8bc1d07256a24678aa587ba3b807c3be_grande.jpg', labelKey: 'products.gemstone.label', titleKey: 'products.gemstone.title', descKey: 'products.gemstone.desc' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/40 transition-all duration-500 cursor-default">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image} alt={ts(item.titleKey, '')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                  <p className="text-amber-400 text-xs tracking-widest uppercase font-semibold">{ts(item.labelKey, '')}</p>
                  <h3 className="text-2xl font-serif text-white">{ts(item.titleKey, '')}</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {ts(item.descKey, '')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/products"
              className="inline-block px-10 py-4 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black font-bold transition-all duration-300 text-xs tracking-[0.3em] rounded-full">
              {ts('about.productLinesLabel', 'XEM TẤT CẢ')} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. ĐỘI NGŨ PREVIEW — teaser, chi tiết ở /team ── */}
      <section className="py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.6em] text-xs font-semibold uppercase mb-4">THE ARTISANS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {ts('teamPreview.heading', 'Những Bàn Tay Tạo Nên Kỳ Tích')}
            </h2>
            <div className="w-24 h-px bg-amber-500 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[0, 1, 2].map((i) => (
              <div key={i} className="group text-center space-y-5">
                <div className="relative mx-auto w-44 h-44 rounded-full overflow-hidden border-2 border-amber-500/20 group-hover:border-amber-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                  <div className="w-full h-full bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
                    <span className="text-5xl font-serif text-amber-400/60">
                      {ts(`team.members.${i}.name`, 'A').charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white">{ts(`team.members.${i}.name`, '')}</h3>
                  <p className="text-amber-400 text-xs tracking-widest mt-1 uppercase">
                    {ts(`team.members.${i}.position`, '')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/team"
              className="inline-block px-10 py-4 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black font-bold transition-all duration-300 text-xs tracking-[0.3em] rounded-full">
              {ts('teamPreview.button', 'XEM TOÀN BỘ ĐỘI NGŨ')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. GIÁ TRỊ CỐT LÕI — tóm tắt ở Home, Pillars đầy đủ ở About ── */}
      <section className="relative py-32 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('values.heading')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div key={index}
                className="p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-500">
                <div className="inline-block p-4 rounded-full bg-amber-500/10 mb-6">
                  {React.cloneElement(VALUE_ICONS[index] as React.ReactElement, { className: "w-8 h-8 text-amber-500" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-widest">
                  {t(`values.items.${index}.title`)}
                </h3>
                <p className="text-stone-400 font-light leading-relaxed">
                  {t(`values.items.${index}.desc`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/about"
              className="inline-block px-10 py-4 border border-white/20 text-stone-400 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 text-xs tracking-[0.3em] rounded-full">
              {ts('about.pioneerlabel', 'TÌM HIỂU VỀ CHÚNG TÔI')} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
