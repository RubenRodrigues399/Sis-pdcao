import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Modal from "./ModalGenerico"

import { useState } from "react";

export default function LinhaTabelaPaciente({ id, nome, genero, data_nascimento, telefone, endereco }) {
  const [modalType, setModalType] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <tr className="border-b text-left dark:border-lilas">
        <td className="px-3 py-3 font-medium">{id}</td>
        <td className="px-3 py-3 max-w-[200px] break-words">{nome}</td>
        <td className="px-3 py-3">{genero}</td>
        <td className="px-3 py-3">{data_nascimento}</td>
        <td className="px-3 py-3">{telefone}</td>
        <td className="px-3 py-3">{endereco}</td>
        <td className="px-4 py-3 flex items-center justify-end gap-2">
          <button onClick={() => openModal("view")} aria-label="Visualizar" className="hover:text-blue-500">
            <FaEye />
          </button>
          <button onClick={() => openModal("edit")} aria-label="Editar" className="hover:text-green-500">
            <FaEdit />
          </button>
          <button onClick={() => openModal("delete")} aria-label="Apagar" className="hover:text-red-500">
            <FaTrash />
          </button>
        </td>
      </tr>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalType === "view" && (
            <div>
              <h2 className="text-2xl font-semibold text-center mb-6 text-black">Detalhes da agenda</h2>
              
              <p className="text-black"><strong>Médico:</strong> {nome}</p>
              <p className="text-black"><strong>Especialidade:</strong> {genero}</p>
              <p className="text-black"><strong>Data:</strong> {data_nascimento}</p>
            </div>
          )}
          {modalType === "edit" && (
            <div>
              <h2 className="text-xl font-semibold">Editar Agenda</h2>
              <form className="grid grid-cols-2 gap-4 mt-4">
                <input type="text" defaultValue={nome} placeholder="Nome" className="border p-2 rounded" />
                <select defaultValue={genero} className="border p-2 rounded">
                  <option>Especialidade</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
                <input type="date" defaultValue={data_nascimento} className="border p-2 rounded" />
                <input type="text" defaultValue={telefone} placeholder="Telefone" className="border p-2 rounded" />
                <input type="email" defaultValue={email} placeholder="Email" className="border p-2 rounded" />
                <textarea defaultValue={endereco} placeholder="Endereço" className="border p-2 rounded col-span-2" />
              </form>
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>Salvar</button>
              </div>
            </div>
          )}
          {modalType === "delete" && (
            <div>
              <h2 className="text-xl font-semibold text-black">Apagar Agenda</h2>
              <p className="text-black"> Tem certeza de que deseja apagar a agenda <strong>{nome}</strong>?</p>
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={closeModal}>Cancelar</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Apagar</button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

