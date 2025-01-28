"use client";
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Modal from "@/components/ModalOpen";
import Footer from "@/components/Footer";
import LinhaTabelaPessAdmin from "@/components/LinhaTabelaPessAdmin";
import { AddAdminForm } from "./add-admin-form";

const PessoalAdmin = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Recent Staff Section */}
          <section className="bg-white shadow-md p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center text-black">
              <h2 className="text-lg font-semibold">Pessoal Administrativo</h2>
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
                  <th className="p-2 border">Endereço</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody><LinhaTabelaPessAdmin
                id={<span className="p-2 text-gray-700">1</span>}
                nome={<span className="p-2 text-gray-700">Ruben Rodrigues</span>}
                funcao={<span className="p-2 text-gray-700">Secretário</span>}
                genero={<span className="p-2 text-gray-700">Masculino</span>}
                data_nascimento={<span className="p-2 text-gray-700">03-03-1999</span>}
                telefone={<span className="p-2 text-gray-700">937869519</span>}
                email={<span className="p-2 text-gray-700">ruben339@gmail.com</span>}
                endereco={<span className="p-2 text-gray-700">Talatona, Camama</span>}
              />
                <LinhaTabelaPessAdmin
                  id={<span className="p-2 text-gray-700">2</span>}
                  nome={<span className="p-2 text-gray-700">Silk Manuel</span>}
                  funcao={<span className="p-2 text-gray-700">Director</span>}
                  genero={<span className="p-2 text-gray-700">Masculino</span>}
                  data_nascimento={<span className="p-2 text-gray-700">17-06-2001</span>}
                  telefone={<span className="p-2 text-gray-700">946753908</span>}
                  email={<span className="p-2 text-gray-700">silkadas20@gmail.com</span>}
                  endereco={<span className="p-2 text-gray-700">Gamek, Rocha</span>}
                />

              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddAdminForm />
      </Modal>
      <Footer />
    </>
  );
};

export default PessoalAdmin;
