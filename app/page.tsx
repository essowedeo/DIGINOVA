import Image from 'next/image'

export default function Home() {
  return (
    <section className="space-y-20 px-4 py-10">

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* Texte */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Construisons ensemble votre réussite digitale
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Diginova Solutions combine expertise, innovation et design pour vous offrir 
            des solutions web modernes, rapides et professionnelles.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Contactez-nous
            </a>

            <a
              href="#services"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Nos services
            </a>
          </div>
        </div>

        {/* Image équipe */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/team.jpg"       // Mets ici ton image d’équipe dans /public
            alt="Équipe Diginova Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-blue-700">Développement Web</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Sites vitrines, e-commerce et applications web performantes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-blue-700">Design & Branding</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Logos, identité visuelle, UI/UX et maquettes modernes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg text-blue-700">Automatisation</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Automatisation de vos processus et intégration d’outils digitaux.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white max-w-5xl mx-auto rounded-2xl p-10 text-center shadow-xl">
        <h2 className="text-3xl font-bold">Prêt à booster votre projet ?</h2>
        <p className="mt-3 text-lg">Discutons de votre idée et passons à l’action.</p>

        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold"
        >
          Contactez-nous
        </a>
      </div>

    </section>
  )
}
