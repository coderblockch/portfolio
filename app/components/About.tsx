export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-violet-400 font-mono text-sm mb-2">01.</p>
      <h2 className="text-3xl font-bold text-white mb-12">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-neutral-400 leading-relaxed">
          <p>
            Soy David, estudiante de desarrollo fullstack con enfoque en construir
            soluciones web completas, desde el frontend hasta el backend.
          </p>
          <p>
            Me interesa especialmente el ecosistema blockchain y las tecnologías
            descentralizadas. Actualmente aprendiendo y construyendo proyectos que
            combinan desarrollo web moderno con Web3.
          </p>
          <p>
            Cuando no estoy programando, estoy explorando nuevas tecnologías y
            expandiendo mis conocimientos en el ecosistema crypto.
          </p>
        </div>
        <div className="border border-violet-500/30 rounded-lg p-6 space-y-3 bg-violet-950/20">
          <p className="text-violet-400 text-sm font-mono mb-4">stack actual</p>
          {["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"].map((tech) => (
            <div key={tech} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-neutral-300 text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
