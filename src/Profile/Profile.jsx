import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center gap-6 bg-[#181D23] py-4 ">
      
        <table class="w-[50%] text-gray-400 ">
          <thead class="text-lg  bg-gray-700 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Password
              </th>
              <th scope="col" class="px-6 py-3">
                Change Password
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 text-md whitespace-nowrap text-white"
              >
                Hassan Jawwad
              </th>
              <td class="px-6 py-4">hassan@texagon.io</td>
              <td class="px-6 py-4">xxxxxxxxxx</td>
              <td class="px-6 py-4">
              <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg ml-2 px-4 py-2 text-md text-white " >
            Yes
          </button>
    
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
  );
};

export default Profile;
