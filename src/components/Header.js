import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../images/logo-cravings.png";

const Header = () => {
let [btnName,setbtnName]=useState("Login");
const onlineStatus=useOnlineStatus();

    return (
        <div className="flex justify-between items-center">
            <div className="logoContainer">
                <img width="200" className="logo" src={logo} alt="logo" />
            </div>
            <div className="flex">
                <ul className="flex space-x-6 m-4">
                    <li>Online:{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><img width="20" src="https://img.icons8.com/pastel-glyph/64/fast-cart.png" alt="fast-cart" /></li>
                    <li><button onClick={()=>{
                        btnName==="login"?setbtnName("logout"):setbtnName("login");
                        }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
