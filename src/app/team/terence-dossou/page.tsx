'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TerenceDossou() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF9F6] z-50 px-8 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-3xl font-sans font-semibold tracking-tight text-black">
              Second Souffle
            </Link>
            <div className="hidden md:flex gap-8 text-lg">
              <Link href="/why-art" className="text-black hover:text-accent/80 transition-colors">Pourquoi l'art</Link>
              <Link href="/why-second-souffle" className="text-black hover:text-accent/80 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/our-services" className="text-black hover:text-accent/80 transition-colors">Nos services</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/become-partner" className="text-black hover:text-accent/80 transition-colors text-lg">Devenir partenaire</Link>
            <Link href="/invest" className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-none hover:bg-accent transition-colors" style={{boxShadow:'none'}}>INVESTIR</Link>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-6xl font-serif text-black mb-4">Terence Dossou</h1>
              <p className="text-2xl text-gray-600 mb-8">Co-Founder & Fundraising</p>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-800 mb-8">
                  Avec une solide expérience en finance, notamment en fusion-acquisition et conseil en stratégie, Terence est en charge des levées de fonds. Son rôle est crucial pour le développement et le soutien financier de nos projets cinématographiques, faisant de lui un interlocuteur clé pour les investisseurs.
                </p>
                <h2 className="text-3xl font-serif text-black mt-12 mb-6">Compétences Clés</h2>
                <ul className="list-disc pl-6 space-y-4 text-xl text-gray-800">
                  <li>Stratégie financière et levée de fonds</li>
                  <li>Fusion-acquisition et conseil</li>
                  <li>Relations investisseurs</li>
                  <li>Analyse financière de projets</li>
                </ul>
                <div className="flex gap-4 mt-8">
                  <Link
                    href="https://www.linkedin.com/in/terence-dossou/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-amber-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/terrence dossou.png"
                alt="Terence Dossou - Co-Founder & Fundraising"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 