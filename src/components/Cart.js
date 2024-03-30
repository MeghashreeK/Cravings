import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";
import { CDN_URL } from "../utils/constants";
import {addItem,removeItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    // const subQuantity = (itemid) => {
    //     if(quantity[itemid]>1){
    //     setQuantity(prevState=>{
    //         const newState={...prevState};
    //         newState[itemid]=prevState[itemid]-1;
    //         return newState;
    //     })}
    //     else if(quantity[itemid]==1){
    //         setCartButton(false);
    //     }
    // }
    const handleAddItem = (item) => {
    
        const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);
    
        if (index !== -1) {
            dispatch(addItem(cartItems[index]))
        } 
    
    
    }
   

    const subQuantity = (item) => {
        const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);
    
        if (index !== -1) {
            dispatch(removeItem(cartItems[index]))
        }  
    }
console.log(cartItems);
    return (
        <div>
            {cartItems.map((item) => item.count  && item.count>0 && <div data-testid="foodItems" key={item.card.info.id}>
            <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
                    <div className="flex flex-col items-start w-9/12 gap-1">
                    <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
                        <span>{item.card.info.name}</span>
                        <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100)}</span>
                        <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 flex flex-col items-center" >
                        <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
                        { !item.count  && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => {handleAddItem(item)}}>Add+</button>)}
                       
                        { item.count &&
                        (<div className="border border-orange-400 px-2 rounded-lg">
                            <button className="px-5" onClick={()=>subQuantity(item)}>-</button>
                            {item.count}
                            <button className="px-5" onClick={()=>handleAddItem(item)}>+</button>
                        </div>)} 
                        
                    </div>
                </div>
            </div>)}
        </div>
    );
}
export default Cart;