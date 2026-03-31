import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { users } from "../database"

function Home() {
    const { user } = useContext(UserContext)

    return (

        <>
            <div className="p-4 flex flex-col gap-6">
                <header>
                    <h1 className="text-[#5294E2] font-bold">Autenticacion App</h1>
                    <p className="bg-blue-50 rounded-xl p-2">Esta es una aplicación de prueba diseñada para practicar el flujo
                        de autenticación en React, el uso de Context para proteger rutas
                        y la gestión de estados globales.</p>

                </header>
                <hr className="border-t-2 border-[#5294E2]" />

                <section>
                    <h2 className="text-[#5294E2] font-bold" >Tecnologías utilizadas</h2>
                    <ul>
                        <li><strong>React:</strong> Biblioteca principal para la interfaz.</li>
                        <li><strong>Context:</strong> Para manejar el usuario en toda la app.</li>
                        <li><strong>React Router:</strong> Para la navegación entre páginas.</li>
                        <li><strong>Tailwind CSS:</strong> Para el diseño visual.</li>
                    </ul>
                </section>
                <hr className="border-t-2 border-[#5294E2]" />

                <section>
                    <h2 className="text-[#5294E2] font-bold">Credenciales para probar la App</h2>

                    <div className="bg-blue-50 rounded-xl p-2" >
                        <p>Correo: {users[0].email}</p>
                        <p>Contraseña: {users[0].password}</p>
                    </div>

                </section>

            </div>

        </>
    )
}
export default Home