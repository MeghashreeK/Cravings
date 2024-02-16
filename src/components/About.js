import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        //console.log("parent component");
    }
    render() {
        //console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <UserClass name={"child1"} location={"Mangalore"} />
            </div>

        );
    }
}
export default About;


