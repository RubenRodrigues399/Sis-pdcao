"use client"
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Modal from "@/components/ModalOpen";
import Footer from "@/components/Footer";

const StaffManagement = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
    <NavBarIn />
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {/* Recent Staff Section */}
        <section className="bg-white shadow-md p-6 rounded-lg mt-6">
        <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Pessoal Clínico</h2>
                <button
                  className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded"
                  onClick={() => setModalOpen(true)}
                >
                  Adicionar
                </button>
              </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Mobile Number</th>
                <th className="p-2 border">NIC</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">Madhusha</td>
                  <td className="p-2 border">Doctor</td>
                  <td className="p-2 border">Male</td>
                  <td className="p-2 border">madhusha@gmail.com</td>
                  <td className="p-2 border">078-66622516</td>
                  <td className="p-2 border">86362626</td>
                  <td className="p-2 border">1999-04-13</td>
                  <td className="p-2 border text-green-500">Online</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
    <h2 className="text-lg font-semibold mb-4 text-center">Cadastro de Pessoal Clínico</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input type="text" className="border rounded p-2" placeholder="First Name" />
            </div>
            <div className="flex flex-col">
              <input type="text" className="border rounded p-2" placeholder="Last Name" />
            </div>
            <div className="flex flex-col">
              <select className="border rounded p-2">
              <option>Role</option>
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select className="border rounded p-2">
              <option>Genero</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <input type="email" className="border rounded p-2" placeholder="Email" />
            </div>
            <div className="flex flex-col">
              <input type="text" className="border rounded p-2" placeholder="Mobile Number" />
            </div>
            <div className="flex flex-col">
              <input type="text" className="border rounded p-2" placeholder="Address" />
            </div>
            <div className="flex flex-col">
              <input type="text" className="border rounded p-2" placeholder="NIC" />
            </div>
            <div className="flex flex-col">
              <input type="date" className="border rounded p-2" />
            </div>
            <div className="flex flex-col">
              <input type="password" className="border rounded p-2" placeholder="Password" />
            </div>
            <div className="flex flex-col">
              <input type="password" className="border rounded p-2" placeholder="Confirm Password" />
            </div>
          </div>

          <div className="flex space-x-4 justify-center mt-6">
            <button className="bg-green-500 text-white px-6 py-2 rounded">Register</button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Update</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded">Delete</button>
          </div>
          </Modal>
          <Footer />
    </>
  );
};

export default StaffManagement;
