import axios from 'axios';

export const api = axios.create({
  baseURL: "https://sis-production.up.railway.app",
  headers: {
    'Content-Type': 'application/json'
  }
});

// api.interceptors.request.use( async (config) => {
//   const cookieStore = await cookies();
//   const authToken = cookieStore.get('sispdcao');

//   if (authToken?.value) {
//     config.headers.Authorization = `Bearer ${authToken.value}`;
//   }

//   return config;
// });