import React from "react";

const Interface = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 lg:w-[950px] md:w-[700px] w-[400px] h-[600px] bg-[#282346] rounded-xl overflow-y-auto relative">
      {data.map((item, index) => (
        <div className="bg-[#393857] flex flex-col items-start p-2 w-[90%] rounded-lg">
          <div key={index} className="flex items-center space-x-2">
            <img
              src={item.imgSrc}
              alt={item.name}
              className="rounded-full h-10 w-10"
            />

            <div className="flex flex-col items-start space-y-2">
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-white text-sm text-ellipsis overflow-hidden ">
                {item.msg}
              </p>
            </div>
          </div>
        </div>
      ))}
          <button className=' mt-2 outline-dashed rounded-2xl border-none border-indigo-400 w-[90%] text-indigo-400 font-semibold p-2 absolute bottom-5'>➕ Send Message</button>
  
    </div>
  );
};

export default Interface;

/*  */
