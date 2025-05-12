'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PourquoiArt() {
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
              <Link href="/pourquoi-art" className="text-amber-400 transition-colors">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="text-black hover:text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="text-black hover:text-amber-400 transition-colors">Nos services</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/devenir-partenaire" className="text-black hover:text-amber-400 transition-colors text-lg">Devenir partenaire</Link>
            <Link href="/investir" className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-none hover:bg-amber-400 transition-colors" style={{boxShadow:'none'}}>INVESTIR</Link>
          </div>
        </div>
      </nav>

      {/* Contenu */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-serif text-black mb-8">Pourquoi l'art ?</h1>

          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">L'Art comme Investissement</h2>
              <p className="text-xl text-gray-800 mb-6">
                Le cinéma représente non seulement une forme d'expression artistique majeure, mais aussi une opportunité d'investissement unique. Dans un monde en constante évolution, l'art cinématographique offre une valeur stable et durable, tout en contribuant à la préservation de notre patrimoine culturel.
              </p>
              <p className="text-xl text-gray-800">
                Investir dans le cinéma avec Second Souffle, c'est participer à l'histoire de l'art tout en diversifiant son portefeuille avec un actif tangible et culturellement significatif.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/pexels-cottonbro-7567284.jpg"
                alt="L'art du cinéma"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section Avantages */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Les Avantages de l'Investissement dans l'Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Valeur Durable</h3>
                <p className="text-lg text-gray-800">
                  L'art cinématographique maintient sa valeur à travers le temps et peut même s'apprécier, offrant une protection contre l'inflation.
                </p>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Diversification</h3>
                <p className="text-lg text-gray-800">
                  L'investissement dans l'art permet de diversifier son portefeuille avec un actif peu corrélé aux marchés financiers traditionnels.
                </p>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Impact Culturel</h3>
                <p className="text-lg text-gray-800">
                  En investissant dans le cinéma, vous contribuez à la préservation et au développement de notre patrimoine culturel.
                </p>
              </div>
            </div>
          </div>

          {/* Section Processus */}
          <div className="bg-black text-white p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-serif mb-12">Notre Processus d'Investissement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">01</div>
                <h3 className="text-xl mb-2">Sélection</h3>
                <p>Identification rigoureuse des opportunités d'investissement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">02</div>
                <h3 className="text-xl mb-2">Évaluation</h3>
                <p>Analyse approfondie de la valeur et du potentiel</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">03</div>
                <h3 className="text-xl mb-2">Acquisition</h3>
                <p>Processus d'acquisition transparent et sécurisé</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">04</div>
                <h3 className="text-xl mb-2">Gestion</h3>
                <p>Suivi professionnel et reporting régulier</p>
              </div>
            </div>
          </div>

          {/* Section Performance */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Performance de l'Art Cinématographique</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Rendement Historique</h3>
                <p className="text-lg text-gray-800 mb-4">
                  Le marché de l'art cinématographique a démontré une croissance stable avec un rendement moyen annuel de 7,5% sur les 10 dernières années.
                </p>
                <div className="flex items-center gap-4 text-2xl font-bold text-amber-400">
                  <span>+7,5%</span>
                  <span className="text-sm text-gray-600">rendement annuel moyen</span>
                </div>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Résilience du Marché</h3>
                <p className="text-lg text-gray-800 mb-4">
                  L'art cinématographique a prouvé sa résilience pendant les périodes de volatilité économique, offrant une stabilité appréciable.
                </p>
                <div className="flex items-center gap-4 text-2xl font-bold text-amber-400">
                  <span>85%</span>
                  <span className="text-sm text-gray-600">de stabilité en période de crise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 