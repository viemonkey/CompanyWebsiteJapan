import { Card } from "@heroui/card";

export default function About() {
  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30 font-sans">
      
      {/* Hero Section - Đồng bộ padding và style với Home */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Thêm các đốm sáng (Glow) giống trang Home để tạo chiều sâu */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[120px] rounded-full z-0"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <p className="text-xs tracking-[0.5em] text-amber-500/50 mb-6 uppercase font-light">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-amber-50 leading-tight tracking-[0.05em] italic">
            About Us
          </h1>
          
          <div className="w-full max-w-[1000px] mx-auto">
            <Card className="bg-transparent border-none shadow-none" style={{ overflow: 'hidden'}}>
              <img 
                src="/images/huyk.jpg" 
                alt="Master Craftsman HuyK" 
                className="w-full mb-8 transition-all duration-1000 hover:scale-105 border border-amber-900/20" 
                style={{borderRadius: 4}} // Bo góc nhẹ hơn để sang trọng như Home
              />
            </Card>

            <div className="divider-line mb-12 bg-amber-500/20 h-[1px] w-24 mx-auto"></div>
            
            <p className="text-base md:text-lg text-amber-100/70 leading-relaxed font-light text-justify w-full">
              HuyK is a master goldsmith with over 10 years of experience, driven by a profound passion for handcrafted jewelry. My journey began with an obsession for fine details—where metal, gemstones, and emotions converge to create living art.
              <br /><br />
              Having had the privilege to study under Japanese masters, I inherited the spirit of **"Shokunin"** (Artisan)—a relentless pursuit of perfection and steadfast dedication. This philosophy became the foundation of my workshop in Vietnam, ensuring every piece is born from the hands, heart, and pride of a craftsman. My dream is to showcase the beauty of Vietnamese hand-forged jewelry to the world.
              <br /><br />
              To me, jewelry is not merely an ornament; it is a personal narrative. It is an emotional journey between the creator and the owner—each ring, necklace, and bracelet carries its own soul, reflecting memories, love, and aspirations.
              <br /><br />
              <span className="text-amber-500 italic font-medium">
                Today, my creations under the name HuyK, through VIENCHIBAO Global, are reaching international horizons, fulfilling the vision of spreading handcrafted excellence globally.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Sử dụng màu bg-black/40 giống Trust Section ở Home */}
      <section className="relative py-32 bg-black/40 border-y border-amber-900/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div> 
                <p className="text-xs tracking-[0.4em] text-amber-600/40 mb-4 uppercase">Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">
                  Our Mission
                </h2>
                <div className="divider-line mx-0 mt-6 bg-amber-900/30 h-[1px] w-16"></div>
              </div>
              <div className="space-y-6 text-amber-100/60 leading-relaxed font-light text-sm md:text-base">
                <p>
                  Built upon the Japanese "Artisan Spirit," HuyK fuses sophisticated technique with raw passion to create bespoke jewelry that gives form to each client's unique story.
                </p>
                <p>
                  Our mission is to weave human narratives through the medium of jewelry, sharing the exquisite beauty of skilled Vietnamese craftsmanship with the global community.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Card nội dung khớp với style Philosophy ở Home */}
              <div className="p-10 space-y-8 bg-white/[0.02] border border-amber-900/20 rounded-sm shadow-2xl backdrop-blur-md">
                {[
                  { title: "Integrity", desc: "From material selection to the final polish, we accept no compromises. Absolute sincerity is our commandment." },
                  { title: "Refinement", desc: "As Shokunin, we constantly pursue perfection, refining traditional techniques to create masterpieces with a soul." },
                  { title: "Co-Creation", desc: "Jewelry is a mirror reflecting your memories. Through dialogue, we craft the ultimate narrative together." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <h3 className="text-lg font-light text-amber-200 tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-amber-100/40 leading-relaxed font-light text-xs pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Giữ màu gốc #1a1a00 */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-amber-600/40 mb-4 uppercase">Principles</p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">Core Values</h2>
            <div className="mt-6 divider-line bg-amber-900/20 h-[1px] w-16 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Simplicity", title: "Refined Simplicity", desc: "Beauty resides in the essence. We strip away the unnecessary, pursuing the purest form of aesthetic grace." },
              { label: "Harmony", title: "Tradition & Innovation", desc: "Merging the Artisan Spirit with contemporary vision. We preserve ancient techniques while creating new value." },
              { label: "Spirit", title: "Handcrafted Heart", desc: "We breathe soul into every piece. We aspire to be a partner in giving shape to your most cherished memories." },
            ].map((item, index) => (
              <div key={index} className="group text-center p-10 bg-white/[0.02] border border-amber-900/20 hover:border-amber-500/40 transition-all duration-700">
                <div className="text-xl font-serif mb-8 text-amber-500/60 italic">{item.label}</div>
                <h3 className="text-lg font-light mb-6 text-amber-200 tracking-[0.2em] uppercase">{item.title}</h3>
                <p className="leading-relaxed text-sm text-amber-100/60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History - Sử dụng bg-[#151500]/50 giống Philosophy Section ở Home */}
      <section className="relative py-32 bg-[#151500]/50 border-t border-amber-900/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-amber-600/40 mb-4 uppercase">Timeline</p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">Our Journey</h2>
          </div>

          <div className="space-y-16">
            {[
              { year: "2015", title: "The Apprenticeship", desc: "Captivated by Japanese jewelry-making techniques, training began under master artisans." },
              { year: "2018", title: "Defining the Style", desc: "Establishing a unique identity merging Shokunin spirit with Vietnamese aesthetics." },
              { year: "2021", title: "HuyK Workshop Founded", desc: "Establishment of our dedicated workshop, beginning our international expansion." },
              { year: "Present", title: "Towards the Future", desc: "Continuing to deliver soul-infused creations to clients worldwide through VIENCHIBAO Global." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-12 items-start group">
                <div className="flex-shrink-0 w-24 md:w-32 text-right">
                  <span className="font-serif text-2xl md:text-3xl text-amber-500/80 italic">{item.year}</span>
                </div>
                <div className="flex-1 pt-2 border-l border-amber-900/30 pl-8 group-last:border-transparent">
                  <h3 className="text-lg font-light text-amber-200 mb-3 tracking-widest uppercase">{item.title}</h3>
                  <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}