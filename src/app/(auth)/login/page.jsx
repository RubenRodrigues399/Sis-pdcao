"use client";
import { useState } from "react";
import { loginUser } from "@/actions/auth";
import NavBar from "../../../components/NavBar";
import useAuth from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";

const logo = "/assets/img/2.png";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("paciente");
  const [menuOpen, setMenuOpen] = useState(false);

  const userLabels = {
    paciente: "Login Paciente",
    clinico: "Login Pessoal Clínico",
    admin: "Login Pessoal Administrativo",
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!telefone || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const res = await loginUser({ telefone, senha });

      if (res.token) {
        console.log("Token recebido:", res.token);

        switch (userType) {
          case "admin":
            router.push("/dashboard/admin");
            break;
          case "clinico":
            router.push("/dashboard/clinico");
            break;
          case "paciente":
            router.push("/dashboard/paciente");
            break;
          default:
            router.push("/dashboard");
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
          <img alt="Health First" src={logo} className="mx-auto h-10 w-auto mb-4" />

          {/* Formulário */}
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Entre na sua conta
          </h2>

          <div className="mt-6">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Login + Dropdown */}
              <div className="flex items-center justify-between">
                <label className="text-center text-lg px-10 text-black">
                  {userLabels[userType]}
                </label>

                {/* Dropdown de seleção de usuário */}
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-white text-black px-4 py-1 rounded-md shadow-md hover:bg-gray-100"
                  >
                    ▼
                  </button>

                  {menuOpen && (
                    <div className="absolute top-10 right-0 w-48 bg-white shadow-md rounded-md z-10">
                      <button
                        onClick={() => {
                          setUserType("paciente");
                          setMenuOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                      >
                        Login Paciente
                      </button>
                      <button
                        onClick={() => {
                          setUserType("clinico");
                          setMenuOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                      >
                        Login Pessoal Clínico
                      </button>
                      <button
                        onClick={() => {
                          setUserType("admin");
                          setMenuOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                      >
                        Login Pessoal Administrativo
                      </button>
                    </div>
                  )}
                </div>
              </div>

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

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black">
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
              <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-[#21aeb8] hover:text-blue-600">
                Esqueceu sua senha?
              </a>
            </div>

            <p className="mt-2 text-center text-sm text-black">
              Não tem uma conta?{" "}
              <a href="/registro" className="font-semibold text-[#21aeb8] hover:text-blue-600">
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
