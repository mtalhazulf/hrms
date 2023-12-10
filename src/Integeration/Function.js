import supabase from "./supabase"

export const signIn = async (email,password) => {
    const {data,error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        console.log(error)
    } else {
        console.log(data);
        return true;
    }
    return false;
}

export const getAccessToken = async () => {
    
    const token = await supabase.auth.getUser()
    console.log(token)
    return token;

}