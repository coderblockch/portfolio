export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-mono font-semibold tracking-tight">david.dev</span>
        <div className="flex gap-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
