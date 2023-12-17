import { useState } from "react";
export const switchstatement = ({ Astatus,onChange=null, updateSync = true }) => {

    const [status, setStatus] = useState(Astatus);

    const handleStatusChanges = (e) => {
        setStatus(e.target.value);
        if(onChange){
            onChange(e);
        }
    }

    console.log("Hello World")

    return <>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="project_status" value={status} onChange={handleStatusChanges}>
            <option value="Not Started">Not Started</option>
            <option value="Assigned">Assigned</option>
            <option value="Started">Started</option>
            <option value="Stuck">Stuck</option>
            <option value="Done">Done</option>
            <option value="Pending Approval">Pending Approval</option>
            <option value="Approved">Approved</option>
        </select>
    </>
}
