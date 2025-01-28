import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarAdmin(prevState: any, formData: FormData) {

  
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
  const funcao = formData.get("funcao") as string;

  const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0];
 
  try {
    const cookie = await cookies()
    const token = cookie.get("sispdcao")
    if (!token?.value) {
      throw new Error("SEM TOKEN")
    }
    const { data } = await api.post(
      "/sis/admin/admin/super",
      {
        usuario: { 
          nome,
          senha,
          telefone01,
          telefone02,
          dataFormatada,
          codPostal,
          correioElect,
          genero,
          provincia,
          municipio,
          bairro,
          funcao,
        },
        funcao: funcao,
      },
      { headers: { Authorization: `Bearer ${token.value}` } } 
    )
    console.log("[DATA]", data)
    if (data) {
      // revalidatePath("/Paciente")
      //redirect("Paciente")
      return data
    }

  } catch (error: any) {
    console.error("[Erro no Processo]", error);
    throw new Error("Erro ao criar admins.");
  }
}



