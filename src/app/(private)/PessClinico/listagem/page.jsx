"use client";
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Footer from "@/components/Footer";
import Modal from "@/components/ModalOpen";
import LinhaTabelaPessClinico from "@/components/LinhaTabelaPessClinico";

const PessoalClinico = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Recent Staff Section */}
          <section className="bg-white shadow-md p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Pessoal Clínico</h2>
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
                  <th className="p-2 border">Função</th>
                  <th className="p-2 border">Gênero</th>
                  <th className="p-2 border">Data de nascimento</th>
                  <th className="p-2 border">Telefone</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">NIC</th>
                  <th className="p-2 border">Endereço</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                <LinhaTabelaPessClinico
                  id={<span className="p-2 text-gray-700">1</span>}
                  nome={<span className="p-2 text-gray-700">Ruben Rodrigues</span>}
                  funcao={<span className="p-2 text-gray-700">Doctor</span>}
                  genero={<span className="p-2 text-gray-700">Masculino</span>}
                  data_nascimento={<span className="p-2 text-gray-700">03-03-1999</span>}
                  telefone={<span className="p-2 text-gray-700">937869519</span>}
                  email={<span className="p-2 text-gray-700">ruben339@gmail.com</span>}
                  nic={<span className="p-2 text-gray-700">24</span>}
                  endereco={<span className="p-2 text-gray-700">Talatona, Camama</span>}
                />
                <LinhaTabelaPessClinico
                  id={<span className="p-2 text-gray-700">2</span>}
                  nome={<span className="p-2 text-gray-700">Silk Manuel</span>}
                  funcao={<span className="p-2 text-gray-700">Enfermeiro</span>}
                  genero={<span className="p-2 text-gray-700">Masculino</span>}
                  data_nascimento={<span className="p-2 text-gray-700">17-06-2001</span>}
                  telefone={<span className="p-2 text-gray-700">946753908</span>}
                  email={<span className="p-2 text-gray-700">silkadas20@gmail.com</span>}
                  nic={<span className="p-2 text-gray-700">7</span>}
                  endereco={<span className="p-2 text-gray-700">Gamek, Rocha</span>}

                />

              </tbody>
            </table>

          </section>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4 text-center">Cadastro de Pessoal Clínico</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="First Name" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Last Name" />
          </div>
          <div className="flex flex-col">
            <select className="border rounded p-2">
              <option>Role</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select className="border rounded p-2">
              <option>Genero</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <input type="email" className="border rounded p-2" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Mobile Number" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Address" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="NIC" />
          </div>
          <div className="flex flex-col">
            <input type="date" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <input type="password" className="border rounded p-2" placeholder="Password" />
          </div>
          <div className="flex flex-col">
            <input type="password" className="border rounded p-2" placeholder="Confirm Password" />
          </div>
        </div>

        <div className="flex space-x-4 justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded">Register</button>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default PessoalClinico;
