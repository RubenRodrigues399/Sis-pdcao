"use client"
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import NavBar from "@/components/NavBarIn";
import Graph from "@/components/Graph";

import React from 'react';
import LinhaTabelaEspecialidade from "../../../components/LinhaTabelaEspecialidades";
import LinhaTabelaPessAdmin from "@/components/LinhaTabelaPessAdmin";
import LinhaTabelaPessClinico from "@/components/LinhaTabelaPessClinico";
import LinhaTabelaConsultas from "@/components/LinhaTabelaMarcacaoConsulta";

const Dashboard = () => {
  return (
    <> 
    <NavBarIn />
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
      

        {/* Stats Section */}
        <section className="grid grid-cols-4 pl-44 gap-60 mt-6">
          {['Total de Pacientes', 'Total de Pessoal Clinico', 'Total de Pessoal Admin'].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md p-6 w-72 rounded-lg flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="text-2xl font-bold">20</p>
            </div>
          ))}
        </section>

        {/* Appointments and Appointments */}
        <section className="grid grid-cols-2 gap-4 mt-6">
           {/* Appointments */}
           <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Marcações Consultas</h2>
            <ul className="mt-4 space-y-2">
              {[...Array(2)].map((_, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                >
                  <span className="text-gray-700">Ruben Rodrigues</span>
                  <div className="flex space-x-2">
                    <button className="bg-[#21aeb8] text-white px-4 py-1 rounded">Aceitar</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded">Rejeitar</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Appointments */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Marcações de Exames</h2>
            <ul className="mt-4 space-y-2">
              {[...Array(2)].map((_, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                >
                  <span className="text-gray-700">Ruben Rodrigues</span>
                  <div className="flex space-x-2">
                    <button className="bg-[#21aeb8] text-white px-4 py-1 rounded">Aceitar</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded">Rejeitar</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Graph and Graph */}
        <section className="grid grid-cols-2 gap-4 mt-6">
          {/* Graph Placeholder */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Pacientes</h2>
            <div className="mt-4 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <Graph />
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Especialidades recentes</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Nome</th>
                  <th className="p-2 border">Preco</th>
                </tr>
              </thead>
              <tbody>
              <LinhaTabelaEspecialidade
                  id="1"
                  nome="Clinica geral"
                  preco="2000KZS"
                  showActions = {false}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Doctors and Out of Stock */}
        <section className="grid grid-cols-2 gap-4 mt-6">
          {/* Recent Doctors */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Pessoal Clínico recente</h2>
            <table className="w-full mt-4 border-collapse">
            <thead>
                <tr className="bg-gray-100 text-left">
                <th className="p-2 border">ID</th>
                  <th className="p-2 border">Nome</th>
                  <th className="p-2 border">Função</th>
                  <th className="p-2 border">Gênero</th>
                  <th className="p-2 border">Data de nascimento</th>
                  <th className="p-2 border">Telefone</th>
                </tr>
              </thead>
              <tbody>
              <LinhaTabelaPessClinico
                  id="1"
                  nome="Denilson Rodrigues"
                  funcao="Médico"
                  genero="Masculino"
                  data_nascimento="25-03-2002"
                  telefone="937869519"
                  showActions = {false}
                />
              </tbody>
            </table>
          </div>

          {/* Out of Stock */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Pessoal Admin recente</h2>
            <table className="w-full mt-4 border-collapse">
            <thead>
                <tr className="bg-gray-100 text-left">
                <th className="p-2 border">ID</th>
                  <th className="p-2 border">Nome</th>
                  <th className="p-2 border">Função</th>
                  <th className="p-2 border">Gênero</th>
                  <th className="p-2 border">Data de nascimento</th>
                  <th className="p-2 border">Telefone</th>
                </tr>
              </thead>
              <tbody>
              <LinhaTabelaPessAdmin
                  id="1"
                  nome="Ruben Rodrigues"
                  funcao="Secretário"
                  genero="Masculino"
                  data_nascimento="03-03-1999"
                  telefone="937869519"
                  showActions = {false}
                />
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;