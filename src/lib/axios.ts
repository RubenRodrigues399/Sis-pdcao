import { API_KEY } from '@/utils/api-key';
import axios from 'axios';
import { cookies } from 'next/headers';

export const api = axios.create({
  baseURL: "https://sis-production-4c8f.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
    "APIKEY": `"${API_KEY}"`
  }
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('sispdcao');

  if (authToken?.value) {
    // Decodifica o valor do cookie
    const decodedToken = decodeURIComponent(authToken.value);
    // Transforma o valor decodificado em JSON
    const tokenObject = JSON.parse(decodedToken);
    // Extrai o token do objeto JSON
    const token = tokenObject.token;

    // Adicione um log para verificar se o token está sendo adicionado
    //console.log("Adicionando token ao cabeçalho:", token);
    
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
