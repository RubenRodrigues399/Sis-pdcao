"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
const logo = "/assets/img/2.png";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

import { registroPaciente } from "@/actions/auth";

const initialState = {
  message: "",
};

export default function Registro() {
  const [error, setError] = useState("");
  const [state, action, isPending] = useActionState(registroPaciente, initialState);

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.get("nome")) errors.nome = "O nome é obrigatório.";
    if (!formData.get("telefone01")) errors.telefone01 = "O telefone é obrigatório.";
    if (!formData.get("senha")) errors.senha = "A senha é obrigatória.";
    if (!formData.get("dataNascimento")) errors.dataNascimento = "A data de nascimento é obrigatória.";

    const telefoneRegex = /^[0-9]{9}$/;
    if (!telefoneRegex.test(formData.get("telefone01"))) {
      errors.telefone01 = "Número de telefone inválido. Deve ter 9 dígitos.";
    }

    const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dataRegex.test(formData.get("data_nascimento"))) {
      errors.data_nascimento = "Data de nascimento inválida. Formato esperado: YYYY-MM-DD.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const result = await action(formData);
      console.log("Paciente registrado com sucesso", result);
      setError("");
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao registrar o paciente.");
    }
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
          <h2 className="mt-0 text-center text-2xl/9 font-bold tracking-tight text-black">
            Registra-se
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                />
              </div>
              {error.nome && <p className="text-red-500 text-sm">{error.nome}</p>}
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
                      className="block w-full h-9 mt-2 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    >
                      <option value="">Selecione o gênero</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </select>
                  </div>
                  {error.genero && <p className="text-red-500 text-sm">{error.genero}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="telefone01"
                    className="mt-4 block text-sm/6  text-black"
                  >
                    Número de telefone
                  </label>
                  <div className="relative mt-2">
                    <input
                      name="telefone01"
                      type="tel"
                      placeholder="Digite o N* de telefone"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.telefone01 && <p className="text-red-500 text-sm">{error.telefone01}</p>}
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
                      className="block w-full -mt-1 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.provincia && <p className="text-red-500 text-sm">{error.provincia}</p>}
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
                      className="block w-full -mt-1 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.bairro && <p className="text-red-500 text-sm">{error.bairro}</p>}
                </div>

              </div>
              
              {/* Segunda coluna */}
              <div className="">
                <div>
                  <label
                    htmlFor="dataNascimento"
                    className="block -mt-2 text-sm/6  text-black"
                  >
                    Data de Nascimento
                  </label>
                  <div className="mt-2">
                    <input
                      name="dataNascimento"
                      type="date"
                      className="block w-full mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.dataNascimento && <p className="text-red-500 text-sm">{error.dataNascimento}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="entidade financeira"
                    className="block mt-4 text-sm/6 text-black"
                  >
                    Entidade financeira
                  </label>
                  <div className="mt-2">
                    <input
                      name="seguradoraId"
                      type="text"
                      placeholder="Digite a sua entidade financeira"
                      className="block w-full mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.seguradoraId && <p className="text-red-500 text-sm">{error.seguradoraId}</p>}
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
                      className="block w-full -mt-2 rounded-md border-0 px-3.5 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.municipio && <p className="text-red-500 text-sm">{error.municipio}</p>}
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
                      className="block w-full -mt-1 rounded-md border-0 py-1.5 pl-3 text-black shadow-sm ring-1 ring-inset ring-[#21aeb8] placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-[#21aeb8] sm:text-sm/6"
                    />
                  </div>
                  {error.senha && <p className="text-red-500 text-sm">{error.senha}</p>}
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex mt-6 justify-center">
              <SubmitButton status={isPending} />
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