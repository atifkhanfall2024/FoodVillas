import { useState } from "react"
const Shimar = ()=>{
    const [seacrhTxt , setSearchText] = useState("")
    const [myallresturant , setMyAllResturant] = useState([])
    const [filterresturants , setFilterResturants] = useState([])
    return(
        <>
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
        <div className="Myindex">
            
          {Array(15).fill("").map((e , index)=>(
              <div key = {index} className="shimerCards">
              
              </div>
          ))}
        </div>
        </>
    )
}
export default Shimar