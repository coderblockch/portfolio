const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Blockchain / Web3",
    skills: ["Bitcoin", "Smart Contracts", "Wallets", "Crypto APIs"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Linux", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-neutral-500 font-mono text-sm mb-2">03.</p>
      <h2 className="text-3xl font-bold text-white mb-12">Habilidades</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            {group.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-500" />
                <span className="text-neutral-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
