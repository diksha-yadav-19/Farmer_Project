import React, { useState } from 'react';

function UserForm() {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [fullname, setFullname] = useState("");

  function updateLastName(event) {
    setLn(event.target.value);
  }

  function doJoin() {
    setFullname(fn+" "+ln);
  }

  return (
    <div>
      <p>
        <h2>User Form</h2>
      </p>
      <p>
        F.name: <input type="text" onChange={(event) => setFn(event.target.value)} />
      </p>
      <h2>Your First Name: {fn}</h2>
      <p>
        L.name: <input type="text" onChange={updateLastName} />
      </p>
      <h2>Your Last Name: {ln}</h2>
      <p>
        <input type="button" value="Get Full Name" onClick={doJoin} />
      </p>
      <h2>Your Full Name is: {fullname}</h2>
    </div>
  );
}

export default UserForm;
