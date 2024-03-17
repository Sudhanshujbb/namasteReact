import RestarauntCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";
const Body = ()=>{
    const [listOfRestaraunts, setListOfRestaraunts] = useState(resList);
    return(
       <div className="body-container">
          <div className="search">
            <button onClick={()=>{
                const filterdList = resList.filter((restraunt)=>restraunt.info.avgRating>=4.0);
                setListOfRestaraunts(filterdList);
            }}>Top Rated Restaraunt</button>
          </div>
          <div className="res-card-container">
            {listOfRestaraunts.map((restaurants)=>(
                <RestarauntCard key={restaurants.info.key} resData ={restaurants}/>
            ))}
             
          </div>
 
       </div>
    );
 }

 export default Body;