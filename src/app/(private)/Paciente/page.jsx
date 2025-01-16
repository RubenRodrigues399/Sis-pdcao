import Footer from "@/components/Footer";
import NavBarIn from "@/components/NavBarIn";
import NavBar from "@/components/NavBarIn";

// pages/patient-management.jsx
import React from 'react';

const PatientManagement = () => {
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
          <h1 className="text-xl font-bold">Patient Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Prasad</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header> */}

        {/* Form Section */}
        {/* <div className="flex items-center justify-center min-h-screen">
          
        <section className="bg-white w-11/12 shadow-md p-6 rounded-md mt-6">
          <div className="flex justify-between items-center">
            <button className="bg-purple-500 text-white px-6 py-2 rounded">Generate Report</button>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Patient ID"
                className="border p-2 rounded"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>
          <form className="grid grid-cols-2 gap-4 mt-6">
            <input type="text" placeholder="First Name" className="border p-2 rounded" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="text" placeholder="Mobile Number" className="border p-2 rounded" />
            <input type="text" placeholder="NIC" className="border p-2 rounded" />
            <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
            <textarea placeholder="Address" className="border p-2 rounded col-span-2"></textarea>
            <select className="border p-2 rounded">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded"
            />
          </form>
          <div className="flex space-x-4 mt-6 justify-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </section>
        </div> */}

        <div className="flex items-center justify-center">
        {/* Recent Patients Section */}
        <section className="bg-white w-11/12 shadow-md p-6 rounded-lg mt-6">
        <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Patients</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-green-500 w-28 text-white px-4 py-2 rounded">Add</button>
            </div>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Patient ID</th>
                <th className="p-2 border">First Name</th>
                <th className="p-2 border">Last Name</th>
                <th className="p-2 border">NIC</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Mobile Number</th>
                <th className="p-2 border">Date of Birth</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">John</td>
                  <td className="p-2 border">Doe</td>
                  <td className="p-2 border">123456789V</td>
                  <td className="p-2 border">johndoe@example.com</td>
                  <td className="p-2 border">+123456789</td>
                  <td className="p-2 border">1990-01-01</td>
                  <td className="p-2 border">Male</td>
                  <td className="p-2 border">123 Street</td>
                  <td className="p-2 border flex space-x-2">
                    <button className="text-blue-500">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default PatientManagement;
