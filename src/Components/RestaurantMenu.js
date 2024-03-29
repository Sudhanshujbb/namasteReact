import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MenuApi } from "../Utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>{
    const [restaurantList, setRestaurantList] = useState([]);
   useEffect( ()=>{
        fetchData();
    }, []);
    const {resId} = useParams();
    
    const fetchData = async ()=>{
        const data =  await fetch(MenuApi +resId);
        const json = await data.json();
        console.log(json);
        setRestaurantList(json);

    }
    if(restaurantList.length==0){
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