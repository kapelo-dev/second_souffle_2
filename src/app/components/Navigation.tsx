'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 h-20">
        <div className="relative flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-semibold"
          >
            Second Souffle
          </Link>

          {/* Navigation Links - Large Screen Only */}
          <div className="absolute hidden lg:flex items-center justify-center left-1/2 transform -translate-x-1/2">
            <Link href="/pourquoi-art" className="nav-link mx-4">Pourquoi l'art</Link>
            <Link href="/pourquoi-second-souffle" className="nav-link mx-4">Pourquoi Second Souffle</Link>
            <Link href="/nos-services" className="nav-link mx-4">Nos services</Link>
          </div>

          {/* Right Side Links - Large Screen Only */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/devenir-partenaire" className="nav-link">Devenir partenaire</Link>
            <Link href="/investir" className="btn-primary">INVESTIR</Link>
          </div>

          {/* Hamburger - Small Screen Only */}
          <button
            className="flex lg:hidden flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all my-1 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-custom-bg border-t border-[#E5E5E5] lg:hidden">
              <div className="px-4 py-4 space-y-4">
                <Link href="/pourquoi-art" className="block nav-link">Pourquoi l'art</Link>
                <Link href="/pourquoi-second-souffle" className="block nav-link">Pourquoi Second Souffle</Link>
                <Link href="/nos-services" className="block nav-link">Nos services</Link>
                <Link href="/devenir-partenaire" className="block nav-link">Devenir partenaire</Link>
                <Link href="/investir" className="block btn-primary text-center">INVESTIR</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 