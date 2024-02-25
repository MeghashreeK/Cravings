import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
//console.log(data);

// const [showItems,setShowItems]=useState(false);
handleClick=()=>{
    setShowIndex();
}


    return( 
        <div>
        <div className="m-10 border-2">
            <div className="flex justify-between py-5" onClick={handleClick}>
            <span className="px-3">{data.title} ({data.itemCards.length})</span>
            <span className="px-3">⬇️</span>
            </div>
           {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
       
           
     
        
        
    );
}
export default RestaurantCategory;
