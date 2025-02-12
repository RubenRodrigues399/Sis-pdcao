'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarAgendaDeConsulta(prevState: any, formData: FormData) {

  const nome = formData.get("nome") as string;
  const genero = formData.get("genero") as string;
  const dataa = formData.get("data") as string;
  const telefone01 = formData.get("telefone01") as string;
  const especialidade = formData.get("especialidade_id") as string;
  const medico = formData.get("medico_id") as string;
  const data_marcacao = formData.get("data_marcacoa") as string;

  try {
   const cookie = await cookies()
       const token = cookie.get("sispdcao")
       if (!token?.value) {
         throw new Error("SEM TOKEN")
       }
       const { data } = await api.post("/sis/admin/agenda/consulta/create", {
         usuario:
         {
           nome,
           genero,
           dataa,
           telefone01,
           especialidade,
           medico,
           data_marcacao
         },
       },
         {
           headers: {
             Authorization: `Bearer ${token.value}`
           },
         })
       console.log("[DATA]", data)
       if (data) {
         // revalidatePath("/Paciente")
         //redirect("Paciente")
         return data
       }
     } catch (error: any) {
       console.error("[ERRO]", error)
       if (error.response && error.response.status === 401) {
         throw new Error("Não autorizado");
       }
       throw new Error("Ocorreu um erro ao marcar a consulta.")
     }
   }

export async function pegarTodasAgendasDeConsulta() {
  try {
    const { data } = await api.get("/sis/portal/agenda/consulta/all")
    if (data) {
      return data
    }
  } catch (error) {
    console.error("[ERRO]", error)
    throw error
  }

}