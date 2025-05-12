'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-custom-bg z-50 border-b border-[#E5E5E5]">
      <div className="container h-20 flex justify-between items-center">
        {/* Logo et liens principaux */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-3xl font-sans font-semibold tracking-tight ${
              pathname === '/' ? 'text-accent' : 'text-custom-text'
            } hover:text-accent transition-colors duration-300`}
          >
            Second Souffle
          </Link>
          <div className="hidden md:flex gap-8 text-lg">
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
        </div>

        {/* Liens secondaires */}
        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  )
} 