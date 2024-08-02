//Lets first look what is the need of creating hook 
//without hook : veiw is not updated and rendered.. in without hook we click on increment buttton but function is calling but it not rendering and updating veiw value in console

//Lets slve this problem using hooks
import React, { useState } from "react";

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);//intial value is in usestate
      //[variable,function]

  // Function to handle the button click and increment the count by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle the button click and increment the count by 3
  /*const handleIncrementByThree = () => {
    setCount(count + 3);*/
    const handleIncrementByThree = () => {
        setCount((count)=>count+1);//updates actual hcount variavle
        setCount((count)=>count+1);//3
        setCount((count)=>count+1);//4-rendered
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment Count by 1</button>
      <br></br>
      <br></br>
      <button onClick={handleIncrementByThree}>Increment Count by 3</button>
    </div>
  );
}

export default Counter;



