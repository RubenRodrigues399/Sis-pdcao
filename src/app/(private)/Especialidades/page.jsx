"use client";
import Footer from "@/components/Footer";
import Modal from "@/components/ModalOpen";
import NavBarIn from "@/components/NavBarIn";
import { useState } from "react";
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";

const Especialidades = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [especialidades, setEspecialidades] = useState([]);
  const [formData, setFormData] = useState({ nome: "", preco: "" });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
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
                  {especialidades.length > 0 ? (
                    especialidades.map((esp) => (
                      <LinhaTabelaEspecialidade
                        key={esp.id}
                        id={esp.id}
                        nome={esp.nome}
                        preco={`${esp.preco}KZS`}
                        onEdit={handleEditEspecialidade}
                        onDelete={handleDeleteEspecialidade}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        Nenhuma especialidade encontrada.
                      </td>
                    </tr>
                  )}
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
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
          <input
            type="number"
            className="border placeholder-black rounded p-2"
            placeholder="Preço"
            name="preco"
            value={formData.preco}
            onChange={handleInputChange}
          />
        </form>
        <div className="flex space-x-4 justify-center mt-6">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded"
            onClick={handleAddEspecialidade}
          >
            Registrar
          </button>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Especialidades;
