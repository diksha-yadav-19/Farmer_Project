import React, { useState } from 'react';
import "../index.css";
import axios from "axios";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentid: "",
    name: "",
    branch: "",
    doa: "",
    pic: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pic: e.target.files[0]
    });
  };
  const [prev, setPrev] = useState("");
  const doSaveWithAxiosPostWithPic = async () => {
    const url = "http://localhost:2006/student/add-details";
    const formdata = new FormData();

    for (const prop in formData) {
      formdata.append(prop, formData[prop]);
    }

    try {
      const serverMsg = await axios.post(url, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log(serverMsg);

      if (serverMsg.data.status === true) {
        alert("Saved Successfully!!");
      } else {
        alert(serverMsg.data.msg + "  " + serverMsg.data.err);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data. Please try again.');
    }
  };
  const doUpdateWithAxios = async () => {
    const url = 'http://localhost:2006/student/update-details';
    const formdata = new FormData();

    for (const prop in formData) {
      formdata.append(prop, formData[prop]);
    }

    try {
      const serverMsg = await axios.post(url, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(serverMsg);

      if (serverMsg.data.status === true) {
        alert('Updated Successfully!!');
      } else {
        alert(serverMsg.data.msg + '  ' + serverMsg.data.err);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating data. Please try again.');
    }
  };

  const doSearchWithAxios = async () => {
    const url = `http://localhost:2006/student/get-details?studentid=${formData.studentid}`;
  
    try {
      const serverData = await axios.get(url);
  
      if (serverData.data && serverData.data.status) {
        setFormData(serverData.data.obj);
        const picpath = serverData.data.obj.picpath;
        setPrev(`http://localhost:2006/uploads/${picpath}`);
        alert('Student Found\n' + JSON.stringify(serverData.data.obj));
      } else {
        alert('Student not found' + JSON.stringify(serverData.data.obj));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error searching data. Please try again.');
    }
  };
  

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-5 ">
        <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
              Student ID
            </label>
            <input value={formData.studentid} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="studentid" type="text" placeholder="Student ID" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input value={formData.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
              Branch
            </label>
            <input value={formData.branch} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="branch" type="text" placeholder="Branch" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doa">
              Date of Admission (Doa)
            </label>
            <input value={formData.doa} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="doa" type="date" placeholder="Date of Admission" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pic">
              Upload Picture
            </label>
            
        <input type="file"  name="pic" onChange={handleFileChange} className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {prev && <img src={prev} alt="Preview" className="mt-2" />}
          </div>
          <div className="flex items-center justify-evenly">
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={doSaveWithAxiosPostWithPic}>
              Save
            </button>
            <button onClick={doSearchWithAxios} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Search
            </button>
            <button  className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={doUpdateWithAxios}>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default StudentForm;



