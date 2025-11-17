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
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
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
            <h3 className="font-semibold text-xl text-blue-700 mb-4">{tech.domain}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.techs.map((t, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FORMATION */}
      <div className="bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Formation Continue</h2>
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