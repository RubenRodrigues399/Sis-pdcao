"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Linha from "../../../../components/linhaPortal/LinhaPortalMedicos";
import { fetchMedicos } from "@/actions/medico";
import { pegarTodasEspecialidades } from "@/actions/especialidade";

const portalMedicos = () => {
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    const getEspecialidades = async () => {
      const especialidadesMap = await pegarTodasEspecialidades();
      const especialidadesObj = especialidadesMap.dados.reduce((obj, item) => {
        obj[item.id] = item.nome;
        return obj;
      }, {});
      setEspecialidades(especialidadesObj);
    };
    getEspecialidades();
  }, []);

  useEffect(() => {
    const fetchPortalMedicos = async () => {
      const data = await fetchMedicos();
      if (Array.isArray(data.dados)) {
        const medicosFormatados = data.dados.map((medico) => ({
          id: medico.medico_id || null,
          nome: medico.usuario?.nome || "Sem nome",
          genero: medico.usuario?.genero || "Não informado",
          telefone01: medico.usuario?.telefone01 || "Sem telefone",
          especialidade: especialidades[medico.especialidades[0].id] || "Desconhecida",
          numOrdem: medico.num_ordem || "Sem número de ordem",
        }));
        setMedicos(medicosFormatados);
      } else {
        console.error("Os 'dados' da resposta não são um array:", data.dados);
        setMedicos([]);
      }
    };
    fetchPortalMedicos();
  }, [especialidades]);

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
                      <td colSpan="6" className="text-center p-4">Nenhum médico encontrado.</td>
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
