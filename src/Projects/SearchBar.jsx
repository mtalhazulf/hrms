import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-row items-center mt-4 bg-gray-50 border border-gray-300 w-[50%] rounded-lg ml-2">
        <HiMiniMagnifyingGlass className="w-5 h-5 text-gray-400 ml-2" />

        <input
          type="search"
          id="default-search"
          className="  p-4 text-sm text-gray-900  bg-transparent focus:outline-none"
          placeholder="Search Projects"
          required
        />
      </div>
    </>
  );
};

export default SearchBar;
