"use client";
import { loginUser } from "@/actions/auth";
import { useAuth } from "@/hooks/useAuth";

import { useState } from "react";
import NavBar from "../../../components/NavBar";

import { useRouter } from "next/navigation";

const logo = "/assets/img/2.png";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { user } = useAuth()

  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("paciente", "admin", "clinico");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!telefone || !senha) {
      setError("Preencha todos os campos");
      return;
    }
    const telefoneRegex = /^[9][0-9]{8}$/;
    if (!telefone.match(telefoneRegex)) {
      setError("Telefone inválido. Deve começar com 9 e ter 9 dígitos.");
      return;
    }

    if (!senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const res = await loginUser({ telefone, senha });
      login(res)
      if (res.token) {
        console.log("Token recebido:", res.token);
        console.log("Tipo de usuário recebido:", res.userType); // Verifique se a API está retornando o userType corretamente
        const userRole = (res.userType || userType).toUpperCase(); // Prioriza o tipo retornado pela API

        switch (userRole) {
          case "DIRECAO":
          case "RECEPCIONISTA":
            router.push("/pessAdmin/");
            break;
          case "MEDICO":
          case "TECENFERMEIRO":
          case "TECLABORATORIO":
          case "TECIMAGIOLOGIA":
            router.push("/PessClinico/");
            break;
          case "PACIENTE":
            router.push("/Paciente/");
            break;
          default:
            router.push("/login");
        }

      }
    } catch (e) {
      console.error("Erro:", e);
      setError("Falha ao fazer login");
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-blue-50 flex min-h-screen flex-col justify-center items-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Logo */}
          <img
            alt="Health First"
            src={logo}
            className="mx-auto h-10 w-auto mb-4"
          />

          <div className="mt-6">
            <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Login</h2>
             
              <div>
                <label className="block text-sm font-medium text-black">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="Digite o número de telefone"
                  value={telefone}
                  onChange={(e) => [setTelefone(e.target.value), setError("")]}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm"
                />
              </div>

              {/* Senha */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="Digite a sua senha"
                  value={senha}
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#21aeb8] px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Entrar
              </button>
            </form>

            <div className="mt-8 text-center text-sm">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-semibold text-[#21aeb8] hover:text-blue-600"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <p className="mt-2 text-center text-sm text-black">
              Não tem uma conta?{" "}
              <a
                href="/registro"
                className="font-semibold text-[#21aeb8] hover:text-blue-600"
              >
                Registra-se agora
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
