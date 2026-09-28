import Image from "next/image";

type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string;
  github?: string;
  demo?: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Vivero Agronomía",
    descripcion: `Proyecto personal orientado al desarrollo web que representa un vivero online.
      La aplicación permite mostrar un catálogo de productos de jardinería, organizar
      información de plantas y facilitar la navegación entre distintas categorías.
      Fue desarrollado para practicar arquitectura de aplicaciones, manejo de datos y
      desarrollo de interfaces interactivas.`,
    imagen: "/proyectos/vivero.png",
    github: "https://github.com/mjmoretti/vivero-agronomia",
    demo: "", // se completa cuando lo deployes
  },
  {
    titulo: "Power Gym",
    descripcion: `PowerGym fue el proyecto final grupal en Henry para la gestión integral de 
      gimnasios, enfocado en optimizar procesos administrativos centralizando 
      membresías, turnos y la comunicación con coaches. Su valor diferencial es 
      ofrecer una solución clara, escalable y con roles definidos que mejora la 
      eficiencia operativa y la experiencia del usuario.`,
    imagen: "/proyectos/powergym.png",
    github: "https://github.com/mjmoretti/power-gym",
    demo: "https://pf-front-ijjg.vercel.app/",
  },
];

export default function Proyectos() {
  return (
    <section className="w-full  box-border">
      <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-5">
  <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
  Proyectos más recientes
</h2>

      <div className="flex flex-col gap-12">
        {proyectos.map((p) => (
          <a
            key={p.titulo}
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl overflow-hidden hover:opacity-90 transition"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {/* Captura/mockup del proyecto */}
            <div
              className="overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <Image
                src={p.imagen}
                alt={p.titulo}
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            {/* Texto debajo */}
            <div className="p-6">
              <h3 className="text-white font-semibold text-lg">
                {p.titulo}
              </h3>
              <p className="text-sm mt-2" style={{ color: "#a3a3a3" }}>
                {p.descripcion}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}