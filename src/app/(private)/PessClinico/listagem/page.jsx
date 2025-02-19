"use client";
import Modal from "@/components/ModalOpen";
import React, { useEffect, useState } from "react";
import Linha from "../../../../components/linhaPortal/LinhaPortalMedicos";
import { AddPCForm } from "../add-pesscli-form";
//import {fetchEspecialidades} from '@/actions/especialidade/index';

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/medico";

const PessoalClinico = () => {
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

      <div className="flex min-h-screen">
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          {/* Recent Staff Section */}
          <section className="bg-white shadow-md p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Pessoal Clínico</h2>
              <button
                className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded"
                onClick={() => setModalOpen(true)}
              >
                Adicionar
              </button>
            </div>
            <div className="mx-auto mb-10 flex flex-cols max-w-2xl gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 lg:max-w-screen-md lg:grid-cols-3">

                <div className="relative w-80 border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a
                      href="/portal/pessoalClinico/tecEnfermeiros"
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                    >
                      <span className="absolute inset-0" /> Enfermeiros
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-black">
                    Verifica os enfermeiros do hospital.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/portal/pessoalClinico/tecEnfermeiros"
                      className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Visualizar
                    </a>
                  </div>
                </div>

                <div className="relative w-80 border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-black">
                    <a
                      href="/portal/pessoalClinico/tecImagiologia"
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                    >
                      <span className="absolute inset-0" /> Técnicos de imagiologia
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-black">
                    Verifica os técnicos de imagiologia do hospital.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/portal/pessoalClinico/tecImagiologia"
                      className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Visualizar
                    </a>
                  </div>
                </div>

                <div className="relative w-80 border-2 border-[#21aeb8] rounded-xl items-center gap-x-4 flex flex-col justify-center text-center">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-black">
                    <a
                      href="/portal/pessoalClinico/tecLaboratorio"
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium text-black hover:text-blue-300"
                    >
                      <span className="absolute inset-0" /> Técnicos de laboratório
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-black">
                    Verifica os técnicos de laboratórios do hospital.
                  </p>
                  <div className="mt-5">
                    <a
                      href="/portal/pessoalClinico/tecLaboratorio"
                      className="flex items-center justify-center rounded-md mb-6 bg-blue-300 px-4 py-2 text-sm font-semibold text-black hover:text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Visualizar
                    </a>
                  </div>
                </div>
              </div>

          </section>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddPCForm />
      </Modal>

    </>
  );
};

export default PessoalClinico;
