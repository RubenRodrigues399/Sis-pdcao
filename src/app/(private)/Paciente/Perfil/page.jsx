"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";

const Profile = () => {
  // Dados fictícios do perfil
  const initialProfile = {
    avatar: "/assets/img/Ruben.png", // Caminho da imagem ou substitua por um avatar padrão
    nome: "Ruben Rodrigues",
    email: "rubenzidane08@gmail.com",
    dataNascimento: "03/03/1999",
    genero: "Masculino",
    estadoCivil: "Solteiro",
    telefone: "+244 937 869 519",
    endereco: "Bawer, Camama, Luanda, Angola",
    tipoSanguineo: "O+",
    alergias: "Nenhuma",
    observacoes: "Ativo, sem histórico de problemas clínicos graves.",
    senhaActual: "Digite a senha actual",
    novaSenha: "Digite a nova senha",
  };

  const [userProfile, setUserProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(initialProfile);

  // Função para lidar com a abertura do modal de edição
  const handleEdit = () => {
    setEditData(userProfile);
    setIsEditing(true);
  };

  // Função para salvar as alterações
  const handleSave = () => {
    setUserProfile(editData);
    setIsEditing(false);
  };

  // Função para cancelar a edição
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Função para lidar com mudanças nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <>
      <NavBarIn />
      <div className="bg-blue-100 p-8 rounded-md shadow-md max-w-4xl mx-auto mt-10">
        {/* Header do Perfil */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={userProfile.avatar}
            alt="Avatar do Usuário"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              {userProfile.nome}
            </h1>
            <p className="text-sm text-gray-600">{userProfile.email}</p>
          </div>
        </div>

        {/* Dados Pessoais */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">
            Dados Pessoais
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-700">Data de Nascimento:</p>
              <p>{userProfile.dataNascimento}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Gênero:</p>
              <p>{userProfile.genero}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Estado Civil:</p>
              <p>{userProfile.estadoCivil}</p>
            </div>
          </div>
        </div>

        {/* Contatos */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">Contatos</h2>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-700">Telefone:</p>
              <p>{userProfile.telefone}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Endereço:</p>
              <p>{userProfile.endereco}</p>
            </div>
          </div>
        </div>

        {/* Registro Clínico */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">
            Registro Clínico
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-700">Tipo Sanguíneo:</p>
              <p>{userProfile.tipoSanguineo}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Alergias:</p>
              <p>{userProfile.alergias}</p>
            </div>
          </div>
        </div>

        {/* Outras Informações */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600">
            Outras Informações
          </h2>
          <p className="mt-4 text-gray-700">{userProfile.observacoes}</p>
        </div>

        {/* Botão Editar Perfil */}
        <button
          onClick={handleEdit}
          className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Editar Perfil
        </button>
      </div>

      {/* Modal de Edição */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 text-center">
              Editar Perfil
            </h2>
            <form className="grid grid-cols-2 gap-6">
              {Object.keys(editData).map(
                (key) =>
                  key !== "avatar" && (
                    <div key={key}>
                      <label className="block text-gray-700 capitalize font-medium mb-2">
                        {key.replace(/([A-Z])/g, " $1")}
                      </label>
                      <input
                        type="text"
                        name={key}
                        value={editData[key]}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )
              )}
            </form>
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-md bg-gray-300 px-6 py-2 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Profile;