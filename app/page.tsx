import { style } from 'framer-motion/client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#1a1a00] min-h-screen text-amber-50 selection:bg-amber-500/30" style={{ backgroundImage: "url('/images/img-background.jpeg')" }}>
      {/* Lớp nền tối với hiệu ứng gradient vàng mờ (Sát với ảnh mẫu) */}
      <div className="fixed inset-0 z-0">
        {/* Nền tối chủ đạo */}
        <div className="absolute inset-0 bg-[#4d4712]"></div>
        
        {/* Các đốm sáng vàng mờ tạo chiều sâu */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-900/10 blur-[150px] rounded-full"></div>
        
        {/* Overlay texture nhẹ */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 text-amber-500/50 tracking-[0.5em] text-xs font-light">
            VIENCHIBAO
          </div>

          <h1 className="text-5xl md:text-6xl font-light mb-8 text-amber-50 leading-tight tracking-[0.1em]">
            心で綴る、唯一無二の輝き
          </h1>

          <p className="text-amber-100/60 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
            私たちは信じています。本当の美しさは、完璧さから生まれるものではなく——<br className="hidden md:block" />
            ひとつひとつの細やかな手仕事に込められた真心から生まれるものだと。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/services"
              className="px-10 py-3 bg-amber-600 hover:bg-amber-500 text-[#1a1a00] font-medium transition-all duration-300 text-xs tracking-[0.2em] rounded-sm shadow-lg shadow-amber-900/40"
            >
              サービス案内
            </Link>
            <Link 
              href="/about"
              className="px-10 py-3 border border-amber-600/50 text-amber-500 hover:bg-amber-600/10 transition-all duration-300 text-xs tracking-[0.2em] rounded-sm"
            >
              私たちについて
            </Link>
          </div>
        </div>

        {/* Decorative particles (Đốm vàng lấp lánh như ảnh) */}
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse"></div>
        <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-amber-200 rounded-full opacity-40"></div>
      </section>

      {/* Philosophy Section - Darkened */}
      <section className="relative py-32 px-4 border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-amber-600/40 text-xs tracking-[0.4em] mb-4 uppercase">Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-light text-amber-50 tracking-widest">
              私たちの哲学
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 ">
            {[
              { kanji: "簡", title: "簡素", desc: "本質を見極め、無駄を削ぎ落とす。シンプルさの中に真の価値がある" },
              { kanji: "調", title: "調和", desc: "技術と人、伝統と革新。すべてがバランスよく共存する。" }, 
              { kanji: "心", title: "心", desc: "一つひとつの仕事に心を込めて。誠実さが信頼を生む。" },
            ].map((item, index) => (
              <div key={index} className="group text-center p-10 bg-amber-950/20 backdrop-blur-md rounded-sm border border-amber-900/30 hover:border-amber-500/40 transition-all duration-500">
                <div className="text-5xl mb-8 text-amber-500/80 group-hover:scale-110 transition-transform duration-500">{item.kanji}</div>
                <h3 className="text-xl font-light mb-6 text-amber-200 tracking-widest">{item.title}</h3>
                <p className="leading-relaxed text-sm text-yellow-350">
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