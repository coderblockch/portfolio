const stack = [
  "Python",
  "Flask",
  "FastAPI",
  "JavaScript",
  "React / Next.js",
  "TypeScript",
  "SQLite",
  "pytest",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-violet-400 font-mono text-sm mb-2">01.</p>
      <h2 id="about-title" className="text-3xl font-bold text-white mb-12">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-neutral-400 leading-relaxed">
          <p>
            Soy David, desarrollador full-stack junior y estudiante del bootcamp de
            desarrollo de software DUAD. Me enfoco en construir aplicaciones web
            completas, desde el frontend hasta el backend.
          </p>
          <p>
            En el backend trabajo con Python (Flask y FastAPI), bases de datos SQLite y
            pruebas automatizadas con pytest. En el frontend uso JavaScript, React,
            Next.js y TypeScript, consumiendo APIs REST.
          </p>
          <p>
            Cada proyecto de esta página tiene su código en GitHub y, cuando es posible,
            un demo en vivo.
          </p>
        </div>
        <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-950/20">
          <h3 id="stack-title" className="text-violet-400 text-sm font-mono mb-4">stack actual</h3>
          <ul aria-labelledby="stack-title" className="space-y-3">
            {stack.map((tech) => (
              <li key={tech} className="flex items-center gap-3">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-neutral-300 text-sm">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
