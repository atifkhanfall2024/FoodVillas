
import { useDispatch } from "react-redux";
import { additems } from "./cartslice";

const dispatch = useDispatch()

const Handleitems = ()=>{
    dispatch(additems("apple"))
}



export default Handleitems