import fetchApi
 from "../FetchAPI"
 import { Fetch_LINk } from "../FetchAPI"
 import { useState , useEffect } from "react"

const CustomHook = ()=>{

    const [myallresturant , setMyAllResturant] = useState([])
    const [filterresturants , setFilterResturants] = useState([])

     //use effect
   useEffect(()=>{
    resCards()
   // console.log("useeffect");
} ,[])

async function resCards() {
try{
const data = await fetch(Fetch_LINk)

const json = await data.json()
console.log(json)



setMyAllResturant(fetchApi)
setFilterResturants(fetchApi)

} catch (error) {
 console.error(error);
}
}

return {
    myallresturant , filterresturants ,setFilterResturants , setMyAllResturant
}
}

export default CustomHook