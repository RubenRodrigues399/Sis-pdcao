export type User = {
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

export type AuthResponse = {
  usuario: User;
  token: string;
}
