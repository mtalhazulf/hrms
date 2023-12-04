import Heading from "../Components/Shared/Heading";
import Table from "./Table";
const Member = () => {
  return (
    <div className="flex flex-col lg:w-[88%] w-full min-h-screen items-center justify-center space-y-8 bg-[#181D23] relative overflow-y-auto">
      <Heading />
      <Table />
    </div>
  );
};

export default Member;
