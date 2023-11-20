import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import CreateUser from "./Components/CreateUser";
import SignIn from "./Components/Signin";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/create-user" element={<CreateUser />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
