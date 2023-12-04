import React from "react";
import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import About from "./About/About";
import AuthenticatedRoutes from "./Authenticated/authenticated";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <AuthenticatedRoutes />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact index path="/" element={Landing()} />
            <Route exact path="login" element={<Login />} />
            <Route path="team" element={<About />} />
            {/* <Route exact path="*" element={<h1>Not Found</h1>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
