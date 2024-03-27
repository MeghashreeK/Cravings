import { useState, useEffect } from "react";
import { addItem,Quantity } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";
import CartItems from "./CartItems";

const ItemList = ({items}) => {
    const [itemsState,setItemes]=useState(items)
    const dispatch = useDispatch();
    // useEffect(()=>{

    // },[itemsState])
    const handleAddItem = (item) => {
   
        const index = itemsState.findIndex(innerData => innerData.card.info.id === item.card.info.id);
   
        if (index !== -1) {
            // If the item already exists, update its count
            const updatedItems = [...itemsState];
            if (!updatedItems[index].count) {
                updatedItems[index] = {...updatedItems[index], count: 1};
            } else {
                updatedItems[index] = {...updatedItems[index], count: updatedItems[index].count + 1};
            }
            setItemes(updatedItems);
            dispatch(addItem(updatedItems))
        }
   
   
    }
   

    const subQuantity = (item) => {
        const index = itemsState.findIndex(innerData => innerData.card.info.id === item.card.info.id);
   
        if (index !== -1) {
            // If the item already exists, update its count
            const updatedItems = [...itemsState];
            if (updatedItems[index].count>1) {
                updatedItems[index] = {...updatedItems[index], count: updatedItems[index].count-1};
               
            } else {
                updatedItems[index] = {...updatedItems[index]};
                 delete updatedItems[index].count;
            }
            setItemes(updatedItems);  
            dispatch(addItem(updatedItems))
        }  
    }

    
// console.log(items);
// console.log(quantity);

    return (
        <div>
            {itemsState.map((item) => <div data-testid="foodItems" key={item.card.info.id}>
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
export default ItemList;

// const ItemList = ({items}) => {
//     const dispatch = useDispatch();
//     const handleAddItem = (item) => {
//         dispatch(addItem(item));
//     }
//     const [quantity, setQuantity] = useState({});
//     const [cartButton,setCartButton]=useState({});

//         useEffect(() => {
//         const initQuantity = {};
//         const initCartButton = {};
//         items.forEach(item => {
//             initQuantity[item.card.info.id] = 1;
//             initCartButton[item.card.info.id] = false;
//         });
//         setQuantity(initQuantity);
//         setCartButton(initCartButton);
        

        
//     }, [items]);

//     const addQuantity = (itemid,item) => {
//         setQuantity(prevState=>{
//             const newState={...prevState};
//             newState[itemid]=prevState[itemid]+1;
//             return newState;
//         })
//         const newState={...quantity};
//         newState[itemid]=quantity[itemid]+1;
//         dispatch(Quantity(newState));
//     }

//     const subQuantity = (itemid) => {
//         if(quantity[itemid]>1){
//         setQuantity(prevState=>{
//             const newState={...prevState};
//             newState[itemid]=prevState[itemid]-1;
//             return newState;
//         })}
//         else if(quantity[itemid]==1){
//             setCartButton(false);
//         }
//     }

//     const handleCartButton=(itemid)=>{
//         setCartButton(prevState=>{
//         const newState={...prevState};
//         newState[itemid]=true;
//         return newState;
//         });
//     }
//     return (
//         <div>
//             {items.map((item) => <div data-testid="foodItems" key={item.card.info.id}>
//                 <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
//                     <div className="flex flex-col items-start w-9/12 gap-1">
//                     <span>{item.card.info.itemAttribute.vegClassifier==="VEG" ? <img className="h-5 w-5" src={veg} alt="veg"/> : <img className="h-5 w-5" src={nonveg} alt="veg"/> }</span>
//                         <span>{item.card.info.name}</span>
//                         <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100) * quantity[item.card.info.id]}</span>
//                         <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
//                     </div>
//                     <div className="w-3/12 flex flex-col items-center" >
//                         <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
//                         {!cartButton[item.card.info.id] && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => {handleAddItem(item); handleCartButton(item.card.info.id);}}>Add+</button>)}
                       
//                         {cartButton[item.card.info.id] &&
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
// export default ItemList;