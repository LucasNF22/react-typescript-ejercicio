import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";



function App() {
  return (
    <>
      <h1>React + TpeScript</h1>
      <hr />

      <h2>UseState</h2>
      <Counter/>  
      <Usuario/>
      <br />
      <hr />

      <h2>useEffect - useRef </h2>
      <TimerPadre />
      <br />
      <hr />
  

      <h2>useReducer</h2>
      <ContadorRed />
      <br />
      <hr />

      <h2>Custom Hooks</h2>
      <Formulario />
      <hr />
      <Formulario2 />
      
      

    </>
  );
}

export default App;
