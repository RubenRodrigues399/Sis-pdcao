"use client";
import { useActionState } from "react";
import { criarExame } from "@/actions/exame";
import { SubmitButton } from "../Paciente/submit-button";

const initialState = {
  message: "",
}; 


export function AddExameForm() {
  const [state, action, isPending] = useActionState(criarExame, initialState);

 
  return ( 
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
      <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="NIC"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="date"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="time"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Department Name</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <select className="border border-gray-300 rounded px-4 py-2">
                <option>Doctor Name</option>
                <option>Dr. Smith</option>
                <option>Dr. John</option>
              </select>
            </div>
            <textarea
              placeholder="Address"
              className="border border-gray-300 rounded px-4 py-2 mt-4 w-full"
            ></textarea>        {/* <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded"
          /> */}
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
};
