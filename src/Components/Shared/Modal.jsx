import React from "react";
import { ImCross } from "react-icons/im";

const Modal = ({inputOne,inputTwo,inputThree}) => {
  const [showModal, setShowModal] = React.useState(false);

  const toggling = () => setShowModal(!showModal);

  return (
    <>
      <button
        onClick={toggling}
        className=" mt-4 outline-dashed rounded-2xl border-none border-indigo-400 w-[90%] text-indigo-400 font-semibold p-2 "
      >
        ➕ Add a Project
      </button>

      {showModal ? (
        <>
      
          <div className=" overflow-y-auto flex flex-col justify-center items-center w-full min-h-screen z-20 ">
            <div className="relative p-4 w-[75%] py-4">
              <div className="relative bg-[#56429C] rounded-lg shadow ">
                <div className="flex items-center justify-center p-4 md:p-5 rounded-t relative">
                  <h3 className="text-xl font-semibold text-white text-center ">
                    Team
                  </h3>
                  <ImCross className="text-white font-bold absolute right-4 cursor-pointer" onClick={toggling} />
                </div>

                <form className="flex flex-col items-center justify-center w-full pb-4">
              
                  <div className="flex flex-col items-start justify-start w-[50%] ">
                    
                      <p className=" mb-2 text-lg font-medium text-white ">
                        {inputOne}:
                      </p>
                      <input
                        type="text"
                        className="bg-[#3E326F] text-md text-white rounded-xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        required=""
                      />
                        <p className=" mb-2 text-lg font-medium text-white mt-4 ">
                        {inputTwo}:
                      </p>
                      <input
                        type="text"
                        className="bg-[#3E326F] text-md text-white rounded-xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        required=""
                      />
                      <p className=" mb-2 text-lg font-medium text-white mt-4">
                        {inputThree}:
                      </p>
                      <input
                        type="text"
                        className="bg-[#3E326F] text-md text-white rounded-xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        required=""
                      />
                    
                    </div>
                    <button className="bg-[#FF7B60] text-white py-2 px-2 mt-4 rounded-lg w-24 ">Set</button>
           
                </form>
              </div>
            </div>
          </div>
    
        </>
      ) : null}
    </>
  );
};

export default Modal;
