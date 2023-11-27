import React from "react";
import Sidebar from "../Components/Shared/Sidebar";

const About = () => {
  const dataArray = [
    {
      id: 1,
      imageUrl: "saleemi.png",
      description: " AbdulRehman Saleemi | CEO"
       
    },
    {
      id: 2,
      imageUrl: "talha.png",
      description: "Talha Zulfiqar | Director Technology",
    },
    {
      id: 3,
      imageUrl: "ahmed.png",
      description: "Muhammad Ahmed | Director HR and Finance",
    },
    {
      id: 4,
      imageUrl: "ar.png",
      description: "AbdulRahman Nadeem | Director Operations",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col lg:justify-between w-full">
      <Sidebar />

      <div className="bg-[#13111A] flex flex-col items-center justify-center min-h-screen lg:w-[86%] w-full gap-8 overflow-y-auto">
        <h1 className="text-4xl text-white font-bold pt-4">About Us</h1>
        <p className="text-center text-white text-md lg:w-[50%] w-[90%]">
          Texagon is not just a development company; we are architects of
          transformation. With a rich history of serving clients worldwide, we
          have earned our reputation as a leading provider of web, mobile, and
          desktop solutions. Our journey is fueled by a passion for technology
          and a belief in the transformative power of ideas. Founded on the
          principles of innovation and excellence, Texagon is your trusted
          partner on the path to digital success. We have assembled a team of
          top-tier professionals who are not only experts in their respective
          fields but also passionate problem solvers and creators. Together, we
          form a collective force dedicated to turning your ideas into reality.
          Our commitment to you is simple yet profound: we understand your
          vision, we embrace your goals, and we work tirelessly to bring them to
          life. Texagon is more than a development company; we are your
          co-pilots on a journey of innovation, growth, and success. Experience
          the pinnacle of development services with Texagon, where your ideas
          are transformed into reality.
        </p>

        <div className="flex  flex-col lg:items-start justify-center space-y-10 px-4 lg:w-[30%] w-full">
          {dataArray.map((item) => (
            <div
              key={item.id}
              className="flex lg:flex-row flex-col lg:items-start items-center justify-center lg:space-x-4"
            >
              <img
                src={item.imageUrl}
                alt={`Image ${item.id}`}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
              <p className="text-lg text-white font-semibold mt-4">
                  {item.description}
                </p>
    
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
