import { Counter } from "./components/Counter";
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
      <hr />

      <br />
      <h2>useEffect - useRef </h2>
      <TimerPadre />
      
      

    </>
  );
}

export default App;
