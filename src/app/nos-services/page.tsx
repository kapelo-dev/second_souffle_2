'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NosServices() {
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
              <Link href="/pourquoi-second-souffle" className="text-black hover:text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="text-amber-400 transition-colors">Nos services</Link>
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
          <h1 className="text-6xl font-serif text-black mb-8">Nos Services</h1>

          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-serif text-black mb-6">Une Production Audiovisuelle d'Excellence</h2>
              <p className="text-xl text-gray-800 mb-6">
                Second Souffle vous accompagne dans toutes les étapes de votre projet audiovisuel. Notre expertise couvre l'ensemble du processus de production, de la conception initiale à la distribution finale.
              </p>
              <p className="text-xl text-gray-800">
                Nous mettons à votre disposition une équipe expérimentée et passionnée, des équipements de pointe et un réseau de professionnels reconnus pour donner vie à vos projets les plus ambitieux.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/pexels-cottonbro-7567284.jpg"
                alt="Production audiovisuelle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services Principaux */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Nos Services Principaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Production</h3>
                <ul className="space-y-3 text-gray-800">
                  <li>• Gestion de projet complète</li>
                  <li>• Planification et budgétisation</li>
                  <li>• Casting et direction d'acteurs</li>
                  <li>• Location d'équipements</li>
                  <li>• Coordination des équipes</li>
                </ul>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Réalisation</h3>
                <ul className="space-y-3 text-gray-800">
                  <li>• Direction artistique</li>
                  <li>• Storyboarding</li>
                  <li>• Tournage HD et 4K</li>
                  <li>• Direction photo</li>
                  <li>• Régie générale</li>
                </ul>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Post-Production</h3>
                <ul className="space-y-3 text-gray-800">
                  <li>• Montage vidéo</li>
                  <li>• Étalonnage couleur</li>
                  <li>• Sound design</li>
                  <li>• Motion design</li>
                  <li>• Effets spéciaux</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Processus */}
          <div className="bg-black text-white p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-serif mb-12">Notre Processus de Travail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">01</div>
                <h3 className="text-xl mb-2">Consultation</h3>
                <p>Analyse approfondie de vos besoins et objectifs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">02</div>
                <h3 className="text-xl mb-2">Pré-production</h3>
                <p>Planification détaillée et organisation logistique</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">03</div>
                <h3 className="text-xl mb-2">Production</h3>
                <p>Réalisation professionnelle selon le plan établi</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-4">04</div>
                <h3 className="text-xl mb-2">Finalisation</h3>
                <p>Post-production et livraison du projet final</p>
              </div>
            </div>
          </div>

          {/* Section Équipements */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-black mb-12 text-center">Notre Équipement Professionnel</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Matériel de Tournage</h3>
                <ul className="space-y-3 text-gray-800">
                  <li>• Caméras professionnelles 4K et 8K</li>
                  <li>• Systèmes d'éclairage LED avancés</li>
                  <li>• Équipement audio haute fidélité</li>
                  <li>• Stabilisateurs et supports</li>
                  <li>• Drones pour prises de vue aériennes</li>
                </ul>
              </div>
              <div className="bg-[#F5F2EA] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-black mb-4">Studio Post-Production</h3>
                <ul className="space-y-3 text-gray-800">
                  <li>• Stations de montage 4K</li>
                  <li>• Suite complète Adobe Creative</li>
                  <li>• Station d'étalonnage DaVinci</li>
                  <li>• Studio son professionnel</li>
                  <li>• Serveurs de stockage sécurisés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Contact */}
          <div className="text-center">
            <h2 className="text-3xl font-serif text-black mb-6">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-xl text-gray-800 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link
              href="/devenir-partenaire"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 