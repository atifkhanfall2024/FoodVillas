import { useDispatch } from "react-redux"
import { Removeitems } from "../utils/cartslice"

const Cartitem = ({name , cloudinaryImageId , cuisines ,type ,totalRatingsString , kms ,price ,id})=>{

    const dispatch = useDispatch()
    const removeitems = ()=>{
        dispatch(  Removeitems(id))
    }
    return (
        <div className="mymenu">
         <img src = {cloudinaryImageId} />
         <h2 style={{transform:"translate(30% , 100%)"}}>{name}</h2>
         <h3>20% Off</h3>
          <h3 className="change">Welcome gift....</h3>
          <button style={{position:"absolute", bottom:"-55%" , right:"-5%" ,padding:"1vh 2vw" , backgroundColor:"rgb(222, 15, 164)", color:"white", border:"none" , borderRadius:"10px"}} onClick={()=> removeitems()}>Remove item</button>
          <p className="one"> Type : {type}</p>
          <p className="two">Cuisines : {cuisines.join(" , ")}</p>
          <p className="three">Rating : {totalRatingsString}<i className="ri-star-s-line"></i> </p>
          <p className="four">Location : {kms}</p>
          <p className="five">Price : {price}</p>
        </div>
    )
}

export default Cartitem