'use server'
import {api} from "@/lib/axios";
import { cookies } from 'next/headers';

// Registrar super admin
export const registerSuperAdmin = async (dados) => {
  try {
    const response = await api.post("/sis/admin/admin/super", dados);
    return response.data; // Retorna os dados da API
  } catch (error) {
    throw error.response?.data?.message || "Erro ao registrar super admin";
  }
};

// Login
export const loginUser = async (credenciais) => {
  console.log("credenciais", credenciais);
    try {
      const{ data }= await api.post("/sis/auth/login", {
        senha: credenciais.senha,
        telefone01: credenciais.telefone
    }
    );
      console.log("response",{ data});
      const cookieStore = await cookies();
      cookieStore.set('sispdcao', data.token);
      return data; // Retorna os dados do login
    } catch (error) {
      console.log(error);
      throw error.response?.data?.message || "Erro ao fazer login";
    }
  };



