import { useState } from "react"

// footer section
const Footer = ()=>{
    return(
        
      <div className="foot" style={{backgroundColor:"#dadada",   marginTop:"300px"}}>
      
       <div className="left">
         <h4>Food <span>Villa</span></h4>
         <h6>Food Villa - Your destination for delicious, fresh, and quality meals delivered right to your doorstep!"</h6>
         <img src = "https://th.bing.com/th/id/OIP.Cuf6Btong8KdYQVaQl0elQAAAA?rs=1&pid=ImgDetMain" />
       </div>
       <div className="middle">
         <h3>Experience</h3>
         <h5>Payment</h5>
         <h5>Dilevery</h5>
          <h5>Return and Exchange</h5>
          <h5>Contact US</h5>

       </div>
     
         <div className="news">
           <h3>NewsLetter</h3>
            <h6>Stay connected with Food Villa for exclusive offers and the latest
              menu updates! Subscribe now and enjoy fresh, delicious meals delivered to your door</h6>
              <input type="email" placeholder="  Enter email" autoComplete="off" required />
         </div>
        
      </div>
    )
}


const MyFooter  = ()=>{
 // let title = "states"

 
return(
  <>
< Footer/>

</>
)
}

export default MyFooter