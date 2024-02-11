import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        let i;
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"/>
                    <button>search</button>
                </div>
                <button className="filter-btn" onClick={
                    () => {
                        let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setlistOfRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            <div className="restaurantContainer">
                {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};
export default Body;  