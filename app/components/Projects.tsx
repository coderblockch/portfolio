const projects = [
  {
    title: "Blockchain Asset Tracker",
    description:
      "Script para monitorear y analizar activos digitales en la blockchain de Bitcoin y otras criptomonedas. Permite rastrear transacciones, balances y métricas de múltiples wallets en tiempo real.",
    tags: ["Python", "Bitcoin", "Blockchain", "API"],
    link: "https://github.com/coderblockch/portfolio",
  },
  {
    title: "Personal Resume",
    description:
      "Desarrollador Full Stack en formación constante, especializado en el ecosistema Python (Django/Flask) y React. Mi enfoque combina fundamentos sólidos de programación con el uso estratégico de Claude Code y herramientas de IA para acelerar la entrega de soluciones, optimizar la arquitectura de código y resolver desafíos técnicos complejos con eficiencia y escalabilidad.",
    tags: ["Python", "Django", "Flask", "React", "Claude Code"],
    link: "#",
  },
  {
    title: "Web3 Wallet Connect",
    description:
      "DApp que permite conectar wallets de criptomonedas, consultar balances y visualizar historial de transacciones en tiempo real usando la blockchain de Ethereum.",
    tags: ["React", "Web3.js", "Ethereum", "TypeScript"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-violet-400 font-mono text-sm mb-2">02.</p>
      <h2 className="text-3xl font-bold text-white mb-12">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-white/10 rounded-lg p-6 hover:border-violet-500/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-neutral-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-violet-300 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
