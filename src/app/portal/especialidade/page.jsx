"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";
import { pegarTodasEspecialidades } from "@/actions/especialidade";

const URL_API =
  "https://sis-production-4c8f.up.railway.app/sis/portal/especialidade/all";
const portalEspecialidades = () => {
  const [especialidades, setEspecialidades] = useState([]);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchEspecialidades = async () => {
      
        const data = await pegarTodasEspecialidades();
        
        //const data = await response.json();

        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          setEspecialidades(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setEspecialidades([]); // Evitar quebra no frontend
        }
    };

    fetchEspecialidades();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white shadow-md w-10/12 p-6 rounded-lg mt-6">
              <div className="flex justify-center items-center">
                <h2 className="text-lg font-semibold">Especialidades disponíveis</h2>
              </div>
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
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
                        showActions={false}
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
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default portalEspecialidades;
