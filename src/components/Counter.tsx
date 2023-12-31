import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = ( numero: number = 1 ): void => {
        setCounter( counter + numero );
    };
    const decrementar = () => {
        setCounter( counter - 1 );
    };

  return (
    <>
        <div>Counter: </div>
        <span>valor: {counter} </span>
        <br />
        <button 
            className='btn btn-outline-primary mt-2 '
            onClick={ () => incrementar() }
        >
            +1
        </button>
        <button 
            className='btn btn-outline-primary mt-2 '
            onClick={ () => incrementar(2) }
        >
            +2
        </button>
        <button 
            className='btn btn-outline-warning mt-2'
            onClick={ decrementar }
        >
            -1
        </button>
        <button 
            className='btn btn-outline-danger mt-2'
            onClick={ () => setCounter(0) }
        >
            reset
        </button>
    </>
  )
}
