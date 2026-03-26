import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
        <nav className="flex justify-around bg-gray-500 h-[50px] items-center">
            <div className="flex ">
                <img className="w-[30px] h-[30px]" src="../images/security.png" alt="security icono" />
                <h1 className="text-yellow-500 font-bold text-2xl">StateGate</h1>                
            </div>
            <div className="flex gap-2 text-white">
                <Link className="hover:text-yellow-600" to={"/"}>Home</Link>
                <Link to={"/Profile"}>Profile</Link>
                <Link to={"/login"}>Login</Link>               
                
            </div>
        </nav>
        </>
    )
}
export default Nav