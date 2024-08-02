import React, { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactno: "",
    emailid: "",
    address: "",
    city: "",
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

  const doSubmit = async () => {
    const url = "http://localhost:2024/regC/add-details";
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

  const doUpdate = async () => {
    const url = "http://localhost:2024/regC/update-details";
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


  return (
    <div className="w-full h-[800px] bg-gray-100" style={{ paddingTop: "4rem" }}>
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div className="py-4 px-8 text-green-700 text-4xl border-b border-gray-300">Registration for Consumer</div>
          <div className="py-4 px-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  id="fullName"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">Contact no</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  id="contactno"
                  name="contactno"
                  type="text"
                  placeholder="Your contact no."
                  value={formData.contactno}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                name="emailid"
                type="email"
                placeholder="Your email address"
                value={formData.emailid}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="address"
                name="address"
                type="text"
                placeholder="Your house address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idProof">Id Proof</label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  id="idProof"
                  name="pic"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-start mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                type="button"
                onClick={doSubmit}
              >
                Submit
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
                onClick={doUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



