'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="container mx-auto h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-2xl md:text-3xl font-sans font-semibold tracking-tight ${
            pathname === '/' ? 'text-accent' : 'text-custom-text'
          } hover:text-accent transition-colors duration-300`}
        >
          Second Souffle
        </Link>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/pourquoi-art" 
            className={`nav-link ${pathname === '/pourquoi-art' ? 'nav-link-active' : ''}`}
          >
            Pourquoi l'art
          </Link>
          <Link 
            href="/pourquoi-second-souffle" 
            className={`nav-link ${pathname === '/pourquoi-second-souffle' ? 'nav-link-active' : ''}`}
          >
            Pourquoi Second Souffle
          </Link>
          <Link 
            href="/nos-services" 
            className={`nav-link ${pathname === '/nos-services' ? 'nav-link-active' : ''}`}
          >
            Nos services
          </Link>
        </div>

        {/* Liens secondaires desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/devenir-partenaire" 
            className={`nav-link text-lg ${pathname === '/devenir-partenaire' ? 'nav-link-active' : ''}`}
          >
            Devenir partenaire
          </Link>
          <Link 
            href="/investir" 
            className="btn-primary"
          >
            INVESTIR
          </Link>
        </div>

        {/* Navigation mobile */}
        <div className="flex md:hidden items-center gap-4">
          <Link 
            href="/investir" 
            className="btn-primary text-sm"
          >
            INVESTIR
          </Link>
          
          {/* Bouton hamburger */}
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col justify-center items-center gap-1.5">
              <span className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 md:hidden bg-custom-bg border-t border-[#E5E5E5] shadow-lg">
          <div className="container mx-auto py-4 flex flex-col gap-4 px-4">
            <Link 
              href="/pourquoi-art" 
              className={`nav-link text-lg ${pathname === '/pourquoi-art' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi l'art
            </Link>
            <Link 
              href="/pourquoi-second-souffle" 
              className={`nav-link text-lg ${pathname === '/pourquoi-second-souffle' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi Second Souffle
            </Link>
            <Link 
              href="/nos-services" 
              className={`nav-link text-lg ${pathname === '/nos-services' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nos services
            </Link>
            <Link 
              href="/devenir-partenaire" 
              className={`nav-link text-lg ${pathname === '/devenir-partenaire' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 