'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#FAF9F6] z-50 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Bar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-sans font-semibold tracking-tight">
            <span className="text-amber-400">Second</span>
            <span className="text-amber-400">Souffle</span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-8 text-lg">
              <Link href="/pourquoi-art" className="text-black hover:text-amber-400 transition-colors">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="text-black hover:text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="text-black hover:text-amber-400 transition-colors">Nos services</Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/devenir-partenaire" className="text-black hover:text-amber-400 transition-colors text-lg">Devenir partenaire</Link>
              <Link href="/investir" className="bg-black text-white px-6 py-2 text-lg font-semibold hover:bg-amber-400 transition-colors">INVESTIR</Link>
            </div>
          </div>

          {/* Hamburger Button - Visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden w-8 h-8"
            aria-label="Menu"
          >
            <div className="w-6 h-5 mx-auto flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-[#FAF9F6] border-t border-[#E5E5E5] shadow-lg">
            <div className="py-4 space-y-4">
              <Link 
                href="/pourquoi-art" 
                className="block px-4 py-2 text-black hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi l'art
              </Link>
              <Link 
                href="/pourquoi-second-souffle" 
                className="block px-4 py-2 text-black hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi Second Souffle
              </Link>
              <Link 
                href="/nos-services" 
                className="block px-4 py-2 text-black hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos services
              </Link>
              <Link 
                href="/devenir-partenaire" 
                className="block px-4 py-2 text-black hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir partenaire
              </Link>
              <Link 
                href="/investir" 
                className="block mx-4 py-2 bg-black text-white text-center hover:bg-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                INVESTIR
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 