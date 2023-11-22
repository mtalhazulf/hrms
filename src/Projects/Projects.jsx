import React from "react";
import Heading from "../Components/Heading";
import Siderbar from "../Components/Sidebar";
import Table from "./Table";

const Projects = () => {

  
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between w-full">
      <Siderbar />

      <div className="flex flex-col lg:w-[86%] w-full min-h-screen items-center justify-center space-y-8 bg-[#13111A] relative overflow-y-auto">
        <Heading />
        <h1 className="text-white text-3xl">Projects - Completed</h1>
     <Table/>
      </div>
    </div>
  );
};

export default Projects;
