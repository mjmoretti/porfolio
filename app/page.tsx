import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Exlaboral from "./components/Exlaboral";
import Educacion from "./components/Educacion";
import Tecnologias from "./components/Tecnologias";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-12 px-8 md:px-16">
        <aside className="md:sticky md:top-0 md:h-screen md:w-1/3">
          <Hero />
        </aside>

        <div className="md:w-2/3 md:border-l md:border-gray-800 md:pl-8 md:pt-8 flex flex-col gap-8">
          <Proyectos />
          <Exlaboral />
          <Educacion />
          <Tecnologias />
          <Habilidades />
        </div>
      </main>

      <Footer />
    </>
  );
}