"use client";
import { criarPaciente } from "@/actions/paciente";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};


export function AddPacienteForm() {
  const [state, action, isPending] = useActionState(criarPaciente, initialState);


  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">

        <input id="nome" name="nome" type="text" placeholder="Nome" className="border placeholder-black p-2 rounded col-span-2" />
        <select id="genero" name="genero" className="border p-2 rounded">
          <option>Gênero</option>
          <option value="Masculino" >Masculino</option>
          <option value="Feminino">Femenino</option>
        </select>
        <input name="dataNascimento" type="date" placeholder="Date de Nascimento" className="border p-2 rounded" />
        <input name="telefone01" type="text" placeholder="Telefone" className="border placeholder-black p-2 rounded" />
        <input name="seguradoraId" type="text" placeholder="Entidade Financeira" className="border placeholder-black p-2 rounded" />
        <input name="provincia" placeholder="Provincia" className="border placeholder-black p-2 rounded" />
        <input name="municipio" placeholder="Município" className="border placeholder-black p-2 rounded" />
        <input name="bairro" placeholder="Bairro" className="border placeholder-black p-2 rounded" />
        <input
          type="password" name="senha"

          placeholder="Senha"
          className="border placeholder-black p-2 rounded"
        />
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
};
