// Set to true once public/cv.pdf is added, so the "Descargar CV" button
// never points to a missing file on the live site.
const SHOW_CV_BUTTON = true;

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <p className="text-violet-400 font-mono text-sm mb-4">Hola, soy</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        David Jimenez
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-violet-300 mb-6">
        Junior Full-Stack Developer
      </h2>
      <p className="text-neutral-400 max-w-xl text-lg leading-relaxed mb-10">
        Desarrollador full-stack junior en formación en el bootcamp DUAD. Construyo
        aplicaciones web con Python (Flask, FastAPI) y JavaScript, con pruebas
        automatizadas y demos en vivo.
      </p>
      <p className="text-neutral-400 max-w-xl text-sm mb-10 -mt-6">
        Proyecto destacado:{" "}
        <a
          href="https://sachealth-os.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 font-semibold hover:text-violet-200 underline underline-offset-4"
        >
          SacHealth OS
        </a>
        , triaje clínico y gestión de camas con FastAPI, en vivo en Render.
      </p>
      <div className="flex flex-wrap gap-4">
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
        {SHOW_CV_BUTTON && (
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 border border-white/15 text-neutral-300 font-semibold text-sm rounded hover:border-white/40 hover:text-white transition-colors"
        >
          Descargar CV
        </a>
        )}
      </div>
    </section>
  );
}
