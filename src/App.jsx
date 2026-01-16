import {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
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

export default App
