import { useState } from "react";

const User=(props)=>{
    const [count]=useState(0);
    return(
        <div>
            <h1>Count:{count}</h1>
            <h1>Name:{props.name}</h1>
            <h2>Location:Mangalore</h2>
        </div>
    );
}
export default User;