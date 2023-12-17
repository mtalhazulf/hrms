import React from "react";
import Heading from "../Components/Shared/Heading";
import Sidebar from "../Components/Shared/Sidebar";
import Table from "./Table";

const Projects = () => {

  return (
    <div className="flex flex-col w-full h-full lg:min-h-screen space-y-8 bg-[#181D23] relative">
      <Table />
    </div>
  );
};

export default Projects;
