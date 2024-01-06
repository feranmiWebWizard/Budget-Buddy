import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/Images/buddy-logo.png";

function Navbar() {
  const [menuState, setMenuState] = useState("menu");

  const toggleMenu = () => {
    if (menuState === "menu") {
      setMenuState("close");
    } else {
      setMenuState("menu");
    }
  };

  const closeMenu = () => {
    setMenuState("menu");
  };
  return (
    <nav className="bg-green-1 text-cream-1 headerText md:shadow-xl shadow-black sticky md:flex md:items-center md:justify-between py-2 top-0 z-[100]">
      {/* this area contains the website logo, text and also the hamburger menu btn */}
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="text-3xl flex items-center ">
            <img src={logo} className="w-[5rem]" alt="Budget Buddy logo" />
            Budget Buddy
          </span>
        </Link>

        {/* hamburger menu btn */}
        <span className="text-3xl text-blue-2 mx-2 block md:hidden cursor-pointer">
          <ion-icon name={menuState} onClick={toggleMenu}></ion-icon>
        </span>
      </div>
      {/* navigation links and menu items go here */}
      <div className="md:flex md:items-center ml-3">
        <ul
          className={`bg-green-1 w-full md:w-auto text-lg md:text-lg lg:text-2xl  md:flex md:items-center md:py-0 py-4 md:pl-0 pl-7 z-[1] md:z-auto md:static absolute left-0 md:opacity-100 ${
            menuState === "menu"
              ? "top-[-400px] opacity-0"
              : "top-[80px] opacity-100"
          } transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={closeMenu}
              className=" hover:text-blue-1 transition duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={closeMenu}
              className=" hover:text-blue-1 transition duration-300"
              to="/coming-soon"
            >
              Learn
            </Link>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={closeMenu}
              className=" hover:text-blue-1 transition duration-300"
              to="/dashboard"
            >
              About
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              onClick={closeMenu}
              className=" hover:text-blue-1 transition duration-300"
              to="/coming-soon"
            >
              Contact
            </Link>
          </li>
          <li className="bg-blue-1 text-cream-1 hover:text-blue-1 hover:bg-cream-1 px-5 py-4 rounded-l-[2rem] my-6 md:my-0 ">
            <Link
              onClick={closeMenu}
              className=" transition duration-300"
              to="/sign-in"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
