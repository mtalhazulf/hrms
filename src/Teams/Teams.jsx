import React from "react";
import Sidebar from "../Components/Shared/Sidebar";
import Template from "./Template";

const Teams = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between w-full">
      <Sidebar />

      <div className="flex flex-col lg:w-[86%] w-full min-h-screen items-center justify-center space-y-8 bg-[#13111A] relative overflow-y-auto">
        <h1 className="text-white text-3xl">Teams</h1>
       <Template />
      </div>
    </div>
  );
};

export default Teams;
