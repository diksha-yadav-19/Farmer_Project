import React, { useContext } from 'react';
import { contextEmail } from './Home';
import ListItems from './ListItems';

function Dashboard() 
{
    var activeUser=useContext(contextEmail);
  return (
    <div>
        <h1>Shopping Products</h1>
        <center> <h2>Welcome:{activeUser}</h2></center>
       
        <ListItems></ListItems>
    </div>
  )
}

export default Dashboard;