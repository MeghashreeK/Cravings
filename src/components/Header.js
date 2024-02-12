import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
let [btnName,setbtnName]=useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img width="200" className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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