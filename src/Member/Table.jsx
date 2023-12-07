import React from "react";
const Table = () => {
  const heading = ["Name", "Email", "Projects Assigned", "Details"];

  const data = [
    {
      name: "Asim",
      email: "asim@example.com",
      projectsAssigned: 3,
    },
    {
      name: "Maxime",
      email: "maxime@example.com",
      projectsAssigned: 3,
    },
    {
      name: "Mohit",
      email: "mohit@example.com",
      projectsAssigned: 3,
    },
    {
      name: "Mike",
      email: "mike@example.com",
      projectsAssigned: 3,
    },
    {
      name: "Drake",
      email: "drake@example.com",
      projectsAssigned: 3,
    },
    {
      name: "Suhana",
      email: "suhana@example.com",
      projectsAssigned: 3,
    },
   
  ];

  return (
    <>
      <div className="md:flex hidden flex-row items-center justify-between lg:w-[902px] md:w-[700px] w-[400px] h-10 pt-14 ">
        {heading.map((item, index) => (
          <p key={index} className="text-white text-md font-bold">
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center lg:w-[950px] md:w-[700px] w-[400px] md:h-[600px] h-[90%] bg-[#323A4494] rounded-xl overflow-y-auto ">
        <div className="flex md:flex-col flex-wrap items-start justify-start md:w-[95%] w-full gap-4">
          {data.map((item, index) => (
            <>
              <div
                key={index}
                className="flex md:flex-row flex-col justify-between items-center w-full"
              >
                <p className="text-white text-md font-bold md:w-16 md:ml-2 ">
                  {item.name}
                </p>
                <p className="text-white text-md font-semibold w-20 md:block hidden ">
                  {item.email}
                </p>
                <p className="text-white text-md font-bold md:ml-10 w-16 md:block hidden">
                  {item.projectsAssigned}
                </p>
                <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-white text-sm ">
                  View Details
                </button>
              </div>
              <div className="w-full h-[0px] border border-white border-opacity-10"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
