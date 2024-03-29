import React from "react";
class UserClass extends React.Component{
    constructor(props){
        // console.log("Child constructor");
        super(props);
        this.state={
            userInfo: {
                name:"Dummy",
                location: "NoWhere",
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Sudhanshujbb");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json 
        })
    }
    render(){
        // console.log("Child Render");
        const {name, location, avatar_url} = this.state.userInfo;
        
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>{name}</h2>
                <h3>{location}</h3>
            </div>
        );
    }
}

export default UserClass;