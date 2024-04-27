import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useState } from "react";
import DropDown from "./DropDown";
const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(1);
    const restaurantList = useRestaurantMenu(resId);
    if(restaurantList==null){
        return <Shimmer/>
    }
    
  
    // console.log(restaurantList);
    const {name, costForTwoMessage, restaurantId, cuisines, price, defaultPrice }  = restaurantList?.data?.cards[2]?.card?.card?.info;
    const {itemCards }= restaurantList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
    const itemList = restaurantList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((res)=>res.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return(
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl"> {name}</h1>
            <h4 className="font-bold text-lg my-4">{cuisines.join(", ")}</h4>
            
            <ul>
                {itemList.map((res, index)=><DropDown key={res.card.card.title}  
                info = {res.card.card} 
                showItem = {index==showIndex?true: false}
                setShowIndex = {()=>setShowIndex(index)}


                /> )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;