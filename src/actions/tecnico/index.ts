'use server'

import { api } from "@/lib/axios"
import { cookies } from "next/headers";

export async function criarPessoalTecnico(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string;
  const senha = formData.get("senha") as string;
  const data_nascimento = formData.get("data_nascimento") as string;
  const numOrdem = formData.get("numOrder") as string;
  const telefone01 = formData.get("telefone") as string;
  const correioElect = formData.get("email") as string;
  const genero = formData.get("genero") as string;
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const tipo_profissional = formData.get("tipo_profissional") as string;
  const dataFormatada = new Date(data_nascimento).toISOString().split('T')[0];

  const rotas = {
    "Técnico enfermeiro": "tecEnfermeiro",
    "Técnico de Imagiologa": "tecImagiologia",
    "Técnico de Laboratório": "tecLaboratorio",
  };

  const rota = rotas[tipo_profissional];

  if (!rota) {
    return { success: false, message: "Selecione um tipo de profissional válido." };
  }

  try {
    const cookie = await cookies();
    const authToken = cookie.get("sispdcao");

    if (!authToken?.value) {
      throw new Error("SEM TOKEN");
    }

    const decodedToken = decodeURIComponent(authToken.value);
    const tokenObject = JSON.parse(decodedToken);
    const token = tokenObject.token;

    console.log("Token:", token); // Verificar o token
    console.log("Rota determinada:", rota); // Verificar a rota

    const { data } = await api.post(`/sis/admin/tecnico/create/${rota}`, {
      usuario: {
        nome,
        senha,
        telefone01,
        data_nascimento: dataFormatada,
        correioElect,
        genero,
        provincia,
        municipio,
        bairro,
      },
      tipo_profissional: tipo_profissional,
      numOrdem: numOrdem,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    console.log("Resposta da API:", data); // Verificar a resposta da API

    if (data) {
      return { success: true, message: "Pessoal técnico cadastrado com sucesso!" };
    }
  } catch (error) {
    console.error("[ERRO]", error);
    if (error.response && error.response.status === 401) {
      return { success: false, message: "Não autorizado" };
    }
    return { success: false, message: "Erro ao cadastrar pessoal técnico." };
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