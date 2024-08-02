import React, { useState } from "react";
import JsonArray from "./JSONAry";
import CardsShow from "./Cardsshow";
import FilterCards from "./FilterCards";

function Filterbuttons() {
  const uniqueCompanies = [...new Set(JsonArray.map((obj) => obj.company))];
  const [filteredJsonArray, setFilter] = useState(JsonArray);

  const compAry = [...uniqueCompanies, "All"]; 

  function doFilter(event) {
    if (event.target.value === "All") {
      setFilter(JsonArray);
      return;
    }
    const dataSel = JsonArray.filter((obj) => obj.company === event.target.value);
    setFilter(dataSel);
  }

  return (
    <>
      <center>
        <CompanyCambo data={compAry} filterFx={doFilter} />
        <FilterCards data={filteredJsonArray} />
      </center>
    </>
  );
}

function CompanyCambo({ data, filterFx }) {
  return (
    <>
      <select onChange={filterFx}>
        {data.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    </>
  );
}

export default Filterbuttons;





