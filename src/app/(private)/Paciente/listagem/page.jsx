"use client"
import Footer from "@/components/Footer";
import LinhaTabelaPaciente from "@/components/LinhaTabelaPacientes";
import Modal from "@/components/ModalOpen";
import NavBarIn from "@/components/NavBarIn";
import React, { useState, useEffect } from "react";
import { AddPacienteForm } from "../add-paciente-form";
import Linha from "../../../../components/linhaPortal/LinhaPortalMedicos";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/medico";
const Paciente = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [medicos, setMedicos] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
  
    useEffect(() => {
      const getEspecialidades = async () => {
        const especialidadesMap = await fetchEspecialidades();
        setEspecialidades(especialidadesMap);
      };
    
      getEspecialidades();
    }, []);
  
    // Fetch especialidades from API
    useEffect(() => {
      const fetchPortalMedicos = async () => {
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
            // Ajustar a estrutura para extrair os dados do objeto 'usuario'
            const medicosFormatados = data.dados.map((medico) => ({
              id: medico.usuario?.id || null,
              nome: medico.usuario?.nome || "Sem nome",
              genero: medico.usuario?.genero || "Não informado",
              telefone01: medico.usuario?.telefone01 || "Sem telefone",
              especialidade: especialidades[medico.especialidade_id] || "Desconhecida",
              numOrdem: medico.numOrdem || "Sem número de ordem",
            }));
    
            setMedicos(medicosFormatados);
          } else {
            console.error("Os 'dados' da resposta não são um array:", data.dados);
            setMedicos([]); // Evitar quebra no frontend
          }
        } catch (error) {
          console.error("Erro ao buscar médicos:", error);
          setMedicos([]); // Evitar quebra no frontend
        }
      };
    
      fetchPortalMedicos();
    }, [especialidades]);

  return (
    <>
      <NavBarIn />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Pacientes</h2>
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
                    <th className="p-2 border">Gênero</th>
                    <th className="p-2 border">Data de nascimento</th>
                    <th className="p-2 border">Telefone</th>
                    <th className="p-2 border">Endereço</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                             <tbody>
                             {/* <LinhaTabelaPaciente
                    id={<span className="p-2 text-gray-700">1</span>}
                    nome={<span className="p-2 text-gray-700">André Lubambi</span>}
                    genero={<span className="p-2 text-gray-700">Masculino</span>}
                    data_nascimento={<span className="p-2 text-gray-700">03-03-2000</span>}
                    telefone={<span className="p-2 text-gray-700">937654978</span>}
                    endereco={<span className="p-2 text-gray-700">Gamek, rocha</span>}
                  /> */}
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
                                   <td colSpan="4" className="text-center p-4">
                                     Nenhuma médico encontrado.
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
        <AddPacienteForm />
      </Modal>
      <Footer />
    </>
  );
};

export default Paciente;