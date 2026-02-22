"use client"
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-stone-200 relative overflow-hidden border-t border-white/5 pt-16 pb-8">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* CỘT 1: Thương hiệu & Giới thiệu (Sẽ được dịch) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 flex items-center justify-center border border-white/10 p-2 group-hover:border-amber-500/40 transition-all duration-500">
                  <img src="/images/logo vcb.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col" translate="no">
                  <span className="font-display text-xl tracking-[0.25em] font-light text-white uppercase">
                    VIENCHIBAO
                  </span>
                  <span className="text-[10px] text-amber-600 tracking-[0.4em] uppercase mt-1">
                    Global LLC
                  </span>
                </div>
              </div>
            </Link>
            {/* Viết bằng tiếng Anh để công cụ dịch tự động chuyển sang tiếng Việt/Nhật... */}
            <p className="text-stone-500 text-[11px] leading-relaxed max-w-xs tracking-wider uppercase opacity-80">
              High-end handcrafted jewelry, deeply imbued with soul and Vietnamese identity.
            </p>
          </div>

          {/* CỘT 2: Thông tin liên hệ (Tiêu đề dịch - Nội dung giữ nguyên) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase opacity-90 border-b border-white/10 pb-2 inline-block">
              Contact Information
            </h3>
            <div className="space-y-4 text-[12px] tracking-wide font-light">
              
              <div className="group">
                <span className="text-amber-600/70 text-[10px] uppercase block mb-1 tracking-widest">Company</span>
                <p className="text-stone-300 group-hover:text-white transition-colors duration-300 font-medium" translate="no">
                  Vien Chi Bao Global LLC
                </p>
              </div>
              
              <div className="group">
                <span className="text-amber-600/70 text-[10px] uppercase block mb-1 tracking-widest">Address</span>
                <p className="text-stone-400 leading-relaxed group-hover:text-stone-200 transition-colors duration-300" translate="no">
                  1500 N Grant ST STE <br/>Denver CO 80203 US
                </p>
              </div>

              <div className="group">
                <span className="text-amber-600/70 text-[10px] uppercase block mb-1 tracking-widest">Email</span>
                <a href="mailto:vienchi.jewelry@gmail.com" className="text-stone-400 group-hover:text-amber-500 transition-all duration-300 underline underline-offset-4 decoration-white/5" translate="no">
                  vienchi.jewelry@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CỘT 3: Menu khám phá (Sẽ được dịch) */}
          <div className="md:col-span-3 space-y-6 text-right md:text-left">
            <h3 className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase opacity-90">...</h3>
            <ul className="space-y-3">
              {[
                { label: "...", href: "#" },
                { label: "...", href: "#" },
                { label: "...", href: "#" },
                { label: "...", href: "#" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-stone-500 hover:text-amber-500 transition-all duration-300 font-light text-[12px] tracking-wide block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="flex gap-3 pt-4 justify-end md:justify-start" translate="no">
              {['Fb', 'Ig', 'Tk'].map((social) => (
                <a key={social} href="#" className="text-[10px] tracking-widest text-stone-400 hover:text-[#0a0a0a] hover:bg-white transition-all duration-500 uppercase border border-white/10 w-9 h-9 flex items-center justify-center rounded-full">
                  {social}
                </a>
              ))}
            </div> */}
          </div>
        </div>

        
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500/5 group transition-all duration-500 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
        <svg className="w-4 h-4 text-stone-500 group-hover:text-amber-500 group-hover:-translate-y-1 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}