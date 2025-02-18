"use client";
import { criarPaciente } from "@/actions/paciente";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};


export function AddAdminForm() {
  const [state, action, isPending] = useActionState(criarPaciente, initialState);


  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">

      <input
            type="text"
            className="border placeholder-black p-2 rounded col-span-2"
            placeholder="Nome"
          />
          <select className="border rounded p-2">
            <option>Função</option>
            <option>Direccao</option>
            <option>Recepcao</option>
          </select>
          <select className="border rounded p-2">
            <option>Gênero</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
          <input
            type="email"
            className="border placeholder-black rounded p-2"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="border placeholder-black rounded p-2"
            placeholder="Telefone"
            name="telefone"
          />
          <input type="date" className="border rounded p-2" />
          <input
            type="text"
            className="border placeholder-black p-2 rounded"
            placeholder="Enderço"
            name="data"
          />
          <input
            type="password"
            className="border placeholder-black rounded p-2"
            placeholder="Senha"
            name="senha"
          />
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
};