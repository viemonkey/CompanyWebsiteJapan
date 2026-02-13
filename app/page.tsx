'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Gem } from 'lucide-react';

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
    image: "https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png",
    description: [
      "Meticulously handcrafted, every design—from the Heart Sutra to the sacred Lotus—carries its own unique story and inner belief.",
      "With over a decade of excellence, we have proudly served thousands, establishing a distinguished presence in Vietnam’s spiritual jewelry community."
    ]
  },
  {
    id: 3,
    part: "Part 3 of 3",
    title: "A Heritage In Bloom",
    image: "https://vienchibao.com/wp-content/uploads/2025/07/12.png",
    description: [
      "Meticulously handcrafted, every design—from the Heart Sutra to the sacred Lotus—carries its own unique story and inner belief.",
      "With over a decade of excellence, we have proudly served thousands, establishing a distinguished presence in Vietnam’s spiritual jewelry community."
    ]
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % STORY_DATA.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + STORY_DATA.length) % STORY_DATA.length);

  const currentStory = STORY_DATA[currentIndex];

  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-transparent font-sans">

      {/* 1. HERO SECTION - Giao diện cũ */}
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
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light uppercase" translate="no">
            Vien Chi Bao Global LLC
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-amber-50 leading-tight italic">
            Crafting the soul of <br /> Timeless Radiance
          </h1>
          <Link href="/products" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all text-xs tracking-[0.2em] rounded-sm">
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </section>

      {/* 2. SECTION: STORY - Giao diện cũ */}
      <section className="relative py-24 bg-[#1a1a00]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border border-amber-900/20">
                <div
                  key={currentStory.image}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-in fade-in zoom-in-95"
                  style={{ backgroundImage: `url('${currentStory.image}')` }}
                ></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <p className="text-amber-600/60 text-xs tracking-[0.3em] uppercase">
                  {currentStory.part}
                </p>
                <h2 className="text-3xl md:text-5xl font-serif text-amber-50 tracking-wider">
                  {currentStory.title}
                </h2>
              </div>

              <div className="min-h-[200px] space-y-6 text-amber-100/70 text-sm md:text-base leading-relaxed font-light text-justify border-t border-amber-900/20 pt-8">
                {currentStory.description.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="flex items-center gap-8 pt-4">
                <button onClick={prevStory} className="group active:scale-90 transition-all">
                  <ChevronLeft className="w-6 h-6 text-amber-100/20 group-hover:text-amber-500 transition-all" strokeWidth={1} />
                </button>
                <button onClick={nextStory} className="group active:scale-90 transition-all">
                  <ChevronRight className="w-6 h-6 text-amber-100/20 group-hover:text-amber-500 transition-all" strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR TEAM - New Content */}
      <section className="relative py-24 bg-[#1a1a00] border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-amber-600/40 text-xs tracking-[0.4em] uppercase">Our Artisans</div>
              <h2 className="text-3xl md:text-5xl font-serif text-amber-50 italic leading-tight">
                The Master Hands <br /> Behind Every Soul
              </h2>
              <div className="space-y-4 text-stone-400 text-sm md:text-base leading-relaxed font-light text-justify border-l border-amber-600/30 pl-6">
                <p>
                  Our team is a collective of master artisans and visionary designers dedicated to the art of spiritual jewelry. 
                  With decades of combined experience, we preserve ancient techniques while embracing contemporary aesthetics.
                </p>
                <p>
                  At Vien Chi Bao, we don't just manufacture jewelry; we infuse each piece with sincerity and meticulous care, 
                  ensuring that every creation carries a unique energy for its owner.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-sm border border-amber-900/20 group">
                <img 
                  src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/588768492_122106653679098557_6203967222155187378_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wLsH_uQNs4UQ7kNvwGDKkNB&_nc_oc=AdlhYu1XEBJDcHlSXe1ogmmW4rhtXybUr0NlXYRA6tuzaPEBcXeFjI2AWoBO4yhr0eg&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=EMPbBBvugbSPpEcD4F-5cA&oh=00_AfsHUqg1TeofX6eLGhhHSG61uYawGt2mQMYJJISd4Siuvg&oe=6994AD29" 
                  alt="Our Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a00] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Crafted with Soul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION - Giữ giao diện có Icon đẹp nhất */}
      <section className="relative py-32 px-4 bg-[#151500]/50 border-t border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase">Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">Giá trị cốt lõi của chúng tôi</h2>
            <div className="w-24 h-[1px] bg-amber-600/30 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "CHÍNH TRỰC", 
                icon: <ShieldCheck className="w-8 h-8 mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500" />,
                desc: "We guarantee absolute transparency in gold purity and weight, ensuring the lasting trust of our customers.",
                highlight: "Pure Trust"
              },
              { 
                title: "SỰ AN TOÀN", 
                icon: <Sparkles className="w-8 h-8 mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500" />,
                desc: "Crafted with nickel-free and lead-free materials, ensuring complete safety for even the most sensitive skin.",
                highlight: "Ultimate Care"
              },
              { 
                title: "TAY NGHỀ", 
                icon: <Gem className="w-8 h-8 mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500" />,
                desc: "Each creation is a masterpiece, meticulously handcrafted to bring a unique soul to your jewelry collection.",
                highlight: "Soulful Artistry"
              },
            ].map((item, index) => (
              <div key={index} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden">
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-lg font-light mb-2 text-white tracking-[0.2em]">{item.title}</h3>
                  <p className="text-amber-600/60 text-[9px] italic mb-6 tracking-widest uppercase font-semibold" translate="no">
                    {item.highlight}
                  </p>
                  <p className="leading-relaxed text-sm text-stone-400 font-light text-center opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}