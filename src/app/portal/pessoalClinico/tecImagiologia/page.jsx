"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Linha from "../../../../components/linhaPortal/LinhaPortalEnfermeiros";
import { fetchTecImagiologia } from "@/actions/tecnico";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/tecImagiologia";
const portalTecImagiologia = () => {
  const [tecImagiologia, setTecImagiologia] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);

  // useEffect(() => {
  //   const getEspecialidades = async () => {
  //     const especialidadesMap = await fetchEspecialidades();
  //     setEspecialidades(especialidadesMap);
  //   };
  
  //   getEspecialidades();
  // }, []);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchPortalTecImagiologia = async () => {
        const data = await fetchTecImagiologia();
        //const data = await response.json();
  
        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          // Ajustar a estrutura para extrair os dados do objeto 'usuario'
          const tecImagiologiaFormatados = data.dados.map((tecImagiologia) => ({
            id: tecImagiologia.usuario?.id || null,
            nome: tecImagiologia.usuario?.nome || "Sem nome",
            genero: tecImagiologia.usuario?.genero || "Não informado",
            telefone01: tecImagiologia.usuario?.telefone01 || "Sem telefone",
            numOrdem: tecImagiologia.numOrdem || "Sem número de ordem",
          }));
  
          setTecImagiologia(tecImagiologiaFormatados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setTecImagiologia([]); // Evitar quebra no frontend
        }
    };
  
    fetchPortalTecImagiologia();
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
                    <th className="p-2 border">Número de ordem</th>
                  </tr>
                </thead>
                <tbody>
                  {tecImagiologia.length > 0 ? (
                    tecImagiologia.map((tecImagiologia) => (
                      <Linha
                        key={tecImagiologia.id}
                        id={tecImagiologia.id}
                        nome={tecImagiologia.nome}
                        genero={tecImagiologia.genero}
                        telefone01={tecImagiologia.telefone01}
                        numOrdem={tecImagiologia.numOrdem}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        Nenhum Técnico de Imagiologia encontrado.
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
export default portalTecImagiologia;
