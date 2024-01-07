import React from "react";
import Heading from "../Components/Shared/Heading";
import Template from "./Template";

// A page for Teams with Heading and templates.
const Teams = () => {
  return (
    <div className="flex flex-col w-full h-[90%] md:min-h-screen  space-y-8 bg-[#181D23] relative overflow-y-auto ">
      <Heading />
      <Template />
    </div>
  );
};

export default Teams;
