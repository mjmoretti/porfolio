import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center h-full md:px-8 py-12 gap-6">
      <div className="flex items-center gap-10">
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/yo.JPG"
            alt="María José Moretti"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <a
          href="/cv-maria-jose-moretti.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-gray-800 transition"
        >
          Ver Curriculum Vitae
        </a>
      </div>

      <div>
        <h1 className="text-3xl font-bold">María José Moretti</h1>
        <p className="text-lg text-gray-600 mt-1">
          Desarrolladora Full Stack (focus frontend)
        </p>
      </div>

      <p className="text-sm text-gray-500 italic">
        Creo experiencias digitales orientadas a resolver desafíos concretos de negocio. 
        Mi objetivo es aportar valor mediante soluciones sencillas, mantenibles y escalables, 
        potenciando el desarrollo moderno con herramientas de automatización e IA aplicada.
      </p>

      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <FaLinkedin className="text-gray-700" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Linkedin</p>
            <a
              href="https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-moretti-32b491209/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              @maría-josé-moretti
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <FaGithub className="text-gray-700" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400">GitHub</p>
            <a
              href="https://github.com/mjmoretti"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              @mjmoretti
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <MdEmail className="text-gray-700" size={18} />
          </div>
          <div>
            <p className="text-xs text-gray-400">Email</p>
            <a
              href="mailto:mjmoretti75@hotmail.com"
              className="font-semibold hover:underline"
            >
              mjmoretti75@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}