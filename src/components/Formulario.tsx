
import { useState, ChangeEvent } from "react"



export const Formulario = () => {

  const [formulario, setFormulario] = useState({
    email: '',
    name: '',
  });

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = target;
    
    console.log(name, value);
    
    setFormulario({
      ...formulario,
      [ name ]: value,
    })
    
  }


  return (
    <form>
      <div className="mb-3 mt-2">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          onChange={ handleChange } 
        />

        <label className="form-label mt-2">Nombre:</label>
        <input 
          type="text" 
          className="form-control" 
          name="email" 
          onChange={ handleChange } 
        />

      </div>

      <pre>----{ JSON.stringify( formulario ) }----</pre>

    </form>
  )
}
