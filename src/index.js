import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Card from "./Components/Card";
import Cardsshow from "./Components/Cardsshow";
import ComboButtons from "./Components/FilterButtons";
import Counter from "./Components/hooks/Counter";
import Form from "./Components/hooks/Form";
import SpecialForm from "./Components/hooks/SpecialForm";
import CardWithCambo from "./Components/CardwithCambo";
import UseEffect from "./Components/hooks/Useeffecthook";
import TodoList from "./Components/Todolist";
import Useref from "./Components/hooks/Useref";
import ConditionalRendering from "./Components/ConditionalRendering";
import Home from "./Context/Home";
import Profile from "./bootstrap/Profile";
import BsCards from "./bootstrap/BScards";
import NavBar from "./bootstrap/Navbar";
import NavbarTailwind from "./Tailwind.css/Navbar_tailwind";
import StudentForm from "./Tailwind.css/StudentForm";
import Signup from "./ProjectJSX/Signup";
import Login from "./ProjectJSX/Login";
import Registration from "./ProjectJSX/Regitrationgrower";
import AvailProducts from "./ProjectJSX/AvailProducts";
import ItemManager from "./ProjectJSX/Itemmanager";
import MainNavbar from "./ProjectJSX/MainNavbar";
import { BrowserRouter } from "react-router-dom";
import GrowersDashboard from "./ProjectJSX/GrowerDashboard";
import FindGrower from "./ProjectJSX/FindGrower";
import ConsumerReg from "./ProjectJSX/ConsumerReg";
import ConsumerDashboard from "./ProjectJSX/ConsumerDashboard";
import MainDashboard from "./ProjectJSX/MainDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <FilterCards/> */}
      {/* < ConditionalRendering/> */}
      {/* <Counter/> */}
      {/* <Useref/> */}
      {/* <SpecialForm/> */}
      {/* <CardWithCambo/> */}
      {/* <UseEffect/> */}
      <TodoList />
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <BsCards></BsCards> */}
      {/* <NavbarTailwind/> */}
      {/* <StudentForm/> */}
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <AvailProducts/> */}
      {/* <ItemManager/> */}
      {/* <MainNavbar /> */}
      {/* <App /> */}
      {/* <FindGrower/> */}
      {/* <GrowersDashboard /> */}
      {/* <MainDashboard /> */}
      {/* <ConsumerDashboard /> */}
    </BrowserRouter>
  </React.StrictMode>
);
/*
<React.StrictMode>
   
     <Card/>
    <Card></Card>
    <Card></Card> 
    <Cardsshow/>
  </React.StrictMode>
  */
