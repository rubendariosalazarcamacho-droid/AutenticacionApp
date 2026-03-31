import { useContext } from "react"
import { UserContext } from "../context/UserContext"


function Profile() {
    const { user } = useContext(UserContext)

    if (!user){
        return(
            <>
            <h1>Acceso Denegado</h1>
            <p>Debe iniciar sesión</p>            
            </>            
        )
    }
    return (

        <>
            <h1>Página Profile</h1>
            <p>Hola {user.name} has ingresado a tu perfil</p>
        </>
    )
}
export default Profile