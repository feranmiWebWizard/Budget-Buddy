import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import SignIn from "./Components/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
