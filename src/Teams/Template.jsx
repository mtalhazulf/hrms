import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Template = () => {
  const data = [
    {
      name: "Asim",
      date: "Sunday - 2:30 PM",
      teamlead: "Talha",
      frontend: ["Hassan Ali", "John Doe"],
      backend: ["Piri Abadulrehman", "Jane Smith"],
    },
    {
      name: "Asim",
      date: "Sunday - 2:30 PM",
      teamlead: "Talha",
      frontend: ["Hassan Ali", "John Doe"],
      backend: ["Piri Abadulrehman", "Jane Smith"],
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center md:w-[90%] w-full relative">
        <div className="md:flex hidden flex-row items-center justify-between md:w-[900px] text-lg font-bold text-white px-6 mr-20">
          <p>Project Name</p>
          <p>Team Lead</p>
          <p>Deadline</p>
          <p>Frontend Team</p>
          <p>Backend Team</p>
       
          </div>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4">
              <div className="bg-[#3E4651] flex flex-row items-center justify-between gap-2 text-white text-xl rounded-xl px-6 py-2 md:w-[911px] h-[120px]">
                <p>{item.name}</p>
                <div className="w-0 h-[50px] border border-white border-opacity-10 "></div>
                <p >{item.teamlead}</p>
                <div className="w-0 h-[50px] border border-white border-opacity-10 md:block hidden"></div>
                <p className="md:block hidden">{item.date}</p>
                <div className="w-0 h-[50px] border border-white border-opacity-10 md:block hidden"></div>

                <div className="md:flex flex-col gap-2  hidden">
                  {item.frontend.map((member, index) => (
                    <div key={index} className="flex flex-col gap-2 w-full">
                      <p className="text-white text-lg">{member}</p>
                    </div>
                  ))}
                </div>
                <div className="w-0 h-[50px] border border-white border-opacity-10 md:block hidden"></div>

                <div className="md:flex flex-col gap-2  hidden">
                  {item.backend.map((member, index) => (
                    <div key={index} className="flex flex-col gap-2 w-full">
                      <p className="text-white text-lg">{member}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
               
              <button className="inline-flex items-center justify-center rounded-[15.27px] bg-[#3E4651]  font-bold text-2xl text-white w-[50px] h-[50px]">
                <CiEdit />
              </button>
              <button className=" inline-flex items-center justify-center rounded-[15.27px] bg-[#3E4651] font-bold text-2xl text-white w-[50px] h-[50px]">
                <AiOutlineDelete />
              </button>

              </div>
            </div>
          </div>
        ))}
    
      </div>
    </>
  );
};

export default Template;
