

import { useForm } from "../hooks/useForm"

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {


  const { formulario, handleChange, email, nombre, edad } = useForm<FormData>({
    email: 'lucas@gmail.com',
    nombre: 'Lucas Fiorentino',
    edad: 31
  })

  // const { email, nombre, edad } = formulario

  // const [formulario, setFormulario] = useState({
  //   email: '',
  //   name: '',
  // });

  // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
  //   const { name, value } = target;
    
  //   console.log(name, value);
    
  //   setFormulario({
  //     ...formulario,
  //     [ name ]: value,
  //   })
    
  // }


  return (
    <form>
      <div className="mb-3 mt-2">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          value={ email }
          onChange={ handleChange } 
        />

        <label className="form-label mt-2">Nombre:</label>
        <input 
          type="text" 
          className="form-control" 
          name="nombre" 
          value={ nombre }
          onChange={ handleChange } 
        />

        <label className="form-label mt-2">Nombre:</label>
        <input 
          type="number" 
          className="form-control" 
          name="edad" 
          value={ edad }
          onChange={ handleChange } 
        />

      </div>

      <pre>----{ JSON.stringify( formulario ) }----</pre>

    </form>
  )
}
