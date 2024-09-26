

import { Mycard } from "./Cards"
import { useState , useContext} from "react"
import Shimar from "./shimar"
import { Link } from "react-router-dom"
import { filterData } from "../utils/filterdata"
import CustomHook from "../utils/usebody"
import useOnline from "../utils/useOnline"
import myimg from "../images/Capture-137.png"
   // import use context 
   import Context from "../utils/useContext"

  
const Mybody = ({myhello})=>{
    const [seacrhTxt , setSearchText] = useState("")
    // custom hook 
   const {myallresturant , filterresturants ,setFilterResturants , setMyAllResturant} = CustomHook()

   const { user ,setmyuser}   = useContext(Context)
   const Isonline = useOnline()
  if(!Isonline){
    return <img style={{marginTop:"150px" ,marginLeft:"300px" , width:"50%"}} src ={myimg}/>
  }
   // codintional rendering
   if(!myallresturant) return null ;
   // using of condition for my all resturants mean that initially its value is null because array is null
    return  myallresturant.length === 0 ? (<Shimar/>) : (
    
        <>
        <inputt style={{position:"absolute" , top:"32%"}} value = {user.email} onChange={(e)=>{
        setmyuser({
            email:e.target.value
       })
        }}  />
        <h6 style={{transform:"translate(11% , 390%)"}}>{user.name}</h6>
        <div style={{position:"absolute",top:"25%" , right:"10%" , color:"black"}}>
          <h5>{user.email}</h5>
          
        </div>

            <div className="container">
                <input type="text" placeholder="Search....." className="cont" value={seacrhTxt}
                
                onChange={
                    (e)=>{
                     
                     setSearchText(e.target.value)  
                    }
                }/>
              
                <button className="mybtn" onClick={()=>{
                 
                     // filter data
                  const Data =  filterData(seacrhTxt , myallresturant)
            
                  // console.log(myresturant);
                  setFilterResturants(Data)
                   
               
                  
                    }}>Search</button>
            </div>
      
    
      <div className="Myindexx" >
   
         {filterresturants.length===0  ?<h2 style={{   transform: "translate(280px, 100px)" ,
   marginLeft:"100px" ,
   color:"red",
   fontStyle:"oblique" }}>Not found such a resturant......</h2>: filterresturants.map((resturant)=>{
                return(
                   
             <Link to ={"/resturant/" + resturant.id} style={{textDecoration:"none"  ,  color:"#222" }}  >   <Mycard  {...resturant?.data} key = {resturant?.data?.id} /></Link>

              )
         })}
       
      </div>
      </>
    )
   }
   export default Mybody