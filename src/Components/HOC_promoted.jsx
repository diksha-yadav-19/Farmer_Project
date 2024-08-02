import {ProductCard} from "./FilterCards";
 
const HOC_promoted=()=>{
   return (props)=>{
       const style={
           position:"absolute",
           padding:"3px",
           backgroundColor:"lightgrey",
           color:"black",
           marginLeft:"15px",
           borderRadius: "4px",
           marginTop:"22px"
       }
       return(
        //    <div style={{border:"1px solid black"}}>//outer div of promoted
        <div>
               <div style={style}>Promoted</div>
               <ProductCard {...props}></ProductCard>
           </div>

       )
   }

}
export default HOC_promoted;