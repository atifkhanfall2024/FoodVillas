
import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"cart" ,
    initialState:{
        items:[]
    },

    // to modify this intial state we use reducer function
    // Whenever an additems action is dispatched (called), the reducer additems is triggered.
            //  It takes the current state (items: []) and adds the new item (from action.payload) to the items array.
    reducers:{
        additems:(state ,action)=>{
           state.items.push(action.payload)
        } ,
        Removeitems:(state , action)=>{
            state.items = state.items.filter(item => item.id !== action.payload.id);  // remove the last item from the array. this is a common use case for removing an item from the cart.
        } ,
        clearcart :(state)=>{state.items = []}    }
})
// we have different actions like add ,remove  , clear thats why i write it name export bcz its not only one action its have a bunch of actions 

export const {additems , Removeitems , clearcart} = CartSlice.actions ;


export default CartSlice.reducer ;

