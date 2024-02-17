import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        // const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING");
        const data=await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
  const onlineStatus=useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>offline</h1>
    }


    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRestaurants = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurants);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={
                    () => {
                        let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                        setfilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            <div className="restaurantContainer">
                {filteredRestaurant.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>)}
            </div>
        </div>
    );
};
export default Body;  