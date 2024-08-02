import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from 'react-router-dom';


const GrowersDashboard = () => {
  const navigate = useNavigate();

  const fillDetail = () => {
    navigate("/registration");
  };

  const availProduct = () => {
    navigate("/avail-products");
  };

  const openItems = () => {
    navigate("/item-manager");
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
                src="https://t4.ftcdn.net/jpg/02/99/14/71/360_F_299147134_m5TaoaJ0iwfT0sDDAuvHfGUqdCQ8m5yO.jpg"
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
                src="https://www.bayer.com/sites/default/files/styles/1_91_1_aspect_ratio/public/2022-03/Screen%20Shot%202022-03-16%20at%203.30.09%20PM.png?h=43e0bb3f&itok=0rC68k01"
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Share insights of your products
                </h4>
                <p className="mb-2 leading-normal">
                  Showcase your products and share any details to build trust with potential customers in this dedicated space.
                </p>
                <button onClick={availProduct}  className="px-4 py-2 text-sm text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow">
                  Avail Products
                </button>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-gray-50">
              <img
                className="object-cover w-full h-48"
                src="https://www.shutterstock.com/image-vector/farm-landscape-agriculture-field-farmer-600nw-2087465173.jpg"
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Products Search and Management
                </h4>
                <p className="mb-2 leading-normal">
                  Effortlessly search and manage your items. Keep your items up-to-date by easily deleting items that are no longer available.
                </p>
                <button onClick={openItems}  className="px-4 py-2 text-sm text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gradient-to-r from-green-400 to-blue-500 rounded shadow">
                  Product Manager
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default GrowersDashboard;

