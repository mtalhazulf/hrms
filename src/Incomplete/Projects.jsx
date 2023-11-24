import React from "react";
import Heading from "../Components/Shared/Heading";
import Siderbar from "../Components/Shared/Sidebar";
import Table from "./Table";


const Project = () => {

  
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between w-full">
    <Siderbar />

      <div className="flex flex-col lg:w-[86%] w-full min-h-screen items-center justify-center space-y-8 bg-[#13111A] relative overflow-y-auto">
        <Heading />
        <h1 className="text-white text-3xl">Projects - Ongoing</h1>
        <Table />
      </div>
    </div>
  );
};

export default Project;


