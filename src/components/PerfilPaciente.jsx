import React from "react";

const PatientProfile = ({ paciente, onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        onClick={onClose}
      >
        ×
      </button>
      <h2 className="text-2xl font-semibold text-center mb-6">Perfil do Paciente</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Informações Pessoais */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold mb-2">Informações Pessoais</h3>
          <p><strong>Nome:</strong> {paciente.nome}</p>
          <p><strong>Gênero:</strong> {paciente.genero}</p>
          <p><strong>Data de Nascimento:</strong> {paciente.data_nascimento}</p>
        </div>

        {/* Contato */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p><strong>Telefone:</strong> {paciente.telefone}</p>
          <p><strong>Email:</strong> {paciente.email}</p>
        </div>

        {/* Endereço */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold mb-2">Endereço</h3>
          <p>{paciente.endereco}</p>
        </div>

        {/* Histórico */}
        <div className="col-span-1 sm:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Histórico</h3>
          <p>
            Este paciente tem registros ativos em nosso sistema desde{" "}
            <strong>20/01/2022</strong>. Não há registros recentes de alterações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
