type Categoria = {
  titulo: string;
  items: string[];
};

const categorias: Categoria[] = [
  {
    titulo: "Frontend",
    items: [
      "React",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Radix",
      "Figma",
    ],
  },
  {
    titulo: "Backend y datos",
    items: [
      "Node.js",
      "PostgreSQL",
      "REST",
      "MongoDB",
      "Express",
    ],
  },
  {
    titulo: "Infraestructura y herramientas",
    items: [
      "Vercel",
      "Git",
      
    ],
  },

];

export default function Tecnologias() {
  return (
    <section className="w-full  box-border">
      <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-8">
        <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
        Tecnologías
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {categorias.map((cat) => (
          <div key={cat.titulo}>
            <h3 className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {cat.titulo}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {cat.items.map((item) => (
                <li key={item} style={{ color: "#a3a3a3" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}