"use client";
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Footer from "@/components/Footer";
import Modal from "@/components/ModalOpen";
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";

const Especialidades = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Recent Staff Section */}
          <div className="flex items-center justify-center">

          <section className="bg-white shadow-md w-10/12 p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Especialidades</h2>
              <button
                className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded"
                onClick={() => setModalOpen(true)}
              >
                Adicionar
              </button>
            </div>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Nome</th>
                  <th className="p-2 border">Custos</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                <LinhaTabelaEspecialidade
                  id="1"
                  nome="Clinica geral"
                  preco="2000KZS"
                />
              </tbody>
            </table>
          </section>
          </div>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4 text-center">
          Cadastro de Especialidades
        </h2>
        <form className="grid grid-cols-2 gap-4 mt-5">
          <input
            type="text"
            className="border placeholder-black p-2 rounded"
            placeholder="Nome"
          />
          <input
            type="text"
            className="border placeholder-black rounded p-2"
            placeholder="Preço"
          />
        </form>
        <div className="flex space-x-4 justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            Registrar
          </button>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Especialidades;
