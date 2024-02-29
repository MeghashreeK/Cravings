import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import {useDispatch } from "react-redux";


const ItemList=({items})=>{
const dispatch=useDispatch();
const handleAddItem=(item)=>{
    dispatch(addItem(item));
}
    

    return(
        <div>
            {items.map((item)=><div  key={item.card.info.id}>
                <div>
                    <span className="text-red-500">{item.card.info.name}</span>
                    <span> ₹{(item.card.info.price || item.card.info.defaultPrice)/100}</span>
                </div>
                <img className="w-16" src={CDN_URL+item.card.info.imageId}/>
                <button className="border" onClick={()=>handleAddItem(item)}>Add+</button>
                <p className="text-pink-800">{item.card.info.description}</p>
                </div>)}
            </div>
    );
}
export default ItemList;