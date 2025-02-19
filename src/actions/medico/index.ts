"use server";
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarMedico(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string;
  const senha = formData.get("password") as string;
  const data_nascimento = formData.get("data_nascimento") as string;
  const numOrdem = formData.get("numOrdem") as string;
  const especialidade_id = formData.get("especialidade_id") as string;
  const telefone01 = formData.get("telefone01") as string;
  const correioElect = formData.get("email") as string;
  const genero = formData.get("genero") as string;
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const dataFormatada = new Date(data_nascimento).toISOString().split("T")[0];

  try {
    const cookie = await cookies()
    const authToken = cookie.get("sispdcao")
    if (!authToken?.value) {
      throw new Error("SEM TOKEN")
    }

    // Decodifica o valor do cookie
    const decodedToken = decodeURIComponent(authToken.value);
    // Transforma o valor decodificado em JSON
    const tokenObject = JSON.parse(decodedToken);
    // Extrai o token do objeto JSON
    const token = tokenObject.token;

        
    const { data } = await api.post(
      "/sis/admin/medico/create",
      {
        usuario: {
          nome,
          senha,
          telefone01,
          data_nascimento: dataFormatada,
          correioElect,
          genero,
          provincia,
          municipio,
          bairro,
        },
        especialidade_id: especialidade_id,
        numOrdem: numOrdem,
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`
        },
      })

    console.log("[DATA]", data)
    if (data) {
      // revalidatePath("/Paciente")
      //redirect("Paciente")
      return data
    }
  } catch (error: any) {
    console.error("[ERRO]", error)
    if (error.response && error.response.status === 401) {
      throw new Error("Não autorizado");
    }
    throw new Error("Ocorreu um erro ao criar o paciente.")
  }
}

export const fetchMedicos = async () => {
  try {
    const response = await api.get("/sis/portal/pessoalClinico/medico");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar médicos:", error);
    return { dados: [] };
  }
};

// Adicionar esta função para buscar médicos por especialidade
export async function fetchMedicosPorEspecialidade(especialidadeId: string) {
  try {
    const { data } = await api.get(`/sis/portal/medicos/${especialidadeId}`);
    if (data) {
      return data.dados; // Retorna a lista de médicos
    }
  } catch (error) {
    console.error("Erro ao buscar médicos por especialidade:", error);
    throw error;
  }
} 