import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import "../index.css";
import ConsumerDashboard from "./ConsumerDashboard";
import GrowersDashboard from "./GrowerDashboard";
import Registration from "./Regitrationgrower";
import ItemManager from "./Itemmanager";
import AvailProducts from "./AvailProducts";
import CustomCarousel from "./CarouselComponent";
import MainDashboard from "./MainDashboard";
const Navbar = () => {
  let navigate = useNavigate();

  function openSignup() {
    navigate("/Signup");
  }

  function openLogin() {
    navigate("/Login");
  }

  return (
    <>
      <div>
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-gray-50 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              <a
                className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                href="/"
              >
                {/* Use process.env.PUBLIC_URL for the image path */}
                <img
                  src={`${process.env.PUBLIC_URL}/pics/logo.png`}
                  style={{ height: "50px", mixBlendMode: "multiply" }} // Adjust the blend mode as needed
                  alt="Logo"
                  loading="lazy"
                />
                <span className="dark:text-neutral-200 font-bold text-lg font-mono text-green-700 ml-2">
                  GtoCHarvest
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="mt-2 text-white bg-gradient-to-br from-green-400 to-green-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                onClick={openSignup}
              >
                Signup
              </button>
              <button
                className="mt-2 text-white bg-gradient-to-br from-green-400 to-green-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                onClick={openLogin}
              >
                Log In
              </button>
            </div>
          </div>
        </nav>
      </div>
      <CustomCarousel />
      <MainDashboard />
    </>
  );
};

export default Navbar;
