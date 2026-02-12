'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Định nghĩa kiểu dữ liệu cho nội dung Story
interface StoryContent {
  id: number;
  title: string;
  description: string[];
  image: string;
  part: string;
}

const STORY_DATA: StoryContent[] = [
  {
    id: 1,
    part: "Part 1 of 3",
    title: "Our Story",
    image: "/images/knowledgeAboutJewelry.png",
    description: [
      "Vien Chi Bao specializes in premium jewelry—crafted from S925 silver, gold, gemstones, and natural agarwood—deeply rooted in Oriental art, Feng Shui, and spirituality.",
      "Beyond mere adornment, each piece serves as a personal 'amulet,' bringing luck, peace, and positive energy to its wearer."
    ]
  },
  {
    id: 2,
    part: "Part 2 of 3",
    title: "A Heritage In Bloom",
    image: "https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png", // Thay bằng ảnh của bạn
    description: [
      "Meticulously handcrafted, every design—from the Heart Sutra to the sacred Lotus—carries its own unique story and inner belief.",
      "With over a decade of excellence, we have proudly served thousands, establishing a distinguished presence in Vietnam’s spiritual jewelry community."
    ]
  },
  {
    id: 3,
    part: "Part 3 of 3",
    title: "A Heritage In Bloom",
    image: "https://vienchibao.com/wp-content/uploads/2025/07/12.png", // Thay bằng ảnh của bạn
    description: [
      "Meticulously handcrafted, every design—from the Heart Sutra to the sacred Lotus—carries its own unique story and inner belief.",
      "With over a decade of excellence, we have proudly served thousands, establishing a distinguished presence in Vietnam’s spiritual jewelry community."
    ]
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % STORY_DATA.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + STORY_DATA.length) % STORY_DATA.length);
  };

  const currentStory = STORY_DATA[currentIndex];

  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/images/noname.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00]/20 via-transparent to-[#1a1a00]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light uppercase">Vien Chi Bao</div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-amber-50 leading-tight italic">
            Crafting the soul of <br /> Timeless Radiance
          </h1>
          <Link href="/products" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all text-xs tracking-[0.2em] rounded-sm">
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </section>

      {/* 2. SECTION: STORY (DÙNG TSX & STATE) */}
      <section className="relative py-24 bg-[#1a1a00]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700">

            {/* Ảnh bên trái - Sẽ thay đổi theo State */} 
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border border-amber-900/20">
                <div
                  key={currentStory.image} // Key giúp trigger animation khi đổi ảnh
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-in fade-in zoom-in-95"
                  style={{ backgroundImage: `url('${currentStory.image}')` }}
                ></div>
              </div>
            </div>

            {/* Chữ bên phải */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <p className="text-amber-600/60 text-xs tracking-[0.3em] uppercase transition-opacity duration-500">
                  {currentStory.part}
                </p>
                <h2 className="text-3xl md:text-5xl font-serif text-amber-50 tracking-wider">
                  {currentStory.title}
                </h2>
              </div>

              <div className="min-h-[200px] space-y-6 text-amber-100/70 text-sm md:text-base leading-relaxed font-light text-justify border-t border-amber-900/20 pt-8 transition-opacity duration-500">
                {currentStory.description.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* BỘ NÚT ĐIỀU HƯỚNG */}
              <div className="flex items-center gap-8 pt-4">
                <button 
                  onClick={prevStory}
                  className="group flex items-center transition-all duration-300 active:scale-90"
                >
                  <ChevronLeft 
                    className="w-6 h-6 text-amber-100/20 group-hover:text-amber-500 group-hover:-translate-x-1 transition-all" 
                    strokeWidth={1} 
                  />
                </button>
                <button 
                  onClick={nextStory}
                  className="group flex items-center transition-all duration-300 active:scale-90"
                >
                  <ChevronRight 
                    className="w-6 h-6 text-amber-100/20 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" 
                    strokeWidth={1} 
                  />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="relative py-32 px-4 bg-[#151500]/50 border-t border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase">Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "SIMPLICITY", desc: "Discovering the essence by stripping away the unnecessary." },
              { title: "HARMONY", desc: "A balanced coexistence of technique and humanity." },
              { title: "SPIRIT", desc: "Infusing every piece with sincerity and soul." },
            ].map((item, index) => (
              <div key={index} className="p-10 bg-white/[0.02] border border-amber-900/20 hover:border-amber-500/40 transition-all duration-700">
                <h3 className="text-lg font-light mb-6 text-amber-200 tracking-[0.2em]">{item.title}</h3>
                <p className="leading-relaxed text-sm text-amber-100/60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}