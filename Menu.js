import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fetchApi from "../FetchAPI"
import Shimar from "./shimar"


// here i import myy own custom hook 

 import useMenu from "../utils/useMenu"

 import { useDispatch } from "react-redux";
 import { additems } from "../utils/cartslice"


 const Menu  = ()=>{
  
  const dispatch = useDispatch()

  const handleitems = (item)=>{
      dispatch(additems(item))
  }
 
 
  

  const {id}  = useParams()

   // i create custom hook so i import usemenu file here to make my own hook

   const resturant = useMenu(id)

   if (!resturant) {
    return null;
  }
       
  return resturant.length===0 ?(<Shimar/>) :(
    <>
    <div className="mymenu">
         <img src={resturant.data.cloudinaryImageId}/>
          <h2 style={{transform:"translate(30% , 100%)"}}>{ resturant.data.name}</h2>
          <h3>20% Off</h3>
          <h3 className="change">Welcome gift....</h3>
          <button style={{position:"absolute", bottom:"-55%" , right:"-5%" ,padding:"1vh 2vw" , backgroundColor:"rgb(222, 15, 164)", color:"white", border:"none" , borderRadius:"10px"}} onClick={()=> handleitems(resturant.data)}>Add to cart</button>
          <p className="one"> Type : {resturant.data.type}</p>
          <p className="two">Cuisines : {resturant.data.cuisines.join(" , ")}</p>
          <p className="three">Rating : {resturant.data.totalRatingsString}<i className="ri-star-s-line"></i> </p>
          <p className="four">Location : {resturant.data.kms}</p>
          <p className="five">Price : {resturant.data.price}</p>
    </div>

    <div className="right">
    <h2 style={{transform:"translate(30% , 10%)", color:"rgb(222, 15, 164)"}}>Similar Resturants</h2>
    <h2 style={{transform:"translate(20% , 10%)", color:"red", backgroundColor:"#222", fontSize:"15px" , width:"15%", textAlign:"center"}}>Hot Offers</h2>
    <div className="r1">
     <img src = {resturant.data.image}/>
     <h4 style={{color:"rgb(222, 15, 164)  ", width:'50%', marginTop:"30px"}}>{resturant.data.names}</h4>
     <h5 style={{display:"flex", gap:"30px" , fontSize:"10px",  marginTop:"30px"}}>{resturant.data.desc}</h5>
     <button style={{position:"absolute", bottom:"20%" , right:"25%" ,padding:"1vh 2vw" , backgroundColor:"rgb(222, 15, 164)", color:"white", border:"none" , borderRadius:"10px"}} 
      onClick={()=> handleitems(resturant.data)}>
     Add to cart</button>

    </div>
    <div className="r2">
    <img src = {resturant.data.images}/>
    <h4 style={{color:"rgb(222, 15, 164)   " , width:"50%" , marginTop:"30px"}}>{resturant.data.nam}</h4>
    <h5 style={{display:"flex", gap:"30px" , fontSize:"10px",  marginTop:"30px"}}>{resturant.data.des}</h5>
    <button style={{position:"absolute", bottom:"20%" , right:"25%" ,padding:"1vh 2vw" , backgroundColor:"rgb(222, 15, 164)", color:"white", border:"none" , borderRadius:"10px"}}   onClick={()=> handleitems(resturant.data)}>
    Add to cart</button>
    </div>
    </div>
    </>
  )
 }

 export default Menu 