export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <p className="text-neutral-500 font-mono text-sm mb-4">Hola, soy</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        David
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-400 mb-6">
        Desarrollador Fullstack
      </h2>
      <p className="text-neutral-500 max-w-xl text-lg leading-relaxed mb-10">
        Estudiante de desarrollo de software apasionado por construir aplicaciones web
        modernas y explorar tecnologías emergentes como blockchain.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black font-semibold text-sm rounded hover:bg-neutral-200 transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white/20 text-white font-semibold text-sm rounded hover:border-white/50 transition-colors"
        >
          Contacto
        </a>
      </div>
    </section>
  );
}
