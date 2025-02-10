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

// export const fetchEspecialidades = async () => {
//   try {
//     const response = await fetch(
//       "https://sis-production-4c8f.up.railway.app/sis/portal/especialidade/all"
//     );
//     if (!response.ok) {
//       throw new Error("Erro ao buscar especialidades");
//     }
//     const data = await response.json();

//     // Criar um objeto { id: nome } para mapear especialidades
//     const especialidadesMap = {};
//     data.dados.forEach((especialidade) => {
//       especialidadesMap[especialidade.id] = especialidade.nome;
//     });

//     return especialidadesMap;
//   } catch (error) {
//     console.error("Erro ao carregar especialidades:", error);
//     return {};
//   }
// };