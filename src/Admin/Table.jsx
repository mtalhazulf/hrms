import React from 'react'
import ProgressBar from './ProgressB'
const Table = () => {
  return (
    <div className='bg-[#2D353F] flex flex-col items-start justify-start p-4 w-[50%] rounded-md'>
        <p className='text-white text-md font-semibold'>Project Statistics</p>

        <div className='flex flex-row items-center justify-center gap-2 px-4 border-white mt-2'>
            <ProgressBar percentage={60} />

        </div>
      
    </div>
  )
}

export default Table
