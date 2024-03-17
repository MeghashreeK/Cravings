import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";
import info from "../images/information.png";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("cleared");
    }



    return (
        <div className="flex flex-col justify-center px-2 sm:px-0 items-center mt-5 ">
            <div className="flex justify-center w-full sm:w-6/12 ">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img className="sm:w-6/12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Cart Empty" />
                        <div className="flex border-2 border-black"><p className="font-Montserrat italic text-black">Looks like your cart is on a diet! Let's feed it with some delicious delights!</p></div>
                        <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 sm:h-8 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Add Your Favorite Food!</button></Link>
                    </div>) : (
                    <div>
                        <ItemList items={cartItems} showAddButton={false} cartButton={true} />
                        {/* <button className="border-4" onClick={handleClearCart}>Clear Cart</button> */}
                        <div className="flex flex-col gap-3 px-4">
                            <h1 className="">Bill Details:</h1>
                            <div className="flex justify-between">
                                <span>Item Total</span>
                                <span>₹2796</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 justify-center items-center">
                                    <h1>Delivery Fee</h1>
                                    <img className="w-4 h-4" src={info} alt="info" />
                                </div>
                                <h1>₹40</h1>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 justify-center items-center">
                                    <h1>Platform Fee</h1>
                                    <img className="w-4 h-4" src={info} alt="info" />
                                </div>
                                <div className="flex">
                                    <h1>₹</h1>
                                    <h1 className="line-through text-gray-400 mr-1">5.00</h1>
                                    <h1>4</h1>
                                </div>
                            </div>
                            <div className="flex justify-between border-b-4">
                                <div className="flex justify-center items-center mb-2 gap-1">
                                    <h1>GST & Restaurant Charges</h1>
                                </div>
                                <h1>₹42.57</h1>
                            </div>
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span>₹490.57</span>
                            </div>
                            <div className="flex gap-5">
                                <button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5">Pay Now</button>
                                 <button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5" onClick={handleClearCart}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Cart;



