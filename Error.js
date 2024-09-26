import ErrorImg from "../images/error.webp"
import { useRouteError } from "react-router-dom"
const Error  = ()=>{

    const err = useRouteError()
    console.log(err);
    return(
        <div style={{
            height :" 100% " ,
            width:"100%" ,
            marginTop:"-190px" ,
            overflow:"hidden" ,
            marginLeft:"-70px"


        }}>
            <img src = {ErrorImg } alt="Oops!!!! something went wrong"/>
            <h2>{err.status + " : " + err.statusType}</h2>

        </div>
    )
}

export default Error