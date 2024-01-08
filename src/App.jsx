import React from "react";
import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import LogOut from "./Auth/Logout";
import About from "./About/About";
import ErrorPage from "./Error/ErrorPage";
import AuthenticatedRoutes from "./Authenticated/authenticated";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { ProtectedRoute } from "./Authenticated/authenticated";
import Overview from "./Admin/Overview";
import Projects from "./Projects/Projects";
import Teams from "./Teams/Teams";
import Messages from "./Messages/Message";
import Members from "./Member/";
import Events from "./Events/Events";
import AddMemberForm from "./Member/Add_member";
import ViewMemberForm from "./Member/view_member";
import ViewProjectForm from "./Projects/view_project";
import AddProjectForm from "./Projects/Add_project";
import AboutUs from "./Bio/index";
const App = () => {
  const [AuthStatus, setAuthStatus] = React.useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact index path="/" element={Landing()} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="team" element={<About />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="logout" element={<LogOut />} />
            <Route exact path="about-us" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/admin" element={
                    <ProtectedRoute isAuthenticated={AuthStatus} >
                        <Overview />
                    </ProtectedRoute>} 
              />

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

                <Route exact path="/view_member/:id" element={
                    <ProtectedRoute isAuthenticated={AuthStatus} >
                        <div className="overflow-x-auto w-full h-full p-4 md:p-20 bg-[#181D23]">
                            <ViewMemberForm />
                        </div>
                    </ProtectedRoute>}
                />
          </Route>
        </Routes>
        <AuthenticatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

