import axios from "axios";
const Backend = import.meta.env.VITE_BACKEND;
import {getAccessToken} from "./Function"


export const getMembers = async () => {
    axios.get(`${Backend}/data/all_members`,{
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "auth_token": await getAccessToken()
        }
    })
}