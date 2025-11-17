export default function TechnologiesPage() {
  const technologies = [
    {
      domain: "Web",
      techs: ["HTML", "CSS", "JavaScript", "Laravel", "Django"]
    },
    {
      domain: "Mobile",
      techs: ["Flutter", "React Native", "Kotlin", "Swift"]
    },
    {
      domain: "Backend",
      techs: ["Node.js", "PHP", "Python", "Java", "Go"]
    },
    {
      domain: "Base de données",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      domain: "Cloud",
      techs: ["AWS", "Google Cloud", "Azure"]
    },
    {
      domain: "IA / Data Science",
      techs: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"]
    },
    {
      domain: "Cybersécurité",
      techs: ["Kali Linux", "Metasploit", "OWASP", "Pentest Tools"]
    },
    {
      domain: "DevOps",
      techs: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"]
    }
  ]

  return (
    <section className="space-y-20 px-4 py-10 max-w-7xl mx-auto">

      {/* HERO TECHNOLOGIES */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{color: 'var(--thenova-dark-blue)'}}>
          Technologies Maîtrisées
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          THENOVA Solutions couvre un large éventail de technologies dans tous les domaines
          du numérique, assurant des solutions complètes et à la pointe de l'innovation.
        </p>
      </div>

      {/* TECHNOLOGIES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-4" style={{color: 'var(--thenova-dark-blue)'}}>{tech.domain}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.techs.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'var(--thenova-light-gray)', color: 'var(--thenova-dark-blue)'}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FORMATION */}
      <div className="p-8 rounded-2xl" style={{backgroundColor: 'var(--thenova-light-gray)'}}>
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--thenova-dark-blue)'}}>Formation Continue</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Nos stagiaires sont formés dans toutes ces technologies à travers des programmes pratiques
          et des projets réels, leur permettant d'acquérir une expertise polyvalente.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          De la conception à la mise en production, en passant par les tests et le déploiement,
          nous couvrons l'ensemble du cycle de développement.
        </p>
      </div>

    </section>
  )
}