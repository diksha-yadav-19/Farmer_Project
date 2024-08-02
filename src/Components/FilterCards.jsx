import obj  from "./card.module.css";
import HOC_promoted from "./HOC_promoted"
export function ProductCard(props)
{
    console.log("Promoted:", props.promoted);
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
    function FilterCards({data:dataJsonArray}) 
    {
        const PromotedCard=HOC_promoted(ProductCard);
        function genCard(obj)
        {
            return(
                
                obj.promoted?<PromotedCard {...obj}  key={obj.price}></PromotedCard>:<ProductCard {...obj}  key={obj.price}></ProductCard>
            ) 
        }
      return(
        <div style={{display:"flex","flex-wrap":"wrap"}}>
            
               {
                dataJsonArray.map(genCard)
               }
          
        </div>
        
          
      )
    }
    
    export default FilterCards;