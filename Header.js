// logo section
import logo from "../images/logo.jpg"
import { useState ,useContext } from "react"

    // to link one page to other we use link concept
    
    import { Link } from "react-router-dom"
    

    // i want to import online offline

    import useOnline from "../utils/useOnline"
import Context from "../utils/useContext"
    // now crate custom hook
 
  // now we use selector for reading the data from cart

  import { useSelector } from "react-redux"
import Store from "../utils/Store"

const Logo = ()=>{
    return(
      <div className="logoimg">
        
     <a href="/"> <img style={{padding:"5px"}} src ={logo}  alt = "logos" /></a>
      <h2>Food <span>Villa</span></h2> </div>
    )
    
  }

  // complete header Section
      const HeaderComponent = ()=>{

        // create authentication
        const [isloggedin , setIsLoggedIn] = useState(false)
        const isOnline = useOnline()

        // store we set by default variable

       const cartitems = useSelector((store) => store.cart.items);
       console.log(cartitems);
        return(
            <div className="header" style={{
              backgroundColor:"#dadada" ,
            }}>
              < Logo/>
              <div className="Navlinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contactUs">Contact</Link>
              <Link to="/instamart">Instamart </Link>
            
           <Link to="/cart">  <h5 className="cart">
              <i className="ri-notification-2-fill"></i>
                <span className="counting" >  {cartitems.length} </span>
                </h5></Link> 
                
                <h4>{isOnline ? "🟢 Online" :"🔴 Offline"}</h4>
               
                {  isloggedin ? (<Link> <button className="btn1" onClick={()=>{
                  setIsLoggedIn(false)
                }}>LOGOUT</button> </Link>) :( <Link to={"/login"}><button className="btn1" onClick={()=>{
                  setIsLoggedIn(true)
                }}>LOGIN</button> </Link>)}
              </div>
             
            </div>
        )
      }


      export default HeaderComponent 