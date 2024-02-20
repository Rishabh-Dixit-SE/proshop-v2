import {createSlice} from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{cartItems:[]};

// const addDecimals=(num)=>{
//     return (Math.round(num*100)/100).toFixed(2);
//     };

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            //item exist or not inside state.cartItems 
            const existItem= state.cartItems.find((x)=>x._id === item._id)

            if(existItem)
            {
                 state.cartItems=state.cartItems.map((x)=>x._id===existItem._id?item:x);
            }
            else{
                state.cartItems=[...state.cartItems,item]
            }
            
        //      //calculate items price
        //      state.itemPrice=addDecimals(state.cartItems.reduce((acc,next)=>acc+item.price*item.qty,0));
             
        //      //calculate shipping price if 100 item.Price >   0 else 10
        //      state.shippingPrice=addDecimals(state.itemPrice >100 ? 0 :10);
             
        //      //calculate tax price
        //      state.taxPrice=addDecimals(Number(0.15*state.itemPrice).toFixed(2));
             
        //      //calculate  total price
        //     state.totalPrice=(Number(state.itemPrice)+Number(state.shippingPrice)+Number(state.taxPrice)).toFixed(2);
        
        //  localStorage.setItem('cart',JSON.stringify(state));
    return updateCart(state);    
    }
    }
})

export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;