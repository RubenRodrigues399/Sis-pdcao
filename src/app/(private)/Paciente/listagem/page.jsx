"use client"
import Footer from "@/components/Footer";
import LinhaTabelaPaciente from "@/components/LinhaTabelaPacientes";
import Modal from "@/components/ModalOpen";
import NavBarIn from "@/components/NavBarIn";
import React, { useState } from "react";
import { AddPacienteForm } from "../add-paciente-form";

const Paciente = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Pacientes</h2>
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
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Gênero</th>
                    <th className="p-2 border">Data de nascimento</th>
                    <th className="p-2 border">Telefone</th>
                    <th className="p-2 border">Endereço</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <LinhaTabelaPaciente
                    id={<span className="p-2 text-gray-700">1</span>}
                    nome={<span className="p-2 text-gray-700">André Lubambi</span>}
                    genero={<span className="p-2 text-gray-700">Masculino</span>}
                    data_nascimento={<span className="p-2 text-gray-700">03-03-2000</span>}
                    telefone={<span className="p-2 text-gray-700">937654978</span>}
                    endereco={<span className="p-2 text-gray-700">Gamek, rocha</span>}
                  />
                  <LinhaTabelaPaciente
                    id={<span className="p-2 text-gray-700">2</span>}
                    nome={<span className="p-2 text-gray-700">Petia Paulo</span>}
                    genero={<span className="p-2 text-gray-700">Femenino</span>}
                    data_nascimento={<span className="p-2 text-gray-700">09-08-1999</span>}
                    telefone={<span className="p-2 text-gray-700">946753908</span>}
                    endereco={<span className="p-2 text-gray-700">Talatona, camama</span>}
                  />

                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddPacienteForm />
      </Modal>
      <Footer />
    </>
  );
};

export default Paciente;