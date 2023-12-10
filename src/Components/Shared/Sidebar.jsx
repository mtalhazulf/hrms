import { AiOutlineAppstore } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import logo from "../../assets/logo.png";

const Sidebar = ({isSidebarOpen,setSidebarOpen}) => {

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  //Icon Size
  const icon_size = 25;

  const buttons = [
    { name: "Dashboard", icon: <AiOutlineAppstore size={icon_size} />, href: "/admin" },
    { name: "Members", icon: <GoPerson size={icon_size} />, href: "/member" },
    { name: "Events", icon: <BsFillCalendarDateFill size={icon_size} />, href: "/events" },
    { name: "Messages", icon: <AiOutlineMessage size={icon_size} />, href: "/msg" },
    { name: "Team", icon: <AiOutlineTeam size={icon_size} />, href: "/teams" },
    { name: "Projects", icon: <AiFillPieChart size={icon_size} />, href: "/proj" },
  ];

  return (<>
    {!isSidebarOpen && (
      <>
        <div className="h-16 p-2 bg-[#0D0D0F] lg:hidden block sticky">
          <button
            type="button"
            className=" z-10 top-0  left-0 items-center p-2 ml-3 py-4 text-sm text-white rounded-lg lg:hidden block"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu size={30} />
          </button>
        </div>
      </>
    )}

    <nav className={`bg-[#434F5F] text-white transition-all duration-300 ease-in-out  h-full ${isSidebarOpen ? "translate-x-0 py-6 " : " py-8 hidden lg:block  "
      }  `}>
      {isSidebarOpen && (
        <center ><button
          type="button"
          className=" lg:hidden block mt-3 mb-6 rounded-full bg-neutral-300 text-black focus:outline-none "
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={30} />
        </button>
        </center>
      )}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-16 h-full m-auto" loading="lazy" />
      </div>
      <div role="navigation h-full ">
        {buttons.map((item, i) => (
          <div
            key={i}
            className={`flex p-4 flex-col items-center mb-4 cursor-pointer ${window.location.pathname === item.href ? "bg-[#394653] shadow-inner" : ""
              }`}
            onClick={() => window.location.href = item.href}
            role="link"
            tabIndex={0}
          >{item.icon}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </nav>
    </>
  );
};

export default Sidebar;