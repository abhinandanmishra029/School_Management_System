import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admission from "./CMS/Admission/admission";
import Login from "./CMS/Login/login";
import Register from "./CMS/Register/register";
import Homepage from "./CMS/Homepage";
import About from "./CMS/About/about";
import Contact from "./CMS/Contact/contact";
import Navbar from "./CMS/nav";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword/forgotPassword";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route
            exact
            path="/login"
            element={isAuthenticated ? <Homepage /> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={isAuthenticated ? <Homepage /> : <Register />}
          ></Route>
          <Route
            exact
            path="/forgot/password"
            element={<ForgotPassword />}
          ></Route>

          <Route exact path="/" element={<Admission />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/admission"
            element={isAuthenticated ? <Admission /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
