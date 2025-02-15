import axios from 'axios';
import { cookies } from 'next/headers';

export const api = axios.create({
  baseURL: " https://sis-production-4c8f.up.railway.app",
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('sispdcao');

  if (authToken?.value) {
    config.headers.Authorization = `Bearer ${authToken.value}`;
  }
  return config;
});