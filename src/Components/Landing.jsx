import React from "react";

const Landing = () => {
  return (
    <div className="bg-[#13111A] flex flex-col items-center justify-center min-h-screen w-full gap-8">
      <h1 className="text-4xl text-white font-bold">Op's Tracking</h1>
      <p className="text-center text-white lg:w-[50%] w-[90%] ">
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
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:w-[20%] w-full mt-4 md:space-y-0 space-y-6">
        <button  onClick={() => (window.location.href = '/login')} className="bg-[#FF7B60] hover:bg-orange-600 md:px-6 px-8 py-2 text-white font-semibold rounded-lg">Sign in</button>
        <button  onClick={() => (window.location.href = '/signup')} className="bg-[#FF7B60] hover:bg-orange-600 md:px-6 px-8 py-2 text-white font-semibold rounded-lg">Sign up</button>

      </div>
    </div>
  );
};

export default Landing;

