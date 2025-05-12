'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function DevenirPartenaire() {
  const [phonePrefix, setPhonePrefix] = useState('🇫🇷 +33')
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
              <Link 
                href="/pourquoi-art" 
                className={pathname === '/pourquoi-art' ? 'text-amber-400' : 'text-black hover:text-amber-400 transition-colors'}
              >
                Pourquoi l'art
              </Link>
              <Link 
                href="/pourquoi-second-souffle" 
                className={pathname === '/pourquoi-second-souffle' ? 'text-amber-400' : 'text-black hover:text-amber-400 transition-colors'}
              >
                Pourquoi Second Souffle
              </Link>
              <Link 
                href="/nos-services" 
                className={pathname === '/nos-services' ? 'text-amber-400' : 'text-black hover:text-amber-400 transition-colors'}
              >
                Nos services
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/devenir-partenaire" 
              className={pathname === '/devenir-partenaire' ? 'text-amber-400 text-lg' : 'text-black hover:text-amber-400 transition-colors text-lg'}
            >
              Devenir partenaire
            </Link>
            <Link 
              href="/investir" 
              className={`px-6 py-2 text-lg font-semibold rounded-none transition-colors ${
                pathname === '/investir' 
                ? 'bg-amber-400 text-black' 
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
      <div className="min-h-screen pt-20 flex flex-col lg:flex-row">
        {/* Section informative à gauche */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20 bg-black text-white">
          <div className="max-w-lg mx-auto">
            <h1 className="text-5xl font-serif mb-8">Devenir Partenaire</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-amber-400 mb-4">Pourquoi nous rejoindre ?</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Accès à un réseau de professionnels du cinéma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Participation à des projets innovants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Visibilité accrue dans le secteur audiovisuel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Opportunités de collaboration exclusives</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-amber-400 mb-4">Nos engagements</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Support technique professionnel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Événements networking réguliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✦</span>
                    <span>Formation et ressources exclusives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire à droite */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-serif text-black mb-8">Contactez-nous</h2>
            
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-base text-gray-700 mb-2">Prénom *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 mb-2">Société</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                    placeholder="Nom de votre société"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 mb-2">Numéro de téléphone *</label>
                  <div className="flex">
                    <select
                      className="px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                      value={phonePrefix}
                      onChange={(e) => setPhonePrefix(e.target.value)}
                    >
                      <option value="🇫🇷 +33">🇫🇷 +33</option>
                      <option value="🇧🇪 +32">🇧🇪 +32</option>
                      <option value="🇨🇭 +41">🇨🇭 +41</option>
                      <option value="🇨🇦 +1">🇨🇦 +1</option>
                    </select>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-base text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-amber-400 outline-none transition-colors text-black text-lg bg-transparent min-h-[120px]"
                    placeholder="Décrivez votre projet ou vos attentes..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 text-lg font-semibold hover:bg-amber-400 transition-colors mt-8"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 