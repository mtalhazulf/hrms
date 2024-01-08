import React, { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Template = () => {

  const navigate = useNavigate();
  const heading = ["Team Name", "Members"];

  const [Team, setTeam] = React.useState([{
    "TeamName": "King Team",
    "Members": "5"
  }]);
  // const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function getProjectsfromSupabase() {
      setLoading(true);

      setProject(await getProjects());

      setLoading(false);
      console.log(members);
    }

    getProjectsfromSupabase();
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full p-20">
        <div className="flex w-full justify-end ">
          <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm m-4" onClick={(e) => {
            e.preventDefault();
            navigate('/add_member');
          }}>
            Add Team
          </button>
        </div>
        <table className="min-w-full w-full bg-[#323A4494] text-white rounded-xl text-center">
          <thead className="w-full ">
            <tr>
              {heading.map((item, index) => (
                  <th key={index} className="px-4 py-2 text-md font-bold">
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {Team?.map((item, index) => (
                <tr key={index} className="border-b border-white border-opacity-10 w-full">
                  <td className="px-4 py-2 font-bold">{item.TeamName}</td>
                  <td className="px-4 py-2 font-semibold">{item.Members}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Template;
