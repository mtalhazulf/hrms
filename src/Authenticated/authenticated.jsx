
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

    const [AuthStatus, setAuthStatus] = React.useState(true);

    return (
        <>
            <Routes>
                <Route path="/admin" element={
                    <ProtectedRoute isAuthenticated={AuthStatus} >
                        <Overview />
                    </ProtectedRoute>} />

                {/* FOR MEMBERS */}
                <>
                    <Route path="/member" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                        <Members />
                    </ProtectedRoute>} />

                    <Route exact path="/add_member" element={
                        <ProtectedRoute isAuthenticated={AuthStatus} >
                            <div className="overflow-x-auto w-full h-full p-4 md:p-20 bg-[#181D23]">
                                <AddMemberForm />
                            </div>
                        </ProtectedRoute>}
                    />

                    <Route exact path="/view_member/:id" element={
                        <ProtectedRoute isAuthenticated={AuthStatus} >
                            <div className="overflow-x-auto w-full h-full p-4 md:p-20 bg-[#181D23]">
                                <ViewMemberForm />
                            </div>
                        </ProtectedRoute>}
                    />
                </>

                {/* FOR PROJECTS */}
                <>
                    <Route path="/projects" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                        <Projects />
                    </ProtectedRoute>} />

                    <Route path="/view_project/:id" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                        <div className="overflow-x-auto w-full h-full p-4 md:p-20 bg-[#181D23]">
                            <ViewProjectForm />
                        </div>
                    </ProtectedRoute>} />

                    <Route path="/add_project/" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                        <div className="overflow-x-auto w-full h-full p-4 md:p-20 bg-[#181D23]">
                            <AddProjectForm />
                        </div>
                    </ProtectedRoute>} />

                </>


                <Route path="/teams" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Teams />
                </ProtectedRoute>} />

                <Route path="/events" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Events />
                </ProtectedRoute>} />

                <Route path="/msg" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Messages />
                </ProtectedRoute>} />





            </Routes>
        </>
    );
};

export default AuthenticatedRoutes;
