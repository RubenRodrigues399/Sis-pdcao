"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import LinhaTabelaAgenda from "@/components/LinhaTabelaAgenda";
import Modal from "@/components/ModalOpen";
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";
import Linha from "../../../components/linhaPortal/LinhaPortalMedicos";
import { criarAgendaDeConsulta } from "../../../actions/consulta";
import { pegarTodasAgendasDeConsulta } from "../../../actions/consulta";
import { fetchMedicosPorEspecialidade } from "../../../actions/medico"; // Atualizado
import { pegarTodasEspecialidades } from "../../../actions/especialidade";

const Agenda = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      const data = await pegarTodasEspecialidades();
      if (Array.isArray(data.dados)) {
        setEspecialidades(data.dados);
      } else {
        console.error("Os 'dados' da resposta não são um array:", data.dados);
        setEspecialidades([]); // Evitar quebra no frontend
      }
    };

    fetchEspecialidades();
  }, []);

  useEffect(() => {
    const fetchAgendas = async () => {
      const data = await pegarTodasAgendasDeConsulta();
      if (Array.isArray(data.dados)) {
        setAgendas(data.dados);
      } else {
        console.error("Os 'dados' da resposta não são um array:", data.dados);
        setAgendas([]); // Evitar quebra no frontend
      }
    };

    fetchAgendas();
  }, []);

  const handleEspecialidadeChange = async (event) => {
    const especialidadeId = event.target.value;
    if (especialidadeId) {
      const medicosData = await fetchMedicosPorEspecialidade(especialidadeId);
      setMedicos(medicosData); // Atualiza o estado com os médicos filtrados
    } else {
      setMedicos([]);
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 p-8">
          <div className="flex items-center justify-center">
            <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-black">Agendas</h2>
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

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <span className="text-lg pl-56 font-semibold text-black">
          Criar agenda
        </span>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const response = await criarAgendaDeConsulta(null, formData);
            if (response) {
              alert("Agenda criada com sucesso!");
              handleCloseModal();
            }
          }}
          className="grid grid-cols-2 gap-4 mt-5"
        >
          <select
            name="especialidade_id"
            required
            className="border border-gray-300 rounded px-4 py-2"
            onChange={handleEspecialidadeChange} // Chama a função ao mudar a especialidade
          >
            <option value="">Especialidade</option>
            {especialidades.map((esp) => (
              <option key={esp.id} value={esp.id}>
                {esp.nome}
              </option>
            ))}
          </select>

          <select
            name="medico_id"
            required
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Médico</option>
            {medicos.map((med) => (
              <option key={med.usuario.usuario_id} value={med.usuario.usuario_id}>
                {med.usuario.nome}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="numPacientes"
            placeholder="Número máximo de pacientes"
            className="border p-2 rounded text-black"
          />
          <input
            type="date"
            name="dataAgenda"
            placeholder="Data"
            className="border p-2 rounded text-black"
          />

          {/* Mover o botão para dentro do <form> */}
          <div className="flex mt-6 justify-center">
            <button
              type="submit"
              className="bg-[#21aeb8] text-white px-4 py-2 rounded"
            >
              Criar agenda
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Agenda;
