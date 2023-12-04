
import React from "react";
import About from "../About/About";
import Overview from "../Admin/Overview";
import Projects from "../Projects/Projects";
import Project from "../Incomplete/Projects";
import Teams from "../Teams/Teams";
import Messages from "../Messages/Message";
import Members from "../Member/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";

const AuthenticatedRoutes = () => {

    const [auth, setAuth] = React.useState(false);

    return (
        <>
            <div className="flex lg:flex-row flex-col lg:justify-between w-full">
                <Sidebar />
                {
                    auth ?
                        <BrowserRouter>
                            <Routes>
                                <Route path="/">
                                    <Route path="admin" element={<Overview />} />
                                    <Route path="proj" element={<Projects />} />
                                    <Route path="incomplete" element={<Project />} />
                                    <Route path="teams" element={<Teams />} />
                                    <Route path="msg" element={<Messages />} />
                                    <Route path="member" element={<Members />} />
                                </Route>
                            </Routes>
                        </BrowserRouter> : <h1>Not Authenticated</h1>
                }
            </div>
        </>
    );
};

export default AuthenticatedRoutes;
