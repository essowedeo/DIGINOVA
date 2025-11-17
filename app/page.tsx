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

      {/* À PROPOS */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              DigiNova Solutions est une société innovante spécialisée dans le développement et
              la formation en technologies numériques. Nous concevons des solutions sur mesure et formons
              des stagiaires talentueux pour bâtir une nouvelle génération de développeurs polyvalents.
            </p>
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              En savoir plus
            </a>
          </div>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/diginova-logo.png"
              alt="Logo DigiNova Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-blue-700">Développement d'Applications</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Web, mobile, desktop et solutions sur mesure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-blue-700">Formation & Encadrement</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Programme pratique pour stagiaires dans toutes les technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-blue-700">IA & Cybersécurité</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Intelligence artificielle, data science et sécurité des systèmes.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Voir tous nos services
          </a>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Technologies Maîtrisées</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React", "Node.js", "Python", "Flutter", "AWS", "Docker", "TensorFlow", "Kali Linux"].map((tech, index) => (
            <div key={index} className="bg-blue-100 text-blue-700 p-4 rounded-lg text-center font-semibold">
              {tech}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/technologies"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Voir toutes les technologies
          </a>
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
