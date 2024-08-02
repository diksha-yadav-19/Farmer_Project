//Context : Context provides a way to pass data through the component tree without having to pass props down manually at every level.Context is designed to share data that can be considered “global” for a tree of React components. Data is passed top-down (parent to child) via props

import React, { createContext } from 'react';
import Dashboard from './Dashboard';
import JsonArray from '../Components/JSONAry';

var contextEmail= createContext();
var contextJson= createContext();
function Home() 
{
    const activeUser="dikshabti@gmail.com";
    
  return (
    <>
        <contextEmail.Provider value={activeUser}>
        <contextJson.Provider value={JsonArray}>
        <Dashboard></Dashboard>
        </contextJson.Provider>
        </contextEmail.Provider>
    </>
  )
}

export default Home;
export {contextEmail,contextJson}
























