
import React from "react";
import Overview from "../Admin/Overview";
import Projects from "../Projects/Projects";
import Teams from "../Teams/Teams";
import Messages from "../Messages/Message";
import Members from "../Member/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import Events from "../Events/Events";

const AuthenticatedRoutes = () => {

    const [auth, setAuth] = React.useState(true);

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
                                    <Route path="member" element={<Members />} />
                                    <Route path="events" element={<Events />} />
                
                                    <Route path="msg" element={<Messages />} />
                                    <Route path="teams" element={<Teams />} />
                                    <Route path="proj" element={<Projects />} />
                                 
                                    </Route>
                            </Routes>
                        </BrowserRouter> : <h1>Not Authenticated</h1>
                }
            </div>
        </>
    );
};

export default AuthenticatedRoutes;
