import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks.js/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";



const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        // const data=await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING")
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>offline</h1>
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="flex flex-col min-h-screen sm:gap-12">
            <div className="flex justify-center mt-10 px-20 sm:space-x-3  m-4">

                <div className="flex flex-col items-center space-x-4 sm:flex-row sm:justify-center">
                    {/* input */}
                    <input type="text" data-testid="inputBox" className="border border-black mb-3 w-64 p-2 sm:w-80 rounded-sm sm:h-8 sm:mb-0" placeholder="Craving something? Search here!" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    {/* search */}
                    <button className="bg-orange-400 flex rounded-lg justify-center items-center w-14 px-10 h-8" onClick={() => {
                        const filteredRestaurants = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurants);
                    }}>search</button>

                </div>

                {/* topratedbutton */}
                <button className=" hidden sm:bg-orange-400 sm:flex sm:h-8 sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                    () => {
                        let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                        setfilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>

                {/* Price Ascend button */}
                <button className=" hidden sm:bg-orange-400 sm:flex sm:h-8 sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                    () => {
                        let sortedList = [...listOfRestaurant]
            sortedList.sort(
              (a,b) => Number(a.info.costForTwo.substr(1,4)) - Number(b.info.costForTwo.substr(1,4))
            );
            setfilteredRestaurant(sortedList);
                    }}>Price Ascend
                </button>

                {/* Price Descend Button */}
                <button className=" hidden sm:bg-orange-400 sm:flex sm:h-8 sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                    () => {
                        let sortedList = [...listOfRestaurant]
            sortedList.sort(
              (a,b) => Number(b.info.costForTwo.substr(1,4)) - Number(a.info.costForTwo.substr(1,4))
            );
            setfilteredRestaurant(sortedList);
                    }}>Price Descend
                </button>

            </div>

            <div className="flex flex-wrap justify-center sm:gap-5 w-50">
                {filteredRestaurant.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                    {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                </Link>)}
            </div>

            {/* Footer */}
            <div className="flex bg-black h-32 justify-center items-center mt-auto sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>
        </div>
    );
};
export default Body;  

