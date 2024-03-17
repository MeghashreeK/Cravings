import ItemList from "./ItemList";
import { useState } from "react";
import downarrow from "../images/down-arrow.png";
import uparrow from "../images/up-arrow.png";


const RestaurantCategory=({data,showItems,setShowIndex,showIndex})=>{
//console.log(data);

const [arrow,setArrow]=useState(false);

handleClick=()=>{
    setShowIndex();
    setArrow(!arrow);
}

const getArrowData=(data)=>{
    setArrow(data);
}

    return( 
        <div className="flex justify-center mt-2 sm:mt-0 ">
        <div className="w-full border-2 border-b-slate-100 sm:w-6/12 sm:m-5 ">
            <div className="flex justify-between py-5" onClick={handleClick}>
            <span className="px-3 font-bold">{data.title} ({data.itemCards.length})</span>
            <span className="px-3">
            {arrow ? <img src={uparrow}/> : <img src={downarrow}/> }
            </span>
            </div>
           {showItems && <ItemList items={data.itemCards} getArrowData={(data) => getArrowData(data)} index={showIndex}/>}
        </div>
        </div>
       
           
     
        
        
    );
}
export default RestaurantCategory;
