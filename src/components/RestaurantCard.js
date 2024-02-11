import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
    }=resData?.info;
    const {
        deliveryTime,
    }=resData?.info.sla;
    return (
        <div className="res-card">
            <div>
                <img className="foodImage" alt="food-image" src={CDN_URL+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4 className="text">{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;

