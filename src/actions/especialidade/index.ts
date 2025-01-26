'use server'
import { api } from "@/lib/axios";

export async function criarEspecialidade() {
  try {
    const { data } = await api.post("/sis/admin/especialidade/create", {
      "especialidade": "Ortopedia",
      "preco": 150
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
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
