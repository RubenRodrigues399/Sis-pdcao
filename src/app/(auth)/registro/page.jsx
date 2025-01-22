"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
const logo = "/assets/img/2.png";
import UseAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function Registro() {
  const { registro } = UseAuth();

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [data_nasci, setData_nasci] = useState("");
  const [bairro, setBairro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [provincia, setProvincia] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleRegistro = () => {
    event.preventDefault();
    if (!nome || !genero || !data_nasci || !email || !telefone || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = registro(nome, genero, data_nasci, email, telefone, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Utilizador cadastrado com sucesso!");
    redirect("/login");
  };

  return (
    <>
      <NavBar />
      <div className="bg-blue-50 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Health First"
            src={logo}
            className="mx-auto mb-1 h-10 w-auto"
          />
          {/* <a
            href="/"
            className="mt-4 p-32 text-center text-2xl/4 tracking-tight text-[#21aeb8]"
          >
            Health First
          </a> */}
          <h2 className="mt-0 text-center text-2xl/9 font-bold tracking-tight text-black">
            Registra-se
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm/6 font-medium text-black"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  name="nome"
                  type="text"
                  placeholder="Digite o seu nome"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value), setError("")]}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex gap-10 ">
              <div className="">
                <div>
                  <label
                    htmlFor="genero"
                    className="block -mt-2 text-sm/6 font-medium text-black"
                  >
                    Gênero
                  </label>
                  <div className="mt-2">
                    <select
                      name="genero"
                      value={genero}
                      onChange={(e) => [
                        setGenero(e.target.value),
                        setError(""),
                      ]}
                      className="block w-full h-9 mt-2 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    >
                      <option value="">Selecione o gênero</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="telefone"
                    className="mt-4 block text-sm/6  text-black"
                  >
                    Número de telefone
                  </label>
                  <div className="relative mt-2">
                    <input
                      name="telefone"
                      type="tel"
                      placeholder="Digite o N* de telefone"
                      value={telefone}
                      onChange={(e) => [
                        setTelefone(e.target.value),
                        setError(""),
                      ]}
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="provincia"
                    className="block mt-4 text-sm/6 font-medium text-black"
                  >
                    Província
                  </label>
                  <div className="mt-2">
                    <input
                      name="provincia"
                      type="text"
                      placeholder="Digite a sua província"
                      value={provincia}
                      onChange={(e) => [
                        setProvincia(e.target.value),
                        setError(""),
                      ]}
                      className="block w-full -mt-1 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="provincia"
                    className="block mt-4 text-sm/6 font-medium text-black"
                  >
                    Bairro
                  </label>
                  <div className="mt-2">
                    <input
                      name="bairro"
                      type="text"
                      placeholder="Digite a sua bairro"
                      value={bairro}
                      onChange={(e) => [
                        setBairro(e.target.value),
                        setError(""),
                      ]}
                      className="block w-full -mt-1 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>

              </div>
              
              {/* Segunda coluna */}
              <div className="">
                <div>
                  <label
                    htmlFor="data_nascimento"
                    className="block -mt-2 text-sm/6  text-black"
                  >
                    Data de Nascimento
                  </label>
                  <div className="mt-2">
                    <input
                      name="data_nascimento"
                      type="date"
                      value={data_nasci}
                      onChange={(e) => [
                        setData_nasci(e.target.value),
                        setError(""),
                      ]}
                      className="block w-full mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block mt-4 text-sm/6 text-black"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Digite o seu email"
                      value={email}
                      onChange={(e) => [setEmail(e.target.value), setError("")]}
                      className="block w-full mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="municipio"
                    className="block mt-4 text-sm/6 text-black"
                  >
                    Municipio
                  </label>
                  <div className="mt-2">
                    <input
                      name="municipio"
                      type="municipio"
                      placeholder="Digite o seu municipio"
                      value={municipio}
                      onChange={(e) => [setMunicipio(e.target.value), setError("")]}
                      className="block w-full -mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="senha"
                      className="block mt-5 text-sm/6 font-medium text-black"
                    >
                      Senha
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="senha"
                      type="senha"
                      placeholder="Digite a sua senha"
                      value={senha}
                      onChange={(e) => [setSenha(e.target.value), setError("")]}
                      className="block w-full mt-2 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                onClick={handleRegistro}
                className="flex w-full justify-center rounded-md bg-[#21aeb8] px-3 py-1.5 text-sm/6  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Registrar-se
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm/6 text-black">
            Já tem uma conta?{" "}
            <a
              href="/login"
              className=" text-[#21aeb8] hover:text-blue-600"
            >
              Faça o login!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
