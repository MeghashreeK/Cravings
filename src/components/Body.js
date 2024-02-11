import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";


const Body = () => {

   const [listOfRestaurant,setlistOfRestaurant]=useState(resList);
   useEffect(()=>{fetchData()},[])
   
   const fetchData=async()=>{
    const data=await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setlistOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   }; 

    return (
        <div className="body">
            <button className="filter-btn" onClick={
                () => {
                    let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setlistOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            <div className="restaurantContainer">
                {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}</div>
        </div>
    );
};
export default Body;  
