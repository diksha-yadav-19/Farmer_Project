import React, { useContext } from 'react';
import { contextJson } from './Home';


function ListItems() 
{
    var ary=useContext(contextJson);
    function genList(obj) {
        return (
          <div style={{ width: "300px", border: "2px black solid", margin: "10px",backgroundColor:'#F6F7C4' }}>
            <center>
              <img src={obj.path}  style={{ width:"200px", height: "200px" ,marginTop:"12px"}} />
              <p>{obj.path}</p>
              <p>Company: {obj.company}</p>
              <p>Price: {obj.price}</p>
              <hr />
            </center>
          </div>
        );
      }      
  return (
    <div style={{display:"flex"}}>
        {
            ary.map(genList)
        }
    </div>
  )
}

export default ListItems