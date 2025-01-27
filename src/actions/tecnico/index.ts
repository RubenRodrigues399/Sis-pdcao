'use server'
import { api } from "@/lib/axios";
export async function criarPessoalTecnico() {
  try {
    const { data } = await api.post("/sis/admin/tecnico/create", {
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
      tipo_profissional: "tecEnfermeiro",
      numOrdem: "AB1234"
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
