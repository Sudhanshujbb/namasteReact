import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id: "headint"}, "Namaste React 🚀");
const Title = () =><h1 id="heading">Namaste React from JSX 🚀</h1>

const HeadingComponent = ()=>{
   return (
      <div className="container">
         {heading}
         <Title/>
         <h1>Namaste React from Functional Component 🚀</h1>
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
