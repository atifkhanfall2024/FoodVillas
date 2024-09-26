import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice"

const Store = configureStore({
 
     reducer:{
        cart:CartSlice
     }
});

export default Store


/**
 * fisrt of all we have create a store
 * then api  configurestore
 *  after this we use <provider> for connection bw react and redux
 *  and we have passing props inside it
 *  
 *   after this we have use to create an create slice
 *   
 * we write name inside it
 * also initalize a state inside it
 *  
 * after that reducers inside it have a actions 
 * 
 * actions
 *   additems
 *   clearitems
 *   removeitems
 *   
 *   then we export actions into store 
 *   inside a sotre we have create a reducer object we write inside it different slices 
 * 
 *     reducer{
 *        cart:cartslice
 *            user:userslice
 * }
 */