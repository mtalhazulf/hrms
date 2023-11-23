
import React from "react";
import Landing from "./Components/Landing";
import Sidebar from "./Components/Sidebar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import About from "./About/About";
import Overview from "./Admin/Overview";
import Projects from "./Projects/Projects";
import Project from "./Incomplete/Projects";
import Teams from "./Teams/Teams";
import Messages from "./Messages/Message";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={Landing()} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="team" element={<About />} />
            <Route path="admin" element={<Overview />} />
            <Route path="proj" element={<Projects />} />
            <Route path="incomplete" element={<Project />} />
            <Route path="teams" element={<Teams />} />
            <Route path="msg" element={<Messages />} />
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
