'use server'
import { api } from "@/lib/axios";
import { cookies } from 'next/headers';

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
  console.log("credenciais", credenciais);
  try {
    const { data } = await api.post("/sis/auth/login", {
      senha: credenciais.senha,
      telefone01: credenciais.telefone
    });
    console.log("response", { data });
    const cookieStore = await cookies();
    cookieStore.set('sispdcao', data.token);
    return data; // Retorna os dados do login
  } catch (error) {
    console.log(error);
    throw error.response?.data?.message || "Erro ao fazer login";
  }
};

// Registro
export const registro = async (userData) => {
  try {
    const response = await fetch('/sis/admin/admin/super', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Falha no registro');
    }

    const data = await response.json();

    setSession(data);

    return data;
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error;
  }
};

// Função utilitária para definir a sessão
const setSession = (data) => {
  if (data?.token) {
    cookies().set('sispdcao', data.token);
  } else {
    console.error('Dados inválidos recebidos:', data);
  }
};

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
