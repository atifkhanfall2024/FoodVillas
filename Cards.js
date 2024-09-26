
export const Mycard = ({cloudinaryImageId , name , cuisines  , kms ,totalRatingsString ,user})=>{
    return(
        <div className="Cards">
             <img src = {cloudinaryImageId}  alt = "name"/>
                      <h3>{name}</h3>
                      <h5>{cuisines.join(" , ")}</h5>
                      <h5>{kms}</h5>
                      <h5 style={{}}>{totalRatingsString}  <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></h5>
                    
                     

</div>
    )
  }

  