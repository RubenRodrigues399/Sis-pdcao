"use client"
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Modal from "@/components/ModalOpen";
import Footer from "@/components/Footer";
import LinhaTabelaConsultas from "../../../../components/LinhaTabelaMarcacaoConsulta";

const Consultas = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>


      <div className="flex min-h-screen">

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">

          {/* Form Section */}


          {/* Table Section */}
          <section className="bg-white shadow-md p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold mb-4">Consultas abertas</h2>
              <button
                className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded mb-4 "
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
                  <th className="p-2 border">Nome da consulta</th>
                  <th className="p-2 border">Data da consulta</th>
                  <th className="p-2 border">Hora</th>
                  <th className="p-2 border">Preço</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                <LinhaTabelaConsultas
                  id="1"
                  nome="André Lubambi"
                  genero="Masculino"
                  data_nascimento="03-03-2000"
                  telefone="937654978"
                  endereco="Gamek, rocha"
                  nome_consulta="Clínica geral"
                  data_consulta="29-01-2025"
                  hora="08:00"
                  preco="5000KZS"
                />
              </tbody>
            </table>
          </section>
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className='flex items-center justify-center'>

          <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
            <h2 className="text-lg font-semibold mb-4">Marcação de consulta</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="border border-gray-300 rounded px-4 py-2 col-span-2"
              />
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Gênero</option>
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
              <input
                type="date"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Telefone"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                type=""
                placeholder="Endereço"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Departamento</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. John</option>
              </select>
              <input
                type="datetime-local"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Descrição"
                className="border border-gray-300 rounded px-4 py-2 mt-4 w-full"
              ></textarea>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
            </div>
          </section>
        </div>
      </Modal>

    </>
  );
};

export default Consultas;
