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
        // <div className="flex flex-col justify-center  items-center mt-5 min-h-screen ">
        //     <div className="flex justify-center w-full px-2 sm:px-0 sm:w-6/12 flex-grow">
        //         {cartItems.length === 0 ? (
        //             <div className="flex flex-col justify-center items-center gap-5">
        //                 <img className="sm:w-6/12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Cart Empty" />
        //                 <div className="flex text-center"><p className="font-Montserrat italic text-black">Looks like your cart is on a diet! Let's feed it with some delicious delights!</p></div>
        //                 <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 sm:h-8 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Add Your Favorite Food!</button></Link>
        //             </div>) : (
        //             <div>
        //                 <ItemList items={cartItems}/>
        //                 <div className="flex flex-col gap-3 px-4">
        //                     <h1 className="">Bill Details:</h1>
        //                     <div className="flex justify-between">
        //                         <span>Item Total</span>
        //                         <span>₹2796</span>
        //                     </div>
        //                     <div className="flex justify-between">
        //                         <div className="flex gap-1 justify-center items-center">
        //                             <h1>Delivery Fee</h1>
        //                             <img className="w-4 h-4" src={info} alt="info" />
        //                         </div>
        //                         <h1>₹40</h1>
        //                     </div>
        //                     <div className="flex justify-between">
        //                         <div className="flex gap-1 justify-center items-center">
        //                             <h1>Platform Fee</h1>
        //                             <img className="w-4 h-4" src={info} alt="info" />
        //                         </div>
        //                         <div className="flex">
        //                             <h1>₹</h1>
        //                             <h1 className="line-through text-gray-400 mr-1">5.00</h1>
        //                             <h1>4</h1>
        //                         </div>
        //                     </div>
        //                     <div className="flex justify-between border-b-4">
        //                         <div className="flex justify-center items-center mb-2 gap-1">
        //                             <h1>GST & Restaurant Charges</h1>
        //                         </div>
        //                         <h1>₹42.57</h1>
        //                     </div>
        //                     <div className="flex justify-between">
        //                         <span>Total</span>
        //                         <span>₹490.57</span>
        //                     </div>
        //                     <div className="flex gap-5">
        //                         <button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5">Pay Now</button>
        //                          <button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5" onClick={handleClearCart}>Clear Cart</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        //     <div className="flex bg-black h-32 justify-center items-center sm:h-16 w-full">
        //         <div className="flex gap-5 sm:gap-8">
        //             <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
        //             <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
        //         </div>
        //     </div>
        // </div>
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


















// const Cart = () => {
//     const cartItems = useSelector((store) => store.cart.items);
//     const dispatch = useDispatch();
//     const handleClearCart = () => {
//         dispatch(clearCart());
//     }
 
//     const handleAddItem = (item) => {
   
//         const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);
   
//         if (index !== -1) {
//             const updatedItems = [...cartItems];
//             if (!updatedItems[index].count) {
//                 updatedItems[index] = {...updatedItems[index], count: 1};
//             } else {
//                 updatedItems[index] = {...updatedItems[index], count: updatedItems[index].count + 1};
//             }
//             dispatch(addItem(updatedItems))
//         }
   
   
//     }
   

//     const subQuantity = (item) => {
//         const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);
   
//         if (index !== -1) {
//             const updatedItems = [...cartItems];
//             if (updatedItems[index].count>1) {
//                 updatedItems[index] = {...updatedItems[index], count: updatedItems[index].count-1};
               
//             } else {
//                 updatedItems[index] = {...updatedItems[index]};
//                  delete updatedItems[index].count;
//             }
         
//             dispatch(addItem(updatedItems))
//         }  
//     }
// console.log(cartItems);
//     return (
//         <div>
//             {cartItems.map((item) => item.count  && item.count>0 && <div data-testid="foodItems" key={item.card.info.id}>
//             <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
//                     <div className="flex flex-col items-start w-9/12 gap-1">
//                     <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
//                         <span>{item.card.info.name}</span>
//                         <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100)}</span>
//                         <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
//                     </div>
//                     <div className="w-3/12 flex flex-col items-center" >
//                         <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
//                         { !item.count  && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => {handleAddItem(item)}}>Add+</button>)}
                       
//                         { item.count &&
//                         (<div className="border border-orange-400 px-2 rounded-lg">
//                             <button className="px-5" onClick={()=>subQuantity(item)}>-</button>
//                             {item.count}
//                             <button className="px-5" onClick={()=>handleAddItem(item)}>+</button>
//                         </div>)}
                       
//                     </div>
//                 </div>
//             </div>)}
//         </div>
//     );
// }
// export default Cart;


// const Cart = () => {
//     const cartItems = useSelector((store) => store.cart.items);
//     const dispatch = useDispatch();
//     const handleClearCart = () => {
//         dispatch(clearCart());
//     }
//     const quantity = useSelector((store) => store.cart.quantity);
    

//     const addQuantity = (itemid,item) => {
//         const newState={...quantity};
//         newState[itemid]=quantity[itemid]+1;
//         console.log(newState);
//         dispatch(Quantity(newState));
//     }

//     return (
//         <div>
//             {cartItems.map((item) => <div data-testid="foodItems" key={item.card.info.id}>
//                 <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
//                     <div className="flex flex-col items-start w-9/12 gap-1">
//                     <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
//                         <span>{item.card.info.name}</span>
//                         <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100) * quantity[item.card.info.id]}</span>
//                         <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
//                     </div>
//                     <div className="w-3/12 flex flex-col items-center" >
//                         <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />                       
//                         {
//                         (<div className="border border-orange-400 px-2 rounded-lg">
//                             <button className="px-5" onClick={()=>subQuantity(item.card.info.id)}>-</button>
//                             {quantity[item.card.info.id]}
//                             <button className="px-5" onClick={()=>addQuantity(item.card.info.id,item)}>+</button>
//                         </div>)} 
                        
//                     </div>
//                 </div>
//             </div>)}
//         </div>
//     );
// }
// export default Cart;