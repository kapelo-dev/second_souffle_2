'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="w-full px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold">
            Second Souffle
          </Link>

          {/* Desktop Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <Link href="/pourquoi-art" className="nav-link">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="nav-link">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="nav-link">Nos services</Link>
              <Link href="/devenir-partenaire" className="nav-link">Devenir partenaire</Link>
              <Link href="/investir" className="btn-primary">INVESTIR</Link>
            </div>
          </div>

          {/* Hamburger Button - Visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="block lg:hidden border-t border-[#E5E5E5]">
            <div className="py-4 space-y-4">
              <Link href="/pourquoi-art" className="block px-4 py-2 nav-link">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="block px-4 py-2 nav-link">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="block px-4 py-2 nav-link">Nos services</Link>
              <Link href="/devenir-partenaire" className="block px-4 py-2 nav-link">Devenir partenaire</Link>
              <Link href="/investir" className="block px-4 py-2 btn-primary text-center">INVESTIR</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 