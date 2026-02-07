import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
            style={{ backgroundImage: "url('/images/img-bgrHuyk.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00]/20 via-transparent to-[#1a1a00]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-900/10 blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light uppercase">Vien Chi Bao</div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-amber-50 leading-tight tracking-[0.05em] italic">
            Crafting the Soul of <br /> Timeless Radiance
          </h1>
          <p className="text-amber-100/70 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
            We believe true beauty is not born from perfection— 
            it emerges from the heart and soul infused into every delicate handcrafted detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all duration-300 text-xs tracking-[0.2em] rounded-sm shadow-xl">
              EXPLORE COLLECTIONS
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST & POLICIES */}
      <section className="relative py-12 bg-black/40 border-y border-amber-900/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Premium Silver", detail: "S925 & S990 Quality" },
              { label: "Lifetime Warranty", detail: "Free cleaning & polishing" },
              { label: "Global Delivery", detail: "Safe & Secure Shipping" },
              { label: "Expert Support", detail: "Dedicated consulting" },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-amber-500 text-sm font-medium mb-1 tracking-wider">{item.label}</div>
                <div className="text-amber-100/40 text-[10px] uppercase tracking-widest">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES - FIXED IMAGES */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif text-amber-50 mb-4 italic">Handcrafted Masterpieces</h2>
              <p className="text-amber-100/50 font-light text-sm">Every collection is a journey towards discovering the essence of self and spirituality.</p>
            </div>
            <Link href="/products" className="text-amber-500 text-xs tracking-widest border-b border-amber-500/30 pb-1">
              VIEW ALL CATEGORIES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Spiritual Jewelry", img: "url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=600')" },
              { name: "Silver Bracelets", img: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600')" },
              { name: "Prajna Rings", img: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600')" },
            ].map((cat, i) => (
              <div key={i} className="group relative h-[400px] overflow-hidden bg-amber-950/40">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60" style={{ backgroundImage: cat.img }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-xl font-light text-white tracking-widest uppercase">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className="relative py-32 px-4 bg-[#151500]/50 border-t border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase">Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 italic">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { kanji: "Simplicity", title: "SIMPLICITY", desc: "Discovering the essence by stripping away the unnecessary. True value lies in simplicity." },
              { kanji: "Harmony", title: "HARMONY", desc: "A balanced coexistence of technique and humanity, tradition and innovation." }, 
              { kanji: "Spirit", title: "SPIRIT", desc: "Infusing every piece with sincerity and soul to build lasting trust." },
            ].map((item, index) => (
              <div key={index} className="group text-center p-10 bg-white/[0.02] backdrop-blur-md border border-amber-900/20 hover:border-amber-500/40 transition-all duration-700">
                <div className="text-xl font-serif mb-8 text-amber-500/60 italic">{item.kanji}</div>
                <h3 className="text-lg font-light mb-6 text-amber-200 tracking-[0.2em]">{item.title}</h3>
                <p className="leading-relaxed text-sm text-amber-100/60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}