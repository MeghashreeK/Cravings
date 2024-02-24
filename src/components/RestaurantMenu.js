import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks.js/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo=useRestaurantMenu(resId);
    if (!resInfo) return <Shimmer />;
    // console.log(resInfo);

    const {
        name,
        avgRating,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info || {};

    // const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // const ss=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(ss);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    return (
        <div className="text-center">
            <h2>{name}</h2>
            <h2>{avgRating}</h2>
            {/* {itemCards && itemCards.length>0 && itemCards.map(items =><li key={items.card.info.id}>{items.card.info.name}</li>)} */}
            {/* {categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)} */}
            {/* {categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)} */}
            {categories.map((category)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
        </div>
    );
   

}
export default RestaurantMenu;
