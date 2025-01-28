'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarEspecialidade(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string;
  const preco = formData.get("preco") as string;

  try {
    const cookie = await cookies()
    const token = cookie.get("sispdcao")
    if (!token?.value) {
      throw new Error("SEM TOKEN")
    }
    const { data } = await api.post("/sis/admin/especialidade/create", {
      usuario:
      {
        nome,
        preco,
      },
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
    throw new Error("Ocorreu um erro ao criar a especialidade.")
  }
}

export async function pegarTodasEspecialidades() {
  try {
    const { data } = await api.get("/sis/portal/especialidade/all")
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }

}
