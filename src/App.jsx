import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import CreateUser from "./Components/CreateUser";
import SignIn from "./Components/Signin";
import ComingPage from "./Components/ComingSoon";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/coming-soon" element={<ComingPage />}></Route>
          <Route path="/create-user" element={<CreateUser />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
