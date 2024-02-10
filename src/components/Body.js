import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
// import resList from "../utils/mockData";
import resList1 from "../utils/fasosmockData";

const Body = () => {

   const [listOfRestaurant,setlistOfRestaurant]=useState(resList1);
   useEffect(()=>{fetchData()},[])
   
   const fetchData=async()=>{
    // const data=await fetch("https://corsproxy.org/?https://www.swiggy.com/mapi/homepage/getCards?lat=13.0687993&lng=74.99360039999999");
    const data=await fetch("https://corsproxy.org/?https://www.eatsure.com/v1/api/get_all_products/brand_id/20/store_id/10369/source_id/3");
    const json=await data.json();
    console.log(json);
    setlistOfRestaurant(json.data.collections[0].products);
   }; 

    return (
        <div className="body">
            <button className="filter-btn" onClick={
                () => {
                    // let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    let filteredList = listOfRestaurant.filter((res) => res.rating > 4.3);
                    setlistOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            <div className="restaurantContainer">
                {/* {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)} */}
                {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.product_id} resData={restaurant} />)}
            </div>
        </div>
    );
};
export default Body;  