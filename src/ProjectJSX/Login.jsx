import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import { doSearch } from "../services/user-config";

export default function Login() {
  const navigate = useNavigate();
  const [obj, setObj] = useState({
    emailid: "",
    password: "",
    usertype: "",
  });

  // const doLogin = async () => {
  //   const url = `http://localhost:2024/user/get-user?emailid=${obj.emailid}`;

  //   try {
  //     const serverData = await axios.get(url);

  //     if (serverData.data && serverData.data.status === true) {
  //       const userFromServer = serverData.data.obj;

  //       if (userFromServer && userFromServer.password === obj.password) {
  //         alert("User Found");

  //         // Save JWT token in local storage
  //         localStorage.getItem("token", serverData.data.token);

  //         // Check user type and navigate to the appropriate dashboard
  //         if (userFromServer.usertype === "producer") {
  //           navigate("/GrowersDashboard");
  //         } else if (userFromServer.usertype === "consumer") {
  //           navigate("/ConsumerDashboard");
  //         } else {
  //           alert("Invalid user type");
  //         }
  //       } else {
  //         alert("Invalid email or password");
  //       }
  //     } else {
  //       alert("User not found");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Error searching data. Please try again.");
  //   }
  // };

  const doLogin = async () => {
    const url = `http://localhost:2024/user/get-user?emailid=${obj.emailid}`;

    try {
      const serverData = await axios.get(url);

      if (serverData.data && serverData.data.status === true) {
        const userFromServer = serverData.data.obj;

        if (userFromServer && userFromServer.password === obj.password) {
          alert("User Found");

          // Save JWT token in local storage
          // const token = serverData.data.token;
          // localStorage.setItem("token", token);

          // Check user type and navigate to the appropriate dashboard
          if (userFromServer.usertype === "producer") {
            navigate("/GrowersDashboard");
          } else if (userFromServer.usertype === "consumer") {
            navigate("/ConsumerDashboard");
          } else {
            alert("Invalid user type");
          }
        } else {
          alert("Invalid email or password");
        }
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error searching data. Please try again.");
    }
  };

  // const doLogin = async () => {
  //   try {
  //     const serverData = await doSearch(obj.emailid);

  //     if (serverData.data && serverData.data.status === true) {
  //       const userFromServer = serverData.data.obj;

  //       if (userFromServer && userFromServer.password === obj.password) {
  //         alert("User Found");

  //         // Save JWT token in local storage
  //         const token = serverData.data.token;
  //         localStorage.setItem("token", token);

  //         // Check user type and navigate to the appropriate dashboard
  //         if (userFromServer.usertype === "producer") {
  //           navigate("/GrowersDashboard");
  //         } else if (userFromServer.usertype === "consumer") {
  //           navigate("/ConsumerDashboard");
  //         } else {
  //           alert("Invalid user type");
  //         }
  //       } else {
  //         alert("Invalid email or password");
  //       }
  //     } else {
  //       alert("User not found");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Error searching data. Please try again.");
  //   }
  // };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-300/40 ring ring-2 ring-green-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase ">
            WELCOME TO LOGIN PAGE
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 flex items-center"
              >
                <span className="ml-2">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={obj.emailid}
                name="emailid"
                onChange={(e) => setObj({ ...obj, emailid: e.target.value })}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={obj.password}
                onChange={(e) => setObj({ ...obj, password: e.target.value })}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={doLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-emerald-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-emerald-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
