// import "./CardStyle.css";
import obj  from "./card.module.css";
import MyImage from "./MyImage";

//Method 1
/* export default function Card()
{
    return(
        <div style={{width:"200px",border:"1px black solid",height:"300px"}}>
           <center> <h4>My Information</h4></center>
        </div>
    )
}*/
//Method 2
/*function Card()
{   const styObj={
                width:"200px",
                border:"1px black solid",
                height:"300px",
                backgroundColor:"lightpink"
            }
    return(
        <div style={styObj}>
           <center> <h3>Product Details</h3></center>
        </div>
    )
}
*/
//Method 3
/*
function Card() {
    return(
      <div>
        <center className="card-outer">
          <p>My Information</p>
        </center>
      </div>
    );
  }
  */
 function Card(){
    return(
        <div className={obj.cardstyle}>
            <MyImage></MyImage>
          <center>
             <p>
"Merry Christmas! May your day be filled with joy, love, and the warmth of festive celebrations."</p>
<div className={obj.btn}>Read More...</div>
          </center>
        </div>
    )
 }
export default Card;
