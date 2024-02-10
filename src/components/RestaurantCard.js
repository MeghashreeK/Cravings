import { CDN_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
//     const {resData}=props;
//     const {
//         cloudinaryImageId,
//         name,
//         cuisines,
//         costForTwo,
//         avgRating,
//     }=resData?.info;
//     const {
//         deliveryTime,
//     }=resData?.info.sla;
//     return (
//         <div className="res-card">
//             <div>
//                 <img className="foodImage" alt="food-image" src={CDN_URL+cloudinaryImageId} />
//                 <h3>{name}</h3>
//                 <h4 className="text">{cuisines.join(", ")}</h4>
//                 <h4>{costForTwo}</h4>
//                 <h4>{avgRating}</h4>
//                 <h4>{deliveryTime} minutes</h4>
//             </div>
//         </div>
//     );
// };


const RestaurantCard = (props) => {
    const {resData}=props;
    const {
        product_imageUrl,
        product_name,
        price,
        rating,
    }=resData;
    
    return (
        <div className="res-card">
            <div>
                <img className="foodImage" alt="food-image" src={product_imageUrl} />
                <h3>{product_name}</h3>
                <h4>{price}</h4>
                <h4>{rating}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;

// why react?,2 types of export one is default another is Named also the ways to import and export,industry standards