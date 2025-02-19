"use client";
import { criarSuperAdmin, criarAdmin } from "@/actions/admin"; // Importe as funções corretas
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  success: false,
  message: "",
};

export function AddAdminForm() {
  const [state, action, isPending] = useActionState(async (prevState, formData) => {
    const funcao = formData.get("funcao"); // Captura o valor do select

    if (funcao === "Direccao") {
      return await criarSuperAdmin(prevState, formData); // Chama a função de super admin
    } else if (funcao === "Recepcao") {
      return await criarAdmin(prevState, formData); // Chama a função de admin comum
    } else {
      return { success: false, message: "Selecione uma função válida." };
    }
  }, initialState);

  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar Admin</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
        <input
          type="text"
          className="border placeholder-black p-2 rounded col-span-2"
          placeholder="Nome"
          name="nome" // Adicione o atributo name
        />
        <select className="border rounded p-2" name="funcao"> {/* Adicione o atributo name */}
          <option value="">Função</option>
          <option value="Direccao">Direccao</option>
          <option value="Recepcao">Recepcao</option>
        </select>
        <select className="border rounded p-2" name="genero"> {/* Adicione o atributo name */}
          <option value="">Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
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
          name="telefone01"
        />
        <input
          type="date"
          className="border rounded p-2"
          name="data_nascimento"
        />
        <input
          name="provincia"
          placeholder="Provincia"
          className="border placeholder-black p-2 rounded"
        />
        <input
          name="municipio"
          placeholder="Município"
          className="border placeholder-black p-2 rounded"
        />
        <input
          name="bairro"
          placeholder="Bairro"
          className="border placeholder-black p-2 rounded"
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
      {state.message && (
        <p className={`text-center mt-4 ${state.success ? "text-green-500" : "text-red-500"}`}>
          {state.message}
        </p>
      )}
    </>
  );
}