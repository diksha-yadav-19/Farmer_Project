import React from "react";
import "../index.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const ConsumerDashboard = () => {
  const navigate = useNavigate();

  const fillDetail = () => {
    navigate("/consumer-registration");
  };

  const FindGrower = () => {
    navigate("/find-grower");
  };

  return (
      <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 to-blue-300">
        <Link to="/" className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-4 my-2 text-gray-600 hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          <div className="flex space-x-8">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-gray-50">
              <img
                className="object-cover w-full h-48"
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710943497~exp=1710947097~hmac=dd784027c6fe2ee93c14ff3fac33220ea9d5e55c529e0750901e659976f1bb3c&w=740"
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Profile Information
                </h4>
                <p className="mb-2 leading-normal">
                  Your profile is the heart of your presence on our platform. Fill in the details by clicking on the button given below.
                </p>
                <button onClick={fillDetail} className="px-4 py-2 text-sm text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow">
                  Fill Details
                </button>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-gray-50">
              <img
                className="object-cover w-full h-48"
                src="https://img.freepik.com/free-vector/farmers-working-farm-cartoons_18591-51894.jpg"
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Find Your Product
                </h4>
                <p className="mb-2 leading-normal">
                Track the growth journey of your produce straight from the farm to your table with our interactive consumer dashboard
                </p>
                <button onClick={FindGrower}  className="px-4 py-2 text-sm text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow">
                  Find Grower
                </button>
              </div>
            </div>
            {/* <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-gray-50">
              <img
                className="object-cover w-full h-48"
                src="https://www.shutterstock.com/shutterstock/videos/1081934282/thumb/7.jpg?ip=x480"
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Change Your Password
                </h4>
                <p className="mb-2 leading-normal">
                Ensure your account remains safeguarded by creating a strong, unique password today.
                </p>
                <button onClick={Settings}  className="px-4 py-2 text-sm text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow mt-4">
                  Change Password
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </>
  );
};

export default ConsumerDashboard;

