// App.jsx or your main component
import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Navbar from "./ProjectJSX/MainNavbar";
import Signup from "./ProjectJSX/Signup";
import Login from "./ProjectJSX/Login";
import ConsumerDashboard from "./ProjectJSX/ConsumerDashboard";
import GrowersDashboard from "./ProjectJSX/GrowerDashboard";
import Registration from "./ProjectJSX/Regitrationgrower";
import ItemManager from "./ProjectJSX/Itemmanager";
import AvailProducts from "./ProjectJSX/AvailProducts";
import RegistrationForm from "./ProjectJSX/ConsumerReg";
import FindGrower from "./ProjectJSX/FindGrower";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/item-manager" element={<ItemManager />} />
        <Route path="/avail-products" element={<AvailProducts />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/GrowersDashboard" element={<GrowersDashboard />} />
        <Route path="/ConsumerDashboard" element={<ConsumerDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consumer-registration" element={<RegistrationForm />} />
        <Route path="/find-grower" element={<FindGrower />} />
      </Routes>
      </div>
  );
};

export default App;

