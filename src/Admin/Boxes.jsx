import React from 'react'
import { HiOutlineCircleStack } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";


const Boxes = () => {
  return (
    <>
    <div className='flex flex-wrap w-full items-center justify-center px-6 gap-8'>

        <div className='flex flex-col items-start justify-start px-2 bg-gradient-to-r from-[#7BC5EE] to-[#928DF4] rounded-[29px]'>
          <div className='flex gap-2 items-center justify-center text-md'>
            <p className='text-white '>Orders</p>
            <HiOutlineCircleStack className='text-white ' />
            </div>

        </div>
        <div className='flex flex-col items-start justify-start px-2 bg-gradient-to-r from-[#7BC5EE] to-[#928DF4] rounded-[29px]'>
           <div className='flex gap-2 items-center justify-center text-md'>
            <p className='text-white'>Orders Delivered</p>
            <TiTick className='text-white ' />
            </div>

        </div>
        <div className='flex flex-col items-start justify-start px-2 bg-gradient-to-r from-[#7BC5EE] to-[#928DF4] rounded-[29px]'>
            <div className='flex gap-2 items-center justify-center text-md'>
            <p className='text-white'>Orders in Progress</p>
            <FaArrowTrendUp className='text-white' />
            </div>

        </div>
        <div className='flex flex-col items-start justify-start px-2 bg-gradient-to-r from-[#7BC5EE] to-[#928DF4] rounded-[29px]'>
           <div className='flex gap-2 items-center justify-center text-md'>
            <p className='text-white'>Orders Delayed</p>
            <FaArrowTrendDown className='text-white' />
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Boxes
