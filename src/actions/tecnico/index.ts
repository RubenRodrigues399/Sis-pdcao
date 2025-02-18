'use server'

import { api } from "@/lib/axios"

export async function criarPessoalTecnico(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string
  const senha = formData.get("password") as string
  const data_nascimento = formData.get("dataNasc") as string
  const numOrdem = formData.get("numOrder") as string
  const telefone01 = formData.get("telefone") as string
  const correioElect = formData.get("email") as string
  const genero = formData.get("genero") as string
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0]
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
        data_nascimento:dataFormatada,
        codPostal: "",
        correioElect,
        genero,
        provincia,
        municipio,
        bairro
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

export const fetchEnfermeiros = async () => {
  try {
    const response = await api.get("/sis/portal/pessoalClinico/tecEnfermeiro");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar enfermeiros:", error);
    return { dados: [] };
  }
};

export const fetchTecImagiologia = async () => {
  try {
    const response = await api.get("/sis/portal/pessoalClinico/tecImagiologia");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tecnicos de imagiologia:", error);
    return { dados: [] };
  }
};

export const fetchTecLaboratorio = async () => {
  try {
    const response = await api.get("/sis/portal/pessoalClinico/tecLaboratorio");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tecnicos de laboratorio:", error);
    return { dados: [] };
  }
};