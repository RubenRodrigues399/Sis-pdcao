"use client"
import Footer from "@/components/Footer";
import LinhaTabelaPaciente from "@/components/LinhaTabelaPacientes";
import Modal from "@/components/ModalOpen";
import NavBarIn from "@/components/NavBarIn";
import React, { useState } from "react";
import { AddPacienteForm } from "./add-paciente-form";

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
                  <tr className="bg-gray-100 text-left">
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
                    id="1"
                    nome="André Lubambi"
                    genero="Masculino"
                    data_nascimento="03-03-2000"
                    telefone="937654978"
                    endereco="Gamek, rocha"
                  />
                  <LinhaTabelaPaciente
                    id="2"
                    nome="Petia Paulo"
                    genero="Femenino"
                    data_nascimento="09-08-1999"
                    telefone="946753908"
                    endereco="Talatona, camama"
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