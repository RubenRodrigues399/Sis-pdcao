'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarAgendaDeConsulta(prevState: any, formData: FormData) {
  const numPacientes = formData.get("numPacientes") as string;
  const dataAgenda = [formData.get("dataAgenda")]; // Transforma em array
  const especialidade = formData.get("especialidade_id") as string;
  const medico = formData.get("medico_id") as string;

  // Verificação adicional no frontend
  if (!medico) {
    throw new Error("Médico não selecionado");
  }

  try {
    const cookie = await cookies();
    const authToken = cookie.get("sispdcao");
    if (!authToken?.value) {
      throw new Error("SEM TOKEN");
    }
    
    const decodedToken = decodeURIComponent(authToken.value);
    const tokenObject = JSON.parse(decodedToken);
    const token = tokenObject.token;
    
    console.log("TOKEN RECUPERADO:", token);

    // Debug: Verificando dados antes do envio
    console.log("Enviando dados:", { numPacientes, dataAgenda, especialidade, medico });

    const { data } = await api.post("/sis/admin/agenda/consulta/create", {
      especialidade_id: especialidade,
      medico_id: medico,
      paciente_max: numPacientes,
      datas: [formData.get("dataAgenda")].filter(Boolean), // Remove valores nulos
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("[SUCESSO]", data);
    return data;
  } catch (error: any) {
    console.error("[ERRO DETALHADO]", error.response?.data || error.message);

    if (error.response?.status === 401) {
      throw new Error("Não autorizado");
    }

    throw new Error(error.response?.data?.mensagem || "Ocorreu um erro ao criar a agenda.");
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