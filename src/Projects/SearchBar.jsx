import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center mt-4">
      <div className="flex flex-row items-center mt-4 bg-gray-500 border border-gray-700 w-[50%] rounded-lg ml-2">
        <HiMiniMagnifyingGlass className="w-5 h-5 text-gray-400 ml-2" />

        <input
          type="search"
          id="default-search"
          className="  p-4 text-sm text-gray-900  bg-transparent focus:outline-none"
          placeholder="Search Projects"
          required
        />
      </div>
      <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg ml-2 px-4 py-2 text-md " >
            Search
          </button>
        </div>
    </>
  );
};

export default SearchBar;
