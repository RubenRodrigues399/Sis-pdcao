"use client";
import Modal from "@/components/ModalOpen";
import React, { useEffect, useState } from "react";
import Linha from "../../../../components/linhaPortal/LinhaPortalMedicos";
import { AddMedicoForm } from "../add-medico-form";
import { pegarTodasEspecialidades } from "@/actions/especialidade";
import { fetchMedicos } from "@/actions/medico";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/medico";

const PessoalClinico = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
      const getEspecialidades = async () => {
        const especialidadesMap = await pegarTodasEspecialidades();
        setEspecialidades(especialidadesMap);
      };
  
      getEspecialidades();
    }, []);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchPortalMedicos = async () => {
    
        const data = await fetchMedicos();
        
        //const data = await response.json();

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
     
    };

    fetchPortalMedicos();
  }, [especialidades]);

  return (
    <>

      <div className="flex min-h-screen">
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Recent Staff Section */}
          <section className="bg-white shadow-md p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Médicos</h2>
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
                    <td colSpan="4" className="text-center p-4">
                      Nenhuma médico encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </section>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddMedicoForm />
      </Modal>

    </>
  );
};

export default PessoalClinico;
