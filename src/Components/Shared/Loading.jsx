import { FaSpinner } from "react-icons/fa";
import react from "react";

const Loading = () => {
    return <>
        <div className="flex justify-center items-center h-full w-full bg-[#181D23]">
            <FaSpinner className="text-white animate-spin flex items-center justify-center  " size={50}/>
        </div>

    </>
}

export default Loading;