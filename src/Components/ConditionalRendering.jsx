
export default function ConditionalRendering() {
    return (
      <div>
        <h1>Diksha's Packaging List</h1>
        <ul>
          <Item carry={true} rating={8} name="Books" />
          <Item carry={true} rating={10} name="Mobile" />
          <Item carry={false} rating={5} name="Laptop" />
          <Item carry={true} rating={null} name="Pen" />
        </ul>
      </div>
    );
  }
  // Method 1
  /*function Item({ carry, rating, name }) {
    let resp=name;
    if(rating>0)
    resp=resp+" 🆗 ";
 else
    resp=resp+" ❌";

    return (
      <li>
        {resp}
   
      </li>
    );
  }*/
  //Method 2
  /*
  function Item({ name, rating, carry }) 
{
      if(rating>0){
       return (<li >{name} ✔ </li>)
      }
      return (<li >{name} ✖ </li>)
  }*/
//Method 3
/*
function Item({ name, rating,carry }) 
{
       return (
             <li >{name} {rating>0? " ✔" : "✖"}   </li>
          )
}
*/
//Method 4
/*
function Item({ name, rating,carry }) 
{
       return (
             <li>
               {name}
              {rating>0 && "✔"}
              {rating==0 && " ✖"}
                            
             </li>
          )
  }*/
  //Method 5
  /*
  function Item({ name, rating,carry }) 
{
  
       return (
         <>
           
             <li>{name} 
             {rating>0? 
               ( <input type="button" value="Accept"/>) 
             :
              <input type="button" value="Reject"/>}
             </li>
           </>
          )
  }*/
  //Method 6
  /*
  function Item({ name, rating,carry }) 
{
      // if(carry==false ){
      //  return null;
      // }
      // return <li className="item">{name} (rating:{rating}) </li>;
      
     return(<>
          {carry==true && (<li>{name}   {rating}</li>) }
      </>
     )
  }*/
  //Method 7
  function Item({name,rating,carry})
{
    return <li>
              {rating>0? 
                  (<u>
                    {name+"("+carry+")"} 
                  </u>) 
              :
              (
                <strike>{name +"  "+carry}</strike>
                )
              }  
          </li>  
}

  
