import { createContext, useState } from "react";

export const UserContext = createContext() // Se crea el contexto UserContext, que sería un objeto que contiene: Provider y Consumer

/**
 * Proveedor de contexto: permite guardar el usuario, iniciar y cerrar sesión y comparte esto con la App
 */
export const UserProvider = ({children})=>{ // children es todo lo que se envuelve con Provider
    
    const [user, setUser] = useState(null) // el estado global user: datos de usuario, null: no hay sesión

    const login= (userData)=>{ // recibe datos ( name, email, etc)
        setUser(userData)
    }

    const logout=()=>{ // cierra sesión actulizando estado
        setUser(null)
    }

    return(
        
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
        
        
    )

}