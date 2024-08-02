import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const AvailProducts = () => {
  const categories = ['fruits', 'vegetables', 'pulses', 'dairyProducts', 'others'];

  const [selectedProducts, setSelectedProducts] = useState({
    fruits: false,
    vegetables: false,
    pulses: false,
    dairyProducts: false,
    //others: false,
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedItems(selectedOptions);
  
    setFormData((prevData) => ({
      ...prevData,
      items: [...prevData.items, ...selectedOptions], // Accumulate selected items
    }));
  };
  
  

  const [formData, setFormData] = useState({
    emailid: '',
    category: [],
    items: [],
    quantity:'',
    pic: null,
  });

  const [itemsByCategory, setItemsByCategory] = useState({
    fruits: [
      'Apple',
      'Banana',
      'Orange',
      'Mango',
      'Grapes',
      'Guava',
      'Pomegranate',
      'Papaya'
    ],    
    vegetables: [
      'Carrot',
      'Spinach',
      'Potato',
      'Onion',
      'Tomato',
      'Cauliflower',
      'Cabbage',
      'Beans',
      'Egg Plants',
      'Cucumber',
      'Garlic',
    ],    
    pulses: [
      'Bengal Gram (Desi Chick Pea / Desi Chana)',
      'Pigeon Peas (Arhar / Toor / Red Gram)',
      'Green Beans (Moong Beans)',
      'Chick Peas (Kabuli Chana)',
      'Black Matpe (Urad / Mah / Black Gram)',
      'Red Kidney Beans (Rajma)',
      'Black Eyed Peas (Lobiya)',
      'Lentils (Masoor)',
      'White Peas (Matar)'
    ],
    dairyProducts: ['Milk', 'Cheese', 'Yogurt','Butter','Ghee'],
    //others: ['Item1', 'Item2', 'Item3'],
  });

  useEffect(() => {
    // Update the items in the combo box when selected categories change
    const selectedCategories = Object.keys(selectedProducts).filter((key) => selectedProducts[key]);
    const updatedItems = selectedCategories.reduce((acc, category) => {
      acc.push(...itemsByCategory[category]);
      return acc;
    }, []);
    setItemsByCategory((prevItems) => ({ ...prevItems, selected: updatedItems }));
  }, [selectedProducts]);

  const handleCheckboxChange = (product) => {
    setSelectedProducts((prevSelected) => {
      const updatedProducts = { ...prevSelected, [product]: !prevSelected[product] };
      setFormData((prevData) => ({
        ...prevData,
        category: Object.keys(updatedProducts).filter((key) => updatedProducts[key]),
      }));
      return updatedProducts;
    });
  };

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
    setPrev(URL.createObjectURL(e.target.files[0]));
  };

  const [prev, setPrev] = useState('');

  const handleSubmit = async () => {
    const url = 'http://localhost:2024/offer/avail-product';
    const formdata = new FormData();

    formData.category.forEach((selectedCategory) => {
      formdata.append('category', selectedCategory);
    });

    for (const prop in formData) {
      if (prop !== 'category') {
        formdata.append(prop, formData[prop]);
      }
    }

    try {
      const serverMsg = await axios.post(url, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(serverMsg);

      if (serverMsg.data.status === true) {
        alert('Saved Successfully!!');
      } else {
        alert(serverMsg.data.msg + '  ' + serverMsg.data.err);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-green-400 flex justify-center items-center">
        {/* Decorative elements */}
        <div className="absolute w-60 h-60 rounded-xl bg-lime-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-lime-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>

        {/* Product combo form */}
        <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 mb-50">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Offer Your Organic Products</h1>
            <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Connect with customers and share the goodness of your organic products!
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email Address"
              className="block text-sm py-2.5 px-3 font-semibold rounded-lg w-full border outline-green-500"
              name="emailid"
              value={formData.emailid}
              onChange={handleInputChange}
            />
          </div>
          <p className=" text-sm mb-1 mt-3 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Select category of products you have:
          </p>
          <div className="flex space-x-4">
            {Object.keys(selectedProducts).map((product) => (
              <div key={product} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedProducts[product]}
                  onChange={() => handleCheckboxChange(product)}
                />
                <label className="ml-2">{product.charAt(0).toUpperCase() + product.slice(1)}</label>
              </div>
            ))}
          </div>
          <p className="text-sm mb-1 mt-3 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Select items:
          </p>
          <select
        className="block text-sm py-2.5 px-3 font-semibold rounded-lg w-full border outline-green-500"
        onChange={handleItemSelectChange}
        //multiple
      >
        <option value="" disabled>
          Selected items....
        </option>
        {itemsByCategory.selected &&
          itemsByCategory.selected.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <div className="flex space-x-4 mt-3">
      <p className="text-sm mb-1 mt-3 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Items:
      </p>
       <input
              type="text"
             placeholder="Items you selected"
                className="block text-sm py-2.5 px-3 rounded-lg w-full border outline-green-500"
              name="items"
              value={formData.items}
              onChange={handleInputChange}
            />
          
          <div className="flex items-center">
      <label className="text-sm mb-1 font-semibold text-gray-700 tracking-wide cursor-pointer">
        Quantity:
      </label>
      <input
        type="text"
        placeholder="Quantity (in kg)"
        className="block text-sm py-2.5 px-3 font-semibold rounded-lg border outline-green-500"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />
    </div>
    </div>





          <div className="space-y-4 mt-3">
            <label className="block text-gray-700 text-sm font-semibold text-gray-700">Upload ProductPic</label>
            <input
              type="file"
              name="pic"
              onChange={handleFileChange}
              className="bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
            {prev && <img src={prev} alt="Preview" className="mt-2" style={{ width: '200px', height: '150px' }} />}
          </div>
          <div className="text-center mt-6">
            <button
            type='button'
              className="w-full py-2 text-xl text-white bg-green-400 rounded-lg hover:bg-green-500 transition-all"
              onClick={handleSubmit}
            >
              Offered Products
            </button>
          </div>
        </form>

        {/* Additional decorative elements */}
        <div className="w-40 h-40 absolute bg-lime-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-lime-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
};

export default AvailProducts;





