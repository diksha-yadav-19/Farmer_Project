import React, { useState } from 'react';
import axios from 'axios';
import "../index.css";

const ItemManager = () => {
  const [formData, setFormData] = useState({
    emailid: '',
    category: [],
    items: '',
    quantity : '',
    pic: null,
  });
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const doSearch = async () => {
    const url = `http://localhost:2024/offer/get-details?emailid=${formData.emailid}`;

    try {
      const serverData = await axios.get(url);

      if (serverData.data && serverData.data.status) {
        setUserData(serverData.data.obj);
        alert(JSON.stringify(serverData.data.obj));
      } else {
        setUserData(null); 
        alert('User not found');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error searching data. Please try again.');
    }
  };
  const handleDelete = async () => {
    const url = `http://localhost:2024/offer/delete-user?emailid=${formData.emailid}`;

    try {
      const deleteResponse = await axios.get(url);

      if (deleteResponse.data && deleteResponse.data.status) {
        doSearch();
        alert('User deleted successfully');
      } else {
        alert('User not found or error deleting user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error+'Error deleting user. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-center text-6xl font-bold mb-4 mt-4 italic font-serif text-green-800">Item Manager</h1>

        <div className="flex justify-center mt-3">
          <div className="relative">
            <label htmlFor="email" className='text-lg mb-1'>Email Id</label>
            <input
              type="text"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              className="h-14 w-full pl-6 pr-32 rounded-lg z-0 focus:shadow focus:outline-black-400 font-semibold border-gray-500"
              placeholder="Enter Emailid"
            />
            <div className="absolute top-10 right-2">
              <button onClick={doSearch} className="h-10 w-20 text-white rounded-lg bg-green-500 hover:bg-green-600">Search</button>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sr.no
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Items
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  PicPath
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {userData && userData.length > 0 ? (
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      {user.category && user.category.length > 0 ? user.category.join(', ') : ''}
                    </td>
                    <td className="px-6 py-4">
                      {user.items}
                    </td>
                    <td className="px-6 py-4">
                      {user.quantity}
                    </td>
                    <td className="px-6 py-4">
                      {user.pic}
                    </td>
                    <td className="px-6 py-4">
                      <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleDelete(user.emailid)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center">No data found</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemManager;





