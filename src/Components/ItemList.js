import { mediaUrl } from "../Utils/constant";

const ItemList = (itemCards)=>{
    console.log(itemCards.items);
    return (
        <div>
        {itemCards.items.map((res)=>(
            <div className= "m-2 p-2 border-black border-b-2 text-left " key={res.card.info.id}>
                <div className="flex justify-between">
                    <div className="py-2">
                        <span>{res.card.info.name}</span>
                        <span> - ₹ {res.card.info.price? res.card.info.price/100:res.card.info.defaultPrice/100}</span>
                        <p className="text-xs">{res.card.info.description}</p>
                    </div>
                    <div>
                        <button className="bg-white mx-6  p-2 text-green-500 text-base absolute rounded-lg font-bold">Add +</button>
                        <img className="w-32" src={mediaUrl+res.card.info.imageId}/>
                    </div>
                </div>


                
            </div>
            
        )
        )}
        </div>
    );
}

export default ItemList;