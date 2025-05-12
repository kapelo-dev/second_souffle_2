'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function TerenceDossou() {
  const pathname = usePathname()

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF9F6] z-50 px-8 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link 
              href="/" 
              className={`text-3xl font-sans font-semibold tracking-tight hover:text-amber-400 ${
                pathname === '/' ? 'text-amber-400' : 'text-black'
              }`}
            >
              Second Souffle
            </Link>
            <div className="hidden md:flex gap-8 text-lg">
              <Link href="/pourquoi-art" className="text-black hover:text-amber-400 transition-colors">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="text-black hover:text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="text-black hover:text-amber-400 transition-colors">Nos services</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/devenir-partenaire" className="text-black hover:text-amber-400 transition-colors text-lg">Devenir partenaire</Link>
            <Link 
              href="/investir" 
              className={`px-6 py-2 text-lg font-semibold rounded-none transition-colors ${
                pathname === '/investir' 
                ? 'bg-amber-400 text-black hover:bg-amber-400' 
                : 'bg-black text-white hover:bg-amber-400'
              }`}
              style={{boxShadow:'none'}}
            >
              INVESTIR
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenu */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image et informations de base */}
            <div>
              <div className="relative aspect-square w-full overflow-hidden mb-8">
                <Image
                  src="/terrence dossou.png"
                  alt="Terence Dossou"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-serif text-black">Terence Dossou</h1>
                <p className="text-xl text-gray-600">CO-FOUNDER & FUNDRAISING</p>
              </div>
            </div>

            {/* Biographie et expertise */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-black mb-4">À propos</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Avec une solide expérience en finance et une passion pour le cinéma, Terence Dossou est le pilier financier de Second Souffle. En tant que co-fondateur et responsable des levées de fonds, il joue un rôle crucial dans le développement et le soutien financier des projets cinématographiques de l'entreprise.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Sa vision unique combine expertise financière et compréhension approfondie du marché du cinéma, permettant à Second Souffle de créer des opportunités d'investissement innovantes dans l'industrie cinématographique.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-black mb-4">Expertise</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-amber-400">✦</span>
                    <span className="text-lg text-gray-700">Levée de fonds et financement de projets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-amber-400">✦</span>
                    <span className="text-lg text-gray-700">Stratégie d'investissement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-amber-400">✦</span>
                    <span className="text-lg text-gray-700">Gestion de portefeuille</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-amber-400">✦</span>
                    <span className="text-lg text-gray-700">Relations investisseurs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-black mb-4">Contact</h2>
                <Link
                  href="https://www.linkedin.com/in/terence-dossou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-amber-400 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 