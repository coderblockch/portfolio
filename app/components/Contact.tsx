export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <p className="text-neutral-500 font-mono text-sm mb-2">04.</p>
      <h2 className="text-3xl font-bold text-white mb-4">Contacto</h2>
      <p className="text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed">
        Estoy abierto a nuevas oportunidades, colaboraciones o simplemente una buena conversación sobre tecnología.
      </p>
      <a
        href="mailto:jdavidjimenezq@gmail.com"
        className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-all"
      >
        jdavidjimenezq@gmail.com
      </a>
      <div className="flex justify-center gap-6 mt-12">
        <a
          href="https://github.com/coderblockch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-white transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jdavidjimenez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-white transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
