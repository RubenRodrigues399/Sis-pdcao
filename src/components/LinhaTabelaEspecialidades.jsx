import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Modal from "./ModalGenerico"

import { useState } from "react";

export default function LinhaTabelaEspecialidade({ id, nome, preco }) {
  const [modalType, setModalType] = useState(null); // Controla qual modal abrir
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
        <td className="px-3 py-3">{preco}</td>
        <td className="px-4 py-3 flex items-center justify-end gap-2">
          {/* <button onClick={() => openModal("view")} aria-label="Visualizar" className="hover:text-blue-500">
            <FaEye />
          </button> */}
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
              <h2 className="text-2xl font-semibold text-center mb-6">Dados da especialidade</h2>
              
              <p><strong>ID:</strong> {id}</p>
              <p><strong>Nome:</strong> {nome}</p>
              <p><strong>Email:</strong> {preco}</p>
            </div>
          )}
          {modalType === "edit" && (
            <div>
              <h2 className="text-xl font-semibold">Editar especialidade</h2>
              <form className="grid grid-cols-2 gap-4 mt-4">
                <input type="text" defaultValue={nome} placeholder="Nome da especialidade" className="border p-2 rounded" />
                <input type="text" defaultValue={preco} placeholder="Custos" className="border p-2 rounded" />
              </form>
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>Salvar</button>
              </div>
            </div>
          )}
          {modalType === "delete" && (
            <div>
              <h2 className="text-xl font-semibold">Apagar especialidades</h2>
              <p>Tem certeza de que deseja apagar a especialidade <strong>{nome}</strong>?</p>
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

