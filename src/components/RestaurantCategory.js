import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
//console.log(data);
    return( 
        
        <div className="m-10 border-2">
            <div className="flex justify-between py-5">
            <span className="px-3">{data.title} ({data.itemCards.length})</span>
            <span className="px-3">⬇️</span>
            </div>
            <ItemList items={data.itemCards}/>
        </div>
       
           
     
        
        
    );
}
export default RestaurantCategory;
