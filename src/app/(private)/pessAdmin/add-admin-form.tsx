"use client";
import { criarAdmin } from "@/actions/admin";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";
import React from "react";
import Popup from "@/components/popup";

const initialState = {
  message: "",
};


export function AddAdminForm() {
  const [state, action, isPending] = useActionState(criarAdmin, initialState);
  const [popup, setPopup] = React.useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const formData = new FormData(e.target as HTMLFormElement);

    try {
      await action(formData);

      setPopup({
        message: "Paciente criado com sucesso!",
        type: "success",
      });
    } catch (error) {
      setPopup({
        message: "Ocorreu um erro ao criar o paciente.",
        type: "error",
      });
    }
  };



  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
      {/*  <form action={action} className="grid grid-cols-2 gap-4 mt-5"> */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mt-5"
      >

        <input
          name="nome"
          type="text"
          className="border placeholder-black p-2 rounded col-span-2 text-black"
          placeholder="Nome"
        />
        <select name="funcao" className="border rounded p-2 text-black">
          <option className="text-black">Função</option>
          <option>Director</option>
          <option>Secretário</option>
          <option>Admin</option>
        </select>
        <select name="genero" className="border rounded p-2 text-black">
          <option>Gênero</option>
          <option>Masculino</option>
          <option>Femenino</option>
        </select>
        <input
          name="email"
          type="email"
          className="border placeholder-black rounded p-2 text-black"
          placeholder="Email"
        />
        <input
          name="telefone"
          type="text"
          className="border placeholder-black rounded p-2 text-black"
          placeholder="Telefone"
        />
        <input
          name="data_nascimento"
          type="date"
          className="border rounded p-2 text-black"
        />
        <input
          name="endereco"
          type="text"
          className="border placeholder-black p-2 rounded text-black"
          placeholder="Endereço"
        />
        <input
          name="senha"
          type="password"
          className="border placeholder-black rounded p-2 text-black"
          placeholder="Senha"
        />
        <input
          name="confirmar_senha"
          type="password"
          className="border placeholder-black rounded p-2 text-black"
          placeholder="Confirmar senha"
        />
      </form>
      <div className="flex mt-6 justify-center">
        <SubmitButton status={isPending} />
      </div>
      {popup && (
        <Popup message={popup.message} type={popup.type} onClose={() => setPopup(null)} />
      )}
    </>
  );
};
