import {mediaUrl} from "../Utils/constant"
const RestarauntCard = (props) =>{
    const {resData} = props;
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, slaString} = resData?.info;
    console.log(resData.info);
    return(
       <div className="res-card">
          <img  className="res-logo" src={mediaUrl+cloudinaryImageId}/>
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} Stars</h4>
          <h4>{slaString}</h4>
          <h4>{costForTwo}</h4>
       </div>
    );
 }

 export default RestarauntCard;