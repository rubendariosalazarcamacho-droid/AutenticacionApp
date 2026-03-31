import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}){
    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to="/Login"/>
    }

    return children
    
}
export default PrivateRoute