import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const MobileView = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDetails = (index) => {
    setSelectedProject((prev) => (prev === index ? null : index));
  };

  const data = [
    {
      name: "Asim",
      deadline: "12/12/2023",
      teamLead: "Saleemi",
      status: "Completed",
    },
    {
      name: "Maxime",
      deadline: "12/1/2023",
      teamLead: "Talha",
      status: "Completed",
    },
    {
      name: "Mohit",
      deadline: "12/12/2023",
      teamLead: "Ahmed",
      status: "Completed",
    },
  ];

  return (
    <div className="md:hidden bg-[#282346] flex flex-col items-center justify-center w-[90%] h-[400px] py-2 overflow-y-auto pb-4 rounded-lg space-y-4">
      <p className="text-white text-xl font-bold">Priority List</p>
      <div className="flex flex-row items-center justify-center w-[65%] rounded-[9px] bg-[#56429C] h-10 px-2">
        <p className="text-white text-md font-bold">Projects</p>
      </div>

      <div className="flex flex-col items-center justify-center px-4 w-full space-y-4 py-2 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#52507C5E] w-[70%] py-2 rounded-[8.61px]"
          >
            <div
              className="flex justify-between items-center px-4 cursor-pointer"
             
            >
              <p className="text-[#F14141] font-semibold text-lg">
                {item.name}
              </p>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-[#808080]">Details</p>

                {selectedProject ? (
                  <IoMdArrowDropup className="text-[#808080] text-md"  onClick={() => toggleDetails(index)} />
                ) : (
                  <IoMdArrowDropdown className="text-[#808080] text-md"  onClick={() => toggleDetails(index)} />
                )}
                  </div>
            </div>

            {selectedProject === index && (
              <div className="flex flex-col items-start justify-center w-full space-y-4 text-white px-4 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p>Deadline:</p>
                  <p>{item.deadline}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p>Team Lead:</p>
                  <p>{item.teamLead}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p>Status:</p>
                  <p>{item.status}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileView;
