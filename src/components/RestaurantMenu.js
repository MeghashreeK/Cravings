import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        console.log(resId);
        setresInfo(json.data);
        console.log(json.data?.cards[2]?.card?.card?.info?.name);
        console.log(json.data?.cards[2]?.card?.card?.info?.avgRating);
        console.log(json.data?.cards[2]?.card?.card?.info?.costForTwoMessage);

    }

    if (!resInfo) return <Shimmer />;

    const {
        name,
        avgRating,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

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

