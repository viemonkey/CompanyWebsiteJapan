'use client'
import TranslateMultiLanguage from './TranslateMultiLanguage'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          // Khi cuộn xuống: Nền trắng mờ, nhưng bạn có thể giữ chữ trắng hoặc đổi sang tối tùy thích
          // Ở đây tôi để nền tối hơn một chút để chữ trắng luôn nổi bật
          ? 'bg-black/60 backdrop-blur-md shadow-sm border-b border-white/10'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img className='logo-nav' src="/images/logo vcb.png" alt="Logo VCB" width="80" height="80" />
            </div>
          </Link>

         
          {/* Desktop Navigation - Đã chuyển sang text-white */}
          <div className="hidden md:flex items-center space-x-12">
            {/* 1. Đây là nơi vẽ ra các chữ Home, About Us, Services... */}
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white/80 font-light transition-colors relative group text-sm tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* 2. ĐÂY LÀ PHẦN MỚI: Đặt quả cầu dịch sang bên phải các chữ trên */}
            <div className="pl-4 border-l border-white/20">
              <TranslateMultiLanguage />
            </div>
          </div>



          {/* Mobile Menu Button - Đã chuyển sang text-white */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Đã chuyển sang text-white */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="pt-4 space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // CHỖ THAY ĐỔI: text-white
                className="block py-2 text-white hover:text-white/70 font-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}