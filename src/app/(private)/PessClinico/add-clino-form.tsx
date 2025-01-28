"use client";
import { criarMedico } from "@/actions/medico";
import { useActionState } from "react";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};

export function AddClinicoForm() {
  const [state, action, isPending] = useActionState(criarMedico, initialState);

  return (
    <>
      <span className="text-lg pl-56 font-semibold">Adicionar pacientes</span>
      <form action={action} className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex flex-col">
          <select name="role" className="border rounded p-2">
            <option value="">Role</option>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <select name="gender" className="border rounded p-2">
            <option value="">Genero</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col">
          <input type="email" name="email" className="border rounded p-2" placeholder="Email" />
        </div>
        <div className="flex flex-col">
          <input type="text" name="mobileNumber" className="border rounded p-2" placeholder="Mobile Number" />
        </div>
        <div className="flex flex-col">
          <input type="text" name="address" className="border rounded p-2" placeholder="Address" />
        </div>
        <div className="flex flex-col">
          <input type="text" name="nic" className="border rounded p-2" placeholder="NIC" />
        </div>
        <div className="flex flex-col">
          <input type="date" name="date" className="border rounded p-2" />
        </div>
        <div className="flex flex-col">
          <input type="password" name="password" className="border rounded p-2" placeholder="Password" />
        </div>
        <div className="flex flex-col">
          <input type="password" name="confirmPassword" className="border rounded p-2" placeholder="Confirm Password" />
        </div>
        <div className="flex mt-6 justify-center">
          <SubmitButton status={isPending} />
        </div>
      </form>
    </>
  );
}