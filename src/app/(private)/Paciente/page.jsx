"use client"
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import Modal from "@/components/ModalOpen";
import React, { useState, useEffect } from 'react';
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/especialidade/all";
const Dashboard = () => {
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [formData, setFormData] = useState({ nome: "", preco: "" });
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await fetch(URL_API);
        if (!response.ok) {
          console.error(
            "Erro na resposta da API:",
            response.status,
            response.statusText
          );
          return;
        }
        const data = await response.json();

        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          setEspecialidades(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setEspecialidades([]); // Evitar quebra no frontend
        }
      } catch (error) {
        console.error("Erro ao buscar especialidades:", error);
        setEspecialidades([]); // Evitar quebra no frontend
      }
    };

    fetchEspecialidades();
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">

        <h2 className="text-gray-700 text-2xl text-center">Dashaboard do paciente</h2>
          {/* Appointments and Appointments */}
          <section className="grid grid-cols-2 gap-4 mt-6">
            {/* Appointments */}
            <div className="bg-gray-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">Marcações</h2>
              <ul className="mt-4 space-y-2">
                  <li
                    className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-700">Consulta</span>
                    <div className="flex space-x-2">
                    <button
                  className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded mb-4 "
                  onClick={() => setModalOpen(true)}
                >
                  Marcar
                </button>
                    </div>
                  </li>
                  <li
                    className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-700">Exame</span>
                    <div className="flex space-x-2">
                    <button
                  className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded mb-4 "
                  onClick={() => setModalOpen(true)}
                >
                  Marcar
                </button>
                    </div>
                  </li>
              </ul>
            </div>
            {/* Appointments */}
            <div className="bg-gray-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">Especialidades recentes</h2>
              <div className="mt-4 overflow-y-auto max-h-40"> {/* Define altura máxima e permite scroll */}
              <table className="w-full mt-4 border-collapse">
                <thead>

                  <tr className="bg-gray-200 text-gray-900">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Preço</th>
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
                </div>
            </div>
          </section>
          

          {/* Recent Doctors and Out of Stock */}
          <section className="grid grid-cols-2 gap-4 mt-6">
            {/* Recent Doctors */}
           <div className="bg-white shadow-md p-6 rounded-lg">
  <h2 className="text-lg font-semibold text-gray-800">Pessoal Clínico recente</h2>
  <div className="mt-4 overflow-y-auto max-h-60"> {/* Define altura máxima e permite scroll */}
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Nome</th>
          <th className="p-2 border">Gênero</th>
          <th className="p-2 border">Telefone</th>
          <th className="p-2 border">Especialidade</th>
          <th className="p-2 border">Número de ordem</th>
        </tr>
      </thead>
      <tbody>
        {medicos.length > 0 ? (
          medicos.map((medico) => (
            <Linha
              key={medico.id}
              id={medico.id}
              nome={medico.nome}
              genero={medico.genero}
              telefone01={medico.telefone01}
              especialidade={medico.especialidade}
              numOrdem={medico.numOrdem}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center p-4">
              Nenhuma encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
            {/* Out of Stock */}
            <div className="bg-gray-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">Pessoal Admin recente</h2>
              <table className="w-full mt-4 border-collapse">
                <thead>

                  <tr className="bg-gray-200 text-gray-900">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Função</th>
                    <th className="p-2 border">Gênero</th>
                    <th className="p-2 border">Data de nascimento</th>
                    <th className="p-2 border">Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="p-2 text-gray-700">1</td>
                    <td className="p-2 text-gray-700">Ruben Rodrigues</td>
                    <td className="p-2 text-gray-700">Secretário</td>
                    <td className="p-2 text-gray-700">Masculino</td>
                    <td className="p-2 text-gray-700">03-03-1999</td>
                    <td className="p-2 text-gray-700">937869519</td>
                  </tr>

                </tbody>
              </table>
            </div>

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
      <Footer />
    </>
  );
};

export default Dashboard;