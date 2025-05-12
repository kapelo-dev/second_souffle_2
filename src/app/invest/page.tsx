'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Invest() {
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
            <span className="bg-accent text-white px-6 py-2 text-lg font-semibold rounded-none">INVESTIR</span>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl font-serif text-black mb-12">Investir dans le Cinéma Indépendant</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-800 mb-8">
                  Second Souffle Production vous offre l'opportunité d'investir dans des projets cinématographiques innovants tout en bénéficiant d'avantages fiscaux attractifs.
                </p>
                
                <h2 className="text-3xl font-serif text-black mt-12 mb-6">Pourquoi Investir ?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-[#F5F2EA] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Impact Culturel</h3>
                    <p className="text-black/80">Contribuez au développement de projets artistiques innovants et soutenez la diversité culturelle.</p>
                  </div>
                  <div className="bg-[#F5F2EA] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Avantages Fiscaux</h3>
                    <p className="text-black/80">Profitez de réductions d'impôts significatives grâce au statut de mécène culturel.</p>
                  </div>
                  <div className="bg-[#F5F2EA] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Réseau Exclusif</h3>
                    <p className="text-black/80">Rejoignez une communauté de passionnés et de professionnels du cinéma.</p>
                  </div>
                  <div className="bg-[#F5F2EA] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Suivi Personnalisé</h3>
                    <p className="text-black/80">Bénéficiez d'un accompagnement sur mesure et d'un suivi régulier de vos investissements.</p>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-black text-white rounded-lg">
                  <h3 className="text-2xl font-serif mb-4">Prêt à Investir ?</h3>
                  <p className="mb-6">
                    Contactez notre équipe pour découvrir nos projets en cours et les opportunités d'investissement.
                  </p>
                  <Link
                    href="mailto:invest@secondsouffleproduction.fr"
                    className="inline-flex items-center text-white hover:text-amber-400 transition-colors"
                  >
                    Nous contacter
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/pexels-cottonbro-3945317.jpg"
                  alt="Investissement Second Souffle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Nos Chiffres Clés</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-4xl font-bold text-black">18</span>
                      <span className="text-amber-400 text-2xl font-bold">+</span>
                    </div>
                    <p className="text-black/80">Projets financés</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-4xl font-bold text-black">100k</span>
                      <span className="text-amber-400 text-2xl font-bold">€</span>
                    </div>
                    <p className="text-black/80">Investis en 2023</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-4xl font-bold text-black">30</span>
                      <span className="text-amber-400 text-2xl font-bold">%</span>
                    </div>
                    <p className="text-black/80">Réduction fiscale</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-4xl font-bold text-black">10</span>
                      <span className="text-amber-400 text-2xl font-bold">+</span>
                    </div>
                    <p className="text-black/80">Partenaires actifs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 