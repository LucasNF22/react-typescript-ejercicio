import { useState } from "react"

interface User {
    uid: string;
    name: string,
}


export const Usuario = () => {

    const [user, setuser] = useState<User>()

    const login = () => {
        setuser({
            uid: 'abc123',
            name : 'LF'
        })
    }
    const logout = () => {
        //averiguar
    }


return (
    <div className="mt-5">
        <h3>Usuario</h3>

        <button
            onClick={ login }
            className="btn btn-outline-primary"
        >
            Login

        </button>
        <button
            onClick={ logout }
            className="btn btn-outline-primary"
        >
            Logout

        </button>

        {
            (!user)
                ? <h4>No hay usuario</h4>
                : <h2><pre> { JSON.stringify( user ) } </pre></h2>
        }
    </div>
)
}
