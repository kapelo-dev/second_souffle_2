'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PourquoiSecondSouffle() {
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
              <Link href="/pourquoi-art" className="text-black hover:text-amber-400 transition-colors">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
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
          <h1 className="text-6xl font-serif text-black mb-8">Pourquoi Second Souffle ?</h1>
          
          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Notre Vision</h2>
              <p className="text-xl text-gray-800 mb-6">
                Second Souffle est né d'une vision audacieuse : démocratiser l'accès à l'investissement dans le cinéma tout en préservant son patrimoine. Notre mission est de créer un pont entre les investisseurs passionnés et les projets cinématographiques qui façonnent notre culture.
              </p>
              <p className="text-xl text-gray-800">
                Nous croyons en un cinéma accessible, innovant et durable, où chaque investissement contribue à la fois à la préservation de notre héritage culturel et à la création de valeur pour nos partenaires.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/ss1.jpeg"
                alt="Second Souffle Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section Nos Valeurs */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Nos Valeurs Fondamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Innovation</h3>
                <p className="text-lg text-gray-800">
                  Nous repoussons les limites traditionnelles de l'investissement cinématographique en utilisant des solutions modernes et innovantes.
                </p>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Transparence</h3>
                <p className="text-lg text-gray-800">
                  Nous croyons en une communication claire et honnête avec nos partenaires et investisseurs à chaque étape du processus.
                </p>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Excellence</h3>
                <p className="text-lg text-gray-800">
                  Notre engagement envers l'excellence se reflète dans la qualité de nos projets et dans notre approche professionnelle.
                </p>
              </div>
            </div>
          </div>

          {/* Section Notre Impact */}
          <div className="bg-black text-white p-12 rounded-lg">
            <h2 className="text-3xl font-serif mb-8">Notre Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">100+</div>
                <p className="text-lg">Projets financés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">1M€+</div>
                <p className="text-lg">Investissements gérés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <p className="text-lg">Partenaires de confiance</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
                <p className="text-lg">Satisfaction client</p>
              </div>
            </div>
          </div>

          {/* Section Témoignages */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Ce qu'ils disent de nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-8 rounded-lg">
                <p className="text-lg text-gray-800 mb-6">
                  "Second Souffle a transformé ma vision de l'investissement dans le cinéma. Leur approche professionnelle et leur expertise m'ont permis de participer à des projets passionnants."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Jean Dupont</div>
                    <div className="text-gray-600">Investisseur</div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 p-8 rounded-lg">
                <p className="text-lg text-gray-800 mb-6">
                  "Une équipe exceptionnelle qui comprend vraiment les enjeux du cinéma moderne. Leur plateforme rend l'investissement accessible et transparent."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Marie Martin</div>
                    <div className="text-gray-600">Productrice</div>
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