import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Modal from "./ModalGenerico"

import { useState } from "react";

export default function LinhaTabelaPessAdmin({ id, nome, funcao, genero, data_nascimento, telefone, email, endereco }) {
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
        <td className="px-3 py-3">{funcao}</td>
        <td className="px-3 py-3">{genero}</td>
        <td className="px-3 py-3">{data_nascimento}</td>
        <td className="px-3 py-3">{telefone}</td>
        <td className="px-3 py-3">{email}</td>
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
              <h2 className="text-2xl font-semibold text-center mb-6">Dados</h2>
              
              <p><strong>ID:</strong> {id}</p>
              <p><strong>Nome:</strong> {nome}</p>
              <p><strong>Função:</strong> {funcao}</p>
              <p><strong>Gênero:</strong> {genero}</p>
              <p><strong>Data de Nascimento:</strong> {data_nascimento}</p>
              <p><strong>Telefone:</strong> {telefone}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Endereço:</strong> {endereco}</p>
            </div>
          )}
          {modalType === "edit" && (
            <div>
              <h2 className="text-xl font-semibold">Editar pessoal Administrativo</h2>
              <form className="grid grid-cols-2 gap-4 mt-4">
                <input type="text" defaultValue={nome} placeholder="Nome" className="border p-2 rounded" />
                <input type="text" defaultValue={funcao} placeholder="Nome" className="border p-2 rounded" />
                <select defaultValue={genero} className="border p-2 rounded">
                  <option>Gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Femenino</option>
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
              <h2 className="text-xl font-semibold">Apagar Pessoal Administrativo</h2>
              <p>Tem certeza de que deseja apagar o {funcao} <strong>{nome}</strong>?</p>
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

