'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="w-full px-4">
        {/* Mobile Navigation Bar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-[#FFA500]">Second</span><br />
            <span className="text-[#FFA500]">Souffle</span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center"
          >
            <span className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black mt-1.5 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 bg-custom-bg border-t border-[#E5E5E5] shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link href="/pourquoi-art" className="block py-2">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="block py-2">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="block py-2">Nos services</Link>
              <Link href="/devenir-partenaire" className="block py-2">Devenir partenaire</Link>
              <Link href="/investir" className="block py-2 text-center bg-black text-white px-4">INVESTIR</Link>
            </div>
          </div>
        )}

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/pourquoi-art">Pourquoi l'art</Link>
            <Link href="/pourquoi-second-souffle">Pourquoi Second Souffle</Link>
            <Link href="/nos-services">Nos services</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/devenir-partenaire">Devenir partenaire</Link>
            <Link href="/investir" className="bg-black text-white px-4 py-2">INVESTIR</Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 