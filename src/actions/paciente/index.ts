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
          Authorization: `Bearer ${token}`
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