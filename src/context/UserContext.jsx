import { createContext, useState } from "react";
import { users } from "../database";

export const UserContext = createContext() // Se crea el contexto UserContext, que sería un objeto que contiene: Provider y Consumer

/**
 * Proveedor de contexto: permite guardar el usuario, iniciar y cerrar sesión y comparte esto con la App
 */
export const UserProvider = ({children})=>{ // children es todo lo que se envuelve con Provider
    
    const [user, setUser] = useState(null) // el estado global user: datos de usuario, null: no hay sesión

    function login(email, password){ // recibe datos (email: que es el nombre de usuario y password)
        
        const resultadoBusqueda= users.find((elemento)=>elemento.email === email)
        if(!resultadoBusqueda){
            // alert("usuario no existe")
            return false
        }

        if(resultadoBusqueda.password !== password ){
            // alert("credenciales inválidas") 
            return false
        }

        setUser(resultadoBusqueda)
        console.log(resultadoBusqueda)
        // alert("Login exitoso")
        return true
        
    }

    function logout(){ // cierra sesión actualizando estado
        setUser(null)
    }

    return(
        
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
        
        
    )

}