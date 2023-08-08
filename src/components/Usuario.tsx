
import { useState } from "react"

interface User {
    uid: string;
    name: string,
    logged: boolean
}




export const Usuario = () => {

    const [user, setuser] = useState<User>({
        uid: '',
        name: '',
        logged: false
    })

    const login = () => {
        setuser({
            uid: 'abc123',
            name : 'LF',
            logged: true
        })
    }

    //Mi solucion
    const logout = () => {
        setuser({
            uid: '',
            name : '',
            logged: false
        })
                 
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
            className="btn btn-outline-danger"
        >
            Logout

        </button>

        {
            (!user.logged)
                ? <h4>No hay usuario </h4>
                : <h2><pre> { JSON.stringify( user ) } </pre></h2>
        }
    </div>
)
}
