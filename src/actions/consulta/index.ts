'use server'
import { api } from "@/lib/axios";
const ESPECIALIDADE = "/sis/portal/especialidade"

export async function criarAgendaDeConsulta() {
  try {
    const { data } = await api.post("/sis/admin/agenda/consulta/create", {
      especialidade_id: 1,
      medico_id: 1,
      paciente_max: 5,
      datas: [
        "2025-12-17",
        "2025-12-20",
        "2025-12-06"
      ]
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}

export async function pegarTodasAgendasDeConsulta() {
  try {
    const { data } = await api.get("/sis/portal/agenda/consulta/all")
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }

}