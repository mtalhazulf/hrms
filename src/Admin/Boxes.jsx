import React from "react";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";


const Boxes = () => {
    const [valuesFromBackend, setValuesFromBackend] = React.useState([]);


/*
  useEffect(() => {

    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((dataFromBackend) => {
        setValuesFromBackend(dataFromBackend);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const data = [
    { title: 'Orders', icon: <HiOutlineCircleStack className='text-white' />, value: valuesFromBackend[0] },
    { title: 'Orders Delivered', icon: <TiTick className='text-white' />, value: valuesFromBackend[1] },
    { title: 'Orders in Progress', icon: <FaArrowTrendUp className='text-white' />, value: valuesFromBackend[2] },
    { title: 'Orders Delayed', icon: <FaArrowTrendDown className='text-white' />, value: valuesFromBackend[3] },
  ];

 */


  const data = [
    {
      title: "Orders",
      icon: <HiOutlineCircleStack />,
      value: "60",
    },
    { title: "Orders Delivered",
     icon: <TiTick  />,
     value: "60", },
    {
      title: "Orders in Progress",
      icon: <FaArrowTrendUp />,
      value: "60",
    },
    {
      title: "Orders Delayed",
      icon: <FaArrowTrendDown />,
      value: "60",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap w-full items-center justify-center px-10 md:gap-16 gap-4 mt-14">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start  bg-gradient-to-r from-[#7BC5EE] to-[#928DF4] rounded-[29px] gap-6 py-2 px-4 w-56 h-40"
          >
            <div className="flex gap-2 items-center justify-center text-md pt-3 text-white">
              <p >{item.title}</p>
              {item.icon}
            </div>
            {item.value && <p className="text-white text-4xl font-bold">{item.value}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Boxes;

  