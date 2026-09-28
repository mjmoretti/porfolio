const habilidades: string[] = [
  "Arquitectura frontend modular por dominios",
  "Desarrollo frontend con React, Next.js y TypeScript",
  "Desarrollo móvil con React Native",
  "Construcción y evolución de CMS interno para marcas e idiomas",
  "Integración de APIs REST (ERP/CRM)",
  "Performance web y SEO técnico (SSG/ISR, metadata, JSON-LD)",
  "Observabilidad frontend, feature flags, seguridad y testing E2E",
  "Despliegue end-to-end en cloud (Vercel, AWS Amplify, DNS y SSL)",
];

export default function Habilidades() {
  return (
    <section className="w-full box-border">
      <h2 className="relative flex items-center gap-2 text-xs font-semibold tracking-widest text-white uppercase mb-5">
        <span className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black" />
        Habilidades
      </h2>

      <ul className="flex flex-col gap-2.5">
        {habilidades.map((item, i) => (
          <li
            key={i}
            className="text-sm flex gap-2"
            style={{ color: "#a3a3a3" }}
          >
            <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}