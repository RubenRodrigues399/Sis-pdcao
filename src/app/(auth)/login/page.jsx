"use client"
import { useState } from "react";
import { loginUser } from "@/actions/auth";
import NavBar from "../../../components/NavBar";
const logo = "/assets/img/2.png";

import useAuth from "../../../hooks/useAuth";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter()


  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async(event) => {
    event.preventDefault();
    if (!telefone || !senha) {
      setError("Preencha todos os campos");
      return;
    }
    console.log("telefone, senha", senha);
    try {
      

    const res =await loginUser({telefone, senha});
    console.log("res", res);
    if(res.token){
      console.log("token", res.token);
      router.push("/dashboard")
      //redirect("/home");
    }

    }catch(e) {
      console.error("Error:", e);
      setError("Falha ao fazer login");

    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-blue-50 flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Health First"
            src={logo}
            className="mx-auto h-10 w-auto mb-1"
          />
          {/* <a href="/" className="p-32 text-center text-2xl/4 tracking-tight text-[#21aeb8]">Health First</a> */}
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="telefone"
                className="block text-sm/6 font-medium text-black"
              >
                Telefone
              </label>
              <div className="mt-2">
                <input
                  name="telefone"
                  type="tel"
                  placeholder="Digite o numero de telefone"
                  value={telefone}
                  onChange={(e) => [setTelefone(e.target.value), setError("")]}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-black"
                >
                  Senha
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  placeholder="Digite a sua senha"
                  value={senha}
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-[#21aeb8] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="mt-8 text-center text-sm/6">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="font-semibold text-[#21aeb8] hover:text-blue-600"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>

          <p className="mt-2 text-center text-sm/6 text-black">
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
    </>
  );
};

export default Login;
