//import Stats from "@/Componentes/Stats";
import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";

import React from 'react';

const DashboardPA = () => {
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
      

        {/* Stats Section */}
        <section className="grid grid-cols-4 pl-60 gap-4 mt-6">
          {['Administradores','Directores', 'Recepcionistas'].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="text-2xl font-bold">20</p>
            </div>
          ))}
        </section>

        {/* Graph and Appointments */}
        <section className="grid grid-cols-2 gap-4 mt-6">
          {/* Graph Placeholder */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Patients</h2>
            <div className="mt-4 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Graph Placeholder
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Appointments</h2>
            <ul className="mt-4 space-y-2">
              {[...Array(5)].map((_, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                >
                  <span className="text-gray-700">Chance Vaccaro</span>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-1 rounded">Accept</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recent Doctors and Out of Stock */}
        <section className="grid grid-cols-2 gap-4 mt-6">
          {/* Recent Doctors */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Recent Doctors</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border">Doctor {idx + 1}</td>
                    <td className="p-2 border">123-456-789</td>
                    <td className="p-2 border">Online</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Out of Stock */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Out of Stock</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Drug Name</th>
                  <th className="p-2 border">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border">Medicine {idx + 1}</td>
                    <td className="p-2 border">10</td>
                  </tr>
                ))}
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

export default DashboardPA;