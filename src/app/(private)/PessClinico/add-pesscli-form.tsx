"use client";
import { criarPessoalTecnico } from "@/actions/tecnico";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};

export function AddPCForm() {
  const [state, action, isPending] = useActionState(criarPessoalTecnico, initialState); 

  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pessoal clínico</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Nome" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Sobrenome" />
          </div>
          <div className="flex flex-col">
            <select className="border rounded p-2">
              <option>Especialidade</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select className="border rounded p-2">
              <option>Genero</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div className="flex flex-col">
            <input type="email" className="border rounded p-2" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Telefone" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Endereço" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="border rounded p-2" placeholder="Número de ordem" />
          </div>
          <div className="flex flex-col">
            <input type="date" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <input type="password" className="border rounded p-2" placeholder="Senha" />
          </div>
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
};
