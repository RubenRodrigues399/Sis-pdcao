'use server'
import { api } from "@/lib/axios";
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";
import sanitizeHtml from "sanitize-html";

// // Registrar super admin
// export const registerSuperAdmin = async (dados) => {
//   try {
//     const response = await api.post("/sis/admin/admin/super", dados);
//     return response.data; // Retorna os dados da API
//   } catch (error) {
//     throw error.response?.data?.message || "Erro ao registrar super admin";
//   }
// };

// Login
export const loginUser = async (credenciais) => {
  try {
    // Sanitizar entradas
    const telefone = sanitizeHtml(credenciais.telefone);
    const senha = sanitizeHtml(credenciais.senha);

    // Validações básicas
    if (!telefone || !senha) {
      throw "Preencha todos os campos obrigatórios.";
    }

    if (!/^\d{9}$/.test(telefone)) {
      throw "O número de telefone deve ter 9 dígitos.";
    }

    if (senha.length < 6) {
      throw "A senha deve ter pelo menos 6 caracteres.";
    }

    // Verificar usuário no banco (parâmetros protegidos)
    const { data: user } = await api.post("/sis/auth/login", {
      telefone01: telefone,
    });

    if (!user) {
      throw "Usuário não encontrado.";
    }

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, user.senhaHash);
    if (!senhaValida) {
      throw "Senha inválida.";
    }

    // Criar e salvar o token de sessão
    const token = user.token; // Idealmente gerado no servidor
    cookies().set('sispdcao', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return { token };
  } catch (error) {
    console.error("Erro no login:", error);
    throw error || "Erro ao fazer login.";
  }
};

// Registro
export async function registroPaciente(prevState, formData) {
  const nome = formData.get("nome");
  const senha = formData.get("senha");
  const telefone01 = formData.get("telefone01");
  const telefone02 = formData.get("telefone02");
  const dataNascimento = formData.get("data_nascimento");
  const codPostal = formData.get("codPostal");
  const correioElect = formData.get("correioElect");
  const genero = formData.get("genero");
  const provincia = formData.get("provincia");
  const municipio = formData.get("municipio");
  const bairro = formData.get("bairro");
  const seguradoraId = formData.get("seguradora_id");

  const dataFormatada = new Date(dataNascimento).toISOString().split("T")[0];

  try {
    const cookie = await cookies();
    const token = cookie.get("sispdcao");

    if (!token || !token.value) {
      throw new Error("SEM TOKEN");
    }

    const { data } = await api.post(
      "/sis/admin/paciente/create",
      {
        usuario: {
          nome,
          senha,
          telefone01,
          telefone02,
          data_nascimento: dataFormatada,
          codPostal,
          correioElect,
          genero,
          provincia,
          municipio,
          bairro,
        },
        seguradora_id: seguradoraId,
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    console.log("[DATA]", data);

    if (data) {
      // revalidatePath("/Paciente")
      // redirect("Paciente")
      return data;
    }
  } catch (error) {
    console.error("[ERRO]", error);

    if (error.response && error.response.status === 401) {
      throw new Error("Não autorizado");
    }

    throw new Error("Ocorreu um erro ao criar o paciente.");
  }
}

// Logout
export const logoutUser = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('sispdcao'); // Remove o token do cookie
    console.log('Usuário deslogado com sucesso.');
  } catch (error) {
    console.error('Erro ao deslogar o usuário:', error);
    throw new Error('Erro ao realizar logout');
  }
};
