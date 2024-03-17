import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const heading = React.createElement("h1", {id: "headint"}, "Namaste React 🚀");

// const Title = () =><h1 id="heading">Namaste React from JSX 🚀</h1>





const AppLayout = ()=>{
   return (
      <div className="container">
         
         <Header></Header>
         <Body/>
         //Body
         //Footer
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
