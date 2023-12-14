import axios from "axios";
const Backend = import.meta.env.VITE_BACKEND;
import { getAccessToken } from "./Function"

export const getProjects = async () => {
    console.log("The Backend is : ", Backend)
    const token = await getAccessToken();
    const response = await axios.get(`${Backend}/data/all_project`, {
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data)
    return response.data;
}