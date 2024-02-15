import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
        <h1>About</h1>
        <User name={"Meghashree Kunder"}/>
        <UserClass name={"Meghashree Kunder"} location={"Mangalore"}/>
    </div>
    );
}
export default About;