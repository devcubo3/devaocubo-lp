export default function Tecnologias() {
  const techs = [
    { icon: "code", name: "React" },
    { icon: "data_object", name: "Node.js" },
    { icon: "cloud_queue", name: "AWS" },
    { icon: "smartphone", name: "Flutter" },
    { icon: "layers", name: "Figma" },
  ];

  return (
    <section
      id="resultados"
      className="py-12 border-y border-gray-200 bg-white"
    >
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2">
            Resultados tangíveis que te dão segurança
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-widest">
            +150 Projetos entregues com as melhores tecnologias
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-700"
            >
              <span className="material-symbols-outlined">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
