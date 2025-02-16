'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarPaciente(prevState: any, formData: FormData) {

  const nome = formData.get("nome") as string;
  const senha = formData.get("senha") as string;
  const telefone01 = formData.get("telefone01") as string;
  const telefone02 = formData.get("telefone02") as string;
  const dataNascimento = formData.get("data_nascimento") as string;
  const codPostal = formData.get("codPostal") as string;
  const correioElect = formData.get("correioElect") as string;
  const genero = formData.get("genero") as string;
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const seguradoraId = formData.get("seguradora_id") as string;
  const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0];
  // console.log("[form_data]", formData)
  // console.log("[data_formatada]", dataFormatada)
  try {
    const cookie = await cookies()
    const token = cookie.get("sispdcao").value
    if (!token?.value) {
      throw new Error("SEM TOKEN")
    }
    const { data } = await api.post("/sis/admin/paciente/create", {
      usuario:
      {
        nome,
        senha,
        telefone01,
        telefone02,
        data_nascimento: dataFormatada,
        codPostal,
        correioElect,
        genero,
        provincia,
        municipio,
        bairro,
      },
      seguradora_id: seguradoraId,
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