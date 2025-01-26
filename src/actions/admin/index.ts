'use server'
import { api } from "@/lib/axios";
export async function criarSuperAdmin() {
  try {
    const { data } = await api.post("/sis/admin/admin/super", {
      usuario: {
        nome: "Super Admin",
        senha: "123456789",
        telefone01: "999999999",
        telefone02: "",
        data_nascimento: "1990-05-15",
        codPostal: "",
        correioElect: "",
        genero: "Masculino",
        provincia: "Luanda",
        municipio: "Luanda",
        bairro: "Rocha"
      },
      tipo_profissional: "direcao"
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}

export async function criarAdmin() {
  try {
    const { data } = await api.post("/sis/admin/admin/create", {

      usuario: {
        nome: "Alves Alves",
        senha: "123456789",
        telefone01: "9123456789",
        telefone02: "",
        data_nascimento: "1990-05-15",
        codPostal: "",
        correioElect: "",
        genero: "Masculino",
        provincia: "Luanda",
        municipio: "Luanda",
        bairro: "Rocha"
      },
      tipo_profissional: "recepcao",
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
