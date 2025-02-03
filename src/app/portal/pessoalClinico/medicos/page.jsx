"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Linha from "../../../../components/linhaPortal/LinhaPortalMedicos";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/medico";
const portalMedicos = () => {
  const [medicos, setMedicos] = useState([]);

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
          setMedicos(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setMedicos([]); // Evitar quebra no frontend
        }
      } catch (error) {
        console.error("Erro ao buscar especialidades:", error);
        setMedicos([]); // Evitar quebra no frontend
      }
    };

    fetchPortalMedicos();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white shadow-md w-10/12 p-6 rounded-lg mt-6">
              <div className="flex justify-center items-center">
                <h2 className="text-lg font-semibold">Médicos do Hospital</h2>
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
                    medicos.map((medicos) => (
                      <Linha
                        key={medicos.id}
                        id={medicos.id}
                        nome={medicos.nome}
                        genero={medicos.genero}
                        telefone01={medicos.telefone01}
                        especialidade={medicos.especialidade}
                        numOrdem={medicos.numOrdem}
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
      <Footer />
    </>
  );
};

export default portalMedicos;
