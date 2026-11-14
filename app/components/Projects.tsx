type Project = {
  title: string;
  description: string;
  tags: string[];
  code: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "SacHealth OS",
    description:
      "App HealthTech full-stack: motor de triaje clínico basado en reglas (CDSS) y panel de gestión de camas. Login de personal con contraseñas bcrypt y JWT, API REST con FastAPI y SQLModel, 43 pruebas con pytest y CI con GitHub Actions. Usuario demo: demo@sachealth.dev / sachealth-demo.",
    tags: ["Python", "FastAPI", "SQLModel", "JWT", "pytest", "JavaScript"],
    code: "https://github.com/coderblockch/sachealth-os",
    demo: "https://sachealth-os.onrender.com",
  },
  {
    title: "Finance Tracker",
    description:
      "App web de finanzas personales multiusuario: registro e inicio de sesión, categorías, ingresos y gastos, panel con balance y resumen por mes y categoría. Base de datos SQLite y 19 pruebas con pytest.",
    tags: ["Python", "Flask", "SQLite", "pytest"],
    code: "https://github.com/coderblockch/finance-tracker-flask",
    demo: "https://finance-tracker-kln2.onrender.com",
  },
  {
    title: "Weather App",
    description:
      "App del clima en tiempo real. Busca cualquier ciudad y muestra temperatura, sensación térmica, humedad y viento usando la API de Open-Meteo, con conmutador °C/°F.",
    tags: ["JavaScript", "API", "HTML/CSS"],
    code: "https://github.com/coderblockch/weather-app",
    demo: "https://coderblockch.github.io/weather-app",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Dashboard de criptomonedas con precios en vivo (CoinGecko), gráficos históricos, auto-refresh y autenticación de usuarios con Firebase.",
    tags: ["JavaScript", "Firebase", "Chart.js", "API"],
    code: "https://github.com/coderblockch/crypto-dashboard",
    demo: "https://coderblockch.github.io/crypto-dashboard/",
  },
  {
    title: "QuipuCash",
    description:
      "Panel de criptomonedas con noticias, tabla de precios/variación 24h y gráfico interactivo con Chart.js.",
    tags: ["JavaScript", "Chart.js", "HTML/CSS"],
    code: "https://github.com/coderblockch/QuipuCash",
    demo: "https://coderblockch.github.io/QuipuCash/",
  },
  {
    title: "To-Do List",
    description:
      "Gestor de tareas con agregar, completar y eliminar, y persistencia en el navegador mediante localStorage.",
    tags: ["JavaScript", "localStorage", "HTML/CSS"],
    code: "https://github.com/coderblockch/todo-list",
    demo: "https://coderblockch.github.io/todo-list",
  },
  {
    title: "Guess My Number",
    description:
      "Juego interactivo de adivinar el número con seguimiento de puntaje y manejo del estado del juego.",
    tags: ["JavaScript", "HTML/CSS"],
    code: "https://github.com/coderblockch/guess-my-number",
    demo: "https://coderblockch.github.io/guess-my-number",
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
            className="flex flex-col border border-white/10 rounded-lg p-6 hover:border-violet-500/50 transition-colors group"
          >
            <svg className="w-8 h-8 text-neutral-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-neutral-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-violet-300 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 text-sm">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 font-semibold hover:text-violet-200 transition-colors"
                >
                  Demo en vivo →
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
