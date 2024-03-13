import { Link } from "react-router-dom";
import logo from "../images/logo-cravings.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import menu from "../images/menu.png";
import back from "../images/back.png";
import cart from "../images/cart-cravings.png"

const Header = () => {
    const [activeLink, setActiveLink] = useState("");
    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const cartItems = useSelector((store) => store.cart.items);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuFunction = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const [filteroptions, setFilteredoptions] = useState(false);
    const filterFunction = () => {
        setFilteredoptions(!filteroptions);
    }

    return (
        <div className="flex justify-between items-center shadow-lg sticky top-0 bg-white">
            <div className="logoContainer">
                <img className="w-24 sm:w-36" src={logo} alt="logo" />
            </div>

            <div onClick={() => menuFunction()}>
                <img className="w-7 h-7 mr-8 sm:hidden" src={menu} alt="menu--v1" />
            </div>
            {/* mobile header */}
            {isMenuOpen && (<div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 sm:hidden">

                <img className="w-7 h-7 m-5 " src={back} alt="back" onClick={() => menuFunction()} />
                <div className="flex justify-center">
                    <ul className="flex flex-col font-Montserrat items-center gap-5  text-orange-500">

                        <li className={activeLink === "Home" ? "font-bold" : ""} onClick={() => handleNavLinkClick("Home")}>
                            <Link to="/" className={`hover:font-bold ${window.location.href === "http://localhost:1234/" ? "font-bold" : ""}`}>Home</Link>
                        </li>








                        <div className={`flex ${filteroptions ? 'border border-orange-300' : ''} rounded-lg  justify-center`}>
                            <div className="flex  flex-col gap-3">
                                <div className="flex justify-center">
                                    <li className={activeLink === "restaurants" ? "font-bold" : ""} onClick={() => { handleNavLinkClick("restaurants"); filterFunction(); }} >
                                        <Link to="/restaurants" className={`hover:font-bold ${window.location.href === "http://localhost:1234/restaurants" ? "font-bold" : ""}`}>
                                            Restaurants
                                        </Link>
                                    </li>
                                </div>
                                {
                                    filteroptions && (<div className="flex flex-col px-5">
                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" id="topRatedCheckbox" className="appearance-none h-3 w-3 border-2 border-orange-300 rounded-md checked:bg-orange-600 checked:border-transparent" />
                                            <label htmlFor="topRatedCheckbox">Top Rated Restaurants</label>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" id="topRatedCheckbox" className="appearance-none h-3 w-3 border-2 border-orange-300 rounded-md checked:bg-orange-600 checked:border-transparent" />
                                            <label htmlFor="PriceAscendCheckbox">Price Ascend</label>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" id="topRatedCheckbox" className="appearance-none h-3 w-3 border-2 border-orange-300 rounded-md checked:bg-orange-600 checked:border-transparent" />
                                            <label htmlFor="PriceDescendCheckbox">Price Descend</label>
                                        </div>

                                    </div>)
                                }

                            </div>
                        </div>










                        <li className={activeLink === "about" ? "font-bold" : ""} onClick={() => handleNavLinkClick("about")}>
                            <Link to="/about" className={`hover:font-bold ${window.location.href === "http://localhost:1234/about" ? "font-bold" : ""}`}>About Us</Link>
                        </li>
                        <li className={activeLink === "FAQ" ? "font-bold" : ""} onClick={() => handleNavLinkClick("FAQ")}>
                            <Link to="/FAQ" className={`hover:font-bold ${window.location.href === "http://localhost:1234/FAQ" ? "font-bold" : ""}`}>FAQ</Link>
                        </li>
                        <li className={activeLink === "cart" ? "font-bold relative" : "relative"} onClick={() => handleNavLinkClick("cart")}>
                            <Link to="/cart" className={`hover:font-bold ${window.location.href === "http://localhost:1234/cart" ? "font-bold" : ""}`}><img className="w-8 h-8" src={cart} />
                                <div className="absolute top-[-3px] left-4 bg-orange-500 rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">{cartItems.length}</div>
                            </Link>
                        </li>
                        <button>LogIn</button>
                    </ul>
                </div>

            </div>)}
            {/* header for others */}
            <div className="hidden sm:flex">
                <ul className="flex sm:text-[15px] space-x-6 m-4 text-orange-500 md:text-[18px] font-Montserrat pr-16">
                    <li className={activeLink === "Home" ? "font-bold" : ""} onClick={() => handleNavLinkClick("Home")}>
                        <Link to="/" className={`hover:font-bold ${window.location.href === "http://localhost:1234/" ? "font-bold" : ""}`}>Home</Link>
                    </li>
                    <li className={activeLink === "restaurants" ? "font-bold" : ""} onClick={() => handleNavLinkClick("restaurants")}>
                        <Link to="/restaurants" className={`hover:font-bold ${window.location.href === "http://localhost:1234/restaurants" ? "font-bold" : ""}`}>Restaurants</Link>
                    </li>
                    <li className={`activeLink === "about" ? "font-bold" : "" text-center`} onClick={() => handleNavLinkClick("about")}>
                        <Link to="/about" className={`hover:font-bold ${window.location.href === "http://localhost:1234/about" ? "font-bold" : ""}`}>About Us</Link>
                    </li>
                    <li className={`activeLink === "FAQ" ? "font-bold" : "" text-center`} onClick={() => handleNavLinkClick("FAQ")}>
                        <Link to="/FAQ" className={`hover:font-bold ${window.location.href === "http://localhost:1234/FAQ" ? "font-bold" : ""}`}>FAQ</Link>
                    </li>
                    <li className={activeLink === "cart" ? "font-bold relative" : "relative"} onClick={() => handleNavLinkClick("cart")}>
                        <Link to="/cart" className={`hover:font-bold ${window.location.href === "http://localhost:1234/cart" ? "font-bold" : ""}`}><img className="w-8 h-8" src={cart} />
                            <div className="absolute top-[-3px] left-4 bg-orange-500 rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">{cartItems.length}</div>
                        </Link>
                    </li>
                    <button>LogIn</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;


