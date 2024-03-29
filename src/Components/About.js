import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent DidMount");
    }
    render(){
        // console.log("Parent Render")
        return (
            <div>
                <h1>This is About Us Page</h1>
    
                <UserClass name="Sudhanshu Maurya (class)" location = "Mirzapur"/>
            </div>
        );

    }
}
export default About;