import obj  from "./card.module.css";
import JsonArray from "./JSONAry.jsx";
function ProductCard(props)
{
    return(
        <div className={obj.cardstyle}>
            <p>
               <center>
                <img src={props.path} alt="" width={200} height={200} />
               </center>
            </p>
            <center>
            <p>
               ProductName:{props.product}
            </p>
            <p>
                Company:{props.company}
            </p>
            <p>
                Price:{props.price}
            </p>
            <p>
                Model:{props.model}
            </p>
            </center>
        </div>
    )
    }
function CardsShow() 
{
  return(
    <div style={{display:"flex","flex-wrap":"wrap"}}>
        
           {
            JsonArray.map((obj)=>
            {
                return(
                    <ProductCard {...obj} >
                        {obj.path}
                    </ProductCard>
                ) 
            }
            )
           }
    </div>
  )
}

export default CardsShow;




