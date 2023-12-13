import React from "react";
import Heading from "../Components/Shared/Heading";
import Template from "./Template";

const Teams = () => {
  return (
    <div className="flex flex-col w-full min-h-screen  space-y-8 bg-[#181D23] relative overflow-y-auto ">
      <Heading />
      <Template />
    </div>
  );
};

export default Teams;
