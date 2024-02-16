import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Megha",  
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/MeghashreeK");
        const json=await data.json();
        console.log(json);
        this.setState({name:json.name}); 
    }

    componentWillUnmount(){
        console.log("Unmounted");
    }
    
    render(){
        const {name}=this.state;
        return(
            <div>
            <h1>Name:{name}</h1>
        </div>
        );
    }  
}
export default UserClass;