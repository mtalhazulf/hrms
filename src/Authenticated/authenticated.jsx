
import React from "react";
import Overview from "../Admin/Overview";
import Projects from "../Projects/Projects";
import Teams from "../Teams/Teams";
import Messages from "../Messages/Message";
import Members from "../Member/";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import Events from "../Events/Events";
import { useState, useEffect } from "react";
import { getUser } from "../Integeration/Function";
import Loading from "../Components/Shared/Loading";
import AddMemberForm from "../Member/Add_member";
import ViewMemberForm from "../Member/view_member";
import ViewProjectForm from "../Projects/view_project";
import AddProjectForm from "../Projects/Add_project";
import ErrorPage from "../Error/ErrorPage";

export const ProtectedRoute = ({ children }) => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [checkAuth, setCheckAuth] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            setCheckAuth(true);
            const userAuthenticated = await getUser();
            setAuthenticated(userAuthenticated);
            console.log(userAuthenticated);
            setCheckAuth(false);
        };

        authenticate();
    }, []);

    if (checkAuth) {
        return <><div className="flex flex-col lg:flex-row lg:justify-between w-full h-screen min-h-screen max-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            < Loading />
        </div></>;
    } else {
        return (
            <div className="flex flex-col lg:flex-row lg:justify-between w-screen h-screen min-h-screen max-h-screen">
                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                {isSidebarOpen ? <></> : <>{children}</>}
            </div>
        );
    }
};


const AuthenticatedRoutes = () => {


    return (
        <>
            <Routes>
                

            </Routes >
        </>
    );
};

export default AuthenticatedRoutes;
