import React from "react";

const Template = () => {

    const data = [
    
        {
            name: "Asim",
            teamLead: "Saleemi",
            members1: "Hassan",
            members2: "Piri",
            members3: "Raza",

        },
        {
            name: "Maxime",
            teamLead: "Talha",
            members1: "Hassan",
            members2: "Talha",
            members3: "Ahmed",
           
    
        },
       
      
    ]

  return (
    <div className="flex flex-col items-center justify-center space-y-4 lg:w-[950px] md:w-[750px] w-[400px] h-[600px] bg-[#282346] rounded-xl overflow-y-auto relative">

   {data.map ((data,index)=>(
      <div key={index} className=" flex flex-col items-center justify-center lg:w-[810px] md:w-[650px] w-[350px] h-[163px] bg-[#56429C] rounded-[15px] ">
        <div className="flex md:flex-row flex-col md:justify-between  items-center px-2 w-full">
          <h1 className="text-white pl-6">{data.name}</h1>
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="flex w-full justify-between">
                <div className="flex md:space-x-4">
              <h1 className="text-lg text-cyan-300 mr-9">Team Lead:</h1>
              <div className=" flex items-center justify-center w-[82px] h-10 bg-slate-800 bg-opacity-30 rounded-lg text-white ">
                {data.teamLead}
              </div>
              </div>
              <button className="rounded-xl bg-red-400 text-white p-2"> Add / Remove</button>
            
            </div>
            <div className="w-[519px] h-[0px] border border-white border-opacity-10"></div>

            <div className="flex w-full justify-between">
           
            <div className="flex md:space-x-4">
              <h1 className="text-lg text-cyan-300">Team Members:</h1>
              <div className="flex flex-row justify-between items-center px-4 w-[187px] h-10 bg-slate-800 bg-opacity-30 rounded-lg text-white">
              <p>{data.members1}</p>
              <p>{data.members2}</p>
              <p>{data.members3}</p>
        
              </div>
            </div>
            <button className="rounded-xl bg-red-400 text-white p-2"> Add / Remove</button>
            </div>
            
          </div>
        </div>
      </div>
        ))}
            <button className=' mt-2 outline-dashed rounded-2xl border-none border-indigo-400 w-[85%] text-indigo-400 font-semibold p-2 absolute bottom-5'>➕ Add a Team</button>
  
    
    </div>
  );
};

export default Template;
