"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Linha from "../../../../components/linhaPortal/LinhaPortalEnfermeiros";
import { fetchEnfermeiros } from "@/actions/tecnico";

const portalEnfermeiros = () => {
  const [enfermeiros, setEnfermeiros] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchPortalEnfermeiros = async () => {
        const data = await fetchEnfermeiros();
        
        //const data = await response.json();
  
        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          // Ajustar a estrutura para extrair os dados do objeto 'usuario'
          const enfermeirosFormatados = data.dados.map((enfermeiro) => ({
            id: enfermeiro.usuario?.id || null,
            nome: enfermeiro.usuario?.nome || "Sem nome",
            genero: enfermeiro.usuario?.genero || "Não informado",
            telefone01: enfermeiro.usuario?.telefone01 || "Sem telefone",
            numOrdem: enfermeiro.numOrdem || "Sem número de ordem",
          }));
  
          setEnfermeiros(enfermeirosFormatados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setEnfermeiros([]); // Evitar quebra no frontend
        }
    };
  
    fetchPortalEnfermeiros();
  });

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white shadow-md w-10/12 p-6 rounded-lg mt-6">
              <div className="flex justify-center items-center">
                <h2 className="text-lg font-semibold">Enfermeiros do Hospital</h2>
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
                  {enfermeiros.length > 0 ? (
                    enfermeiros.map((enfermeiro) => (
                      <Linha
                        key={enfermeiro.id}
                        id={enfermeiro.id}
                        nome={enfermeiro.nome}
                        genero={enfermeiro.genero}
                        telefone01={enfermeiro.telefone01}
                        numOrdem={enfermeiro.numOrdem}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        Nenhum Enfermeiro encontrado.
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
export default portalEnfermeiros;
