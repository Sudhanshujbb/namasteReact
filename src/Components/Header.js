import {logoUrl} from "../Utils/constant";
import { useState } from "react"; 
import { Link } from "react-router-dom";
export const Header = ()=>{
   const [btnName, setBtnName] = useState("Login");
    return(
       <div className="flex justify-between items-center m-1 bg-pink-100">
          <div className="logo-container">
             <img className="w-32" src={logoUrl}/>
          </div>
          <div className="nav-items">
                <ul className="flex ">
                   <li className="p-4 m-4 font-bold"><Link to="/">Home</Link></li>
                   <li className="p-4 m-4 font-bold"><Link to="/about">About</Link></li>
                   <li className="p-4 m-4 font-bold"><Link to="/contact">Contact</Link></li>
                   <li className="p-4 m-4 font-bold"><Link to="/grocery">Grocery</Link></li>
                   <li className="p-4 m-4 font-bold">Cart</li>
                   <button className="login-btn p-4 m-4 font-bold" onClick={()=>{
                     btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
                   }}>{btnName}</button>
                </ul>
          </div>
       </div>
    );
 }

 export default Header;