import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../images/logo-cravings.png";
import cart from "../images/cart-cravings.png";

const Header = () => {
    let [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const [activeLink, setactiveLink] = useState([]);

    const handleNavLinkClick = (linkName) => {
        setactiveLink(linkName);
    }

    return (
        <div className="flex justify-between items-center shadow-lg sticky top-0 bg-white">
            <div className="logoContainer">
                <img width="200" className="logo" src={logo} alt="logo" />
            </div>
            <div className="flex">
                <ul className="flex space-x-6 m-4 text-orange-600 text-[18px] font-Montserrat pr-16">
                    {/* <li>Online:{onlineStatus?"🟢":"🔴"}</li> */}
                    <li><Link to="/" className={activeLink === "Home" ? "font-bold" : ""} onClick={()=>handleNavLinkClick("Home")}>Home</Link></li>
                    <li><Link to="/restaurants" className={activeLink === "Restaurants" ? "font-bold" : ""} onClick={()=>handleNavLinkClick("Restaurants")}>Restaurants</Link></li>
                    <li><Link to="/about" className={activeLink === "About" ? "font-bold" : ""} onClick={()=>handleNavLinkClick("About")}>About Us</Link></li>
                    <li><Link to="/contact" className={activeLink === "Contact" ? "font-bold" : ""}onClick={() => handleNavLinkClick("Contact")}>Contact Us</Link></li>
                    {/* <li><Link to="/grocery">Grocery</Link></li> */}
                    {/* <li><img width="20" src="https://img.icons8.com/pastel-glyph/64/fast-cart.png" alt="fast-cart" /></li> */}
                    <li><Link to="/cart" className={activeLink === "Cart" ? "font-bold" : ""}onClick={() => handleNavLinkClick("Cart")}>Cart</Link></li>
                    {/* <li><button onClick={()=>{
                        btnName==="login"?setbtnName("logout"):setbtnName("login");
                        }}>{btnName}</button></li> */}
                </ul>
            </div>
        </div>
    );
};
export default Header;

