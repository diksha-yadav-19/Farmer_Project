import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const Signup = () => {
  const [userType, setUserType] = useState(""); // State to hold the selected user type
  const [obj, setObj] = useState({
    emailid: "",
    password: "",
    usertype: "",
  });

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);
    setObj((prevObj) => ({ ...prevObj, usertype: selectedUserType }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObj((prevObj) => ({ ...prevObj, [name]: value }));
  };

  // const doSignup = async () => {
  //   const url = "http://localhost:2024/user/add-user";
  //   console.log(obj);
  //   const serverMsg = await axios.post(url, obj);
  //   console.log(serverMsg);

  //   if (serverMsg.data.status === true) alert("Saved Successfullyyyyy");
  //   else alert(serverMsg.data.msg + "  " + serverMsg.data.err);
  // };

  const doSignup = async () => {
    const url = "http://localhost:2024/user/add-user"; // Backend API endpoint for user registration
    try {
      console.log(obj); // Log the user data being sent to the backend

      const serverMsg = await axios.post(url, obj); // Make a POST request to the backend

      console.log(serverMsg); // Log the server response

      if (serverMsg.data.status === true) {
        // If registration is successful
        alert("Saved Successfully");
        //localStorage.setItem("token", serverMsg.data.token); // Store the received JWT token in localStorage
      } else {
        // If there's an error during registration
        alert(serverMsg.data.msg + " " + serverMsg.data.err);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-emerald-400 text-center hidden md:flex">
          <div
            className="w-full bg-contain" //m-12 xl:m-16 bg-center bg-contain
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/pics/p1.jpg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-emerald-600">
                User Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="emailid"
                  value={obj.emailid}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password"
                  value={obj.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                <select
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <option value="">Select Your Type</option>
                  <option value="producer">Producer</option>
                  <option value="consumer">Consumer</option>
                </select>
                <button
                  type="button"
                  onClick={doSignup}
                  className="mt-5 tracking-wide font-semibold bg-emerald-600 text-gray-100 w-full py-4 rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
