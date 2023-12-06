import React from "react";
import { CiEdit } from "react-icons/ci";

const Table = () => {
  const data = [
    {
      serialnumber: 1,
      milestone: "Milestone A",
      deadline: "12/12/2023",
    },
    {
      serialnumber: 2,
      milestone: "Milestone B",
      deadline: "12/1/2023",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-[95%] space-y-4">
      {data.map((item, index) => (
        <div key={index} className="md:w-[911px] bg-[#3E4651] rounded-xl overflow-hidden">
          <div className="flex flex-row items-center justify-between gap-2 text-white text-xl px-6 py-2 w-full">
            <p>{item.serialnumber}</p>
            <p>{item.milestone}</p>
            <p className="md:block hidden">{item.deadline}</p>
            <button className="inline-flex items-center justify-center rounded-[15.27px] bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] font-bold text-lg text-white w-[174px] h-[36px]">
              Mark as done
            </button>
          </div>
          <div className="w-full h-[1px] bg-white opacity-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Table;
