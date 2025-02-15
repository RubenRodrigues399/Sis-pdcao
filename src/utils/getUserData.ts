import { getCookie } from 'cookies-next';

export const getUserData = () => {
  const token = getCookie('sispdcao'); 
  const usuarioCookie = getCookie('usuario');

  // Garante que usuarioCookie é uma string antes de tentar parsear
  const usuario = typeof usuarioCookie === 'string' ? JSON.parse(usuarioCookie) : null;

  return usuario ? { usuario, token: token ?? null } : null;
};
