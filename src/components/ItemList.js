import { useState, useEffect } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";


const ItemList = ({ items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const [quantity, setQuantity] = useState({});
    const [cartButton,setCartButton]=useState({});

        useEffect(() => {
        const initQuantity = {};
        const initCartButton = {};
        items.forEach(item => {
            initQuantity[item.card.info.id] = 1;
            initCartButton[item.card.info.id] = false;
        });
        setQuantity(initQuantity);
        setCartButton(initCartButton);
    }, [items]);

    const addQuantity = (itemid) => {
        setQuantity(prevState=>{
            const newState={...prevState};
            newState[itemid]=prevState[itemid]+1;
            return newState;
        })
    }

    const subQuantity = (itemid) => {
        if(quantity[itemid]>1){
        setQuantity(prevState=>{
            const newState={...prevState};
            newState[itemid]=prevState[itemid]-1;
            return newState;
        })}
        else if(quantity[itemid]==1){
            setCartButton(false);
        }
    }

    const handleCartButton=(itemid)=>{
        setCartButton(prevState=>{
        const newState={...prevState};
        newState[itemid]=true;
        return newState;
        });
    }

    return (
        <div>
            {items.map((item) => <div data-testid="foodItems" key={item.card.info.id}>
                <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
                    <div className="flex flex-col items-start w-9/12 gap-1">
                    <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
                        <span>{item.card.info.name}</span>
                        <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100) * quantity[item.card.info.id]}</span>
                        

                        <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 flex flex-col items-center" >
                        <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
                        {!cartButton[item.card.info.id] && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => {handleAddItem(item); handleCartButton(item.card.info.id);}}>Add+</button>)}
                        {
                        cartButton[item.card.info.id] &&
                        (<div className="border border-orange-400 px-2 rounded-lg">
                            <button className="px-5" onClick={()=>subQuantity(item.card.info.id)}>-</button>
                            {quantity[item.card.info.id]}
                            <button className="px-5" onClick={()=>addQuantity(item.card.info.id)}>+</button>
                        </div>)
                        }
                    </div>
                </div>
            </div>)}
        </div>

    );
}
export default ItemList;




// import { useState, useEffect } from "react";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import veg from "../images/veg.png";
// import nonveg from "../images/nonveg.png";

// const ItemList = ({ items, showAddButton = true }) => {
//     const dispatch = useDispatch();

//     const [quantities, setQuantities] = useState({});
//     const [cartButtons, setCartButtons] = useState({});

//     useEffect(() => {
//         const initQuantity = {};
//         const initCartButton = {};
//         items.forEach(item => {
//             initQuantity[item.card.info.id] = 1;
//             initCartButton[item.card.info.id] = false;
//         });
//         setQuantities(initQuantity);
//         setCartButtons(initCartButton);
//     }, [items]);

//     const handleAddItem = (item) => {
//         dispatch(addItem(item));
//     }

//     const addQuantity = (itemId) => {
//         setQuantities(prevState => {
//             const newState = { ...prevState };
//             newState[itemId] = prevState[itemId] + 1;
//             return newState;
//         });
//     }

//     const subQuantity = (itemId) => {
//         if (quantities[itemId] > 0) {

//             setQuantities(prevState => {
//                 const newState = { ...prevState };
//                 newState[itemId] = prevState[itemId] - 1;
//                 return newState;
//             });
//         }
//         else if(quantities[itemId]<1){
//             showAddButton=true;
//             setCartButtons(false);  
//         }
        
//     }
    
    

//     const handleCartButton = (itemId) => {
//         setCartButtons(prevState => {
//             const newState = { ...prevState };
//             newState[itemId] = true;
//             return newState;
//         });
//     }
// console.log(quantities);
//     return (
//         <div>

//             {items.map((item, index) => (
//                 <div data-testid="foodItems" key={item.card.info.id}>

//                     <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">

//                         <div className="flex flex-col items-start w-9/12 gap-1">

//                             <span>{item.card.info.itemAttribute.vegClassifier === "VEG" ? <img className="h-5 w-5" src={veg} alt="veg" /> : <img className="h-5 w-5" src={nonveg} alt="veg" />}</span>
//                             <span>{item.card.info.name}</span>
//                             <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100) * quantities[item.card.info.id]}</span>
//                             <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
//                         </div>
//                         <div className="w-3/12 flex flex-col items-center" >
//                             <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
//                             {showAddButton && !cartButtons[item.card.info.id] && (
//                                 <button className="border w-12 rounded-lg bg-orange-400 text-xs" onClick={() => { handleAddItem(item); handleCartButton(item.card.info.id); }}>Add+</button>
//                             )}
//                             {cartButtons[item.card.info.id] && (
//                                 <div>
//                                     <button onClick={() => subQuantity(item.card.info.id)}>-</button>
//                                     {quantities[item.card.info.id]}
//                                     <button onClick={() => addQuantity(item.card.info.id)}>+</button>
//                                 </div>
//                             )}

//                         </div>
//                     </div>

//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ItemList;
