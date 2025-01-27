'use server'
import { api } from "@/lib/axios";

export async function criarExame() {
  try {
    const { data } = await api.post("/sis/admin/exame/create", {
      nome: "RX da Perna Direita",
      tipo: "imagem",
      preco: 5500.0,
      titulos: [
        "Estado"
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
