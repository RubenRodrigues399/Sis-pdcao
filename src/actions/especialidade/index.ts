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


export async function editarEspecialidade(id: string, updatedData: string) {
  try {
    const { data } = await api.put(`/sis/admin/especialidade/update/${id}`, {
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

export async function eliminarEspecialidade(id: string) {
  try {
    const { data } = await api.delete(`/sis/admin/especialidade/delete/${id}`)
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
