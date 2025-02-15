"use client";
import { criarPessoalTecnico } from "@/actions/tecnico";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};

export function AddPCForm() {
  const [state, action, isPending] = useActionState(criarPessoalTecnico, initialState);
  //TODO:  //TODO: Precisa actualizar os campos no formulário que estão faltando para criação

  /* 
     CAMPOS POR ADICIONAR:
     - telefone 02 (opcional)
     - codePOstal
     - correioEle
     - provincia
     - municipio
     - bairro
     - tipo_profissional(* TODO: Verificar se há dependência com dados doutra tabela)
   
   NOTA: não esqueça de adicionar os id e name de cada campo para ser obtida lá na server action
   exemplo: const varNome = formData.get("nome_no_form") as string (ou outro tipo como number)
     */
  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pessoal clínico</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex flex-col">
          <input id="nome" name="nome" type="text" className="border rounded p-2" placeholder="Nome" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="sobrenome" name="sobrenome" className="border rounded p-2" placeholder="Sobrenome" />
        </div>
        <div className="flex flex-col">
          <select id="especialidade" name="especialidade" className="border rounded p-2">
            <option>Especialidade</option>
            <option>Doctor</option>
            <option>Nurse</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <select id="genero" name="genero" className="border rounded p-2">
            <option>Genero</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div className="flex flex-col">
          <input name="email" id="email" type="email" className="border rounded p-2" placeholder="Email" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="telefone" name="telefone" className="border rounded p-2" placeholder="Telefone" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="endereco" name="endereco" className="border rounded p-2" placeholder="Endereço" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="numOrder" name="numOrder" className="border rounded p-2" placeholder="Número de ordem" />
        </div>
        <div className="flex flex-col">
          <input type="date" id="dataNasc" name="dataNasc" className="border rounded p-2" />
        </div>
        <div className="flex flex-col">
          <input type="password" id="password" name="password" className="border rounded p-2" placeholder="Senha" />
        </div>
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
};
