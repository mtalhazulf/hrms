import { AiOutlineAppstore } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const buttons = [
    { name: "Dashboard", icon: <AiOutlineAppstore />, href: "/admin" },
    { name: "Members", icon: <GoPerson />, href: "/member" },
    { name: "Events", icon: <BsFillCalendarDateFill />, href: "/incomplete" },
    { name: "Messages", icon: <AiOutlineMessage />, href: "/msg" },
    { name: "Team", icon: <AiOutlineTeam />, href: "/teams" },
    { name: "Projects", icon: <AiFillPieChart />, href: "/incomplete" },
  ];

  return (
    <div>
      {!isSidebarOpen && (
        <>
          <div className=" h-full p-2 bg-[#0D0D0F] lg:hidden block">
            <button
              type="button"
              className=" z-10 top-0  w-[25%] h-[5%] left-0 items-center p-2 ml-3 py-4 text-sm text-white rounded-lg lg:hidden block"
              onClick={toggleSidebar}
            >
              <AiOutlineMenu size={30} />
            </button>
          </div>
        </>
      )}

      <div className="lg:w-[18%] md:block w-0">
        <aside
          id="default-sidebar"
          className={`absolute left-0 z-10 lg:w-52 w-75 h-[100vh] transition-transform ' ${
            isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
          } lg:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full flex flex-col items-center bg-gradient-to-r from-[#445A6B] to-[#414662]">
            {isSidebarOpen && (
              <button
                type="button"
                className=" lg:hidden block mt-3 p-2 rounded-full bg-neutral-300 text-black focus:outline-none "
                onClick={toggleSidebar}
              >
                <AiOutlineClose size={30} />
              </button>
            )}
            <div className="flex flex-col items-start justify-center mt-10 px-4 space-y-5">
              {buttons.map((button, index) => (
                <div key={index}>
                  <button
                    onClick={() => (window.location.href = button.href)}
                    className="transparent-button text-zinc-800 text-md  py-4 w-44 rounded-xl font-semibold hover:bg-[#2E2D42] hover:px-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center w-full text-white">
                      <p className=" text-2xl"> {button.icon} </p>
                      <p>{button.name}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
