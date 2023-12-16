import React from 'react'
import { ImSad } from "react-icons/im";


const ErrorPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center gap-6 bg-[#181D23]  py-4">
    
    <p className='text-6xl text-white font-bold'>404</p>
    <p className='text-2xl text-white font-semibold italic'>Page not found</p>
    <p className='text-center text-gray-300'>The page you are looking for does not exist</p>
    <ImSad className="text-9xl text-[#FF0000]"/>
    </div>
  )
}

export default ErrorPage
