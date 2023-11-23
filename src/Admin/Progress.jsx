import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const Progress = ({ emoji, name, amount,percentage }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 lg:w-[300px] md:w-[300px] w-[250px] h-[250px] bg-indigo-950 rounded-xl shadow relative">
        <div className="flex w-[70%] justify-between items-center absolute top-4">
          <p className="font-bold text-lg">{emoji}</p>
          <p className="text-white text-md">{name}</p>
          <p className="text-[#72E6F2] text-lg font-bold">{amount}</p>
        </div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={10}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#75E6F2", // Change the path color as needed
            trailColor: "#67748399",
          })}
          className="h-32 w-32 rounded-full mt-6 pt-4 flex flex-col items-center justify-center "
        />
        <p className="text-white text-lg ">Completion Rate</p>
      </div>
    </>
  );
};

export default Progress;
