import React from "react";
import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import AuthenticatedRoutes from "./Authenticated/authenticated";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImOpera } from "react-icons/im";

const App = () => {
  return (
    <>
    <AuthenticatedRoutes />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact index path="/" element={Landing()} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            {/* <Route exact path="*" element={<h1>Not Found</h1>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
