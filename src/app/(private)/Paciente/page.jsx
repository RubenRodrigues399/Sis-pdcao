"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import LinhaTabelaPaciente from "@/components/LinhaTabelaPacientes";
import Modal from "@/components/ModalAddPaciente";

const PatientManagement = () => {
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
                    <th className="p-2 border">Email</th>
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
                    email="luba123@gmail.com"
                    endereco="Gamek, rocha"
                  />
                  <LinhaTabelaPaciente
                    id="2"
                    nome="Petia Paulo"
                    genero="Femenino"
                    data_nascimento="09-08-1999"
                    telefone="946753908"
                    email="pussynigga25@gmail.com"
                    endereco="Talatona, camama"
                  />
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
        <form className="grid grid-cols-2 gap-4 mt-5">
          <input type="text" placeholder="Nome" className="border placeholder-black p-2 rounded col-span-2" />
          <select className="border p-2 rounded">
            <option>Gênero</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
          <input type="date" placeholder="Date de Nascimento" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border placeholder-black p-2 rounded" />
          <input type="text" placeholder="Telefone" className="border placeholder-black p-2 rounded" />          
          <input placeholder="Endereço" className="border placeholder-black p-2 rounded col-span-2" />
          <input type="text" placeholder="Entidade Financeira" className="border placeholder-black p-2 rounded" />
          <input
            type="password"
            placeholder="Password"
            className="border placeholder-black p-2 rounded"
          />
          {/* <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded"
          /> */}
        </form>
        <div className="flex mt-6 justify-center">
          <button className="bg-[#21aeb8] text-white px-4 py-2 rounded">Adicionar Paciente</button>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default PatientManagement;
