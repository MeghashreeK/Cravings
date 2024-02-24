import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    //console.log(items);
    return(
        <div>
            {items.map((item)=><div  key={item.card.info.id}>
                <div>
                    <span className="text-red-500">{item.card.info.name}</span>
                    <span> ₹{(item.card.info.price || item.card.info.defaultPrice)/100}</span>
                </div>
                <img className="w-16" src={CDN_URL+item.card.info.imageId}/>
                <p className="text-pink-800">{item.card.info.description}</p>
                </div>)}
            </div>
    );
}
export default ItemList;