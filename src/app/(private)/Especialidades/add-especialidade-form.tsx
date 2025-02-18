"use client";
import { criarEspecialidade } from "@/actions/especialidade";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};

export function AddEspecialidadeForm() {
  const [state, action, isPending] = useActionState(criarEspecialidade, initialState);

  return (
    <>
     <h2 className="text-lg font-semibold mb-4 text-center">
          Cadastro de Especialidades
        </h2>
        <form action={action} className="grid grid-cols-2 gap-4 mt-5">
          <input
            type="text"
            className="border placeholder-black p-2 rounded"
            placeholder="Nome"
            name="nome"
          />
          <input
            type="number"
            className="border placeholder-black rounded p-2"
            placeholder="Preço"
            name="preco"
          />
        <div className="flex space-x-4 justify-center mt-6">
          <SubmitButton status={isPending} />
        </div>
        </form>
    </>
  );
};