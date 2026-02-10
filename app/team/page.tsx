"use client";
import React from 'react';
import Link from 'next/link';

export default function Team() {
  const members = [
    {
      id: 1,
      nameEn: 'Huy K',
      positionEn: 'Founder & Master Craftsman',
      bio: 'A goldsmith with over 10 years of experience. Having mastered the Japanese artisan spirit, he established a unique style that blends Vietnamese traditional beauty with modern precision.',
      expertise: ['Goldsmithing', 'Gemstone Processing', 'Artistic Design'],
    },
    {
      id: 2,
      nameEn: 'Linh Thi',
      positionEn: 'Design Director',
      bio: 'With a delicate aesthetic sensibility, she creates designs that give form to our clients’ deepest emotions. She prioritizes the harmony between traditional techniques and contemporary beauty.',
      expertise: ['Jewelry Design', 'CAD Modeling', 'Creative Direction'],
    },
    {
      id: 3,
      nameEn: 'Thanh Minh',
      positionEn: 'Senior Craftsman',
      bio: 'Specializing in high-precision processing through years of mastery. His dedication to detail and pursuit of perfection ensure that every work meets the highest quality standards.',
      expertise: ['Polishing', 'Stone Setting', 'Finishing'],
    },
    {
      id: 4,
      nameEn: 'Hoa Mai',
      positionEn: 'Quality Control Manager',
      bio: 'Dedicated to delivering excellence by inspecting every single piece with a rigorous eye. Her mission is to ensure that the trust our customers place in us is always honored.',
      expertise: ['Quality Inspection', 'Process Management', 'Client Relations'],
    },
    {
      id: 5,
      nameEn: 'Quang Tuan',
      positionEn: 'Certified Gemologist',
      bio: 'Responsible for gemstone selection and appraisal. He identifies the innate beauty of materials and proposes the perfect stones for each unique creation.',
      expertise: ['Gem Appraisal', 'Material Sourcing', 'Quality Evaluation'],
    },
    {
      id: 6,
      nameEn: 'Thuy An',
      positionEn: 'Customer Experience',
      bio: 'Listening to your stories to provide the most personalized guidance. She is dedicated to ensuring a meaningful and special experience for every client through heartfelt service.',
      expertise: ['Client Relations', 'Bespoke Consultation', 'After-sales Care'],
    },
  ];

  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30 font-sans">
      
      {/* 1. HERO SECTION (Đồng bộ với Home) */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00]/20 via-transparent to-[#1a1a00] z-10"></div>
          {/* Bạn có thể thay src video khác hoặc dùng chung video noname.mp4 nếu muốn */}
          <video
            src="/images/noname.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          ></video>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light uppercase italic">Vien Chi Bao Artisans</div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-amber-50 leading-tight tracking-[0.05em] italic">
            The Hands That <br /> Create Soul
          </h1>
          <p className="text-amber-100/70 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
            A collective of passionate experts dedicated to crafting excellence for our cherished clients.
          </p>
        </div>
      </section>

      {/* 2. TEAM MEMBERS (Grid theo style Philosophy của Home) */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div 
                key={member.id}
                className="group relative p-1 bg-white/[0.02] backdrop-blur-md border border-amber-900/20 hover:border-amber-500/40 transition-all duration-700 rounded-sm"
              >
                {/* Avatar Area */}
                <div className="h-64 bg-amber-950/20 flex items-center justify-center overflow-hidden border-b border-amber-900/10">
                  <div className="w-24 h-24 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500 transition-all duration-1000">
                    <span className="font-serif text-4xl text-amber-500/60 italic">
                      {member.nameEn.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="text-center">
                    <p className="text-[10px] tracking-[0.3em] text-amber-600/60 uppercase mb-2 italic">
                      {member.positionEn}
                    </p>
                    <h3 className="font-serif text-2xl text-amber-50 tracking-wide italic">
                      {member.nameEn}
                    </h3>
                  </div>

                  <p className="text-sm text-amber-100/50 leading-relaxed font-light text-justify min-h-[100px]">
                    {member.bio}
                  </p>

                  <div className="pt-4 border-t border-amber-900/20">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-[9px] bg-amber-500/5 text-amber-200/50 border border-amber-500/10 rounded-sm uppercase tracking-tighter"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CULTURE SECTION (Style Core Values của Home) */}
      <section className="relative py-32 bg-[#151500]/50 border-y border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase italic">Working Environment</div>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">The Artisan Culture</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Continuous Learning", desc: "We foster an environment of constant growth, constantly mastering new techniques and refining our craft." },
              { title: "Harmonious Teamwork", desc: "Mutual respect and seamless collaboration define our culture. We believe in collective creativity." },
              { title: "Artisan Spirit", desc: "Inheriting the Japanese 'Shokunin' spirit, we pursue perfection without compromise." },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-16 h-16 mx-auto border border-amber-500/20 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors duration-500">
                  <div className="w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                </div>
                <h3 className="text-lg font-serif text-amber-200 tracking-[0.2em] italic uppercase">{item.title}</h3>
                <p className="leading-relaxed text-sm text-amber-100/60 font-light italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN US CTA (Style Button của Home) */}
      <section className="relative py-32 bg-[#1a1a00]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-16 border border-amber-900/20 bg-white/[0.01] backdrop-blur-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-900/5 blur-3xl rounded-full"></div>
             
             <h2 className="text-3xl md:text-5xl font-serif text-amber-50 mb-8 italic">Join Our Vision</h2>
             <p className="text-amber-100/50 font-light mb-12 max-w-xl mx-auto">
               We are always looking for passionate souls to join our journey 
               and shape the future of handcrafted elegance.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all duration-300 text-xs tracking-[0.2em] rounded-sm shadow-xl">
                  VIEW OPENINGS
                </button>
                <Link href="/contact" className="text-amber-500 text-xs tracking-widest border-b border-amber-500/30 pb-1 hover:text-amber-400 transition-colors">
                  GET IN TOUCH
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}