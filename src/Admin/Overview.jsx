import React, { useState } from "react";
//import Heading from "../Components/Shared/Heading";
import Boxes from "./Boxes";
import Stats from "./Stats";
import Delivery from "./Delivery";

const Overview = () => {

  

  return (
    <>
      <div className="flex flex-col w-full min-h-screen items-center gap-6 bg-[#181D23] overflow-y-scroll py-4 relative">
        
        <Boxes/>
        <Stats />
        <Delivery />
        

      </div>
    </>
  );
};

export default Overview;

