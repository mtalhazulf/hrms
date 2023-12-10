import React from 'react'
import Heading from '../Components/Shared/Heading'
import Details from './Details'

const Events = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
    <Heading />

    <Details />
    <button
        className=" mt-4 outline-dashed rounded-2xl border-none border-[#3E4651] italic w-[77%] text-[#3E4651] font-semibold p-2 "
      >
        ➕ Add new Meeting
      </button>

  </div>
  )
}

export default Events
