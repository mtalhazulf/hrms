import React, { useEffect } from "react";
import { getMembers } from '../Integeration/Members'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading from "../Components/Shared/Loading";
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const heading = ["Name", "Email", "Projects Assigned", "Details"];
  const navigate = useNavigate();

  //const members = useSelector((state) => state.member?.ListOfMembers);
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMembersfromSupabase() {
      setLoading(true);
      setMembers(await getMembers(dispatch));
      setLoading(false);
      console.log(members);
    }

    getMembersfromSupabase();
  }, []);

  return (
    <>
      {
        loading ? <Loading /> :
          <div className="w-full p-4 md:p-20">
            <div className="flex justify-end ">
              <button
                className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm m-4"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/add_member');
                }}
              >
                Add Member
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#323A4494] text-white rounded-xl text-center">
                <thead>
                  <tr>
                    {heading.map((item, index) => (
                      <th key={index} className="px-4 py-2 text-md font-bold">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {members?.map((item, index) => (
                    <tr key={index} className="border-b border-white border-opacity-10">
                      <td className="px-4 py-2 font-bold">{item.name}</td>
                      <td className="px-4 py-2 font-semibold">{item.email}</td>
                      <td className="px-4 py-2 font-bold">{item.assigned_projects.length}</td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm"
                          onClick={() => {
                            console.log("Navigating to ", item.id);
                            navigate(`/view_member/${item.id}`);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      }
    </>

  );
};

export default Table;
