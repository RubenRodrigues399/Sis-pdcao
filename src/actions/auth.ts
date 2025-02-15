'use server'

import { api } from "@/lib/axios";
import { cookies } from "next/headers";
 
interface Credenciais {
  telefone: string;
  senha: string;
}

interface Usuario {
  usuario_id: string;
  nome: string;
  telefone01: string;
  telefone02?: string;
  data_nascimento: string;
  code_postal?: string;
  provincia: string;
  municipio: string;
  bairro: string;
  correio_electronico?: string;
  genero: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface LoginResponse {
  usuario: Usuario;
  token: string;
}

// Login
export const loginUser = async (credenciais: Credenciais): Promise<LoginResponse> => {
  console.log("credenciais", credenciais);
  const cookie = await cookies()
  
  try {
   
    const { data } = await api.post<LoginResponse>("/sis/auth/login", {
      senha: credenciais.senha,
      telefone01: credenciais.telefone
    });
    console.log("response", { data });

    // Guardar token e usuário nos cookies
    cookie.set('sispdcao', JSON.stringify(data));
   

    return data; 
  } catch (error) {
    console.log(error);
    throw (error as any).response?.data?.message || "Erro ao fazer login";
  }
};

// Registro
export const registroPaciente = async (userData: any) => {
  try {
    const response = await fetch('/sis/admin/paciente/create', {
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

    return data;
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error;
  }
};

// Logout
export const logoutUser = async () => {
  const cookie = await cookies()
  try {
  cookie.delete('sispdcao'); 

    console.log('Usuário deslogado com sucesso.');
  } catch (error) {
    console.error('Erro ao deslogar o usuário:', error);
    throw new Error('Erro ao realizar logout');
  }
};

export async function getUserAuth(){
  const cookie = await cookies()
  try {
    const user = cookie.get('sispdcao')?.value!

    console.log(`testando ${JSON.parse(user!)}`)
const data = JSON.parse(user)
console.log('type: ',  data)
    return data
  } catch (error) {
    
  }
}

 