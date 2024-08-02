import React from "react";
import JsonArray from "./JSONAry";

function Filterbuttons() {
  const uniqueCompanies = [...new Set(JsonArray.map((obj) => obj.company))];//Set ki value repeat nhii hoti 

  function genButtons(company) {
    return <input key={company} type="button" value={company} />;
  }
  return (
    <>
      <div>
        {uniqueCompanies.map(genButtons)}
      </div>
      <select>
        {uniqueCompanies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    </>
  );
}

export default Filterbuttons;
// The Set is used to filter out duplicate company names, and the map function is employed to create the corresponding JSX elements. The key attribute is added to each element to ensure efficient rendering and updates by React.