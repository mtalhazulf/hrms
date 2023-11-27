import React, { useState } from "react";
import Sidebar from "../Components/Shared/Sidebar";
import Progress from "./Progress";
import NewProgress from "./NewProgress";
import List from "./List";
import Heading from "../Components/Shared/Heading";
import MobileView from "./MobileView";

const Overview = () => {

  const [number, setNumber] = useState(3)
  const [completionPercentage, setCompletionPercentage] = useState(50);
  const [completedProjects, setCompletedProjects] = useState(100);


  return (
    <>

      <div className="flex flex-col lg:w-[86%] w-full min-h-screen items-center justify-center space-y-8 bg-[#13111A] relative overflow-y-auto">

        <Heading />
        <div className="flex lg:flex-row flex-col items-center justify-center gap-8 relative">
          <NewProgress emoji="🏆" name="Current Projects:" amount="3" percentage={completionPercentage} />
          <Progress emoji="📊" name="Projects Completed" amount="3" percentage={completedProjects} />

        </div>
        <List />

        <div className="pb-5 flex items-center justify-center w-full">
          <MobileView />
        </div>
      </div>
    </>
  );
};

export default Overview;

