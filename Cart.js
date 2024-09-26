import { useDispatch, useSelector } from "react-redux"
import Cartitem from "./cartitems"
import { clearcart } from "../utils/cartslice"
const Cart  = ()=>{
 
    const dispatch = useDispatch()
    const clearcarts = ()=>{
        dispatch(clearcart())
    }
      
    const cartitems = useSelector((store)=>store.cart.items)
    return cartitems.length===0 ?<div>
        <img style={{height:"400px" , marginTop:"120px" ,marginLeft:"350px"}} src = "https://th.bing.com/th/id/R.b6bfa0f21bb4faa4f3d96ce4f100c038?rik=oodvpnmlEW0EUA&pid=ImgRaw&r=0" />
        <h1 style={{marginLeft:"500px", color:"green"}}>Your Cart is Empty</h1>
    </div> :(
        <>
        <button style={{position:"absolute" , top:"20%" ,right:"2%" ,padding:"1vh 2vw" , backgroundColor:"green" ,color:"white"}} onClick={()=> clearcarts()}>Clear Cart</button>
        <div style={{marginLeft:"60px" , display:"flex" , flexWrap:"wrap" , gap:"185px"}}>
          {cartitems.map((item)=>(
            <Cartitem key={item.id} {...item}/>
          ))}
            
        </div>
        </>
    )
    
}
export default Cart