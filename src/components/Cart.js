import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("cleared");
    }



    return (
        <div className="flex flex-col min-h-screen">
            {cartItems.length === 0 ? (
                <div className="flex flex-col justify-center items-center p-11 gap-5">
                    <img className="w-3/12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Cart Empty" />
                    <p className="font-Montserrat italic text-black">Looks like your cart is on a diet! Let's feed it with some delicious delights!</p>
                    <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 h-8 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Add Your Favorite Food!</button></Link>
                </div>) : (
                <div>
                    <button className="border-4" onClick={handleClearCart}>Clear Cart</button>
                    <ItemList items={cartItems} showAddButton={false} cartButton={true} />
                </div>
            )}
              
              <div className="flex bg-black h-32 justify-center items-center mt-auto sm:h-16">
                    <div className="flex gap-5 sm:gap-8">
                        <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                        <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                    </div>
                </div>

        </div>
    );
}
export default Cart;



