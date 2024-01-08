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

export const getProject = async (id) => {
    const token = await getAccessToken();
    const params = {
        id: id
    }
    const response = await axios.get(`${Backend}/data/project`, {
        params: params,
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data);
    return response.data;
}

export const addProject = async (data) => {
    const token = await getAccessToken();
    console.log("The Data is : ", data);
    const response = await axios.post(`${Backend}/project/add_project`, data, {
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data);
    return response.data;
}

export const deleteProject = async (data) => {
    const token = await getAccessToken();
    const response = await axios.post(`${Backend}/project/delete_project`, {
        id: data
    } ,{
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data);
    return response.data;
}