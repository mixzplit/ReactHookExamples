import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

/*   const increment = () => {
    setCounter(counter + 1);
  } */

const increment = useCallback(
  (newValue) => {
    setCounter( (value) => value + newValue )
  },
  []
);

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />

    </>
  );
};
