//In this form we are using obj as used in Ajax in Full Stack..
//Destructuring : Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise and readable way

import React, { useState } from 'react'

function FullNameObj() 
{
    console.log("rendered");
    const [obj,setObj]=useState({
        fn:"f.name",
        ln:"l.Name",
        full:"full Name"
    });
   
const doUpdateObj=(event)=>{

    console.log(event.target);
    //let name=event.target.name;
    //let value=event.target.value;
    const {name,value}=event.target;
    //alert(name+"  "+value);
       // setObj({...obj,[name]:value});
       setObj({...obj,[name]:value});//agr hum ...obj h nhii likhte to hume ek bar m ek h value mil rahi thi yh to fn yh ln isliye humne destructing ki taki hue uski previous value bhi hume dekhne ko mile
  }
  //This function is responsible for updating the state object properties (fn and ln) based on the input values. It uses object destructuring to extract the name and value properties from the input event. Then, it uses the spread operator (...obj) to create a shallow copy of the current state object and updates the specified property ([name]: value).
    
  function doJoin()
  {
    let joined=obj.fn+" "+obj.ln;
    setObj({...obj,["full"]:joined})
  }
    
    
  return (
    <div>
    <p>
        <h2>Full Name App</h2>
    </p>
        <p>
        F.name: <input type="text" name="fn" onChange={doUpdateObj}  />{obj.fn}
        </p>
        <p>
        L.name: <input type="text" name="ln" onChange={doUpdateObj} />{obj.ln}
        </p>
        <p>
            <input type="button"   value="Do Join" onClick={doJoin}/>
        </p>   
        <p>
            Full Name {obj.full}
        </p>
    <p>
        {JSON.stringify(obj)}
    </p>
  
    </div>
     /* JSON.stringify(obj) is used to convert the JavaScript object obj into a JSON (JavaScript Object Notation) string.*/
  )
}

export default FullNameObj;