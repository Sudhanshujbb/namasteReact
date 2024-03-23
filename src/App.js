import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import Error from "./Components/Error";
import RestarauntCard from "./Components/RestaurantCard";
import RestaurantMenu from "./Components/RestaurantMenu";


const heading = React.createElement("h1", {id: "headint"}, "Namaste React 🚀");

// const Title = () =><h1 id="heading">Namaste React from JSX 🚀</h1>


const AppLayout = ()=>{
   return (
      <div className="container">
         
         <Header></Header>
         <Outlet/>
   
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
   {
      path:"/",
      element: <AppLayout/>,
      children:[
         {
            path:'/',
            element: <Body/>,
            
         },
         {
            path: "/contact",
            element: <ContactUs/>
         },
         {
            path: "/about", 
            element: <About/>
         },
         {
            path: "/restaurant/:resId", 
            element: <RestaurantMenu/>
         },
      ],
      // errorElement:<Error/>
   },
   

])
root.render(<RouterProvider router={router}/>);
