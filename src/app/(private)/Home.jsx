import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";
import NossaEquipa from "../Componentes/NossaEquipa";
import Stats from "../Componentes/Stats";

import hospital from "../assets/img/geral.jpg";

function Home() {
  return (
    <>
      <NavBar />

      <div className="bg-blue-50 py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-6xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Seja bem-vindo ao hospital Health First!
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                A sua saúde em primeiro lugar.
              </p>
            </div>

            <div className="mx-auto mb-12 max-w-lg lg:mx-0">
              <img
                src={hospital}
                className="border-r border-blue-50 rounded-xl"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 lg:max-w-screen-md lg:grid-cols-3">
            <div className="relative border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a
                  href="/especialidades"
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                >
                  <span className="absolute inset-0" /> Especialidades
                </a>
              </h3>
              <p className="mt-5 pl-1 line-clamp-3 text-sm/6 text-black">
                Verifica as especialidades disponíveis no hospital.
              </p>
              <div className="mt-5">
                <a
                  href="/especialidades"
                  className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Visualizar
                </a>
              </div>
            </div>

            <div className="relative border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a
                  href="/medicos"
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                >
                  <span className="absolute inset-0" /> Médicos
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-black">
                Verifica os médicos disponíveis no hospital.
              </p>
              <div className="mt-5">
                <a
                  href="/medicos"
                  className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Visualizar
                </a>
              </div>
            </div>

            <div className="relative border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-black">
                <a
                  href="/exames"
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                >
                  <span className="absolute inset-0" /> Exames
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-black">
                Verifica os exames disponíveis no hospital.
              </p>
              <div className="mt-5">
                <a
                  href="/exames"
                  className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Visualizar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NossaEquipa />
      <Stats />


      <Footer />
    </>
  );
}

export default Home;
