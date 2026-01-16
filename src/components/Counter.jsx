import {useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <h1>{counter}</h1>
      <button
        type="button"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  )
}