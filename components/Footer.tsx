"use client"
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-stone-200 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 border border-amber-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <svg className="w-5 h-5 text-amber-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg tracking-[0.2em] font-extralight text-white">
                    VIENCHIBAO
                  </span>
                  <span className="text-[9px] text-amber-500/60 tracking-[0.3em] uppercase">
                    Atelier Jewelry
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-12">
            {[
              { title: "Khám phá", links: ["Bộ sưu tập", "Blog"] },
              { title: "Hỗ trợ", links: ["Giao nhận", "Liên hệ"] },
              { title: "Pháp lý", links: ["Bảo mật", "Điều khoản"] }
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-white text-[10px] font-medium mb-3 tracking-[0.2em] uppercase opacity-50">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-stone-500 hover:text-white transition-all duration-300 font-light text-[11px] tracking-wider block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-5">
            {['Fb', 'Ig', 'Tk'].map((social) => (
              <a key={social} href="#" className="text-[10px] tracking-widest text-stone-500 hover:text-amber-500 transition-colors uppercase border border-white/10 w-8 h-8 flex items-center justify-center rounded-full">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.15em] text-stone-600 uppercase">
          <p>© {currentYear} VIENCHIBAO ATELIER.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span>Hanoi, Vietnam</span>
            <span className="text-stone-800">|</span>
            <span>Crafted with Soul</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 z-50 mix-blend-difference"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}