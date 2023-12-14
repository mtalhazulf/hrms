import React,{useState,useEffect} from "react";
import { CiClock2 } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import moment from 'moment';
import { IoPersonOutline } from "react-icons/io5";



const Event = () => {
    const [specifiedTime, setSpecifiedTime] = useState(moment('2023-01-01T12:30:00'));
    useEffect(() => {
        const intervalId = setInterval(() => {
          setSpecifiedTime(moment('2023-01-01T12:30:00'));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    

  return (
    <div className="bg-[#2D353F] flex flex-col items-start justify-center p-4 rounded-md text-sm text-white w-52 h-56">
      <div className="flex flex-row gap-4 items-center justify-between">
        <div className="flex flex-col gap-2 ">

            <p>Events</p>
            <div className="flex flex-col items-center justify-center bg-[#3F4754] rounded-md p-2 w-24 ">
                <p className="text-lg font-bold">Meeting</p>
                <p>Alex</p>

                <div className="flex flex-row gap-2 items-center justify-center py-2">

                <CiClock2 className="font-bold text-md"/>
                {specifiedTime.format('HH:mm:ss')}
                </div>
                <IoPersonOutline className="font-bold text-xl"/>

            </div>

        </div>
        <div className="flex flex-col gap-2">
            <p>View All</p>
            <div className="flex flex-col items-center justify-center bg-transparent rounded-md p-2 border border-dashed border-white h-28">
              
               <GoPlus className="font-bold text-md"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Event;


