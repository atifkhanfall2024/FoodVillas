
// here we create class base component
 import React from "react";
class Profile extends React.Component{

    // so must render it without rendering we cannot create class base component

    // lets make an icrement button and decrement button with this

    constructor(props){
        super(props)

        //to initialize the state 

        
        this.state = {
          UserInformation:{
            name:"Dummy Data" ,
            bio:"Dummy Data" ,
            location:"Dummy Data" ,
            avatar_url:"Dummy Data"
          }
        }
    }

    // to increment it 

 /*   increment = ()=>{
      this.setState({  count : this.state.count +1})
    }

    decrement = ()=>{
      if(this.state.count >0){
        this.setState({  count : this.state.count -1})}
      } */

     // lets make an api call
     
     async componentDidMount(){
       console.log("api call");
      // here we can call an api
      const data = await fetch('https://api.github.com/users/atifkhanfall2024')
      const json = await data.json()
     // console.log(json);

     // now we make to set it

    // by using the setstate here my lifecycle of class is updated so componentdidupdate
      this.setState({UserInformation: json  })

      // if we write setinterval here than when we move from one page to other set interval also running not stop 
      // to stop this setinterval we use clear interval 

      this.timer = setInterval(()=>{
           console.log("setinterval");
      } , 1000)
    console.log("update");
     }

     // after first render then component did mounted after that the component will not mount again it will only update
         componentDidUpdate(){
      console.log("update component");
     }
     componentWillUnmount(){
      clearInterval(this.timer)
      console.log("component will unmount");
     }

    render(){
       // const {count} = this.state
       console.log("render");
       const {name , avatar_url , location ,bio} = this.state.UserInformation
        return(
            <div>
              
               <img  style={{height:"250px", width:"250px", borderRadius:"30px", border:"2px solid red", padding:"10px"}} src = {avatar_url}/>
              
                <h3>{name}</h3>
                <h6>Software Engineer</h6>
                 
                <h5>Peshawar , {location}</h5>

                <p style={{marginTop:"-300px", marginLeft:"350px"}}>Welcome to Food Villa, where culinary excellence meets an unforgettable dining experience! Born from a passion for food and a commitment to quality, Food Villa is more than just a restaurant—it’s a destination where flavors from around the world come together to create magic on your plate.

At Food Villa, we pride ourselves on using only the finest ingredients to craft meals that are fresh, flavorful, and full of heart. Our menu, inspired by global traditions, is carefully curated to satisfy diverse palates. Whether you’re in the mood for a comforting classic or an adventurous new dish, our chefs are dedicated to serving something for everyone.

Step into a warm and welcoming environment where great food meets exceptional service. Whether it's a casual lunch, a special 
celebration, or an evening out with friends, Food Villa offers a perfect setting for every occasion.



Join us at Food Villa and discover how every meal can be a celebration of taste, creativity, and passion. Let us take you on a culinary journey that you’ll want to experience again and again.
<br/><h3 style={{marginTop:"20px"}}>Location : Peshawar university Town</h3></p>
                 
            </div>
        )
    }
}

export default Profile