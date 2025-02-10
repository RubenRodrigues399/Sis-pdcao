// pages/prescription-management.jsx
import React from 'react';
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";

const PrescriptionManagement = () => {
  return (
    <>
    <NavBarIn />
    <div className="flex min-h-screen">

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">

        {/* Prescription Management Form */}
        <div className='flex items-center justify-center'>

        <section className="bg-white w-9/12 shadow-md p-6 rounded-lg mt-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome da consulta"
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Nome o paciente"
              className="border rounded px-4 py-2"
            />
            <div className="flex items-center space-x-2">
              <span className="font-bold">KZS:</span>
              <input
                type="text"
                placeholder="Preço"
                className="border rounded px-4 py-2 flex-1"
              />
            </div>
            <textarea
              placeholder="Notas da prescrição"
              className="border rounded px-4 py-2"
            ></textarea>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded">Update</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </section>
        </div>

        {/* Recent Prescriptions */}
        <section className="mt-6 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Prescriptions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Prescription ID</th>
                <th className="p-2 border">Patient Name</th>
                <th className="p-2 border">Treatment Name</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Prescription Note</th>
                <th className="p-2 border">Issued Date</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">Patient {idx + 1}</td>
                  <td className="p-2 border">Treatment {idx + 1}</td>
                  <td className="p-2 border">2500.00</td>
                  <td className="p-2 border">Note {idx + 1}</td>
                  <td className="p-2 border">2022-01-13</td>
                  <td className="p-2 border flex space-x-2">
                    <button className="text-blue-500">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default PrescriptionManagement;