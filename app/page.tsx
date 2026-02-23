'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Gem, ArrowDown } from 'lucide-react';

const STORY_DATA = [
  {
    id: 1,
    part: "Part 1 of 3",
    title: "The Genesis",
    image: "/images/knowledgeAboutJewelry.png",
    description: [
      "Vien Chi Bao specializes in premium jewelry—crafted from S925 silver, gold, gemstones, and natural agarwood.",
      "Beyond mere adornment, each piece serves as a personal 'amulet,' bringing luck and positive energy."
    ]
  },
  {
    id: 2,
    part: "Part 2 of 3",
    title: "Masterful Craftsmanship",
    image: "https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png",
    description: [
      "Every design is meticulously handcrafted by master artisans with decades of experience.",
      "We blend ancient metallurgy with modern precision to ensure flawless quality."
    ]
  },
  {
    id: 3,
    part: "Part 3 of 3",
    title: "Global Vision",
    image: "https://vienchibao.com/wp-content/uploads/2025/07/12.png",
    description: [
      "Established in Vietnam, we are now expanding to bring Oriental wisdom to the modern world.",
      "Our mission is to share timeless elegance through every handcrafted detail."
    ]
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % STORY_DATA.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + STORY_DATA.length) % STORY_DATA.length);

  return (
    <div className="bg-[#121212] min-h-screen text-stone-100 selection:bg-amber-200/30 font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
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
            <div className="text-amber-400 tracking-[0.8em] text-xs font-semibold uppercase drop-shadow-md" translate='no'>
              Vien Chi Bao Global LLC
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight italic font-light drop-shadow-2xl">
              Crafting the Soul of <br />
              <span className="text-amber-400 italic">Timeless Radiance</span>
            </h1>
          </div>

          <Link href="/products" className="inline-block mt-8 px-12 py-5 bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all text-xs tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            EXPLORE COLLECTIONS
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="relative py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img
                  key={STORY_DATA[currentIndex].image}
                  src={STORY_DATA[currentIndex].image}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                  alt="Story"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-amber-500 font-bold text-sm tracking-widest">{STORY_DATA[currentIndex].part}</p>
                <h2 className="text-5xl font-serif text-white">{STORY_DATA[currentIndex].title}</h2>
              </div>
              <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light border-l-2 border-amber-500/30 pl-8">
                {STORY_DATA[currentIndex].description.map((p, i) => <p key={i}>{p}</p>)}
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

      {/* 3. PHILOSOPHY SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "INTEGRITY", icon: <ShieldCheck />, desc: "Certified materials and total transparency." },
              { title: "SAFETY", icon: <Sparkles />, desc: "Hypoallergenic and skin-safe premium metals." },
              { title: "ARTISTRY", icon: <Gem />, desc: "Handcrafted souls in every single detail." },
            ].map((item, index) => (
              <div key={index} className="p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-500">
                <div className="inline-block p-4 rounded-full bg-amber-500/10 mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-amber-500" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-widest">{item.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-amber-600 to-amber-400 p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(245,158,11,0.2)]">
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-8 italic">Bring Home Your Amulet</h2>
          <p className="text-black/80 text-lg mb-12 max-w-2xl mx-auto font-medium">Discover jewelry that resonates with your energy and elevates your spirit.</p>
          <Link href="/contact" className="px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform tracking-widest text-xs">
            BOOK A PRIVATE CONSULTATION
          </Link>
        </div>
      </section>

    </div>
  );
}
