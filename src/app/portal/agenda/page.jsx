"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LinhaTabelaAgenda from "@/components/LinhaTabelaAgenda";
import Modal from "@/components/ModalOpen";
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";
import Linha from "../../../components/linhaPortal/LinhaPortalMedicos";
import { criarAgendaDeConsulta } from "../../../actions/consulta";
import { pegarTodasAgendasDeConsulta } from "../../../actions/consulta";

const URL_ESPECIALIDADES =
  "https://sis-production-4c8f.up.railway.app/sis/portal/especialidade/all";
const URL_MEDICOS =
  "https://sis-production-4c8f.up.railway.app/sis/portal/pessoalClinico/medico";
const URL_AGENDAS =
  "https://sis-production-4c8f.up.railway.app/sis/portal/agenda/consulta/all";

const portalAgenda = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [formData, setFormData] = useState({ nome: "", preco: "" });
  const [modalType, setModalType] = useState(null);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await fetch(URL_ESPECIALIDADES);
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

  // Fetch medicos from API
  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await fetch(URL_MEDICOS);
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
        console.error("Erro ao buscar medicos:", error);
        setMedicos([]); // Evitar quebra no frontend
      }
    };

    fetchMedicos();
  }, []);

  // Fetch especialidades from API
  useEffect(() => {
    const fetchAgendas = async () => {
      try {
        const response = await fetch(URL_AGENDAS);
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
          setAgendas(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setAgendas([]); // Evitar quebra no frontend
        }
      } catch (error) {
        console.error("Erro ao buscar especialidades:", error);
        setAgendas([]); // Evitar quebra no frontend
      }
    };

    fetchAgendas();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-900">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Médico</th>
                    <th className="p-2 border">Especialidade</th>
                    <th className="p-2 border">Data </th>
                    <th className="p-2 border">Máx. Pacientes</th> {/* Nova Coluna */}
                  </tr>
                </thead>
                <tbody>
                  {agendas.length > 0 ? (
                    agendas.map((agenda) => (
                      <LinhaTabelaAgenda
                        key={agenda.agenda.id} // Corrigindo para pegar o ID correto
                        id={agenda.agenda.id}
                        medico_nome={agenda.usuario.nome} // Pegando o nome do médico
                        especialidade_nome={agenda.especialidade.nome} // Pegando o nome da especialidade
                        data={
                          agenda.datas.length > 0 ? agenda.datas[0] : "Sem data"
                        } // Pegando a primeira data disponível
                        pacienteMax={agenda.agenda.paciente_max} // Número máximo de pacientes
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

export default portalAgenda;
