import { useContext } from "react";
import UserContext from "./UserContext";

const GetUserData=()=>{
const data=useContext(UserContext);
console.log(data); //{name: 'Meghashree'}
}
export default GetUserData;
