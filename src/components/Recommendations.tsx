import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Table from "./Table";
const Recommendations = () => {

  const [Data, setData] = useState([])
  const category = ['Data Science', 'HR', 'Advocate', 'Arts', 'Web Designing',
       'Mechanical Engineer', 'Sales', 'Health and fitness',
       'Civil Engineer', 'Java Developer', 'Business Analyst',
       'SAP Developer', 'Automation Testing', 'Electrical Engineering',
       'Operations Manager', 'Python Developer', 'DevOps Engineer',
       'Network Security Engineer', 'PMO', 'Database', 'Hadoop',
       'ETL Developer', 'DotNet Developer', 'Blockchain', 'Testing']

  const getRecommendations = async () => {
    fetch('http://localhost:5000/recommendation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ category: "HR" })
    }).then(res => res.json())
      .then(res => {
        setData(res)
      });
  }


  useEffect(() => {

    getRecommendations()
    return () => {

    }
  }, [])


  return (
    <div className="container p-2 mx-auto sm:p-4 md:p-0 dark:text-gray-100 bg-gray-800 shadow-xl space-y-10">
      <div
        className="w-full dark:bg-gray-700 bg-[url('D:\QuantumX\ciphers_statement\src\assets\resume2.jpg')] bg-[rgba(73,1,1,0.3)] py-20 bg-center bg-blend-darken bg-cover"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center  py-20 mx-auto md:p-10 text-white p-4">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
            Get Our Top Candidates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about skills and experience
          </p>
          <form
            className="flex flex-row flex-wrap"
            onSubmit={getRecommendations}
          >
            <div className="flex justify-center items-center">
              <div className="mb-3 xl:w-96">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-basefont-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                >
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                <option value="3">Three</option> */}
                <option selected>Select a Category</option>
                  {
                    category.map((ele,index)=>{
                      <option value={index}>{ele}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900 flex justify-center items-center"
            >
              Get applicants
            </button>
          </form>
        </div>
      </div>
      <h2 className="mb-4 text-white text-2xl font-semibold leading-tight text-center">Top Applicants</h2>
      <div className="overflow-x-auto p-8">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="dark:bg-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">YOE</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {
            Data?.map((el) => (
              <Table
                email={el?.address}
                name={el?.Name}
                phone={el?.phone}
                category={el?.Category}
                yoe={el?.overall_experience}
              />
            ))
          }
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendations;
