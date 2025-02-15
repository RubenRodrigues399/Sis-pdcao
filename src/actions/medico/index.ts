'use server'
import { api } from "@/lib/axios";
import { cookies } from 'next/headers';
export async function criarMedico() {
  const cookie = await cookies()
  //  const token = cookie.get('sispdcao')?.value

  try {
    const { data } = await api.post("/sis/admin/medico/create", {
      usuario: {
        nome: "João Medico",
        senha: "123456789",
        telefone01: "9123436722",
        telefone02: "",
        data_nascimento: "1990-05-15",
        codPostal: "",
        correioElect: "",
        genero: "Masculino",
        provincia: "Luanda",
        municipio: "Luanda",
        bairro: "Rocha"
      },
      especialidade_id: 1,
      numOrdem: "AB1232"
    })
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
