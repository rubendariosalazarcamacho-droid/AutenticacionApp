import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Profile() {
    const { user, logout } = useContext(UserContext)

    if (!user) {
        return (
            <>
                <h1>Acceso Denegado</h1>
                <p>Debe iniciar sesión</p>
            </>
        )
    }
    return (

        <>
            <div className="flex gap-4 m-4 items-center">
                <p className=" w-[50px] h-[50px] rounded-full overflow-hidden"><img className="w-[50px]" src={user.avatar} alt="avatar usuario" /></p>
                <h1><strong className="text-2xl">Bienvenido</strong> {user.name}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">

                <div className="w-[70%] mt-10 flex flex-col bg-blue-50 rounded-2xl p-2">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Country: {user.country}</p>
                    <p>City: {user.city}</p>
                    <p>Address: {user.address}</p>
                    <p>Role: {user.role}</p>
                </div>
                <button onClick={logout} className="w-[200px] h-[50px] bg-[#5294E2] rounded-3xl text-white font-bold mt-8" type="button">Cerrar Sesión</button>
            </div>

        </>
    )
}
export default Profile