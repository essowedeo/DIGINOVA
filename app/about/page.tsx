import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="space-y-20 px-4 py-10 max-w-7xl mx-auto">

      {/* HERO ABOUT */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          À propos de THENOVA Solutions
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          THENOVA Solutions est une société innovante spécialisée dans le développement et
          la formation en technologies numériques. Nous concevons des solutions sur mesure et formons
          des stagiaires talentueux pour bâtir une nouvelle génération de développeurs polyvalents.
        </p>
      </div>

      {/* OBJECTIFS */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Nos Objectifs</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          L'objectif de THENOVA Solutions est d'offrir aux entreprises des solutions technologiques
          complètes et de permettre aux jeunes stagiaires d'acquérir une expérience pratique dans
          toutes les technologies du numérique. THENOVA Solutions ambitionne de devenir un centre d'excellence
          technologique et un acteur majeur de la digitalisation en Afrique.
        </p>
      </div>


      {/* MISSION */}
      <div className="bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Notre Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Combiner expertise, innovation et formation pour devenir un acteur clé du numérique en Afrique,
          en développant des solutions technologiques de pointe et en formant la prochaine génération de développeurs.
        </p>
      </div>

    </section>
  )
}