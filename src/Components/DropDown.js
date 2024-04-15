import { useState } from "react";
import ItemList from "./ItemList";

const DropDown = (info)=>{
    const {title, itemCards} = info.info;
    // console.log(info )
    const [showItem, setShowItem] = useState(false);
    const dropDown = ()=>{
        setShowItem(!showItem);
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 cursor-pointer" onClick={dropDown}>
                <div className="flex justify-between">
                    <h1 className="font-bold text-lg">{title} ({itemCards.length})</h1>
                    <p>🔽</p>
                </div>
                {showItem && <ItemList items={itemCards}/>}

            </div>
        </div>
    );
}

export default DropDown;