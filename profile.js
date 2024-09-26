import { useEffect, useState } from "react"

const Profile = ()=>{

   const [fetchapi , setFetchapi] = useState([])


   useEffect(()=>{
// calling an api
         Apifetch()
   } ,[])

   // make an api function

   async  function Apifetch(){
          
    const data = await fetch('https://api.github.com/users/atifkhanfall2024')
    const json = await data.json()
    setFetchapi(json)
   }
  
    return(
        
        <div>
              
        <img  style={{height:"250px", width:"250px", borderRadius:"30px", border:"2px solid red", padding:"10px"}} src = {fetchapi.avatar_url}/>
       
         <h3>{fetchapi.name}</h3>
         <h6>Software Engineer</h6>
       
         <h5>Peshawar , {fetchapi.location}</h5>

         <p style={{marginTop:"-300px", marginLeft:"350px"}}>Welcome to Food Villa, where culinary excellence meets an unforgettable dining experience! Born from a passion for food and a commitment to quality, Food Villa is more than just a restaurant—it’s a destination where flavors from around the world come together to create magic on your plate.

At Food Villa, we pride ourselves on using only the finest ingredients to craft meals that are fresh, flavorful, and full of heart. Our menu, inspired by global traditions, is carefully curated to satisfy diverse palates. Whether you’re in the mood for a comforting classic or an adventurous new dish, our chefs are dedicated to serving something for everyone.

Step into a warm and welcoming environment where great food meets exceptional service. Whether it's a casual lunch, a special 
celebration, or an evening out with friends, Food Villa offers a perfect setting for every occasion.



Join us at Food Villa and discover how every meal can be a celebration of taste, creativity, and passion. Let us take you on a culinary journey that you’ll want to experience again and again.
<br/><h3 style={{marginTop:"20px"}}>Location : Peshawar university Town</h3></p>
             
        </div>
    )
}

export default Profile