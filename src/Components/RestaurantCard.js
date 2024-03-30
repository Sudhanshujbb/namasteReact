import {mediaUrl} from "../Utils/constant"
const RestarauntCard = (props) =>{
    const {resData} = props;
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, slaString} = resData?.info;
    console.log(resData.info);
    return(
       <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300">
          <img  className="res-logo" src={mediaUrl+cloudinaryImageId}/>
          <h2 className="font-bold text-lg">{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} Stars</h4>
          <h4>{slaString}</h4>
          <h4>{costForTwo}</h4>
       </div>
    );
 }

 export default RestarauntCard;