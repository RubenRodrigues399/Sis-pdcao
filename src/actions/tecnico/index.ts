'use server'

import { api } from "@/lib/axios"

export async function criarPessoalTecnico(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string
  const senha = formData.get("password") as string
  const data_nascimento = formData.get("dataNasc") as string
  const numOrdem = formData.get("numOrder") as string
  const endereco = formData.get("endereco") as string
  const telefone01 = formData.get("telefone") as string
  const email = formData.get("email") as string
  const genero = formData.get("genero") as string
  //TODO: Precisa actualizar os campos no formulário que estão faltando para criação

  /* 
     CAMPOS POR ADICIONAR:
     - telefone 02 (opcional)
     - codePOstal
     - correioEle
     - provincia
     - municipio
     - bairro
     - tipo_profissional(* TODO: Verificar se há dependência com dados doutra tabela)
   */

  try {
    const { data } = await api.post("/sis/admin/tecnico/create", {
      usuario: {
        nome,
        senha,
        telefone01,
        telefone02: "",
        data_nascimento,
        codPostal: "",
        correioElect: "",
        genero,
        provincia: "Luanda",
        municipio: "Luanda",
        bairro: "Rocha"
      },
      tipo_profissional: "tecEnfermeiro",
      numOrdem
    })
    if (data) {
      console.log("[DATA]", data)
      return data
    }


  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }
}
