import RestarauntCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{
    const [listOfRestaraunts, setListOfRestaraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    useEffect(()=>{
      fetchData();
    }, []);

    const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
      const json = await data.json();
      console.log(json);

      setListOfRestaraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }

    const [searchText, setSearchText] = useState("");
    //conditional rendering 
    if(listOfRestaraunts.length==0){
      return <Shimmer/>;
    }
    return(
       <div className="body-container">
          <div className="search">
            <div>
                <input type="text" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
            </div>
            <button onClick={()=>{
              
              const filterdList = listOfRestaraunts.filter((restraunt)=>restraunt.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
              setFilteredRestraunts(filterdList);
            }}>Search</button>
            <button onClick={()=>{
                const filterdList = listOfRestaraunts.filter((restraunt)=>restraunt.info.avgRating>=4.0);
                setFilteredRestraunts(filterdList);
            }}>Top Rated Restaraunt</button>
          </div>
          <div className="res-card-container">
            {filteredRestraunts.map((restaurants)=>(
                <RestarauntCard key={restaurants.info.key} resData ={restaurants}/>
            ))}
             
          </div>
 
       </div>
    );
 }

 export default Body;