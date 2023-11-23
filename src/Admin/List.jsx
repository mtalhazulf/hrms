import React from 'react'

const List = () => {

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

        }


    ]
  return (
    <>
    <div className="lg:flex flex-col items-center justify-center space-y-4 w-[650px] h-[280px] bg-indigo-950 rounded-xl  hidden " >
        <p className='text-white text-xl font-bold '>Priority List</p>
       <div className='flex flex-row items-center justify-between w-[95%] rounded bg-[#56429C] h-10 px-2'>
        {heading.map ((item,index)=>(
            <p key={index} className='text-white text-md font-bold'>{item}</p>
        ))}
      </div>
      <div className='flex flex-col items-start justify-start w-[95%] space-y-4 '>
        {data.map ((item,index)=>(
            <>
            <div key={index} className='flex flex-row justify-between items-start w-full'>
            <p className='text-white text-md font-bold ml-2 w-16'>{item.name}</p>
            <p className='text-white text-md font-bold ml-12 w-20'>{item.deadline}</p>
            <p className='text-white text-md font-bold w-16 ml-8'>{item.teamLead}</p>
            <p  className='text-[#41F1B6] text-md font-bold'>{item.status}</p>
            </div>
            <div className="w-full h-[0px] border border-white border-opacity-10"></div>
         
            </>
        ))}
      </div>



    </div>
    </>
        
  )
}

export default List
