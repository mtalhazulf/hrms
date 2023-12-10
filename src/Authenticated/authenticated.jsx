
import React from "react";
import Overview from "../Admin/Overview";
import Projects from "../Projects/Projects";
import Teams from "../Teams/Teams";
import Messages from "../Messages/Message";
import Members from "../Member/";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import Events from "../Events/Events";

export const ProtectedRoute = ({ children, isAuthenticated }) => {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    else {
        return <>
            <div className="flex  flex-col lg:flex-row lg:justify-between w-screen h-screen min-h-screen max-h-screen">
                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
                {
                    isSidebarOpen==false ? <>{children}</>:<></>
                }
            </div>
        </>;
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

                <Route path="/member" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Members />
                </ProtectedRoute>} />

                <Route path="/events" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Events />
                </ProtectedRoute>} />

                <Route path="/msg" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Messages />
                </ProtectedRoute>} />

                <Route path="/teams" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Teams />
                </ProtectedRoute>} />

                <Route path="/proj" element={<ProtectedRoute isAuthenticated={AuthStatus} >
                    <Projects />
                </ProtectedRoute>} />

            </Routes>
        </>
    );
};

export default AuthenticatedRoutes;
