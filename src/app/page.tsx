'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const images = [
  '/ss1.jpeg',
  '/pexels-cottonbro-7567284.jpg',
  '/pexels-ron-lach-8088375.jpg',
  '/pexels-semsibelli-16417415.jpg',
  '/pexels-cottonbro-3945317.jpg'
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000) // Change d'image toutes les 5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FAF9F6] z-50 px-8 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <Link 
              href="/" 
              className={`text-3xl font-sans font-semibold tracking-tight ${pathname === '/' ? 'text-amber-400' : 'text-black'} hover:text-amber-400`}
            >
              Second Souffle
            </Link>
            <div className="hidden md:flex gap-8 text-lg">
              <Link href="/pourquoi-art" className="text-black hover:text-amber-400 transition-colors">Pourquoi l'art</Link>
              <Link href="/pourquoi-second-souffle" className="text-black hover:text-amber-400 transition-colors">Pourquoi Second Souffle</Link>
              <Link href="/nos-services" className="text-black hover:text-amber-400 transition-colors">Nos services</Link>
            </div>
          </div>
          {/* Liens secondaires */}
          <div className="flex items-center gap-6">
            <Link href="/devenir-partenaire" className="text-black hover:text-amber-400 transition-colors text-lg">Devenir partenaire</Link>
            <Link href="/investir" className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-none hover:bg-amber-400 transition-colors" style={{boxShadow:'none'}}>INVESTIR</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section avec fond blanc cassé/kaki */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
          <div className="order-2 md:order-1">
            <span className="uppercase tracking-widest text-black text-sm font-semibold mb-4 block">Production audiovisuelle</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black mb-8 leading-tight">
              Donnez vie à vos projets créatifs
            </h1>
            <p className="text-xl text-black max-w-2xl mb-10">
              Nous sommes spécialisés dans la production audiovisuelle de haute qualité, offrant des solutions créatives pour tous vos besoins.
            </p>
            <Link
              href="#"
              className="inline-block bg-black text-white px-8 py-4 rounded-none text-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Commencer avec nous
            </Link>
          </div>
          {/* Carrousel d'images à droite */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full transition-opacity duration-500"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    zIndex: index === activeIndex ? 1 : 0
                  }}
          >
            <Image
                    src={image}
                    alt={`Production audiovisuelle ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos avec statistiques */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-widest flex items-center gap-2 text-black">
              <span className="text-amber-400">✨</span> Découvrez notre histoire
            </span>
            <h2 className="text-5xl font-serif mt-6 mb-6 text-black font-bold">
              Une passion pour la création audiovisuelle
            </h2>
            <p className="text-gray-800 text-xl mb-12 font-medium">
              Nous sommes dédiés à la création de contenu audiovisuel de qualité qui inspire et engage. Notre équipe passionnée travaille sans relâche pour donner vie à vos projets.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-black border-b-2 border-black pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors font-semibold"
            >
              Faire un don
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-5xl font-bold text-black">5</span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <p className="text-gray-800 mt-2 font-medium">Années d'expérience</p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-5xl font-bold text-black">100k</span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <p className="text-gray-800 mt-2 font-medium">€ levés en crowdfunding</p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-5xl font-bold text-black">18</span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <p className="text-gray-800 mt-2 font-medium">Projets de films</p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-5xl font-bold text-black">10</span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <p className="text-gray-800 mt-2 font-medium">Partenaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold tracking-widest">✨ ÉQUIPE</span>
            <h2 className="text-5xl font-serif mt-6 mb-4">L'Équipe Second Souffle</h2>
            <p className="text-xl text-gray-400">Passion, Expertise et Innovation au Cœur du Cinéma</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Membre 1 */}
            <Link href="/equipe/stephane-revil" className="group block">
              <div className="border border-white hover:border-amber-400 transition-colors p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">Accéder à des œuvres habituellement inaccessibles</h3>
                <p className="text-gray-300 mb-12 text-lg">
                  La force principale de Second Souffle est de permettre à de petits porteurs d'accéder à des chefs d'œuvres de l'histoire du cinéma, habituellement inaccessibles à la plupart des investisseurs - un point appréciable pour la jeune entreprise que je suis. Par ailleurs, la stratégie de sélection des œuvres s'appuie sur une démarche rigoureuse, portée par une équipe experte du marché de l'art.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src="/stephan.png"
                      alt="Stéphane Revil"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Stéphane Revil</h4>
                    <p className="text-gray-400 text-sm">MANAGING PARTNER</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Membre 2 */}
            <Link href="/equipe/matteo-nathan" className="group block">
              <div className="border border-white hover:border-amber-400 transition-colors p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">Appréhender l'art sous une nouvelle facette</h3>
                <p className="text-gray-300 mb-12 text-lg">
                  Responsable des partenariats et de la sélection des projets, j'apporte une perspective internationale grâce à mon expérience en France et aux États-Unis. Passionné de cinéma, je suis le contact principal pour les producteurs et réalisateurs désireux de collaborer avec Second Souffle.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src="/mateo.png"
                      alt="Mattéo Nathan"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mattéo Nathan</h4>
                    <p className="text-gray-400 text-sm">CO-FOUNDER & ACQUISITIONS</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Membre 3 */}
            <Link href="/equipe/terence-dossou" className="group block">
              <div className="border border-white hover:border-amber-400 transition-colors p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">Second Souffle permet d'investir dans l'histoire du cinéma</h3>
                <p className="text-gray-300 mb-12 text-lg">
                  Avec une solide expérience en finance, je suis en charge des levées de fonds. Mon rôle est crucial pour le développement et le soutien financier de nos projets cinématographiques, faisant de moi un interlocuteur clé pour les investisseurs.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src="/terrence dossou.png"
                      alt="Terence Dossou"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Terence Dossou</h4>
                    <p className="text-gray-400 text-sm">CO-FOUNDER & FUNDRAISING</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Nos Réalisations avec Vidéo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-black mb-16 text-center">
            Nos Réalisations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/9810704-uhd_2160_4096_25fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-black mb-6">
                Une expertise reconnue
              </h3>
              <p className="text-lg text-black mb-8">
                Découvrez nos productions les plus récentes et laissez-vous inspirer par notre savoir-faire unique dans le domaine de l'audiovisuel.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/pexels-ron-lach-8088386.jpg"
                    alt="Production audiovisuelle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/pexels-sennadeep-2066081.jpg"
                    alt="Équipe de production"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Approche avec Images Défilantes */}
      <section className="py-20 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-black mb-8">
                Notre Approche
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-serif">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black mb-2">Écoute et Analyse</h3>
                    <p className="text-black">
                      Nous prenons le temps de comprendre vos besoins et vos objectifs pour vous proposer des solutions adaptées.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-serif">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black mb-2">Création et Innovation</h3>
                    <p className="text-black">
                      Notre équipe créative développe des concepts uniques qui vous démarquent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-serif">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black mb-2">Réalisation</h3>
                    <p className="text-black">
                      Nous mettons en œuvre notre expertise technique pour donner vie à votre vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Images défilantes */}
            <div className="relative h-[600px] overflow-hidden rounded-lg">
          <Image
                src="/ss.jpeg"
                alt="Notre approche"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-20">
            {/* Colonne de gauche */}
            <div className="md:w-1/2">
              <span className="text-sm font-semibold tracking-widest flex items-center gap-2 text-black">
                <span className="text-amber-400">✨</span> Notre processus
              </span>
              <h2 className="text-5xl font-serif mt-6 mb-6 text-black font-bold">
                Une approche méthodique et créative
              </h2>
            </div>

            {/* Colonne de droite */}
            <div className="md:w-1/2 space-y-16">
              {/* Point 1 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400 font-semibold">/</span>
                  <span className="text-black font-semibold">01</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Cinéma pour tous
                </h3>
                <p className="text-gray-800">
                  Nous croyons en un cinéma accessible et inclusif, qui reflète la diversité de notre société.
                </p>
              </div>

              {/* Point 2 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400 font-semibold">/</span>
                  <span className="text-black font-semibold">02</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Engagement ESG
                </h3>
                <p className="text-gray-800">
                  Notre production respecte les normes environnementales, sociales et de gouvernance les plus élevées.
                </p>
              </div>

              {/* Point 3 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400 font-semibold">/</span>
                  <span className="text-black font-semibold">03</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Liberté artistique
                </h3>
                <p className="text-gray-800">
                  Nous encourageons la créativité et l'expression artistique libre dans tous nos projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-black text-center mb-16">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-[#F5F2EA] p-8 rounded-lg">
              <h3 className="text-xl font-serif text-black mb-4">Production</h3>
              <p className="text-black/80">
                Gestion complète de vos projets audiovisuels, de la conception à la finalisation.
              </p>
            </div>
            <div className="bg-[#F5F2EA] p-8 rounded-lg">
              <h3 className="text-xl font-serif text-black mb-4">Réalisation</h3>
              <p className="text-black/80">
                Direction artistique et technique de vos productions avec une équipe expérimentée.
              </p>
            </div>
            <div className="bg-[#F5F2EA] p-8 rounded-lg">
              <h3 className="text-xl font-serif text-black mb-4">Post-Production</h3>
              <p className="text-black/80">
                Montage, étalonnage et mixage son pour donner vie à vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF9F6] border-t border-[#E5E5E5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-sans font-semibold tracking-tight text-black mb-6 block">
                Second Souffle
              </Link>
              <p className="text-black max-w-md mb-8">
                Votre partenaire de confiance pour donner vie à vos projets audiovisuels les plus ambitieux.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.instagram.com/fonds_de_dotation_s2production/" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-black hover:text-amber-400 transition-transform hover:scale-110 duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/secondsouffle-production/" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-black hover:text-amber-400 transition-transform hover:scale-110 duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-black font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-black hover:text-amber-400">Production</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Post-production</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Motion Design</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Sound Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-black hover:text-amber-400">Notre équipe</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Nos bureaux</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Carrières</Link></li>
                <li><Link href="#" className="text-black hover:text-amber-400">Presse</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
            <p className="text-sm text-black">&copy; 2024 Second Souffle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
