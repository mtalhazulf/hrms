import React from "react";
import Modal from "./Modal";

const Table = () => {
  const heading = ["Project Name", "Deadline", "Team Lead", "Status"];

  const data = [
    {
      name: "Asim",
      deadline: "12/12/2023",
      teamLead: "Saleemi",
    },
    {
      name: "Maxime",
      deadline: "12/1/2023",
      teamLead: "Talha",
    },
    {
      name: "Mohit",
      deadline: "12/12/2023",
      teamLead: "Ahmed",
    },
    {
      name: "Mike",
      deadline: "12/1/2023",
      teamLead: "Talha",
    },
    {
      name: "Drake",
      deadline: "12/1/2023",
      teamLead: "Raza",
    },
    {
      name: "Suhana",
      deadline: "12/1/2023",
      teamLead: "Talha",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center space-y-4 lg:w-[950px] md:w-[700px] w-[400px] h-[600px]  bg-indigo-950 rounded-xl overflow-y-auto ">
      <div className="flex flex-row items-center justify-between w-[95%] rounded bg-[#56429C] h-10 px-2 py-4">
        {heading.map((item, index) => (
          <p key={index} className="text-white text-md font-bold">
            {item}
          </p>
        ))}
      </div>
      <div className="flex md:flex-col flex-wrap items-start justify-start md:w-[95%] w-full space-y-4">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="flex md:flex-row flex-col justify-between items-center w-full"
            >
              <p className="text-white text-md font-bold w-16 md:ml-2">
                {item.name}
              </p>
              <p className="text-cyan-300 text-md font-semibold w-20 md:ml-20">
                {item.deadline}
              </p>
              <p className="text-white text-md font-bold md:ml-10  w-16">
                {item.teamLead}
              </p>
              <button className="bg-red-400 rounded p-2 text-white text-sm ">
                Mark as done
              </button>
            </div>
            <div className="w-full h-[0px] border border-white border-opacity-10"></div>
          </>
        ))}
      </div>
      <Modal />
    </div>
  );
};

export default Table;
