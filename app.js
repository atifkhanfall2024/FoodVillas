
import React, { useContext, useState } from "react";

// import the lazy and suspension 

import { lazy , Suspense } from "react";

import ReactDOM from "react-dom/client";

// here we import Header 
import HeaderComponent from "./components/Header";
// footer import 
import MyFooter from "./components/Footer";

// body import
import Mybody from "./components/Body";



// now import an contact section

import ContactUs from "./components/Contact";

import { createBrowserRouter , RouterProvider  , Outlet} from "react-router-dom";

import Error from "./components/Error";


// create a resturant menu
 import Menu from "./components/Menu";


 // import profile 

 import Profile from "./components/ProfileCLass";

 import Login from "./components/signup"

 // now i create a lazy dynamic loading on it 

 const About = lazy(()=> import("./components/About"))

 // import show and hide file

 import Show from "./components/Instamart";

 // now here i import context hook because in app.js i have header footer and body so i can cover every thing here to share data 
 import Context from "./utils/useContext";

 // import the store 
 import Store from "./utils/Store";

 // also for making connection of our store with our app then we use provider 
import { Provider } from "react-redux";

import Cart from "./components/Cart";
/***
 * NOw we create a food project
 * Header
 *   -logo
 *   - navlinks
 *   - cart
 *  
 *  Body
 *  - searchbar
 *  - resturant
 *  - cards
 *    .img
 *    .name
 *    . location
 *    . rating
 *    . price
 * 
 *  Footer
 *  . links
 * 
 */



   //body section
  

     
  // for each section
 /*  const Mybody = () => {
    const cardElements = [];  // Create an array to store the JSX elements
  
    arr.forEach((resturant) => {
      cardElements.push(<Mycard {...resturant} key={resturant.id} />);
    });
  
    return <div className="Myindex">{cardElements}</div>;
  };  */

   

  // All App layout
          const AppLayout = ()=>{

       
         
            const[myuser , setmyuser] = useState({
          
               name:"Muhammad Atif Khan",
               email:"support@muhammadatifkhan.com",
           
            })
            return(
            <Provider store={Store}>
            <Context.Provider value = {{user:myuser
              ,
              setmyuser:setmyuser
            }}>
              < HeaderComponent/>
              <Outlet/>
              <MyFooter/>
              </Context.Provider>
              </Provider>
            )
          }

          const AppRouter = createBrowserRouter([
             {
              path:"/",
              element:<AppLayout/>,
              errorElement:<Error/>,
              children:[
              
                {
                  path:"/about" ,
                  element:<Suspense fallback = {<h1>Loading...........</h1>}><About/></Suspense>,
                  children:[
                    {
                      path:"Profile" ,                 /***
                                                                  if we give the path like /about/profile then it
                                                                  will also work 
                                                                  
                                                                  and if we write /profile it wont to be work becuase / target the home root so it will pick
                                                                  localhost:1234/profile 
                                                                  
                                                                  
                                                                  also we create like this profile inside of about as a children so it mean that it belong to our
                                                                  about parent */
                      element:<Profile/>
                    } ,
                   
                  ]
                 } ,
                 {
                  path:"/" ,
                  element:<Mybody  myhello = {{name:"kasae ho dear "}} />
                 } ,
                 {
                      path:"/login" ,
                      element:<Login/>


                 },
                 {
                  path:"/cart" ,
                  element:<Cart/>
                 },
                 {
                  path:"instamart" ,
                  element:<Show/>
                },
                
                 {
                  path:"contactUs" ,
                  element:<ContactUs/>,
                 } ,
                 {
                  path:"/resturant/:id" ,
                  element:<Menu/>,
                 } ,
                
              ]
             } ,
           
          ])
          const root = ReactDOM.createRoot(document.querySelector("#root"))
      root.render(<RouterProvider router={AppRouter}/>)