import React from "react";
import Heading from "../Components/Shared/Heading";
import Template from "./Template";

const Teams = () => {
  return (
    <div className="flex flex-col lg:w-[88%] w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
      <Heading />
      <Template />
    </div>
  );
};

export default Teams;
