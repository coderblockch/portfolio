export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <p className="text-violet-400 font-mono text-sm mb-4">Hola, soy</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        DavidDev
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-violet-300 mb-6">
        Desarrollador Fullstack
      </h2>
      <p className="text-neutral-400 max-w-xl text-lg leading-relaxed mb-10">
        Estudiante de desarrollo de software apasionado por construir aplicaciones web
        modernas y explorar tecnologías emergentes como blockchain.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-violet-600 text-white font-semibold text-sm rounded hover:bg-violet-500 transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-violet-500/50 text-violet-300 font-semibold text-sm rounded hover:border-violet-400 hover:text-violet-200 transition-colors"
        >
          Contacto
        </a>
      </div>
    </section>
  );
}
