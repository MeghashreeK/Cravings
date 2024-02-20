import { Link } from "react-router-dom";
import logo from "../images/logo-cravings.png";
import {useState} from "react";


const Header = () => {
    const [activeLink, setActiveLink] = useState("");

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
    return (
        <div className="flex justify-between items-center shadow-lg sticky top-0 bg-white">
            <div className="logoContainer">
                <img width="200" className="logo" src={logo} alt="logo" />
            </div>
            <div className="flex">
                <ul className="flex space-x-6 m-4 text-orange-600 text-[18px] font-Montserrat pr-16">
                    <li className={activeLink === "Home" ? "font-bold" : ""} onClick={() => handleNavLinkClick("Home")}><Link to="/" className={window.location.href==="http://localhost:1234/"? "font-bold" : ""}>Home</Link></li>
                    <li className={activeLink === "restaurants" ? "font-bold" : ""} onClick={() => handleNavLinkClick("restaurants")}><Link to="/restaurants" className={window.location.href==="http://localhost:1234/restaurants"? "font-bold" : ""}>Restaurants</Link></li>
                    <li className={activeLink === "about" ? "font-bold" : ""} onClick={() => handleNavLinkClick("about")}><Link to="/about" className={window.location.href==="http://localhost:1234/about"? "font-bold" : ""}>About Us</Link></li>
                    <li className={activeLink === "contact" ? "font-bold" : ""} onClick={() => handleNavLinkClick("contact")}><Link to="/contact" className={window.location.href==="http://localhost:1234/contact"? "font-bold" : ""}>Contact Us</Link></li>
                    <li className={activeLink === "cart" ? "font-bold" : ""} onClick={() => handleNavLinkClick("cart")}><Link to="/cart" className={window.location.href==="http://localhost:1234/cart"? "font-bold" : ""}>Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;

