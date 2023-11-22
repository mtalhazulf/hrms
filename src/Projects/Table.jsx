import React from 'react'

const Table = () => {

    const heading = [
        "Project Name",
        "Deadline",
        "Team Lead",
        "Status",
    ];
    
    const data = [
    
        {
            name: "Asim",
            deadline: "12/12/2023",
            teamLead: "Saleemi",
            status:"Completed"
    
        },
        {
            name: "Maxime",
            deadline: "12/1/2023",
            teamLead: "Talha",
            status:"Completed"
    
    
        },
        {
    
            name: "Mohit",
            deadline: "12/12/2023",
            teamLead: "Ahmed",
            status:"Completed"
    
        },
        {
            name: "Mike",
            deadline: "12/1/2023",
            teamLead: "Talha",
            status:"Completed"
    
    
        },
        {
            name: "Drake",
            deadline: "12/1/2023",
            teamLead: "Raza",
            status:"Completed"
    
    
        },
        {
            name: "Suhana",
            deadline: "12/1/2023",
            teamLead: "Talha",
            status:"Completed"
    
    
        },
        {
            name: "Carlos",
            deadline: "12/1/2023",
            teamLead: "Raza",
            status:"Completed"
    
    
        },
       
      
    ]
  return (
    
    <div className="flex flex-col items-center justify-center space-y-4 lg:w-[950px] md:w-[700px] w-[500px] h-[600px] bg-indigo-950 rounded-xl overflow-y-auto" >
    <div className='flex flex-row items-center justify-between w-[95%] rounded bg-[#56429C] h-10 px-2 py-4'>
        {heading.map ((item,index)=>(
            <p key={index} className='text-white text-md font-bold'>{item}</p>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center w-[95%] space-y-4 '>
        {data.map ((item,index)=>(
            <>
            <div key={index} className='flex flex-row justify-between  items-center w-full'>
            <p className='text-white text-md font-bold'>{item.name}</p>
            <p className='text-cyan-300 text-md font-semibold'>{item.deadline}</p>
            <p className='text-white text-md font-bold'>{item.teamLead}</p>
            <button  className='bg-emerald-300 rounded p-2 text-indigo-800 text-md font-bold'>{item.status}</button>
            </div>
            <div className="w-full h-[0px] border border-white border-opacity-10"></div>
         
            </>
        ))}
      </div>
   </div>

  )
}

export default Table
