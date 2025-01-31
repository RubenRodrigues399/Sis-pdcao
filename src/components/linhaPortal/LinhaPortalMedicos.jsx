import { FaEye } from "react-icons/fa";
import Modal from "../ModalGenerico"

import { useState } from "react";

export default function LinhaPortalMedicos({ id, nome, telefone01, genero, especialidade, numOrdem }) {
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
        <td className="px-3 py-3">{genero}</td>
        <td className="px-3 py-3">{telefone01}</td>
        <td className="px-3 py-3">{especialidade}</td>
        <td className="px-3 py-3">{numOrdem}</td>
        <td className="px-4 py-3 flex items-center justify-end gap-2">
          <button onClick={() => openModal("view")} aria-label="Visualizar" className="hover:text-blue-500">
            <FaEye />
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
              <p><strong>Gênero:</strong> {preco}</p>
              <p><strong>Telefone:</strong> {id}</p>
              <p><strong>Especialidade:</strong> {nome}</p>
              <p><strong>Numero de ordem:</strong> {preco}</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

