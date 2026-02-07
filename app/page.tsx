import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30">
      {/* Background layer with subtle gold gradient effect */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{ backgroundImage: "url('/images/img-background.jpeg')" }}
        ></div>
        
        {/* Gradient overlay to darken background for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00] via-transparent to-[#1a1a00]"></div>

        {/* Ambient glows and texture */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light">
            VIENCHIBAO
          </div>

          <h1 className="text-5xl md:text-6xl font-light mb-8 text-amber-50 leading-tight tracking-[0.1em]">
            Crafting the Soul of <br className="hidden md:block" /> Timeless Radiance
          </h1>

          <p className="text-amber-100/60 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
            We believe true beauty is not born from perfection—<br className="hidden md:block" />
            it emerges from the heart and soul infused into every delicate handcrafted detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/services"
              className="px-10 py-3 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all duration-300 text-xs tracking-[0.2em] rounded-sm shadow-lg shadow-amber-900/40"
            >
              OUR SERVICES
            </Link>
            <Link 
              href="/about"
              className="px-10 py-3 border border-amber-600/50 text-amber-500 hover:bg-amber-600/10 transition-all duration-300 text-xs tracking-[0.2em] rounded-sm"
            >
              OUR STORY
            </Link>
          </div>
        </div>

        {/* Decorative particles */}
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse"></div>
        <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-amber-200 rounded-full opacity-40"></div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-4 border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase">Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-light text-amber-50 tracking-widest">
              OUR VALUES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 ">
            {[
              { 
                kanji: "Simplicity", 
                title: "SIMPLICITY", 
                desc: "Discovering the essence by stripping away the unnecessary. True value lies in simplicity." 
              },
              { 
                kanji: "Harmony", 
                title: "HARMONY", 
                desc: "Technique and humanity, tradition and innovation. A balanced coexistence of all elements." 
              }, 
              { 
                kanji: "Spirit", 
                title: "SPIRIT", 
                desc: "Infusing every task with heart and soul. Sincerity is the foundation of lasting trust." 
              },
            ].map((item, index) => (
              <div key={index} className="group text-center p-10 bg-amber-950/20 backdrop-blur-md rounded-sm border border-amber-900/30 hover:border-amber-500/40 transition-all duration-500">
                <div className="text-2xl font-serif mb-8 text-amber-500/80 group-hover:scale-110 transition-transform duration-500 italic">
                    {item.kanji}
                </div>
                <h3 className="text-xl font-light mb-6 text-amber-200 tracking-widest">{item.title}</h3>
                <p className="leading-relaxed text-sm text-amber-100/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}