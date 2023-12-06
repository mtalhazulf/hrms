import React from "react";

const Landing = () => {
  return (
    <div className="bg-[#181D23] flex flex-col items-center justify-center min-h-screen w-full gap-8 relative">

      <img src="des.png" alt="logo" className="w-[38%] h-auto absolute top-0 right-0"/>

      <div className="pl-10 ml-10 flex flex-col items-start justify-start mt-10 gap-8">
      <h1 className="text-4xl text-white font-bold">Welcome to HR Management System</h1>
      <p className=" text-white lg:w-[50%] w-[90%] ">
        Welcome to Ops Tracking, your comprehensive Human Resource Management
        System designed to streamline and elevate your organizational
        operations. At Ops Tracking, we understand that the key to success lies
        in the efficient management of your most valuable asset – your
        workforce. Our platform offers a seamless and intuitive solution to
        empower your HR team, enabling them to effortlessly handle tasks ranging
        from employee onboarding and performance tracking to leave management
        and beyond. With Ops Tracking, embrace a new era of HR efficiency, where
        data-driven insights meet user-friendly interfaces. Experience the
        transformation as Ops Tracking becomes the heartbeat of your
        organization, driving productivity, fostering collaboration, and
        ensuring a harmonious workplace environment. Join us on this journey to
        revolutionize HR management and unlock the full potential of your team.
      </p>
      <button  onClick={() => (window.location.href = '/login')} className="bg-gradient-to-r from-[#334454] to-[#363C56] w-[379px] h-[51px] text-white font-semibold rounded-[4px]">Prceed to Login ↪ </button>
           </div>
      
     </div>
  );
};

export default Landing;

