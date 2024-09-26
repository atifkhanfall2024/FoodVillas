export  function filterData(seacrhText ,myresturant){
    //  console.log(myresturant);
             
          return(
          myresturant.filter((resturants)=>resturants?.data?.name?.toLowerCase().includes(seacrhText?.toLowerCase()))
         
          )
     
    }