import React, { useEffect, useId, useRef, useState } from 'react';

function Useref() 
{
    const[pwd,setPwd]=useState("");
    const [count,setCount]=useState(10);//intial 10 
    const refPwd=useRef();//refPwd: A useRef hook to reference the password input element.
    const id=useId();
    const id2=useId();

    useEffect(()=>{
         // If count is less than 1, disable the input and change its background color
        console.log(refPwd);
        if(count>=1)
            setCount(count-1);
        else
            {
                //refPwd.current.disabled=true;
                refPwd.current.style.backgroundColor="lightcoral";

            }
    },[pwd]); // useEffect dependency array, will run whenever 'pwd' changes

  return (
        <>
           Enter Password: <input type="text" id={id+"-txt"} maxLength={15} value={pwd} onChange={(dpp)=>setPwd(dpp.target.value)} ref={refPwd} />
           Length={count} 
           <span id={id2}></span>
        </>
  )
}

export default Useref

/*
The initial length being displayed as 9 is due to the initial state of the count variable being set to 10 and the initial render of the component. The useEffect hook runs after the initial render, and in the first run, it decrements the count by 1.

Here's the flow:

The component renders with an initial state: count is 10.
useEffect runs after the initial render and checks if count (10) is greater than or equal to 1.
Since count is greater than 1, it decreases the count by 1 (setCount(count - 1)), resulting in the new value of count being 9.
The component re-renders with the updated state (count is now 9), displaying "Length=9".
*/