import axios from "axios";
const Backend = import.meta.env.VITE_BACKEND;
import { getAccessToken } from "./Function"
import { SetMembers } from "../Redux-Store/Features/Team-Members"

export const getMember = async (id) => {
    const token = await getAccessToken();
    const params = {
        id: id
    }
    const response = await axios.get(`${Backend}/member/fetch`, {
        params: params,
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data);
    return response.data;
}

export const getMembers = async (dispatch) => {
    console.log("The Backend is : ", Backend)
    const token = await getAccessToken();
    const response = await axios.get(`${Backend}/member/all_member`, {
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data)
    dispatch(SetMembers(response.data));
    
    return response.data;
}

export const addMember = async (data) => {
    const token = await getAccessToken();
    const response = await axios.post(`${Backend}/member/add_member`, data, {
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data)
    return response.data;
}

export const deleteMember = async (id) => {
    const token = await getAccessToken();
    const params = {
        id: id
    }
    const response = await axios.delete(`${Backend}/member/delete_member`, {
        params: params,
        headers: {
            authorization: `${token}`
        }
    });
    console.log(response.data)
    return response.data;
}