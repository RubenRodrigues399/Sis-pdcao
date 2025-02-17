import { API_KEY } from '@/utils/api-key';
import axios from 'axios';
import { cookies } from 'next/headers';


// const API_KEY = "48454de50ba188ebad94f291e743c02af4d853c9" || só usar se tiver problema com "server-onnly!"

export const api = axios.create({
  baseURL: " https://sis-production-4c8f.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
    "APIKEY": `"${API_KEY}"`
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