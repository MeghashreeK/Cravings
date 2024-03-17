import { useState, useEffect } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";


const ItemList = ({ items, showAddButton = true, cartButton = false}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const [quantity, setQuantity] = useState([1]);
    const [price, setPrice] = useState([]);

    const addQuantity = () => {
        setQuantity(parseInt(quantity) + 1);
    }

    const subQuantity = () => {
        if (quantity > 0) {
            setQuantity(parseInt(quantity) - 1);
        }
    }

    return (
        <div>
            {items.map((item) => <div data-testid="foodItems" key={item.card.info.id}>
                <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
                    <div className="flex flex-col items-start w-9/12 gap-1">
                    <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
                        <span>{item.card.info.name}</span>
                        <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100) * quantity}</span>
                        <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 flex flex-col items-center" >
                        <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
                        {showAddButton && <button className="border w-12 rounded-lg bg-orange-400 text-xs " onClick={() => handleAddItem(item)}>Add+</button>}
                        {cartButton && <button><button onClick={subQuantity}>-</button>{quantity}<button onClick={addQuantity}>+</button></button>}
                    </div>
                </div>
            </div>)}
        </div>

    );
}
export default ItemList;

