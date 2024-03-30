import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    
    const restaurantList = useRestaurantMenu(resId);
    if(restaurantList==null){
        return <Shimmer/>
    }

  
    const {name, costForTwoMessage, restaurantId, cuisines, price, defaultPrice }  = restaurantList?.data?.cards[2]?.card?.card?.info;
    // console.log(name);
    const {itemCards }= restaurantList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
    // console.log(itemCards[0]);
    return(
        <div>
            <h1> {name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            
            <ul>
                {itemCards.map(res=><li key={res.card.info.id}>{res.card.info.name}- {"Rs. "}
                {res.card.info.price/100 || res.card.info.defaultPrice/100}
                </li> )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;