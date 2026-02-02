'use client'

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
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '私たちについて' },
    { href: '/products', label: 'サービス' },
    { href: '/team', label: 'チーム' },
    { href: '/contact', label: 'お問い合わせ' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-sakura-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Minimalist */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* <div className="w-10 h-10 border-2 border-sakura-500 rounded-sm flex items-center justify-center transition-transform group-hover:rotate-45 duration-500">
                <span className="font-display text-xl font-bold text-sakura-500 transition-transform group-hover:-rotate-45 duration-500">
                  桜
                </span>
              </div> */}
              <img className='logo-nav' src="/images/logo vcb.png" alt="Logo VCB" width="80" height="80" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-medium text-indigo-900">
                TechCore
              </span>
              {/* <span className="text-xs text-indigo-600 tracking-wider font-light">
                さくらテック
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-indigo-800 hover:text-sakura-500 font-light transition-colors relative group text-sm tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-sakura-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Minimal */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-indigo-900 p-2"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Minimal */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="pt-4 space-y-4 border-t border-sakura-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-indigo-800 hover:text-sakura-500 font-light transition-colors"
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
