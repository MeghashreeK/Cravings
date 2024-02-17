import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo=useRestaurantMenu(resId);
    if (!resInfo) return <Shimmer />;
    console.log(resInfo);
    const {
        name,
        avgRating,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (
        <div>
            <h1>Menu</h1>
            <h2>{name}</h2>
            <h2>{avgRating}</h2>
            <p>{costForTwoMessage}</p>
            {/* {itemCards.map(items =><li key={items.card.info.id}>{items.card.info.name}</li>)} */}
            {itemCards && itemCards.length>0 && itemCards.map(items =><li key={items.card.info.id}>{items.card.info.name}</li>)}
        </div>
    );
   

}
export default RestaurantMenu;

