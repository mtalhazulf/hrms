import React from "react";
import ProgressBar from "./ProgressB";

const Table = () => {


    /*

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((dataFromBackend) => {
        setData(dataFromBackend);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
     */


  const data = [
    {
      name: "Dan",
      task: "Design all the screen",
      progress: 60,
      daysLeft: "2 days left",
    },
    {
      name: "Asim",
      task: "Design the landing page",
      progress: 75,
      daysLeft: "5 days left",
    },
    {
      name: "Juan",
      task: "Complete the UPI payment",
      progress: 90,
      daysLeft: "8 days left",
    },
  ];

  return (
    <div className="bg-[#2D353F] flex flex-col items-start justify-start p-4 md:w-[60%] w-full rounded-md">
      <p className="text-white text-md font-semibold">Project Statistics</p>

      {data.map((entry, index) => (
        <div key={index} className='flex flex-row justify-between items-center w-full gap-2 px-4 border border-white rounded-md mt-2'>
          <div className='flex py-3'>
            <ProgressBar percentage={entry.progress} />
            <div className='flex flex-col items-start justify-start text-white text-xs p-2'>
              <p>{entry.name}</p>
              <p>{entry.task}</p>
            </div>
          </div>

          <button className='border border-[#928EF4] bg-transparent text-xs text-white p-1 rounded-md hover:bg-purple-700 hover:font-bold'>
            {entry.daysLeft}
          </button>
        </div>
      ))}
  
    </div>
  );
};

export default Table;
