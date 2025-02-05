"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import LinhaTabelaAgenda from "@/components/LinhaTabelaAgenda";
import Modal from "@/components/ModalOpen";

const Agenda = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-black">Agendas</h2>
                <button
                  className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded"
                  onClick={() => setModalOpen(true)}
                >
                  Adicionar
                </button>
              </div>
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-900">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Médico</th>
                    <th className="p-2 border">Especialidade</th>
                    <th className="p-2 border">Data </th>
                  </tr>
                </thead>
                <tbody>
                  <LinhaTabelaAgenda
                    id={<span className="p-2 text-gray-700">1</span>}
                    nome={<span className="p-2 text-gray-700">André Lubambi</span>}
                    genero={<span className="p-2 text-gray-700">Masculino</span>}
                    data_nascimento={<span className="p-2 text-gray-700">03-03-2000</span>}
                  />
                  <LinhaTabelaAgenda
                    id={<span className="p-2 text-gray-700">2</span>}
                    nome={<span className="p-2 text-gray-700">Petia Paulo</span>}
                    genero={<span className="p-2 text-gray-700">Femenino</span>}
                    data_nascimento={<span className="p-2 text-gray-700">09-08-1999</span>}
                  />

                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <span className="text-lg pl-56 font-semibold text-black">Criar agenda</span>
        <form className="grid grid-cols-2 gap-4 mt-5">

          <select className="border p-2 rounded text-black">
            <option>Especialidade</option>
            <option>Ortopedia</option>
            <option>Estomatologia</option>
          </select>

          <select className="border p-2 rounded text-black">
            <option>Médico</option>
            <option>Ortopedia</option>
            <option>Estomatologia</option>
          </select>


          <input type="date" placeholder="Date de Nascimento" className="border p-2 rounded text-black" />

        </form>
        <div className="flex mt-6 justify-center">
          <button className="bg-[#21aeb8] text-white px-4 py-2 rounded">Criar agenda</button>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Agenda;