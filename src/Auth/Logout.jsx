import React, { useEffect } from "react"
import { signOutUser } from "../Integeration/Function";
import Login from "./Login";

const SignOutUser = (props) => {

    useEffect(() => {
        async function SignOut() {
            localStorage.clear();
            await signOutUser();
            window.location.href = "/login";
        }

        SignOut();
    }, []);
    return (
        <>
            <Login />    
        </>
    )
};

export default SignOutUser;