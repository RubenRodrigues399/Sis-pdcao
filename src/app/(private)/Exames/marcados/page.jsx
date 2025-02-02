"use client"
import React, { useState } from "react";
import NavBarIn from "@/components/NavBarIn";
import Modal from "@/components/ModalOpen";
import Footer from "@/components/Footer";

const Exames = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBarIn />

    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">

        {/* Form Section */}
        

        {/* Table Section */}
        <section className="bg-white shadow-md p-6 rounded-lg mt-6">
        <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Exames marcados</h2>
        <button
                  className="bg-[#21aeb8] w-28 text-white px-4 py-2 rounded mb-4 "
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
                <th className="p-2 border">Actions</th>
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
                  <td className="p-2 border">078-6662216</td>
                  <td className="p-2 border">86362626</td>
                  <td className="p-2 border">1999-04-13</td>
                  <td className="p-2 border text-green-500">Online</td>
                  <td className="p-2 border flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
    <div className='flex items-center justify-center'>

<section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
<h2 className="text-lg font-semibold mb-4">Marcação de consulta</h2>

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
  ></textarea>
  <div className="flex gap-4 justify-center mt-4">
    <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
  </div>
</section>
</div>
          </Modal>
          <Footer />
    </>
  );
};

export default Exames;
