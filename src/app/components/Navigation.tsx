'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="container h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className={`text-3xl font-sans font-semibold tracking-tight ${
              pathname === '/' ? 'text-accent' : 'text-custom-text'
            } hover:text-accent transition-colors duration-300`}
          >
            Second Souffle
          </Link>
        </div>

        {/* Menu desktop */}
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

        {/* Bouton hamburger */}
        <button 
          className="block md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-custom-bg border-t border-[#E5E5E5]">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              href="/pourquoi-art" 
              className={`nav-link ${pathname === '/pourquoi-art' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi l'art
            </Link>
            <Link 
              href="/pourquoi-second-souffle" 
              className={`nav-link ${pathname === '/pourquoi-second-souffle' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi Second Souffle
            </Link>
            <Link 
              href="/nos-services" 
              className={`nav-link ${pathname === '/nos-services' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nos services
            </Link>
            <Link 
              href="/devenir-partenaire" 
              className={`nav-link ${pathname === '/devenir-partenaire' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir partenaire
            </Link>
            <Link 
              href="/investir" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              INVESTIR
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 