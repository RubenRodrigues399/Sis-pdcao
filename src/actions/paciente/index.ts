'use server'
import { api } from "@/lib/axios";
export async function criarPaciente() {
  try {
    const { data } = await api.post(" /sis/admin/paciente/create", {
      usuario:
      {
        nome: "Silvano Manuel",
        senha: "12345678",
        telefone01: "910000011",
        telefone02: "",
        data_nascimento: "1990-05-15",
        codPostal: "",
        correioElect: "",
        genero: "Masculino",
        provincia: "Luanda",
        municipio: "Luanda",
        bairro: "Rocha"
      },
      seguradora_id: ""
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
