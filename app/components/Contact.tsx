const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/coderblockch",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jdavidjimenez",
  },
];

const email = "jdavidjimenezq@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 px-6 max-w-5xl mx-auto text-center"
    >
      <p aria-hidden="true" className="text-violet-400 font-mono text-sm mb-2">
        04.
      </p>
      <h2 id="contact-title" className="text-3xl font-bold text-white mb-4">
        Contacto
      </h2>
      <p className="text-neutral-300 max-w-md mx-auto mb-10 leading-relaxed">
        Estoy abierto a nuevas oportunidades, colaboraciones o simplemente una buena conversación sobre tecnología.
      </p>
      <a
        href={`mailto:${email}`}
        aria-label={`Escribirme por correo a ${email}`}
        className="inline-block px-8 py-4 border border-violet-500/50 text-violet-300 font-semibold rounded hover:border-violet-400 hover:bg-violet-500/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
      >
        {email}
      </a>
      <nav aria-label="Redes sociales" className="mt-12">
        <ul className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (se abre en una pestaña nueva)`}
                className="text-neutral-300 hover:text-violet-400 transition-colors text-sm rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
