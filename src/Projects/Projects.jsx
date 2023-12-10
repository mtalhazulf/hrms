import React from "react";
import Heading from "../Components/Shared/Heading";
import Sidebar from "../Components/Shared/Sidebar";
import Table from "./Table";

const Projects = () => {


  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
      <Heading />
      <Table />
    </div>
  );
};

export default Projects;
