import React, { useEffect, useState } from 'react';

//UseEffect is a hook in React that allows you to perform side effects in functional components. Side effects are actions or tasks that happen outside the scope of the component rendering, such as data fetching, subscriptions, or interacting with the browser's DOM. It is used when you want to do something after the component has been rendered.


function UseEffect() {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");

  /*useEffect(() => {
      console.log("Side Effect")
  });*/
  // on every re-render

  /*useEffect(() => {
      console.log("Side Effect")
  }, []);*/
  // []: it will be once

  useEffect(() => {
    console.log("Occasional Side Effect");
  }, [fn]); // occasional side effect it act as filter as it only changes the fn side effect every time and ln is only rerendering..

  console.log("Component Rendered");
  
  return (
    <div>
      <p>
        First Name:<input type="text" onChange={(event) => setFn(event.target.value)} />
      </p>
      <h3>First Name Veiw: {fn}</h3>
      <p>
      Last Name:<input type="text" onChange={(event) => setLn(event.target.value)} />
      </p>
      <h3>Last Name Veiw: {ln}</h3>
      <h3>Full Name: {fn + "   " + ln}</h3>
    </div>
  );
}

export default UseEffect;
