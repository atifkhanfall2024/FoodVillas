import { useState  , useEffect} from "react"

const useOnline  = ()=>{


    // i take a hook that is online by default true
    const [isOnline , setIsOnline] = useState(true)

    useEffect(()=>{
        const onlineHandler = ()=>{
            setIsOnline(true)
        }

        const offlineHandler = ()=>{
            setIsOnline(false)
        }
        window.addEventListener("online" , onlineHandler)
       window.addEventListener("offline"  , offlineHandler)

       return ()=>{
        // this remove listner work when i go from body to about then not show me internet connnection
        window.removeEventListener("online" , onlineHandler)
        window.removeEventListener("offline" , offlineHandler)

       }
    } ,[])

    return isOnline 

}

export default useOnline