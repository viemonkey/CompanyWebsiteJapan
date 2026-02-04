"use client"
import { use } from 'framer-motion/client'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#4d4712] from-amber-900/95 to-amber-950 text-amber-50 relative overflow-hidden">
    {/* <footer className="bg-gradient-to-b from-amber-900/95 to-amber-950 text-amber-50 relative overflow-hidden"> */}
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Company Info - Japanese Style */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block mb-6 group">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-sm transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-light text-amber-100 tracking-wide">
                    VIENCHIBAO
                  </span>
                  <span className="text-xs text-amber-300 tracking-[0.3em] font-light">
                    HuyK Jewelry
                  </span>
                </div>
              </div>
            </Link>
            
            <div className="w-12 h-px bg-amber-600"></div>
            
            <p className="text-amber-200/90 leading-relaxed max-w-md font-light text-sm">
              VIENCHIBAO – HuyK Jewelryをご覧頂いた皆さま、本当にありがとうございます。ここでは、すべての製品が職人の心を込めた手作りの結晶と、職人の知識が詰まっています。
            </p>
          </div>

          {/* カスタマーケア */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-medium text-amber-100 mb-6 tracking-[0.2em] uppercase">
              カスタマーケア
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  配送ポリシー
                </Link>
              </li>
              <li>
                <Link href="/return" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  返品および返金ポリシー
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  お支払い方法
                </Link>
              </li>
              <li>
                <Link href="/jewelry-care" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  ジュエリーのケア
                </Link>
              </li>
            </ul>
          </div>

          {/* 私たちについて */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-medium text-amber-100 mb-6 tracking-[0.2em] uppercase">
              私たちについて
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  ブログ
                </Link>
              </li>
            </ul>
          </div>

          {/* ポリシー */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-medium text-amber-100 mb-6 tracking-[0.2em] uppercase">
              ポリシー
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-amber-200/80 hover:text-amber-400 transition-colors font-light text-sm flex items-center group">
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2 group-hover:bg-amber-400 transition-colors"></span>
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          {/* ソーシャルメディア */}
          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-medium text-amber-100 mb-6 tracking-[0.2em] uppercase">
              フォロー
            </h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-amber-600/50 rounded-sm flex items-center justify-center hover:bg-amber-800/50 hover:border-amber-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-amber-200 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-amber-600/50 rounded-sm flex items-center justify-center hover:bg-amber-800/50 hover:border-amber-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-amber-200 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-amber-600/50 rounded-sm flex items-center justify-center hover:bg-amber-800/50 hover:border-amber-500 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-amber-200 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-amber-600/50 rounded-sm flex items-center justify-center hover:bg-amber-800/50 hover:border-amber-500 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 text-amber-200 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://line.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-amber-600/50 rounded-sm flex items-center justify-center hover:bg-amber-800/50 hover:border-amber-500 transition-all duration-300 group"
                aria-label="LINE"
              >
                <svg className="w-4 h-4 text-amber-200 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Minimalist Japanese Style */}
        <div className="border-t border-amber-800/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-300/80 text-xs font-light tracking-wide">
              © {currentYear} HUYK JEWELRY — 職人によるハンドメイドジュエリー
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-amber-300/60 font-light">Powered by</span>
              <a 
                href="https://shopify.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-300/80 hover:text-amber-400 transition-colors font-light"
              >
                Shopify
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - Japanese minimalist style */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-600/90 hover:bg-amber-500 text-white rounded-sm shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 z-50 backdrop-blur-sm border border-amber-400/20 group"
        aria-label="ページトップへ"
      >
        <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}