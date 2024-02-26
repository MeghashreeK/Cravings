// import { useContext } from "react";
// import UserContext from "./UserContext";

// const GetUserData=()=>{
// const data=useContext(UserContext);
// console.log(data); 
// }
// export default GetUserData;

import React from "react";
import UserContext from "./UserContext";

class GetUserData extends React.Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                 {(data)=>{console.log(data);}}
                </UserContext.Consumer>
            </div>
        );
    }
}
export default GetUserData;