

import { useForm } from "../hooks/useForm"



export const Formulario2 = () => {

 
const { formulario, handleChange } = useForm({
  ciudad:'NY',
  postal:'abc123',
});

  const { ciudad, postal } = formulario;


  return (
    <form>
      <div className="mb-3 mt-2">
        <label className="form-label">Email:</label>
        <input 
          type="text" 
          className="form-control" 
          name="ciudad" 
          value={ ciudad }
          onChange={ handleChange } 
        />

        <label className="form-label mt-2">Nombre:</label>
        <input 
          type="text" 
          className="form-control" 
          name="postal" 
          value={ postal }
          onChange={ handleChange } 
        />


      </div>

      <pre>----{ JSON.stringify( formulario ) }----</pre>

    </form>
  )
}
