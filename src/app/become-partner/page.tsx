'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BecomePartner() {
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
              <Link href="/why-art" className="text-black hover:text-accent transition-colors">Pourquoi l'art</Link>
              <Link href="/why-second-souffle" className="text-black hover:text-accent transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/our-services" className="text-black hover:text-accent transition-colors">Nos services</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/become-partner" className="text-accent hover:text-accent transition-colors text-lg">Devenir partenaire</Link>
            <Link href="/invest" className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-none hover:bg-accent transition-colors" style={{boxShadow:'none'}}>INVESTIR</Link>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl font-serif text-black mb-12">Devenir Partenaire</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-800 mb-8">
                  Rejoignez Second Souffle Production en tant que partenaire et participez au développement du cinéma indépendant. Nous offrons plusieurs façons de s'engager et de soutenir la création artistique.
                </p>
                
                <h2 className="text-3xl font-serif text-black mt-12 mb-6">Avantages Partenaires</h2>
                <ul className="space-y-4 text-xl text-gray-800">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white">1</span>
                    <div>
                      <h3 className="font-semibold mb-2">Avantages Fiscaux</h3>
                      <p>Bénéficiez d'avantages fiscaux significatifs grâce au statut de mécène culturel.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white">2</span>
                    <div>
                      <h3 className="font-semibold mb-2">Visibilité</h3>
                      <p>Associez votre image à des projets culturels innovants et impactants.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white">3</span>
                    <div>
                      <h3 className="font-semibold mb-2">Réseau</h3>
                      <p>Accédez à notre réseau de professionnels du cinéma et de la culture.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white">4</span>
                    <div>
                      <h3 className="font-semibold mb-2">Événements Exclusifs</h3>
                      <p>Participez à des avant-premières et événements réservés aux partenaires.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-12">
                  <Link
                    href="/invest"
                    className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold rounded-none hover:bg-accent transition-colors"
                  >
                    Devenir partenaire
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/pexels-cottonbro-7567284.jpg"
                  alt="Partenariat Second Souffle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Contact Direct</h3>
                <p className="text-black/80 mb-6">
                  Vous souhaitez en savoir plus sur nos opportunités de partenariat ? Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>
                <Link
                  href="mailto:contact@secondsouffleproduction.fr"
                  className="inline-flex items-center text-black hover:text-accent transition-colors"
                >
                  Contactez-nous
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 