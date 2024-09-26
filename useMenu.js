import { useState ,useEffect} from "react"
import fetchApi from "../FetchAPI"
import { Fetch_LINk } from "../FetchAPI"

const useMenu = (id)=>{

    const [useResturant , setUseResturant] = useState([])
          
  useEffect(()=>{
    Mymenucards()
 
   } , [])
   async function Mymenucards() {
     try{
      const data = await fetch(Fetch_LINk)
    
    const json = await data.json()
    console.log(json)
   
    
    const filteredRestaurant = fetchApi.find((item) => item.id ===id);
        
         setUseResturant(filteredRestaurant)
       //  console.log(filteredRestaurant.id);
       //  console.log(id);
        
      
    // console.log(filteredRestaurant);
    // console.log(filteredRestaurant.data.name);
 
   
      
      
     } catch (error) {
         console.error(error);
       }
    }
  
 return useResturant
}

export default useMenu