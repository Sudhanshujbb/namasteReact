import { useEffect, useState } from "react";
import { MenuApi } from "../Utils/constant";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect( ()=>{
        fetchData();
    });

    const fetchData= async ()=>{
        const data = await fetch(MenuApi+resId);
        const json = await data.json();

        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;