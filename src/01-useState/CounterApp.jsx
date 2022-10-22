import { useState } from "react";

export const CounterApp = () => {
  /**
   * el Hook useState puede recibir como parametro
   * lo que necesitemos, pude recibir un numero, un string
   * , un objeto, una clase, veamos el ejemplo:
   */

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  // 
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1
          })
        }
      >
        +1
      </button>
    </>
  );
};
