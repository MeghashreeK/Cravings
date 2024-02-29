import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
       dispatch(clearCart());
       console.log("cleared");
    }
    return(
        <div>
            <h1 className="font-bold">Cart</h1>
        <div>
            <button className="border-4" onClick={handleClearCart}>clear cart</button>
            <ItemList items={cartItems}/>
        </div>
        </div>
    );
}
export default Cart;