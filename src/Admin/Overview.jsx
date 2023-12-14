import React, { useState } from "react";
import Heading from "../Components/Shared/Heading";
import Boxes from "./Boxes";
import Stats from "./Stats";

const Overview = () => {

  

  return (
    <>
      <div className="flex flex-col w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
        <Heading />
        <Boxes  />
        <Stats />

      </div>
    </>
  );
};

export default Overview;

