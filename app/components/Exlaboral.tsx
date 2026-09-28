type Experiencia = {
  empresa: string;
  puesto: string;
  fechas: string;
  bullets: string[];
};

const experiencias: Experiencia[] = [
  {
    empresa: "Grafipel SRL",
    puesto: "Administrativa",
    fechas: "Diciembre 2001 – Actualidad",
    bullets: [
      `Más de 20 años de experiencia en PyMEs me han dotado de un sólido trasfondo
      operativo, complementado con mi rol actual donde trabajo de manera cercana con
      herramientas digitales, organización y resolución de necesidades del día a día.
      Esta trayectoria me ha permitido desarrollar una gran responsabilidad, capacidad
      de adaptación y trabajo en equipo, buscando siempre que el desarrollo técnico
      dialogue armónicamente con la experiencia del usuario y los objetivos del negocio.`,
    ],
  },
  // Agregá más objetos acá si tenés más de una experiencia
];

export default function Exlaboral() {
  return (
    <section className="w-full  box-border">
      <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-5">
        <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
        Experiencia laboral
      </h2>

      <div className="flex flex-col gap-10">
        {experiencias.map((exp) => (
          <div key={exp.empresa}>
            <h3 className="text-white font-semibold">{exp.empresa}</h3>

            <div className="mt-3">
              <p className="text-white text-sm font-medium">{exp.puesto}</p>
              <p className="text-xs" style={{ color: "#a3a3a3" }}>
                {exp.fechas}
              </p>
            </div>

            <ul className="mt-3 flex flex-col gap-2">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2"
                  style={{ color: "#d4d4d4" }}
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                  <span className="whitespace-pre-line">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}