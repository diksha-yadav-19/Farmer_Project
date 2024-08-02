import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    emailid: "",
    name: "",
    address: "",
    city: "",
    village: "",
    categories: "",
    contactno: "",
    adharno: "",
    pic: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pic: e.target.files[0],
    });
  };

  const [prev, setPrev] = useState("");

  const doSaveWithAxiosPostWithPic = async () => {
    const url = "http://localhost:2024/regG/add-details";
    const formdata = new FormData();

    for (const prop in formData) {
      formdata.append(prop, formData[prop]);
    }

    try {
      const serverMsg = await axios.post(url, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(serverMsg);

      if (serverMsg.data.status === true) {
        alert("Saved Successfully!!");
      } else {
        alert(serverMsg.data.msg + "  " + serverMsg.data.err);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data. Please try again.");
    }
  };

  const doUpdateWithAxios = async () => {
    const url = "http://localhost:2024/regG/update-details";
    const formdata = new FormData();

    for (const prop in formData) {
      formdata.append(prop, formData[prop]);
    }

    try {
      const serverMsg = await axios.post(url, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(serverMsg);

      if (serverMsg.data.status === true) {
        alert("Updated Successfully!!");
      } else {
        alert(serverMsg.data.msg + "  " + serverMsg.data.err);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating data. Please try again.");
    }
  };

  const doSearchWithAxios = async () => {
    const url = `http://localhost:2024/regG/get-details?emailid=${formData.emailid}`;

    try {
      const serverData = await axios.get(url);

      if (serverData.data && serverData.data.status) {
        setFormData(serverData.data.obj);
        const picpath = serverData.data.obj.picpath;
        setPrev(`http://localhost:2024/uploads/${picpath}`);
        alert("User Found\n" + JSON.stringify(serverData.data.obj));
      } else {
        alert("User not found" + JSON.stringify(serverData.data.obj));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error searching data. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center bg-gradient-to-r from-green-300 to-green-400">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-black">
            Grower's Registration Form
          </h2>
          <br />
          <div className="rounded shadow-lg p-4 px-4 md:p-8 mb-6 bg-white">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-2 flex items-center">
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={doSearchWithAxios}
                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Search Profile
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="emailid"
                      id="emailid"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.emailid}
                      placeholder="email@domain.com"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.address}
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.city}
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="village">Village/Town</label>
                    <input
                      type="text"
                      name="village"
                      id="village"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.village}
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="category">Categories</label>
                    <input
                      type="text"
                      name="categories"
                      id="category"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.categories}
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="contactno">Contact no.</label>
                    <input
                      type="text"
                      name="contactno"
                      id="contactno"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value={formData.contactno}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="adharno">AdharCard no.</label>
                    <input
                      type="text"
                      name="adharno"
                      id="adharno"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value={formData.adharno}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label className="block text-gray-700 text-sm mb-2">
                      Upload AdharCard
                    </label>
                    <input
                      type="file"
                      name="pic"
                      onChange={handleFileChange}
                      className="bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                    {prev && (
                      <img
                        src={prev}
                        alt="Preview"
                        className="mt-2"
                        style={{ width: "300px", height: "200px" }}
                      />
                    )}
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end space-x-4">
                      {/* <button
                        onClick={doSaveWithAxiosPostWithPic}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                      <button
                        onClick={doUpdateWithAxios}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Update
                      </button> */}
                      <button
                        type="button"
                        onClick={doSaveWithAxiosPostWithPic}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={doUpdateWithAxios}
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
