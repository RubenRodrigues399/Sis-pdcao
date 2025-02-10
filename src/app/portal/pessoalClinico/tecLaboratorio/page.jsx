"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Linha from "../../../../components/linhaPortal/LinhaPortalEnfermeiros";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/tecLaboratorio";
const portalTecLaboratorio = () => {
  const [tecLaboratorio, setTecLaboratorio] = useState([]);
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
    const fetchPortalTecLaboratorio = async () => {
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
          const tecLaboratorioFormatados = data.dados.map((tecLaboratorio) => ({
            id: tecLaboratorio.usuario?.id || null,
            nome: tecLaboratorio.usuario?.nome || "Sem nome",
            genero: tecLaboratorio.usuario?.genero || "Não informado",
            telefone01: tecLaboratorio.usuario?.telefone01 || "Sem telefone",
            especialidade: especialidades[tecLaboratorio.especialidade_id] || "Desconhecida",
            numOrdem: tecLaboratorio.numOrdem || "Sem número de ordem",
          }));
  
          setTecLaboratorio(tecLaboratorioFormatados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setTecLaboratorio([]); // Evitar quebra no frontend
        }
      } catch (error) {
        console.error("Erro ao buscar médicos:", error);
        setTecLaboratorio([]); // Evitar quebra no frontend
      }
    };
  
    fetchPortalTecLaboratorio();
  }, [especialidades]);

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white shadow-md w-10/12 p-6 rounded-lg mt-6">
              <div className="flex justify-center items-center">
                <h2 className="text-lg font-semibold">Técnicos de imagiologia do Hospital</h2>
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
                  {tecLaboratorio.length > 0 ? (
                    tecLaboratorio.map((tecLaboratorio) => (
                      <Linha
                        key={tecLaboratorio.id}
                        id={tecLaboratorio.id}
                        nome={tecLaboratorio.nome}
                        genero={tecLaboratorio.genero}
                        telefone01={tecLaboratorio.telefone01}
                        especialidade={tecLaboratorio.especialidade}
                        numOrdem={tecLaboratorio.numOrdem}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        Nenhum Técnico de Laboratório encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default portalTecLaboratorio;