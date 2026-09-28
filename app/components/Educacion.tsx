type Item = {
  titulo: string;
  institucion: string;
  fechas: string;
};

const educacion: Item[] = [
  {
    titulo: "Full Stack Web Developer",
    institucion: "Henry Bootcamp",
    fechas: "Marzo 2025 - Marzo 2026",
  },
  {
    titulo: "Full Stack Web Developer",
    institucion: "Egg Bootcamp",
    fechas: "Mayo 2019 - Marzo 2020",
  },
  {
    titulo: "Técnico en Producción Automatizada",
    institucion: "Instituto Tecnológico Universitario",
    fechas: "Marzo 2000 - Diciembre 2002",
  },
];

const certificaciones: Item[] = [
  {
    titulo: "First Certificate in English (FCE)",
    institucion: "Cambridge English",
    fechas: "Diciembre 2006",
  },
  // Agregá más acá
];

function ItemRow({ item }: { item: Item }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
      <div>
        <p className="text-white text-sm font-semibold">{item.titulo}</p>
        <p className="text-xs" style={{ color: "#a3a3a3" }}>
          {item.institucion} | {item.fechas}
        </p>
      </div>
    </li>
  );
}

export default function Educacion() {
  return (
    <div className="flex flex-col gap-8">
      <section className="w-full box-border">
        <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-5">
          <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
          Educación
        </h2>
        <ul className="flex flex-col gap-5">
          {educacion.map((item, i) => (
            <ItemRow key={i} item={item} />
          ))}
        </ul>
      </section>

      <section className="w-full box-border">
        <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-5">
          <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
          Certificaciones
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {certificaciones.map((item, i) => (
            <ItemRow key={i} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}