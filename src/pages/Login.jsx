import { useState } from "react"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate, Navigate } from "react-router-dom"


function Login() {

    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )
    const {login, user} =useContext(UserContext) // extraigo la función login del contexto UserContext, para usarla al enviar el formulario
    const navigate= useNavigate()

    if(user){
        return <Navigate to="/Profile"/> // si existe usuario logueado
    }

    function handleChange(e) {
        console.log("nombre del input: " + e.target.name)
        console.log("valor del input: " + e.target.value)

        setForm({
            ...form,
            [e.target.name]: e.target.value  // debe llevar corchetes por obligación, va y busca si existe el name en "form" y le asigna el valor, sino se ponen corchetes crea otra propiedad

        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        const exitoso = login(form.email, form.password)

        if (exitoso){
            alert("Ingreso exitoso")
            navigate("/Profile")
        }else{
            alert("Credenciales incorrectas")
            setForm({ // limpia el estado y los inputs
                email:"",
                password:""
            })

        }

    }

    // console.log(form)
    return (

        <>
            <h1 className="text-blue-600">Página Login</h1>
            <div className="flex justify-center"><img className="mt-[50px] w-[120px] " src="/images/user2.svg" alt="icono usuario" /></div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-12 gap-4">
                <input name="email" value={form.email} className="w-full h-[50px] border-2 border-[#5294E2] pl-4 rounded-2xl bg-gray-100" type="text" onChange={handleChange} placeholder="userName" />
                <input name="password" value={form.password} className="w-full h-[50px] border-2 border-[#5294E2] pl-4 rounded-2xl bg-gray-50" type="password" onChange={handleChange} placeholder="password" />
                <button className="w-full h-[50px] bg-[#5294E2] pl-4 rounded-3xl text-white font-bold mt-8" type="submit">Iniciar Sesión</button>
            </form>
        </>
    )
}
export default Login