import React from "react";
const Table = () => {
  const heading = ["Name", "Email", "Projects Assigned", "Details"];

  const data = [
    {
      name: "Asim",
      email: "asim@example.com",
      projectsAssigned: 3,
    },
    // {
    //   name: "Maxime",
    //   email: "maxime@example.com",
    //   projectsAssigned: 3,
    // },
    // {
    //   name: "Mohit",
    //   email: "mohit@example.com",
    //   projectsAssigned: 3,
    // },
    // {
    //   name: "Mike",
    //   email: "mike@example.com",
    //   projectsAssigned: 3,
    // },
    // {
    //   name: "Drake",
    //   email: "drake@example.com",
    //   projectsAssigned: 3,
    // },
    // {
    //   name: "Suhana",
    //   email: "suhana@example.com",
    //   projectsAssigned: 3,
    // },
  ];

  return (
  <>
    <div className="overflow-x-auto w-full p-20">
      <table className="min-w-full w-full bg-[#323A4494] text-white rounded-xl text-center">
        <thead className="w-full ">
          <tr>
            {heading.map((item, index) => (
              <th key={index} className="px-4 py-2 text-md font-bold">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-white border-opacity-10 w-full">
                <td className="px-4 py-2 font-bold">{item.name}</td>
                <td className="px-4 py-2 font-semibold">{item.email}</td>
                <td className="px-4 py-2 font-bold">{item.projectsAssigned}</td>
                <td className="px-4 py-2">
                  <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  </>
  );
};

export default Table;
