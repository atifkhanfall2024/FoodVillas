import { useState } from "react"

const Section = ({title ,description ,Doshow , setDOShow})=>{

  
    // props drilling concept 
return(
    <div >
            <h2 >{title}</h2>
            {console.log("render")}
          {Doshow ?   <button  onClick={()=>setDOShow(false)}>⋀</button> :   <button onClick={()=>setDOShow(true)}>⋁</button>}
          
            {Doshow &&<h4>{description}</h4>}
    </div>
)

}


const Show = ()=>{
 //   const [Doshow , setDOShow] = useState({})
    //    first:(false) ,
      //  second:(false) ,
      //  third:false 
    
      // the above logic is also correct but we need to create an effiecent one 

      const [Doshow , setDoshow] = useState("")
    return(
        <div style={{ padding:"150px" }}>
        <div style={{ border:"1px solid black" , backgroundColor:"#dadada" , textAlign:"center"}}>
            <Section title = {" Fresh Produce Mart"}
           description = {"Get the freshest fruits and vegetables delivered to your doorstep! Our Fresh Produce Mart offers a wide variety of organic and locally-sourced fruits, vegetables, and herbs. Start your day with healthy choices straight from the farm! "}

           // the Doshow.first return false initally 
           // so by using the setDoshadow  function and inside set its arrow function this prev is a prop
           // it take the current or initally values of state mean first object and second object 
           // by using this spread operator this will take the current value of object and make from it a new 
           // object which cannot destroy the functional complexitiy 
           // the second code for setDoshow is more better than first object bacuase we use spread
           // beacuse we use the spread operartor in second thats why second is better both work same 
           Doshow={Doshow === "first"}
    /***     setDOShow={()=>setDOShow({
            second : true
        })} */
          
          setDOShow={()=> setDoshow("first")}
            
           />
           
        </div>
         <div style={{ border:"1px solid black" , marginTop:"20px", backgroundColor:"#dadada" , textAlign:"center"}}>
         <Section title = {"Pantry Essentials Mart"}
        description = {"Stock up on all your daily essentials with our Pantry Essentials Mart. From grains, oils, and spices to packaged snacks and beverages, we have everything you need to fill your kitchen with high-quality ingredients and snacks! "}
        Doshow={Doshow === "second"}
        setDOShow={()=>setDoshow("second")}
   /**     setDOShow={()=>setDOShow({
            first : true
        })}  */ 
        />
     </div>
     <div style={{ border:"1px solid black" , marginTop:"20px", backgroundColor:"#dadada" , textAlign:"center"}}>
         <Section title = {"Gourmet Delights Mart"}
        description = {"Indulge in a world of gourmet flavors with our Gourmet Delights Mart. Discover premium cheeses, exotic chocolates, imported snacks, and fine beverages that will elevate your dining experience. Perfect for special occasions or treating yourself to something special."}
        Doshow={Doshow === "third"}
        setDOShow={()=> setDoshow("third")}
    /**     setDOShow={()=>setDOShow({
            third : true
        })} */

        />
     </div>
     <div style={{ border:"1px solid black" , marginTop:"20px", backgroundColor:"#dadada" , textAlign:"center"}}>
         <Section title = {"Beverage Corner Mart"}
        description = {"Quench your thirst with our Beverage Corner Mart! Explore a wide range of refreshing drinks, from cold-pressed juices and smoothies to sodas, teas, and energy drinks. Whether you're hydrating or looking for something flavorful, we've got the perfect drink for you!"}
        Doshow={Doshow === "fourth"}
        setDOShow={()=> setDoshow("fourth")}
    /**     setDOShow={()=>setDOShow({
            third : true
        })} */

        />
     </div>
     </div>
    )
}

export default Show