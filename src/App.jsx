import React from "react";
import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import LogOut from "./Auth/Logout";
import About from "./About/About";
import ErrorPage from "./Error/ErrorPage";
import AuthenticatedRoutes from "./Authenticated/authenticated";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
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
           </Route>
        </Routes>
        <AuthenticatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

/*  <Route exact path="*" element={<ErrorPage />} />
          */