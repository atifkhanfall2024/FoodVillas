
 // lets create functional component
import ProfileCLass from "./ProfileCLass"
import ProfileFunctional from "./profile"
import { Outlet } from "react-router-dom"
 import { Component } from "react"

  class About extends Component{

    // first constructor will call

    constructor(props){
        super(props)

        console.log("constructor");
    }

    componentDidMount(){
        // best place for api call bcz it execute after the render
        // this will call on last
        // it same work like use effect in functional component

     //   console.log("component mount");
    }

    render(){
        // second this will call
     //   console.log("render");
        return(
            <div className="aboutus"  style={{padding:"130px" , marginLeft:"-50px"}}>
               
              
                <ProfileCLass/> 
            </div>
        )
    }
  }
 
  // using this outlet will also work but we can also use <profile/> instead of it


 export default About