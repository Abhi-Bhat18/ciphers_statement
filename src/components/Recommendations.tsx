import React from "react";
import Footer from "./Footer";

const Recommendations = () => {
    const getRecommendations = ()=>{
        return alert('Our top applicants')
    }
  return (
    <div className="container p-2 mx-auto sm:p-4 md:p-0 dark:text-gray-100 shadow-xl space-y-10">
      <div
        className="w-full dark:bg-gray-500 bg-[url('D:\QuantumX\ciphers_statement\src\assets\resume2.jpg')] bg-[rgba(73,1,1,0.3)] py-20 bg-center bg-blend-darken bg-cover"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center  py-20 mx-auto md:p-10 text-white p-4">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
            Get Our Top Candidates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about skills and experience
          </p>
          <form className="flex flex-row flex-wrap" onSubmit={getRecommendations}>
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="submit"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
            >
                Get applicants
            </button>
          </form>
        </div>
      </div>
      <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">Top Applicants</h2>
      <div className="overflow-x-auto p-8">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="dark:bg-gray-700">
              <th className="p-3">A-Z</th>
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
            <tr>
              <td className="px-3 text-2xl font-medium dark:text-gray-400">
                A
              </td>
              <td className="px-3 py-2">
                <p>Dwight Adams</p>
              </td>
              <td className="px-3 py-2">
                <span>UI Designer</span>
                <p className="dark:text-gray-400">Spirit Media</p>
              </td>
              <td className="px-3 py-2">
                <p>555-873-9812</p>
              </td>
              <td className="px-3 py-2">
                <p>dwight@adams.com</p>
              </td>
              <td className="px-3 py-2">
                <p>71 Cherry Court, SO</p>
                <p className="dark:text-gray-400">United Kingdom</p>
              </td>
              <td className="px-3 py-2">
                <button
                  type="button"
                  title="Open details"
                  className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
              <td className="px-3 py-2">
                <p>Richie Allen</p>
              </td>
              <td className="px-3 py-2">
                <span>Geothermal Technician</span>
                <p className="dark:text-gray-400">Icecorps</p>
              </td>
              <td className="px-3 py-2">
                <p>555-129-0761</p>
              </td>
              <td className="px-3 py-2">
                <p>richie@allen.com</p>
              </td>
              <td className="px-3 py-2">
                <p>Knesebeckstrasse 32, Obersteinebach</p>
                <p className="dark:text-gray-400">Germany</p>
              </td>
              <td className="px-3 py-2">
                <button
                  type="button"
                  title="Open details"
                  className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default Recommendations;
