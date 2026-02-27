'use client';
import React from 'react';
import Link from 'next/link';
import { Gift, Star, Crown, Watch, ArrowDown, ShieldCheck, Clock, Truck, CheckCircle, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PRODUCT_LINE_ICONS = [
  <Gift size={32} strokeWidth={1} />,
  <Star size={32} strokeWidth={1} />,
  <Crown size={32} strokeWidth={1} />,
  <Watch size={32} strokeWidth={1} />,
];

const TRUST_ICONS = [
  <CheckCircle size={18} strokeWidth={1} />,
  <ShieldCheck size={18} strokeWidth={1} />,
  <Star size={18} strokeWidth={1} />,
  <Clock size={18} strokeWidth={1} />,
];

const SHOPPING_CHANNELS = [
  { name: 'TikTok Shop', emoji: '🎵', url: '#', gradient: 'from-pink-900/20 to-red-900/10' },
  { name: 'Shopee', emoji: '🛍️', url: '#', gradient: 'from-orange-900/20 to-red-900/10' },
  { name: 'Facebook', emoji: '📘', url: '#', gradient: 'from-blue-900/20 to-indigo-900/10' },
  { name: 'Zalo OA', emoji: '💬', url: '#', gradient: 'from-teal-900/20 to-blue-900/10' },
];

const PRODUCT_IMAGES = [
  { src: 'https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png', key: 'silver' },
  { src: 'https://vienchibao.com/wp-content/uploads/2025/07/12.png', key: 'gold' },
  { src: '/images/knowledgeAboutJewelry.png', key: 'gemstone' },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const productLines: any[] = t('about.productLines') || [];
  const timelineItems: any[] = t('timeline.items') || [];
  const trustKeys = ['cert', 'handmade', 'material', 'warranty'];

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png"
            alt=""
            className="w-full h-full object-cover opacity-10 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0f0f0f]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-900/10 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-amber-700/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 space-y-8 animate-fade-in">
          <div className="text-amber-500/60 tracking-[0.7em] text-[10px] uppercase font-light">
            {t('about.productLinesLabel')}
          </div>
          <h1 className="text-5xl md:text-[64px] font-serif text-white italic font-light leading-[1.15] tracking-wide">
            {t('about.productLinesTitle')} <br />
            <span className="text-amber-400 not-italic text-3xl md:text-[40px]">Viễn Chí Bảo</span>
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 text-sm leading-loose font-light">
            {t('about.productLinesDesc')}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {trustKeys.map((key, i) => (
              <div key={key} className="flex items-center gap-2 px-5 py-2.5 border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <span className="text-amber-500/50">{TRUST_ICONS[i]}</span>
                <span className="text-stone-400 text-[10px] tracking-[0.2em] uppercase">{t(`trust.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. 4 DÒNG SẢN PHẨM
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {productLines.map((line: any, i: number) => (
              <div
                key={i}
                className="group relative p-10 bg-[#141414] border border-white/5 hover:border-amber-500/25 transition-all duration-500 overflow-hidden"
              >
                {/* Số thứ tự mờ */}
                <div className="absolute top-4 right-6 text-[7rem] font-serif text-white/[0.025] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Glow hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/[0.03] transition-all duration-700" />

                <div className="relative z-10 space-y-6">
                  <div className="text-amber-500/35 group-hover:text-amber-500 transition-colors duration-500">
                    {PRODUCT_LINE_ICONS[i]}
                  </div>
                  <div className="w-8 h-[1px] bg-amber-500/30 group-hover:w-16 transition-all duration-500" />
                  <h3 className="text-xl font-serif text-white leading-snug">{line.title}</h3>
                  <p className="text-[13px] text-stone-500 leading-relaxed font-light group-hover:text-stone-300 transition-colors duration-300">
                    {line.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. Ý NGHĨA + GALLERY
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 aspect-[16/7] overflow-hidden border border-white/5 group">
                <img
                  src="https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png"
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[2s]"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5 group">
                <img
                  src="https://vienchibao.com/wp-content/uploads/2025/07/12.png"
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[2s]"
                />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5 group">
                <img
                  src="/images/knowledgeAboutJewelry.png"
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[2s]"
                />
              </div>
            </div>

            {/* Meaning text */}
            <div className="space-y-10">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-amber-600/60 uppercase font-bold mb-6">
                  {t('about.meaningLabel')}
                </p>
                <div className="relative pl-6">
                  <div className="absolute -top-2 -left-1 text-[4.5rem] font-serif text-amber-500/10 leading-none select-none">"</div>
                  <blockquote className="text-2xl font-serif text-stone-200 italic leading-[1.6]">
                    {t('about.meaningQuote')}
                  </blockquote>
                </div>
              </div>
              <div className="h-[1px] w-16 bg-amber-500/20" />
              <p className="text-stone-400 text-sm leading-loose font-light">
                {t('about.meaningDesc')}
              </p>

              {/* 3 loại sản phẩm nhỏ */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {PRODUCT_IMAGES.map((item, i) => (
                  <div key={i} className="group space-y-2">
                    <div className="aspect-square overflow-hidden border border-white/5 group-hover:border-amber-500/25 transition-colors duration-300">
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                      />
                    </div>
                    <p className="text-[9px] text-stone-600 tracking-widest uppercase text-center group-hover:text-amber-500/60 transition-colors">
                      {t(`products.${item.key}.label`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          5. QUY TRÌNH 3 BƯỚC
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-[#141414] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[9px] tracking-[0.6em] text-amber-500/60 uppercase font-bold mb-4">
              {t('productPage.timelineLabel')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic">
              {t('productPage.timelineTitle')}
            </h2>
            <div className="w-16 h-[1px] bg-amber-500/25 mx-auto mt-6" />
          </div>

          {/* 3 bước ngang */}
          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Đường kết nối */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-[1px] bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20" />

            {[
              { icon: <Gift size={22} strokeWidth={1} />, num: '01', labelKey: 'productPage.deliveryLabel', descKey: 'productPage.deliveryDesc' },
              { icon: <Clock size={22} strokeWidth={1} />, num: '02', labelKey: 'productPage.timelineLabel', descKey: 'productPage.timelineP1', extra: t('productPage.timelineHighlight') },
              { icon: <Truck size={22} strokeWidth={1} />, num: '03', labelKey: 'productPage.securityLabel', descKey: 'productPage.securityP1' },
            ].map((step, i) => (
              <div key={i} className="group relative p-10 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/20 transition-all duration-500 text-center">
                <div className="w-14 h-14 rounded-full border border-amber-500/25 flex items-center justify-center mx-auto mb-6 text-amber-500/50 group-hover:text-amber-500 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="text-4xl font-serif text-amber-400/15 mb-4 group-hover:text-amber-400/30 transition-colors">{step.num}</div>
                <h3 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-4">
                  {t(step.labelKey)}
                </h3>
                <p className="text-[12px] text-stone-500 leading-relaxed font-light group-hover:text-stone-300 transition-colors">
                  {t(step.descKey)}
                  {step.extra && <span className="text-amber-500/60 italic"> {step.extra}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}
