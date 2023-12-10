import React from "react";
import Siderbar from "../Components/Shared/Sidebar";
import Interface from "./Interface";
import { useState } from "react";

const Messages = () => {

  const [data, setData] = useState([
    {
      imgSrc: "hasan.jpg",
      name: "Hasan",
      msg: "Hello, World!",
    },
    {
      imgSrc: "hasan.jpg",
      name: "Talha",
      msg: "Hello, Kings how are you!",
    },


  ]);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
      <h1 className="text-white text-3xl">Messages</h1>
      <Interface data={data} />
    </div>
  );
};

export default Messages;
