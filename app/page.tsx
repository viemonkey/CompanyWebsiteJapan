'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Gem, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORY_IMAGES = [
  "/images/knowledgeAboutJewelry.png",
  "https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png",
  "https://vienchibao.com/wp-content/uploads/2025/07/12.png",
];

const VALUE_ICONS = [<ShieldCheck />, <Sparkles />, <Gem />];

// ── Counter animation hook ────────────────────────────────────────
function useCountUp(target: number, duration: number = 1800, trigger: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatCard({ rawValue, label }: { rawValue: string; label: string }) {
  const num = parseInt(rawValue.replace(/\D/g, ''), 10) || 0;
  const suffix = rawValue.replace(/[0-9]/g, '');
  const { ref, inView } = useInView();
  const count = useCountUp(num, 1800, inView);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-5xl md:text-6xl font-serif text-amber-400 font-light mb-3">
        {count}{suffix}
      </div>
      <div className="text-stone-400 text-xs tracking-[0.2em] uppercase font-light">{label}</div>
    </div>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);

  // Safe t() — fallback nếu key chưa có trong translations
  const ts = (key: string, fallback: string): string => {
    try {
      const v = t(key);
      return v && typeof v === 'string' ? v : fallback;
    } catch {
      return fallback;
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-stone-100 selection:bg-amber-200/30 font-sans overflow-x-hidden">

      {/* ── 1. HERO SECTION (GIỮ NGUYÊN) ── */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <video
            src="/images/noname.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-black/40"></div>
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

          <Link href="/products" className="inline-block mt-8 px-12 py-5 bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all text-xs tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            {t('hero.button')}
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </div>
      </section>

      {/* ── 2. STORY SECTION (GIỮ NGUYÊN) ── */}
      <section className="relative py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img
                  key={STORY_IMAGES[currentIndex]}
                  src={STORY_IMAGES[currentIndex]}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                  alt="Story"
                />
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

      {/* ── 3. VIDEO SHOWCASE — Tinh thần công ty (MỚI) ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          src="/images/noname.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-black/50 to-[#121212]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-6">
          <p className="text-amber-400 tracking-[0.6em] text-xs font-semibold uppercase">
            THE SHOKUNIN SPIRIT
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic font-light leading-tight">
            10 {ts('videoSection.years', 'Năm Chế Tác')} <br />
            <span className="text-amber-400">{ts('videoSection.highlight', 'Tâm Hồn & Di Sản')}</span>
          </h2>
          <p className="text-stone-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {ts('videoSection.desc', 'Mỗi tác phẩm được đúc kết từ hàng nghìn giờ luyện tập, thấm đẫm tinh thần Shokunin — sự theo đuổi hoàn hảo không ngừng nghỉ.')}
          </p>
        </div>
      </section>

      {/* ── 4. CON SỐ ẤN TƯỢNG (MỚI) ── */}
      <section className="py-24 bg-[#121212] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard rawValue="10+" label={ts('stats.years', 'Năm kinh nghiệm')} />
            <StatCard rawValue="500+" label={ts('stats.pieces', 'Tác phẩm')} />
            <StatCard rawValue="8" label={ts('stats.languages', 'Ngôn ngữ phục vụ')} />
            <StatCard rawValue="100%" label={ts('stats.handmade', 'Thủ công thuần túy')} />
          </div>
        </div>
      </section>

      {/* ── 5. SẢN PHẨM NỔI BẬT (MỚI) ── */}
      <section className="py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.6em] text-xs font-semibold uppercase mb-4">
              COLLECTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {ts('featuredProducts.heading', 'Dòng Sản Phẩm Tinh Hoa')}
            </h2>
            <div className="w-24 h-px bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png',
                label: ts('products.silver.label', 'Bạc S925'),
                title: ts('products.silver.title', 'Vòng Tay Tỳ Hưu'),
                desc: ts('products.silver.desc', 'Chế tác từ bạc S925 nguyên chất, mang năng lượng bảo hộ và tài lộc.'),
              },
              {
                image: 'https://vienchibao.com/wp-content/uploads/2025/07/12.png',
                label: ts('products.gold.label', 'Vàng 18K'),
                title: ts('products.gold.title', 'Nhẫn Vàng Điêu Khắc'),
                desc: ts('products.gold.desc', 'Đúc từ vàng 18K tinh luyện, từng đường nét được điêu khắc thủ công.'),
              },
              {
                image: '/images/knowledgeAboutJewelry.png',
                label: ts('products.gemstone.label', 'Đá Quý'),
                title: ts('products.gemstone.title', 'Đá Quý Tự Nhiên'),
                desc: ts('products.gemstone.desc', 'Tuyển chọn từ thiên nhiên, mỗi viên đá mang một năng lượng riêng biệt.'),
              },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/40 transition-all duration-500 cursor-default">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                  <p className="text-amber-400 text-xs tracking-widest uppercase font-semibold">{item.label}</p>
                  <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TINH THẦN SHOKUNIN (MỚI) ── */}
      <section className="py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-amber-500 tracking-[0.6em] text-xs font-semibold uppercase mb-4">
                  {ts('spirit.label', 'TRIẾT LÝ')}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  {ts('spirit.title', 'Tinh Thần')} <br />
                  <span className="text-amber-400 italic">Shokunin</span>
                </h2>
              </div>
              <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light">
                <p>
                  {ts('spirit.p1', 'Shokunin — tiếng Nhật có nghĩa là "người thợ thủ công" — không chỉ là một nghề nghiệp. Đó là triết lý sống: cống hiến toàn bộ tâm huyết vào từng tác phẩm, không ngừng hoàn thiện, không bao giờ thỏa hiệp với chất lượng.')}
                </p>
                <p>
                  {ts('spirit.p2', 'Tại Viên Chi Bảo, tinh thần này được HuyK mang về từ Nhật Bản và truyền lại cho từng thành viên. Mỗi đường chỉ, mỗi nét khắc đều là sự thể hiện của triết lý đó.')}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {['Integrity', 'Precision', 'Soul', 'Legacy'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 text-xs tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-4 text-[10rem] font-serif text-amber-500/10 leading-none select-none pointer-events-none">"</div>
              <div className="relative p-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-6">
                <p className="text-2xl font-serif text-stone-200 leading-relaxed italic font-light">
                  {ts('spirit.quote', '"Không có tác phẩm nào là hoàn hảo, nhưng ta phải hành động như thể mỗi tác phẩm là kiệt tác cuối cùng của đời mình."')}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-serif font-bold text-lg">H</div>
                  <div>
                    <p className="text-white font-medium text-sm">HuyK</p>
                    <p className="text-stone-500 text-xs">Founder & Master Craftsman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PHILOSOPHY / VALUES (GIỮ NGUYÊN) ── */}
      <section className="relative py-32 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('values.heading')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div key={index} className="p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-500">
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
        </div>
      </section>

      {/* ── 8. ĐỘI NGŨ PREVIEW (MỚI) ── */}
      <section className="py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.6em] text-xs font-semibold uppercase mb-4">
              THE ARTISANS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {ts('teamPreview.heading', 'Những Bàn Tay Tạo Nên Kỳ Tích')}
            </h2>
            <div className="w-24 h-px bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { name: 'Huy K', roleKey: 'team.members.0.position' },
              { name: 'Linh Thi', roleKey: 'team.members.1.position' },
              { name: 'Thanh Minh', roleKey: 'team.members.2.position' },
            ].map((member, i) => (
              <div key={member.name} className="group text-center space-y-5">
                <div className="relative mx-auto w-44 h-44 rounded-full overflow-hidden border-2 border-amber-500/20 group-hover:border-amber-500 transition-all duration-500 shadow-[0_0_0px_rgba(245,158,11,0)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                  <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                    <span className="text-5xl font-serif text-amber-400/50">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white">{member.name}</h3>
                  <p className="text-amber-400 text-xs tracking-widest mt-1 uppercase">
                    {t(member.roleKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-block px-10 py-4 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black font-bold transition-all duration-300 text-xs tracking-[0.3em] rounded-full"
            >
              {ts('teamPreview.button', 'XEM TOÀN BỘ ĐỘI NGŨ')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. CTA CUỐI (GIỮ NGUYÊN NỘI DUNG, BỌC THÊM VIDEO) ── */}
      {/* <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <video
          src="/images/noname.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#121212]" />
        <div className="relative z-10 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-amber-600/90 to-amber-400/90 p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(245,158,11,0.2)] mx-6">
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-8 italic">{t('cta.heading')}</h2>
          <p className="text-black/80 text-lg mb-12 max-w-2xl mx-auto font-medium">{t('cta.subheading')}</p>
          <Link href="/products" className="px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform tracking-widest text-xs">
            {t('cta.button')}
          </Link>
        </div>
      </section> */}

    </div>
  );
}
