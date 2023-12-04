import React from "react";

const Details = () => {
  const data = [
    {
      name: "Asim",
      date: "Sunday - 2:30 PM",
      details: "Crazy Work To do",
    },
    {
      name: "Asim",
      date: "Sunday - 2:30 PM",
      details: "Crazy Work To do",
    },
    {
      name: "Asim",
      date: "Sunday - 2:30 PM",
      details: "Crazy Work To do",
    },
    ];
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center md:w-[90%] w-full relative">
        {data.map((item, index) => (
          <div key={index} className="bg-[#3E4651] flex flex-row items-center justify-between gap-4 text-white text-xl rounded-xl px-6 py-2 w-[911px] h-[120px]">
            <p>{item.name}</p>
            <div className="w-0 h-[50px] border border-white border-opacity-10"></div>

            <p>{item.date}</p>
            <div className="w-0 h-[50px] border border-white border-opacity-10"></div>

            <p>{item.details}</p>
          </div>
        ))}
        <button className="rounded-[15.27px] bg-[#3E4651] p-2 hover:font-bold text-lg text-white w-[109px] h-[64px] ">
          Edit
        </button>
        <button className="rounded-[15.27px] bg-[#3E4651] p-2 hover:font-bold text-lg text-white  w-[109px] h-[64px] ">
          Delete
        </button>
      </div>
    </>
  );
};

export default Details;
