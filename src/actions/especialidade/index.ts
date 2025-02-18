'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarEspecialidade(prevState: any, formData: FormData) {

  const nome = formData.get("nome") as string;
  const preco = formData.get("preco") as string;

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


    const { data } = await api.post("/sis/admin/especialidade/create", {
      nome,
      preco,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}

export const pegarTodasEspecialidades = async () => {
  try {
    const response = await api.get("/sis/portal/especialidade/all");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar médicos:", error);
    return { dados: [] };
  }
};
