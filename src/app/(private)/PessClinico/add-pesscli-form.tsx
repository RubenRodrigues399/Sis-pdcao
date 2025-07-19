"use client";
import { criarPessoalTecnico } from "@/actions/tecnico";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  success: false,
  message: "",
};

export function AddPCForm() {
  const [state, action, isPending] = useActionState(criarPessoalTecnico, initialState);

  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pessoal clínico</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex flex-col col-span-2">
          <input name="nome" type="text" className="border rounded p-2" placeholder="Nome" required />
        </div>
        <div className="flex flex-col">
          <select name="genero" className="border rounded p-2" required>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="flex flex-col">
          <input name="email" type="email" className="border rounded p-2" placeholder="Email" required />
        </div>
        <div className="flex flex-col">
          <input type="text" name="telefone" className="border rounded p-2" placeholder="Telefone" required />
        </div>
        <div className="flex flex-col">
          <select name="tipo_profissional" className="border rounded p-2" required>
            <option value="">Tipo de Profissional</option>
            <option value="Técnico enfermeiro">Técnico enfermeiro</option>
            <option value="Técnico de Imagiologa">Técnico de Imagiologa</option>
            <option value="Técnico de Laboratório">Técnico de Laboratório</option>
          </select>
        </div>
        <div className="flex flex-col">
          <input type="text" name="numOrder" className="border rounded p-2" placeholder="Número de ordem" required />
        </div>
        <div className="flex flex-col">
          <input type="date" name="data_nascimento" className="border rounded p-2" required />
        </div>
        <div className="flex flex-col">
          <input type="text" name="provincia" className="border rounded p-2" placeholder="Provincia" required />
        </div>
        <div className="flex flex-col">
          <input type="text" name="municipio" className="border rounded p-2" placeholder="Municipio" required />
        </div>
        <div className="flex flex-col">
          <input type="text" name="bairro" className="border rounded p-2" placeholder="Bairro" required />
        </div>
        <div className="flex flex-col">
          <input type="password" name="senha" className="border rounded p-2" placeholder="Senha" required />
        </div>
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
      {state.message && (
        <p className={`text-center mt-4 ${state.success ? "text-green-500" : "text-red-500"}`}>
          {state.message}
        </p>
      )}
    </>
  );
}