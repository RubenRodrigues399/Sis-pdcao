"use client";
import { criarMedico } from "@/actions/medico";
import { useActionState, useEffect, useState } from "react";
import { SubmitButton } from "./submit-button";
import { pegarTodasEspecialidades } from "@/actions/especialidade";

const initialState = {
  message: "",
};

export function AddMedicoForm() {
  const [state, action, isPending] = useActionState(criarMedico, initialState);
  const [especialidades, setEspecialidades] = useState([]);
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

  // Fetch especialidades from API
  useEffect(() => {
    const fetchEspecialidades = async () => {
    
        const data = await pegarTodasEspecialidades();
       
       //const data = await response.json();

        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          setEspecialidades(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setEspecialidades([]); // Evitar quebra no frontend
        }
      
    };

    fetchEspecialidades();
  }, []);

  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pessoal clínico</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex flex-col col-span-2">
          <input id="nome" name="nome" type="text" className="border rounded p-2" placeholder="Nome" />
        </div>
        <div className="flex flex-col">
        <select name="especialidade_id" required className="border border-gray-300 rounded px-4 py-2">
                    <option value="">Especialidade</option>
                    {especialidades.map((esp) => (
                      <option key={esp.id} value={esp.id}>{esp.nome}</option>
                    ))}
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
          <input type="text" id="telefone" name="telefone01" className="border rounded p-2" placeholder="Telefone" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="numOrder" name="numOrdem" className="border rounded p-2" placeholder="Número de ordem" />
        </div>
        <div className="flex flex-col">
          <input type="date" id="data_nascimento" name="data_nascimento" className="border rounded p-2" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="provincia" name="provincia" className="border rounded p-2" placeholder="Provincia" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="municipio" name="municipio" className="border rounded p-2" placeholder="Municipio" />
        </div>
        <div className="flex flex-col">
          <input type="text" id="bairro" name="bairro" className="border rounded p-2" placeholder="Bairro " />
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
