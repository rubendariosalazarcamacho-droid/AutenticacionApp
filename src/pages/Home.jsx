import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home(){
const {user} = useContext(UserContext)

    return(

        <>
        <h1>Página Home</h1>
        
        </>
    )
}
export default Home