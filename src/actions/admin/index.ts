'use server'
import { api } from "@/lib/axios";
import { cookies } from "next/headers";

export async function criarSuperAdmin(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string;
  const senha = formData.get("senha") as string;
  const telefone01 = formData.get("telefone01") as string;
  const dataNascimento = formData.get("data_nascimento") as string;
  const correioElect = formData.get("email") as string;
  const genero = formData.get("genero") as string;
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0];

  try {
    const cookie = await cookies();
    const authToken = cookie.get("sispdcao");
    if (!authToken?.value) {
      throw new Error("SEM TOKEN");
    }

    const decodedToken = decodeURIComponent(authToken.value);
    const tokenObject = JSON.parse(decodedToken);
    const token = tokenObject.token;

    const { data } = await api.post("/sis/admin/admin/super", {
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
      tipo_profissional: "direcao",
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data) {
      return { success: true, message: "Super admin cadastrado com sucesso!" };
    }
  } catch (error) {
    console.error("[ERRO]", error);
    return { success: false, message: "Erro ao cadastrar super admin." };
  }
}

export async function criarAdmin(prevState: any, formData: FormData) {
  const nome = formData.get("nome") as string;
  const senha = formData.get("senha") as string;
  const telefone01 = formData.get("telefone01") as string;
  const dataNascimento = formData.get("data_nascimento") as string;
  const correioElect = formData.get("email") as string;
  const genero = formData.get("genero") as string;
  const provincia = formData.get("provincia") as string;
  const municipio = formData.get("municipio") as string;
  const bairro = formData.get("bairro") as string;
  const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0];

  try {
    const cookie = await cookies();
    const authToken = cookie.get("sispdcao");
    if (!authToken?.value) {
      throw new Error("SEM TOKEN");
    }

    const decodedToken = decodeURIComponent(authToken.value);
    const tokenObject = JSON.parse(decodedToken);
    const token = tokenObject.token;

    const { data } = await api.post("/sis/admin/admin/create", {
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
      tipo_profissional: "recepcao",
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data) {
      return { success: true, message: "Admin cadastrado com sucesso!" };
    }
  } catch (error) {
    console.error("[ERRO]", error);
    return { success: false, message: "Erro ao cadastrar admin." };
  }
}
