"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];

const focusRing =
  "rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <div className="hidden sm:flex gap-8 text-sm text-neutral-400">
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`sm:hidden text-neutral-300 hover:text-white transition-colors ${focusRing}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="sm:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-neutral-400"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`hover:text-white transition-colors ${focusRing}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
