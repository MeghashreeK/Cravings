import { Link } from "react-router-dom";
import logo from "../images/logo-cravings.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import menu from "../images/menu.png";
import back from "../images/back.png";

const Header = () => {
    const [activeLink, setActiveLink] = useState("");

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const cartItems = useSelector((store) => store.cart.items);

    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const menuFunction=()=>{
        setIsMenuOpen(true);
    }

    return (
        <div className="flex justify-between items-center shadow-lg sticky top-0 bg-white">
            <div className="logoContainer">
                <img className="w-24 sm:w-36" src={logo} alt="logo" />
            </div>

            <div onClick={() => menuFunction()}>
                <img className="w-7 h-7 mr-8 sm:hidden" src={menu} alt="menu--v1" />
            </div>

            {isMenuOpen && (<div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50">
              <img className="w-7 h-7 m-5" src={back} alt="back"/>

            </div>)}

            <div className="hidden sm:flex">
                <ul className="flex space-x-6 m-4 text-orange-600 text-[18px] font-Montserrat pr-16">
                    <li className={activeLink === "Home" ? "font-bold" : ""} onClick={() => handleNavLinkClick("Home")}><Link to="/" className={`hover:font-bold ${window.location.href === "http://localhost:1234/" ? "font-bold" : ""}`}>Home</Link></li>
                    <li className={activeLink === "restaurants" ? "font-bold" : ""} onClick={() => handleNavLinkClick("restaurants")}><Link to="/restaurants" className={`hover:font-bold ${window.location.href === "http://localhost:1234/restaurants" ? "font-bold" : ""}`}>Restaurants</Link></li>
                    <li className={activeLink === "about" ? "font-bold" : ""} onClick={() => handleNavLinkClick("about")}><Link to="/about" className={`hover:font-bold ${window.location.href === "http://localhost:1234/about" ? "font-bold" : ""}`}>About Us</Link></li>
                    <li className={activeLink === "contact" ? "font-bold" : ""} onClick={() => handleNavLinkClick("contact")}><Link to="/contact" className={`hover:font-bold ${window.location.href === "http://localhost:1234/contact" ? "font-bold" : ""}`}>Contact Us</Link></li>
                    <li className={activeLink === "cart" ? "font-bold" : ""} onClick={() => handleNavLinkClick("cart")}><Link to="/cart" className={`hover:font-bold ${window.location.href === "http://localhost:1234/cart" ? "font-bold" : ""}`}>Cart-({cartItems.length}Items)</Link></li>
                    <button>LogIn</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;


