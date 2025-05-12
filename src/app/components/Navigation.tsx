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
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-semibold"
          >
            Second Souffle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pourquoi-art" className="nav-link">Pourquoi l'art</Link>
            <Link href="/pourquoi-second-souffle" className="nav-link">Pourquoi Second Souffle</Link>
            <Link href="/nos-services" className="nav-link">Nos services</Link>
            <Link href="/devenir-partenaire" className="nav-link">Devenir partenaire</Link>
            <Link href="/investir" className="btn-primary">INVESTIR</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-black transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-black transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 bg-custom-bg border-t border-[#E5E5E5]">
            <Link href="/pourquoi-art" className="block py-2 nav-link">Pourquoi l'art</Link>
            <Link href="/pourquoi-second-souffle" className="block py-2 nav-link">Pourquoi Second Souffle</Link>
            <Link href="/nos-services" className="block py-2 nav-link">Nos services</Link>
            <Link href="/devenir-partenaire" className="block py-2 nav-link">Devenir partenaire</Link>
            <Link href="/investir" className="block py-2 btn-primary text-center mt-2">INVESTIR</Link>
          </div>
        </div>
      )}
    </nav>
  )
} 