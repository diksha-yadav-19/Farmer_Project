// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const FindGrower = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedItem, setSelectedItem] = useState('');
//   const [itemsByCategory, setItemsByCategory] = useState({
//     fruits: [
//       'Apple',
//       'Banana',
//       'Orange',
//       'Mango',
//       'Grapes',
//       'Guava',
//       'Pomegranate',
//       'Papaya'
//     ],
//     vegetables: [
//       'Carrot',
//       'Spinach',
//       'Potato',
//       'Onion',
//       'Tomato',
//       'Cauliflower',
//       'Cabbage',
//       'Beans',
//       'Egg Plants',
//       'Cucumber',
//       'Garlic',
//     ],
//     pulses: [
//       'Bengal Gram (Desi Chick Pea / Desi Chana)',
//       'Pigeon Peas (Arhar / Toor / Red Gram)',
//       'Green Beans (Moong Beans)',
//       'Chick Peas (Kabuli Chana)',
//       'Black Matpe (Urad / Mah / Black Gram)',
//       'Red Kidney Beans (Rajma)',
//       'Black Eyed Peas (Lobiya)',
//       'Lentils (Masoor)',
//       'White Peas (Matar)'
//     ],
//     dairyProducts: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Ghee'],
//   });
//   const [cityOptions, setCityOptions] = useState([]);

//   useEffect(() => {
//     const doUpdateCity = async () => {
//       if (selectedCategory && itemsByCategory[selectedCategory]) {
//         const items = itemsByCategory[selectedCategory].join(',');
//         try {
//           const url = `http://localhost:2024/offer/fetch-city`;
//           const response = await axios.get(url, {
//             items,
//             category: selectedCategory,
//             city: selectedCity,
//           });
//           //alert(city);
//           if (response.data.result.length !== 0) {
//             const cities = response.data.result.map((obj) => obj.city);
//             setCityOptions(cities);
//           } else {
//             alert("No cities found for the selected items.");
//           }
//         } catch (error) {
//           console.error('Error fetching cities:', error);
//           alert("Error fetching cities. Please try again.");
//         }
//       } else {
//         // Reset city options if no items are selected
//         setCityOptions([]);
//       }
//     };
  
//     doUpdateCity();
//   }, [selectedCategory, itemsByCategory, selectedCity]);

//   const doSearch = async () => {
//     try {
//       const url = `http://localhost:2024/find-grower/get-all`;
//       const response = await axios.get(url, {
//         params: {
//           items: selectedItem,
//           category: selectedCategory,
//           city: selectedCity,
//         },
//       });

//       alert(JSON.stringify(response.data.result));
//       console.log(response.data.result);
//     } catch (error) {
//       console.error('Error searching for growers:', error);
//       alert('Error searching for growers. Please try again.');
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//   };  

//   return (
//     <>
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//         <h2 className="mb-4 text-xxl font-bold text-green-700 dark:text-white">FIND GROWER</h2>
//         <form action="#">
//           <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
//             <div>
//               <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//               <select
//                 id="category"
//                 onChange={handleCategoryChange}
//                 value={selectedCategory}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//               >
//                 <option value="">Select category</option>
//                 <option value="dairyProducts">Dairy Products</option>
//                 <option value="fruits">Fruits</option>
//                 <option value="vegetables">Vegetables</option>
//                 <option value="pulses">Pulses</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Items</label>
//               <select
//                 name="item-weight"
//                 value={selectedItem}
//                 onChange={(e) => setSelectedItem(e.target.value)}
//                 id="item-weight"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                 placeholder="Items"
//                 required=""
//               >
//                 <option value="">Select item</option>
//                 {itemsByCategory[selectedCategory] && itemsByCategory[selectedCategory].map((item, index) => (
//                   <option key={index} value={item}>{item}</option>
//                 ))}
//               </select>
//             </div>
//             {/* <div>
//               <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 id="city"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                 placeholder="Enter city"
//                 required=""
//               />
//             </div> */}
//        <div>
//                 <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
//                 <select
//                   name="city"
//                   id="city"
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Select city"
//                   required=""
//                 >
//                   <option value="">Select city</option>
//                   {cityOptions.map((city, index) => (
//                     <option key={index} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//           </div>
//           <center>
//             <button
//               type="button"
//               onClick={doSearch}
//               className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Search Grower's
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </button>
//           </center>
//         </form>
//       </div>
//     </section>
     
//     <div class="flex space-x-4">
// <div class=" max-w-sm ml-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Grower Found!</h5>
//     <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Name of Grower :</p>
//     <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Contactno. of Grower :</p>
//     <a href="#" type='button' class="inline-flex font-medium items-center text-blue-600 hover:underline">
//         See more details
//         <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
//         </svg>
//     </a>
// </div>
// </div>
// </>

//   );
// };

// export default FindGrower;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindGrower = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [itemsByCategory, setItemsByCategory] = useState({
    fruits: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Guava', 'Pomegranate', 'Papaya'],
    vegetables: ['Carrot', 'Spinach', 'Potato', 'Onion', 'Tomato', 'Cauliflower', 'Cabbage', 'Beans', 'Egg Plants', 'Cucumber', 'Garlic'],
    pulses: ['Bengal Gram (Desi Chick Pea / Desi Chana)', 'Pigeon Peas (Arhar / Toor / Red Gram)', 'Green Beans (Moong Beans)', 'Chick Peas (Kabuli Chana)', 'Black Matpe (Urad / Mah / Black Gram)', 'Red Kidney Beans (Rajma)', 'Black Eyed Peas (Lobiya)', 'Lentils (Masoor)', 'White Peas (Matar)'],
    dairyProducts: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Ghee'],
  });
  const [cityOptions, setCityOptions] = useState([]);
  const [growers, setGrowers] = useState([]);

  useEffect(() => {
    const doUpdateCity = async () => {
      if (selectedCategory && itemsByCategory[selectedCategory]) {
        const items = itemsByCategory[selectedCategory].join(',');
        try {
          const url = `http://localhost:2024/offer/fetch-city`;
          const response = await axios.get(url, {
            items,
            category: selectedCategory,
            city: selectedCity,
          });
          if (response.data.result.length !== 0) {
            const cities = response.data.result.map((obj) => obj.city);
            setCityOptions(cities);
          } else {
            alert("No cities found for the selected items.");
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
          alert("Error fetching cities. Please try again.");
        }
      } else {
        setCityOptions([]);
      }
    };
    doUpdateCity();
  }, [selectedCategory, itemsByCategory, selectedCity]);

  const doSearch = async () => {
    try {
      const url = `http://localhost:2024/find-grower/get-all`;
      const response = await axios.get(url, {
        params: {
          items: selectedItem,
          category: selectedCategory,
          city: selectedCity,
        },
      });
      alert(JSON.stringify(response.data.result));
      setGrowers(response.data.result);
    } catch (error) {
      console.error('Error searching for growers:', error);
      alert('Error searching for growers. Please try again.');
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };  

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xxl font-bold text-green-700 dark:text-white">FIND GROWER</h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select
                  id="category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Select category</option>
                  <option value="dairyProducts">Dairy Products</option>
                  <option value="fruits">Fruits</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="pulses">Pulses</option>
                </select>
              </div>
              <div>
                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Items</label>
                <select
                  name="item-weight"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Items"
                  required=""
                >
                  <option value="">Select item</option>
                  {itemsByCategory[selectedCategory] && itemsByCategory[selectedCategory].map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <select
                  name="city"
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Select city"
                  required=""
                >
                  <option value="">Select city</option>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <center>
              <button
                type="button"
                onClick={doSearch}
                className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search Grower's
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </center>
          </form>
        </div>
      </section>

      <div className="flex space-x-4">
        {growers.map((grower, index) => (
          <div key={index} className="max-w-sm ml-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Grower Found!</h5>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">Name of Grower: {grower.emailid}</p>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">Name of Grower: {grower.name}</p>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">Contact no. of Grower: {grower.contact}</p>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">Address of Grower: {grower.address}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FindGrower;




