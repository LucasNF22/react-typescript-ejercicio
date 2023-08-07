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


return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button
            onClick={ login }
            className="btn btn-outline-primary"
        >
            Login

        </button>

        {
            (!user)
                ? <h4>No hay usuario</h4>
                : <pre> { JSON.stringify( user ) } </pre>
        }
    </div>
)
}
