import supabase from "./supabase"
import auth_config,{setUserLogin} from "@/Redux-Store/Features/Auth-Slice"
import {useDispatch} from "react-redux"

export const signIn = async (email,password) => {
    const {data,error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        console.log(error)
    } else {
        useDispatch(setUserLogin(data));
        return true;
    }
    return false;
}

export const getAccessToken = async () => {
    
    const token = await supabase.auth.getUser()
    console.log(token)
    return token;

}