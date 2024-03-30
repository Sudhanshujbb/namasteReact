import RestarauntCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../Utils/useOnlineStatus";
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

      setListOfRestaraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestraunts(json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const [searchText, setSearchText] = useState("");
    //conditional rendering 
    if(useOnlineStatus() == false){
      return <div>
        <h1>oops check YOur Connections. !!!</h1>
      </div>
    }
    if(listOfRestaraunts.length==0){
      return <Shimmer/>;
    }
    return(
       <div className="">
          <div className="flex">
            <div className="m-4 p-4">
                <input className="border border-solid border-black h-8 w-72" type="text" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
            </div>
            <button className="bg-green-100  px-4 py-2 m-4 rounded-lg" onClick={()=>{
              
              const filterdList = listOfRestaraunts.filter((restraunt)=>restraunt.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
              setFilteredRestraunts(filterdList);
            }}>Search</button>
            <button className="bg-gray-100  px-4 m-4" onClick={()=>{
                const filterdList = listOfRestaraunts.filter((restraunt)=>restraunt.info.avgRating>=4.0);
                setFilteredRestraunts(filterdList);
            }}>Top Rated Restaraunt</button>
          </div>
          <div className="flex flex-wrap">
            {filteredRestraunts.map((restaurants)=>(
               <Link to={"/restaurant/"+restaurants.info.id} key={restaurants.info.key}> <RestarauntCard resData ={restaurants}/></Link>
            ))}
             
          </div>
 
       </div>
    );
 }

 export default Body;