// pages/prescription-management.jsx
import React from 'react';
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";

const PrescriptionManagement = () => {
  return (
    <>
    <NavBarIn />
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gradient-to-b from-purple-500 to-indigo-600 text-white">
        <div className="p-6 font-bold text-xl">MediLab</div>
        <ul className="space-y-4">
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Dashboard</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Staff</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Lab</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Ward</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Treatment</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Pharmacy</li>
          <li className="p-4 hover:bg-purple-700 cursor-pointer">Patient</li>
        </ul>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        {/* <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Prescription Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Prasad</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header> */}

        {/* Prescription Management Form */}
        <section className="mt-6 bg-white shadow-md p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded">Generate Report</button>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Prescription ID"
                className="border rounded px-4 py-2"
              />
              <button className="bg-yellow-400 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Treatment Name"
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Patient Name"
              className="border rounded px-4 py-2"
            />
            <div className="flex items-center space-x-2">
              <span className="font-bold">RS:</span>
              <input
                type="text"
                placeholder="Price"
                className="border rounded px-4 py-2 flex-1"
              />
            </div>
            <textarea
              placeholder="Prescription Note"
              className="border rounded px-4 py-2 col-span-2"
            ></textarea>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded">Update</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </section>

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
