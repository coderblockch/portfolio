const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];

const focusRing =
  "rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

export default function Navbar() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5"
    >
      <a
        href="#hero"
        className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:text-sm focus:font-semibold ${focusRing}`}
      >
        Saltar al contenido
      </a>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          aria-label="Ir al inicio"
          className={`text-violet-400 font-mono font-semibold tracking-tight hover:text-violet-300 transition-colors ${focusRing}`}
        >
          david.dev
        </a>
        <div className="flex gap-8 text-sm text-neutral-400">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`hover:text-white transition-colors ${focusRing}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
