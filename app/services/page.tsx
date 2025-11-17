export default function ServicesPage() {
  const services = [
    {
      title: "Développement d'Applications Sur Mesure",
      description: "Création d'applications web, mobile et desktop adaptées à vos besoins spécifiques.",
      details: ["Sites vitrines et e-commerce", "Applications mobiles natives et hybrides", "Logiciels desktop performants"]
    },
    {
      title: "Formation Pratique et Encadrement",
      description: "Programme de formation intensive pour stagiaires dans toutes les technologies du numérique.",
      details: ["Formation web, mobile, IA, cybersécurité", "Encadrement par des experts seniors", "Projets réels et validation des compétences"]
    },
    {
      title: "Consulting IT et Transformation Digitale",
      description: "Accompagnement stratégique pour la digitalisation de votre entreprise.",
      details: ["Audit et conseil technologique", "Stratégie de transformation digitale", "Optimisation des processus métier"]
    },
    {
      title: "Hébergement et Cloud Computing",
      description: "Solutions d'hébergement sécurisées et scalables sur les principales plateformes cloud.",
      details: ["AWS, Google Cloud, Azure", "Migration et gestion cloud", "Infrastructure as Code"]
    },
    {
      title: "Cybersécurité et Audit des Systèmes",
      description: "Protection et sécurisation de vos systèmes informatiques.",
      details: ["Tests de pénétration", "Audit de sécurité", "Mise en place de politiques de sécurité"]
    },
    {
      title: "Intelligence Artificielle et Data Science",
      description: "Exploitation des données et développement de solutions IA avancées.",
      details: ["Analyse de données", "Modèles de machine learning", "Applications IA sur mesure"]
    }
  ]

  return (
    <section className="space-y-20 px-4 py-10 max-w-7xl mx-auto">

      {/* HERO SERVICES */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{color: 'var(--thenova-dark-blue)'}}>
          Nos Services
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          THENOVA Solutions offre une gamme complète de services technologiques pour répondre
          à tous vos besoins en développement, formation et transformation digitale.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3" style={{color: 'var(--thenova-dark-blue)'}}>{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--thenova-light-blue)'}}></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto rounded-2xl p-10 text-center shadow-xl" style={{backgroundColor: 'var(--thenova-dark-blue)', color: 'white'}}>
        <h2 className="text-3xl font-bold">Besoin d'un service spécifique ?</h2>
        <p className="mt-3 text-lg">Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.</p>

        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-800 transition"
        >
          Contactez-nous
        </a>
      </div>

    </section>
  )
}