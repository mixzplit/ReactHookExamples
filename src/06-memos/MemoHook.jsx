import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...")
    
  }

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

  const {counter, increment} = useCounter(4000);
  const [show, setShow] = useState(true);

  // Usamos el hookMemo para almacenar lo que
  // devuelva nuestro hook y no volver a ejecutar
  // hasta que cambie, entonces mandamos la funcion
  // como primer argumento y como segundo argumento la
  // dependencia o valor cambia, en este caso si nuestro
  // contador cambia memoriza su valor. Si mandamos un array
  // vacio en el segundo argumento solo memorizara una sola vez
  // su valor
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: <small>{counter}</small> </h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Hide/Show {JSON.stringify(show)}
      </button>

    </>
  )
}
