import React from "react";
import { ImCross } from "react-icons/im";

const Modal = () => {
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
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                  </h3>
                  <ImCross onClick={toggling} />
                </div>

                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <p className=" mb-2 text-sm font-medium text-gray-900 ">
                        Name
                      </p>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required=""
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
