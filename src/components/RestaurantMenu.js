import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks.js/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex,setShowIndex]=useState(0);
    const { resId } = useParams();

    const resInfo=useRestaurantMenu(resId);
    if (!resInfo) return <Shimmer />;
   
    const {
        name,
        avgRating,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info || {};


    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className="text-center">
            <h2>{name}</h2>
            <h2>{avgRating}</h2>
            {categories.map((category,index)=><RestaurantCategory 
            key={category?.card?.card?.title} 
            showItems={index===showIndex && true} 
            setShowIndex={()=>{
                if(index!==showIndex)
                {setShowIndex(index)}
                else
                {setShowIndex(null)}
            }}
            data={category?.card?.card}/>)}
           
        </div>
    );
   

}
export default RestaurantMenu;
