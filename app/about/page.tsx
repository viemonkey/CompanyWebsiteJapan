'use client';
import React from 'react';
import { Sparkles, ShieldCheck, Gem, Compass, ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/workshop-bg.jpg')] bg-cover bg-center opacity-10 grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0f0f0f]"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-900/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="animate-fade-in">
            <div className="mb-6 text-amber-500/60 tracking-[0.6em] text-[10px] uppercase font-light">
              Master Artisan Vien Chi Bao
            </div>
            
            <h1 className="text-4xl md:text-[54px] font-serif italic mb-10 text-white leading-[1.4] font-light tracking-wide">
              The Hands That <br /> 
              <span className="text-amber-500 not-italic font-normal">Shape the Soul</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-stone-500 text-[11px] tracking-[0.2em] uppercase leading-[2] font-light italic">
              "Each masterpiece tells a unique story, embedding faith and profound spiritual values 
              for our cherished customers."
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* 2. SPLIT CONTENT SECTION */}
      <section className="relative py-32 border-t border-white/5 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-[9px] tracking-[0.4em] text-amber-600/60 uppercase font-bold">Artisan HuyK</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">Our Mission</h2>
                <div className="h-[1px] w-12 bg-amber-600/30"></div>
              </div>

              <div className="space-y-8 text-stone-400 text-[14px] leading-[2] font-light italic text-justify border-l border-amber-500/10 pl-8">
                <p>
                  HuyK is a master goldsmith with over a decade of experience, driven by a profound passion for handcrafted jewelry. My journey began with an obsession for the finest details.
                </p>
                <p>
                  Trained by Japanese masters, I inherited the "Shokunin" spirit — the relentless pursuit of perfection and unwavering dedication to the craft. This philosophy has become the cornerstone of my atelier in Vietnam.
                </p>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 border border-amber-900/10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                <img 
                  src="https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png" 
                  alt="Fine Craftsmanship" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION CARDS */}
      <section className="relative py-32 bg-[#141414] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-6">
             <div className="text-amber-600/40 text-[10px] tracking-[0.5em] uppercase font-bold">Our Philosophy</div>
             <h2 className="text-3xl font-serif italic text-white leading-relaxed">The Pillars of <br/> Master Craftsmanship</h2>
             <div className="h-[1px] w-16 bg-amber-500/20"></div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {[
              { title: "Integrity", icon: <ShieldCheck size={18} strokeWidth={1} />, desc: "Absolute transparency regarding the quality and weight of gold and silver." },
              { title: "Safety", icon: <Sparkles size={18} strokeWidth={1} />, desc: "Utilizing clean, nickel-free materials that are safe for all skin types." },
              { title: "Artistry", icon: <Gem size={18} strokeWidth={1} />, desc: "Each piece is a handcrafted masterpiece, meticulously forged with precision." },
              { title: "Spirit", icon: <Compass size={18} strokeWidth={1} />, desc: "Infusing soul and positive energy into every single design." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#0f0f0f] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{item.title}</h3>
                    <div className="w-4 h-[1px] bg-amber-900/30 group-hover:w-8 transition-all duration-500"></div>
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

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[9px] text-stone-600 tracking-[0.3em] uppercase">
          © 2026 VIEN CHI BAO GLOBAL LLC. THE ARTISAN JOURNEY.
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}