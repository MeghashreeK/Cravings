import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items=action.payload
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const{addItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;




// const cartSlice= createSlice({
//     name:"cart",
//     initialState:{
//         items:[],
//         quantity:[]
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeItem:(state)=>{
//             state.items.pop();
//         },
//         clearCart:(state)=>{
//             state.items.length=0;
//         },
//         Quantity:(state,action)=>{
//             state.quantity=action.payload;
//         }
//     }
// });

// export const{addItem,removeItem,clearCart,Quantity}=cartSlice.actions;
// export default cartSlice.reducer;

